import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
  alternates: {
    canonical: getCanonicalUrl("/404"),
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-center text-white">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300">404</p>
        <h1 className="mt-4 text-4xl font-black">Page not found</h1>
        <p className="mt-4 text-slate-300">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-violet-600 px-6 py-3 font-semibold text-white">
          Return home
        </Link>
      </div>
    </main>
  );
}
