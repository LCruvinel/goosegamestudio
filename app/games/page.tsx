import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { GameListServer } from "@/components/games/game-list-server";
import { SectionHeading } from "@/components/marketing/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { getCanonicalUrl, getWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Games Catalog",
  description:
    "Browse the Goose Game Studio board games catalog, featuring strategy, narrative, and premium tabletop releases.",
  alternates: {
    canonical: getCanonicalUrl("/games"),
  },
  openGraph: {
    title: "Games Catalog",
    description:
      "Browse the Goose Game Studio board games catalog, featuring strategy, narrative, and premium tabletop releases.",
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
        <SectionHeading
          eyebrow="Our catalog"
          title="Board games designed for memorable play sessions."
          description="Explore our studio’s current lineup of strategy-first, social, and narrative tabletop experiences."
        />

        <GameListServer searchParams={searchParams} />
      </section>
    </SiteShell>
  );
}
