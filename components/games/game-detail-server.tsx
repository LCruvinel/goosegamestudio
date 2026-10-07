import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button-link";
import { GameRepository } from "@/lib/repositories/game-repository";

export async function GameDetailServer({ slug }: { slug: string }) {
  const game = GameRepository.getBySlug(slug);

  if (!game) {
    notFound();
  }

  const relatedGames = GameRepository.list()
    .filter((item) => item.slug !== game.slug)
    .slice(0, 3);

  const specs = [
    { label: "Players", value: game.playerCount },
    { label: "Age", value: game.ageRange },
    { label: "Duration", value: game.gameDuration },
    { label: "Type", value: game.gameType },
    { label: "Status", value: game.releaseStatus },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-12">
      <div className="mb-8 text-sm text-amber-700">
        <Link href="/games" className="hover:text-amber-800">
          ← Back to all games
        </Link>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(44,32,20,0.12)]">
            <Image
              src={game.heroImage}
              alt={`${game.name} hero image`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {game.galleryImages.map((image, index) => (
              <div key={`${game.id}-gallery-${index}`} className="relative h-32 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <Image
                  src={image}
                  alt={`${game.name} gallery image ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
            {game.gameType}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            {game.name}
          </h1>
          <p className="mt-4 text-lg leading-8 text-slate-700">{game.shortDescription}</p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700">
            <span className="rounded-full border border-slate-200 bg-white px-3 py-2">{game.playerCount}</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-2">{game.gameDuration}</span>
            <span className="rounded-full border border-slate-200 bg-white px-3 py-2">Age {game.ageRange}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href={game.buyLink} target="_blank" rel="noreferrer">
              Buy on Shopify
            </ButtonLink>
            <ButtonLink href="/games" variant="secondary">
              Browse all games
            </ButtonLink>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-slate-200 bg-[#f9f5ef] p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Game specs</h2>
            <dl className="mt-5 grid gap-4">
              {specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3 last:border-b-0 last:pb-0">
                  <dt className="text-sm text-slate-600">{spec.label}</dt>
                  <dd className="text-sm font-semibold text-slate-900">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_40px_rgba(42,29,18,0.05)]">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">About this game</h2>
        <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">{game.longDescription}</p>
      </div>

      {relatedGames.length > 0 ? (
        <div className="mt-16">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">Related games</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {relatedGames.map((related) => (
              <article key={related.slug} className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(42,29,18,0.05)]">
                <div className="relative h-48">
                  <Image
                    src={related.heroImage}
                    alt={`${related.name} cover`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-700">
                    {related.gameType}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-slate-900">{related.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{related.shortDescription}</p>
                  <Link href={`/games/${related.slug}`} className="mt-5 inline-flex text-sm font-semibold text-amber-700 hover:text-amber-800">
                    View game →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
