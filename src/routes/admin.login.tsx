/**
 * /admin/login - the only unauthenticated admin route. Everything else
 * under /admin/* requires a valid session (see src/lib/admin-auth.ts).
 */
import { createFileRoute, redirect, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { attemptAdminLogin, isAdminAuthenticated } from "@/lib/admin-auth";
import { SITE } from "@/config/site";

const loginServerFn = createServerFn({ method: "POST" })
  .validator((d: { password: string }) => d)
  .handler(async ({ data }): Promise<{ ok: boolean }> => {
    const ok = await attemptAdminLogin(data.password);
    return { ok };
  });

const checkAuthServerFn = createServerFn({ method: "GET" }).handler(async () => {
  return { authed: await isAdminAuthenticated() };
});

export const Route = createFileRoute("/admin/login")({
  component: AdminLogin,
  beforeLoad: async () => {
    // Already signed in? Skip the form.
    const { authed } = await checkAuthServerFn();
    if (authed) {
      throw redirect({ to: "/admin/review" });
    }
  },
  head: () => ({
    meta: [
      { title: `Admin sign-in · ${SITE.shortName}` },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await loginServerFn({ data: { password } });
      if (res.ok) {
        await router.navigate({ to: "/admin/review" });
      } else {
        setError("Wrong password.");
        setPassword("");
      }
    } catch {
      setError("Too many attempts - try again in a few minutes.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto max-w-sm px-4 py-24">
      <div className="sticker bg-white p-6">
        <h1 className="font-display text-2xl">Admin sign-in</h1>
        <form onSubmit={onSubmit} className="mt-4 grid gap-3">
          <label className="text-sm font-bold" htmlFor="admin-password">
            Password
          </label>
          <input
            id="admin-password"
            type="password"
            autoFocus
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-ink px-3 py-2 min-h-11"
          />
          {error && <p className="text-sm text-tomato font-bold">{error}</p>}
          <button
            type="submit"
            disabled={submitting || !password}
            className="sticker sticker-press tap bg-cobalt text-white px-4 min-h-11 font-bold disabled:opacity-40"
          >
            {submitting ? "Checking…" : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
