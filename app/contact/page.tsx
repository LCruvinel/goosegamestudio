import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { getCanonicalUrl, getOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Goose Game Studio",
  description:
    "Get in touch with Goose Game Studio for partnerships, media inquiries, and tabletop collaborations.",
  alternates: {
    canonical: getCanonicalUrl("/contact"),
  },
  openGraph: {
    title: "Contact Goose Game Studio",
    description:
      "Get in touch with Goose Game Studio for partnerships, media inquiries, and tabletop collaborations.",
    url: getCanonicalUrl("/contact"),
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <JsonLd data={getOrganizationSchema()} />
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b7c2a]">Contact</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-[#12231d] sm:text-5xl">
          We are always open to collaborating and listening to new ideas.
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.8rem] border border-[#d7c6a2] bg-[#fffaf1] p-8 shadow-[0_12px_28px_rgba(16,39,31,0.08)]">
            <h2 className="text-2xl font-black text-[#12231d]">Reach the studio</h2>
            <p className="mt-4 text-base leading-7 text-[#4d645d]">
              For partnerships, demos, press conversations, and tabletop collaborations, we would love to hear from you.
            </p>
            <a href="mailto:hello@goosegamestudio.com" className="mt-6 inline-block text-lg font-semibold text-[#173d33] hover:text-[#0f2e2a]">
              hello@goosegamestudio.com
            </a>
          </div>

          <div className="rounded-[1.8rem] border border-[#d7c6a2] bg-[#10271f] p-8 text-[#edf3ed] shadow-[0_12px_28px_rgba(16,39,31,0.1)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d9b971]">What we can help with</p>
            <ul className="mt-6 space-y-3 text-base text-[#dfe8df]">
              <li>• Publisher and distributor conversations</li>
              <li>• Prototype feedback and demo requests</li>
              <li>• Press, media, and event outreach</li>
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
