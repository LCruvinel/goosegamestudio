import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Studio News",
  description: "Read the latest updates, production milestones, and creative notes from Goose Game Studio.",
  alternates: {
    canonical: getCanonicalUrl("/news"),
  },
};

const posts = [
  { title: "Studio progress update", date: "May 2026" },
  { title: "Behind the scenes: environment design", date: "June 2026" },
  { title: "Release roadmap preview", date: "July 2026" },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300">News</p>
        <h1 className="mt-4 text-4xl font-black sm:text-5xl">Latest from the studio.</h1>

        <div className="mt-12 space-y-6">
          {posts.map((post) => (
            <article key={post.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-violet-300">{post.date}</p>
              <h2 className="mt-3 text-2xl font-bold text-white">{post.title}</h2>
              <p className="mt-4 text-slate-300">
                New updates, production milestones, and creative notes from our latest work.
              </p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
