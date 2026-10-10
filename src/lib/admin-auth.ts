/**
 * Shared-password admin gate for /admin/review.
 *
 * There is exactly one admin account (you), so this intentionally does not
 * build a user table or an OAuth flow. Instead:
 *   - ADMIN_PASSWORD_HASH (env) holds a salted scrypt hash of your password,
 *     never the password itself. Generate it with:
 *       node scripts/hash-admin-password.mjs
 *   - ADMIN_SESSION_SECRET (env) seals the session cookie (TanStack Start's
 *     built-in encrypted-cookie session, iron-seal under the hood) so the
 *     cookie content can't be read or forged without that secret. Needs to
 *     be at least 32 random characters - the hash script above also prints
 *     a fresh one.
 *
 * Every admin-only server function must call requireAdmin() as its first
 * line. Route-level beforeLoad guards (see admin.review.tsx) only stop the
 * page from rendering - a direct POST to the server function's own endpoint
 * skips the React tree entirely, so the authorization check has to live in
 * the handler itself to actually be enforced on every request.
 */
import { createError } from "h3";
import { timingSafeEqual, scryptSync } from "node:crypto";
import { getRequestIP, useSession } from "@tanstack/react-start/server";

const SESSION_MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

interface AdminSessionData {
  admin?: boolean;
}

function sessionSecret(): string {
  const secret = process.env["ADMIN_SESSION_SECRET"];
  if (!secret || secret.length < 32) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "ADMIN_SESSION_SECRET is not set (or is shorter than 32 characters). Set it in your environment before /admin routes can work.",
    });
  }
  return secret;
}

// useSession is a TanStack Start *server* utility (request-scoped via
// AsyncLocalStorage), not a React hook; it just happens to be named with
// the "use" prefix, which trips the react-hooks lint rule below.
export function getAdminSession() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useSession<AdminSessionData>({
    password: sessionSecret(),
    name: "apptrack_admin",
    maxAge: SESSION_MAX_AGE_SECONDS,
    cookie: {
      httpOnly: true,
      // Secure cookies are only sent by the browser over an encrypted https://
      // connection. VM201 is served over plain http:// on the home network, so
      // a strict NODE_ENV === "production" check here would silently throw the
      // session cookie away after every login. ADMIN_COOKIE_SECURE=0 opts a
      // specific deployment out of the Secure flag; leave it unset once this is
      // served over https (e.g. app.docdelivery.info) so the flag stays on.
      secure:
        process.env["ADMIN_COOKIE_SECURE"] === "0"
          ? false
          : process.env["NODE_ENV"] === "production",
      sameSite: "lax",
      path: "/",
    },
  });
}

/** Throws an h3 401 error (caught by the app's existing error middleware) if the caller doesn't hold a valid admin session. Call this as the first line of every admin-only server function. */
export async function requireAdmin(): Promise<void> {
  const session = await getAdminSession();
  if (session.data.admin !== true) {
    throw createError({ statusCode: 401, statusMessage: "Admin authentication required." });
  }
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const session = await getAdminSession();
  return session.data.admin === true;
}

/* ------------------------------------------------------- password check */

/**
 * ADMIN_PASSWORD_HASH format: "scrypt:<saltHex>:<hashHex>" - produced by
 * scripts/hash-admin-password.mjs. Verified with a timing-safe comparison so
 * response time doesn't leak how many characters matched.
 */
function verifyPassword(candidate: string): boolean {
  const stored = process.env["ADMIN_PASSWORD_HASH"];
  if (!stored) {
    throw createError({
      statusCode: 500,
      statusMessage:
        "ADMIN_PASSWORD_HASH is not set. Generate one with: node scripts/hash-admin-password.mjs",
    });
  }
  const parts = stored.split(":");
  if (parts.length !== 3 || parts[0] !== "scrypt") {
    throw createError({ statusCode: 500, statusMessage: "ADMIN_PASSWORD_HASH is malformed." });
  }
  const saltHex = parts[1];
  const hashHex = parts[2];
  if (!saltHex || !hashHex) {
    throw createError({ statusCode: 500, statusMessage: "ADMIN_PASSWORD_HASH is malformed." });
  }
  const salt = Buffer.from(saltHex, "hex");
  const expected = Buffer.from(hashHex, "hex");
  const actual = scryptSync(candidate, salt, expected.length);
  // Buffers must be equal length for timingSafeEqual; expected.length is used
  // above specifically so this never throws on a length mismatch.
  return actual.length === expected.length && timingSafeEqual(actual, expected);
}

/* ------------------------------------------------------------ rate limit */

/**
 * In-memory login throttle: 8 attempts per IP per 15 minutes. This resets on
 * a process restart, which is fine here - it's a backstop against scripted
 * brute force, not the only defense (the hash + long random session secret
 * are what actually make guessing infeasible).
 *
 * If this is deployed behind a reverse proxy, getRequestIP needs
 * xForwardedFor so every request doesn't collapse onto the proxy's own IP
 * and share one rate-limit bucket. Set TRUST_PROXY=1 in the environment once
 * you've confirmed the proxy is the only thing that can reach this process
 * directly (otherwise a client could spoof X-Forwarded-For and dodge the
 * limit entirely).
 */
const LOGIN_ATTEMPT_LIMIT = 8;
const LOGIN_ATTEMPT_WINDOW_MS = 15 * 60 * 1000;
const attempts = new Map<string, { count: number; resetAt: number }>();

function clientKey(): string {
  const trustProxy = process.env["TRUST_PROXY"] === "1";
  return getRequestIP({ xForwardedFor: trustProxy }) ?? "unknown";
}

function assertNotRateLimited(key: string): void {
  const now = Date.now();
  const entry = attempts.get(key);
  if (entry && entry.resetAt > now && entry.count >= LOGIN_ATTEMPT_LIMIT) {
    throw createError({
      statusCode: 429,
      statusMessage: "Too many login attempts. Try again later.",
    });
  }
}

function recordAttempt(key: string, succeeded: boolean): void {
  const now = Date.now();
  if (succeeded) {
    attempts.delete(key);
    return;
  }
  const entry = attempts.get(key);
  if (!entry || entry.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + LOGIN_ATTEMPT_WINDOW_MS });
  } else {
    entry.count += 1;
  }
}

/** Call from the login server function. Returns true/false; never throws for a bad password (only for rate-limit/config errors), so the caller can show a plain "wrong password" message. */
export async function attemptAdminLogin(password: string): Promise<boolean> {
  const key = clientKey();
  assertNotRateLimited(key);
  const ok = verifyPassword(password);
  recordAttempt(key, ok);
  if (ok) {
    const session = await getAdminSession();
    await session.update({ admin: true });
  }
  return ok;
}

export async function adminLogout(): Promise<void> {
  const session = await getAdminSession();
  await session.clear();
}
