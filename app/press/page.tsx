import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getCanonicalUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Press Kit",
  description: "Access Goose Game Studio press information, media assets, and contact details for reviews and partnerships.",
  alternates: {
    canonical: getCanonicalUrl("/press"),
  },
};

export default function PressPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SiteHeader />
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Press</p>
        <h1 className="mt-4 text-4xl font-black sm:text-5xl">Media kit and press information.</h1>
        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          For interviews, reviews, or partnership opportunities, please get in touch with our team.
        </p>
        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-slate-300">Email: hello@goosegamestudio.com</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
