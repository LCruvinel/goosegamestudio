import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { GameDetailServer } from "@/components/games/game-detail-server";
import { JsonLd } from "@/components/seo/json-ld";
import { GameRepository } from "@/lib/repositories/game-repository";
import { getCanonicalUrl, getProductSchema } from "@/lib/seo";

export function generateStaticParams() {
  return GameRepository.list().map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = GameRepository.getBySlug(slug);

  if (!game) {
    return {
      title: "Game Details",
      description: "Explore the details of a Goose Game Studio tabletop title.",
    };
  }

  return {
    title: `${game.name}`,
    description: game.shortDescription,
    alternates: {
      canonical: getCanonicalUrl(`/games/${game.slug}`),
    },
    openGraph: {
      title: `${game.name}`,
      description: game.shortDescription,
      type: "website",
      url: getCanonicalUrl(`/games/${game.slug}`),
      images: [{ url: game.heroImage, width: 1200, height: 630, alt: `${game.name} hero image` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${game.name}`,
      description: game.shortDescription,
      images: [game.heroImage],
    },
  };
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const game = GameRepository.getBySlug(slug);

  return (
    <SiteShell>
      {game ? <JsonLd data={getProductSchema(game)} /> : null}
      <GameDetailServer slug={slug} />
    </SiteShell>
  );
}
