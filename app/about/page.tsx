import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/seo/json-ld";
import { getCanonicalUrl, getOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Goose Game Studio",
  description:
    "Learn how Goose Game Studio designs strategic, imaginative tabletop games that turn great ideas into memorable play experiences.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
  openGraph: {
    title: "About Goose Game Studio",
    description:
      "Learn how Goose Game Studio designs strategic, imaginative tabletop games that turn great ideas into memorable play experiences.",
    url: getCanonicalUrl("/about"),
    type: "website",
  },
};

const values = [
  {
    title: "Creative from the start",
    text: "The unifying philosophy at Goose Game Studio is that every idea can be the seed of a beautiful game, even when the final form surprises everyone.",
  },
  {
    title: "Built for play",
    text: "We prototype, test, and iterate around real tables so each game balances clarity, tension, and replay value.",
  },
  {
    title: "Made to bring people together",
    text: "The best games are the ones that spark conversation, strategy, and laughter long after the final scoring card is laid down.",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={getOrganizationSchema()} />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b7c2a]">Who are we</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-[#12231d] sm:text-5xl lg:text-6xl">
          A studio dedicated to creating inventive games that capture imagination and bring people together.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#46615c]">
          Goose Game Studio is a small but driven team focused on crafting memorable tabletop experiences. Founded by lifelong game enthusiasts, the studio blends creativity, strategy, and a love of shared play into every concept.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 sm:grid-cols-3 sm:px-8 lg:px-12">
        {values.map((value) => (
          <article key={value.title} className="rounded-[1.7rem] border border-[#d7c6a2] bg-[#fffaf1] p-6 shadow-[0_12px_28px_rgba(16,39,31,0.08)]">
            <h2 className="text-xl font-black text-[#12231d]">{value.title}</h2>
            <p className="mt-4 text-base leading-7 text-[#49615b]">{value.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-[#d7c6a2] bg-[#10271f] p-8 text-[#edf3ed] shadow-[0_20px_50px_rgba(13,29,22,0.18)] sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d9b971]">Our approach</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            We follow the seeds of the best ideas and let the game grow from there.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#dfe8df]">
            Some ideas become game trees, some stay as seeds, but the process itself is part of the creative adventure. At Goose Game Studio, the guiding question is always the same: would we want to play this ourselves?
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
