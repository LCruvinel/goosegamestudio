import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { GameListServer } from "@/components/games/game-list-server";
import { JsonLd } from "@/components/seo/json-ld";
import { getCanonicalUrl, getWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Games",
  description:
    "Explore the Goose Game Studio catalogue, including Plot, Caravela, island strategy games, diplomacy, and high-tension tabletop experiences.",
  alternates: {
    canonical: getCanonicalUrl("/games"),
  },
  openGraph: {
    title: "Our Games",
    description:
      "Explore the Goose Game Studio catalogue, including Plot, Caravela, island strategy games, diplomacy, and high-tension tabletop experiences.",
    url: getCanonicalUrl("/games"),
    type: "website",
  },
};

export default async function GamesPage({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  return (
    <SiteShell>
      <JsonLd data={getWebsiteSchema()} />
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#9b7c2a]">Our games</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-[#12231d] sm:text-5xl">
            The shape, format, and outcome of every idea is unexpected — and that is exactly the point.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4d645d]">
            At Goose Game Studio, each title explores a different direction, from bluffing duels and family-friendly trade games to geopolitical strategy and sci-fi fleet command.
          </p>
        </div>

        <div className="mt-12">
          <GameListServer searchParams={searchParams} />
        </div>
      </section>
    </SiteShell>
  );
}
