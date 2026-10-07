import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { SectionHeading } from "@/components/marketing/section-heading";
import { TeamCarousel, type TeamMember } from "@/components/marketing/team-carousel";
import { JsonLd } from "@/components/seo/json-ld";
import { getCanonicalUrl, getOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About the Studio",
  description:
    "Learn how Goose Game Studio designs premium tabletop games built for strategy, story, and unforgettable shared moments.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
  openGraph: {
    title: "About the Studio",
    description:
      "Learn how Goose Game Studio designs premium tabletop games built for strategy, story, and unforgettable shared moments.",
    url: getCanonicalUrl("/about"),
    type: "website",
  },
};

const values = [
  {
    title: "Design with purpose",
    text: "We love elegant systems that create tension, cooperation, and big table moments without overwhelming new players.",
  },
  {
    title: "Built for real play",
    text: "Every prototype is tested around actual tables, balancing clarity, pacing, and replay value with real-world feedback.",
  },
  {
    title: "Crafted for conversation",
    text: "Our games are designed to spark laughter, strategy, and connection—whether it is a first date night or a full weekend tournament.",
  },
];

const teamMembers: TeamMember[] = [
  {
    id: "amelia",
    name: "Amelia Rowan",
    role: "Creative Director",
    bio: "Amelia shapes every game around emotional payoff and visual clarity, translating big ideas into elegant tabletop systems players can learn in minutes and love for years.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "milo",
    name: "Milo Hart",
    role: "Game Designer",
    bio: "Milo obsessively tests tension, pacing, and decision quality, turning mechanical complexity into satisfying choices that feel intuitive at the table.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "sophia",
    name: "Sophia Bell",
    role: "Production Lead",
    bio: "Sophia oversees production quality from prototype to print, ensuring every component meets the studio’s standard for tactile delight and premium presentation.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={getOrganizationSchema()} />
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="About the studio"
          title="Designing board games that reward smart choices and shared moments."
          description="We are a small independent studio focused on elegant rulesets, rich table presence, and experiences that keep players coming back for one more round."
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 sm:grid-cols-3 sm:px-8 lg:px-12">
        {values.map((value) => (
          <article key={value.title} className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-xl font-bold text-white">{value.title}</h2>
            <p className="mt-4 text-slate-300">{value.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700">The team</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Makers of memorable table moments.
          </h2>
        </div>

        <TeamCarousel members={teamMembers} />
      </section>
    </SiteShell>
  );
}
