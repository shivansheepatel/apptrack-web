import { createStart, createCsrfMiddleware, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Start installs this automatically when src/start.ts is absent; defining the
// file opts out, so re-add it explicitly to keep server functions protected
// from cross-site requests.
const csrfMiddleware = createCsrfMiddleware({
  filter: (ctx) => ctx.handlerType === "serverFn",
});

// Baseline hardening headers on every response (pages and server functions).
// script-src/style-src still allow 'unsafe-inline' because the current build
// doesn't wire up nonces/hashes for TanStack Start's injected hydration
// script or the inline styles used around the site (e.g. admin.review.tsx's
// confidence meter bars) - tightening that is a follow-up, not a blocker.
// Everything else here (frame-ancestors, object-src, base-uri, the
// restricted img/font/connect sources) is enforced today.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeadersMiddleware = createMiddleware().server(async ({ next }) => {
  const result = await next();
  const headers = result.response.headers;
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.set("Content-Security-Policy", CSP);
  if (process.env["NODE_ENV"] === "production") {
    // Only meaningful once this is actually served over HTTPS (the home-lab
    // deploy notes have it behind the user's own reverse proxy/TLS).
    headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  }
  return result;
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware, csrfMiddleware, securityHeadersMiddleware],
}));
