import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { getCanonicalUrl, getOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Goose Game Studio for media, partnerships, retail inquiries, and tabletop collaborations.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
  openGraph: {
    title: "Contact Goose Game Studio",
    description:
      "Get in touch with Goose Game Studio for media, partnerships, retail inquiries, and tabletop collaborations.",
    url: getCanonicalUrl("/contact"),
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <JsonLd data={getOrganizationSchema()} />
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">Contact</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
          Let’s talk about your next game night.
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold text-white">Reach the studio</h2>
            <p className="mt-4 text-slate-300">For partnerships, demos, press, and tabletop inquiries.</p>
            <a href="mailto:hello@goosegamestudio.com" className="mt-6 inline-block text-lg font-semibold text-amber-300 hover:text-amber-200">
              hello@goosegamestudio.com
            </a>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">What we can help with</p>
            <ul className="mt-6 space-y-3 text-slate-300">
              <li>• Publisher and distributor conversations</li>
              <li>• Demo requests and prototype feedback</li>
              <li>• Press and media interviews</li>
              <li>• Collaboration and partnership opportunities</li>
            </ul>
            <div className="mt-8">
              <ButtonLink href="mailto:hello@goosegamestudio.com">Email us</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
