import Image from "next/image";
import Link from "next/link";
import { GameRepository } from "@/lib/repositories/game-repository";

const PAGE_SIZE = 6;

function normalizeGameType(value: string): string {
  return value.split("/")[0].trim();
}

function buildCatalogHref({ query, category, page }: { query: string; category: string; page: number }) {
  const params = new URLSearchParams();

  if (query) params.set("query", query);
  if (category && category !== "all") params.set("category", category);
  params.set("page", String(page));

  return `/games?${params.toString()}`;
}

export async function GameListServer({
  searchParams,
}: {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const resolvedParams = (await searchParams) ?? {};
  const query = String(resolvedParams.query ?? "").trim().toLowerCase();
  const category = String(resolvedParams.category ?? "all");
  const currentPage = Math.max(1, Number(resolvedParams.page ?? 1) || 1);

  const games = GameRepository.list();
  const categories = [
    "all",
    ...Array.from(new Set(games.map((game) => normalizeGameType(game.gameType).toLowerCase()))),
  ];

  const filteredGames = games.filter((game) => {
    const matchesCategory =
      category === "all" || normalizeGameType(game.gameType).toLowerCase() === category.toLowerCase();
    const searchableText = [
      game.name,
      game.shortDescription,
      game.longDescription,
      game.gameType,
      game.playerCount,
      game.releaseStatus,
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery = !query || searchableText.includes(query);

    return matchesCategory && matchesQuery;
  });

  const totalPages = Math.max(1, Math.ceil(filteredGames.length / PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * PAGE_SIZE;
  const visibleGames = filteredGames.slice(pageStart, pageStart + PAGE_SIZE);

  return (
    <>
      <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white/80 p-4 shadow-[0_18px_42px_rgba(42,29,18,0.08)] backdrop-blur-sm sm:p-6">
        <form method="get" className="flex flex-col gap-4 lg:flex-row lg:items-center">
          <div className="flex-1">
            <label htmlFor="catalog-search" className="sr-only">
              Search games
            </label>
            <input
              id="catalog-search"
              name="query"
              defaultValue={query}
              type="search"
              placeholder="Search games, mechanics, or release status..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none ring-0 transition focus:border-amber-400 focus:bg-white"
            />
          </div>

          <div className="lg:w-56">
            <label htmlFor="catalog-category" className="sr-only">
              Filter by game type
            </label>
            <select
              id="catalog-category"
              name="category"
              defaultValue={category}
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-900 outline-none transition focus:border-amber-400 focus:bg-white"
            >
              {categories.map((value) => (
                <option key={value} value={value}>
                  {value === "all" ? "All categories" : value}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Apply filters
          </button>
        </form>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 text-sm text-slate-600">
        <p>
          Showing <span className="font-semibold text-slate-900">{filteredGames.length}</span> results
        </p>
        {query || category !== "all" ? (
          <Link href="/games" className="font-medium text-amber-700 hover:text-amber-800">
            Clear filters
          </Link>
        ) : null}
      </div>

      {visibleGames.length > 0 ? (
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {visibleGames.map((game) => (
            <article
              key={game.id}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(42,29,18,0.07)] transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={game.heroImage}
                  alt={`${game.name} cover art`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-700">
                    {game.gameType}
                  </p>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-600">
                    {game.releaseStatus}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-900">{game.name}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{game.shortDescription}</p>

                <div className="mt-5 flex items-center justify-between text-sm text-slate-600">
                  <span>{game.playerCount}</span>
                  <span>{game.gameDuration}</span>
                </div>

                <div className="mt-3 flex items-center justify-between text-sm text-slate-600">
                  <span>{game.ageRange}</span>
                  <span>{game.releaseStatus}</span>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <Link
                    href={`/games/${game.slug}`}
                    className="inline-flex text-sm font-semibold text-amber-700 hover:text-amber-800"
                  >
                    View details →
                  </Link>
                  <a
                    href={game.buyLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-700 transition hover:border-amber-300 hover:text-amber-700"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[2rem] border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <h3 className="text-2xl font-bold text-slate-900">No games match your filters.</h3>
          <p className="mt-3 text-slate-600">Try another search term or reset the catalog filters.</p>
          <Link href="/games" className="mt-5 inline-flex text-sm font-semibold text-amber-700 hover:text-amber-800">
            Reset catalog
          </Link>
        </div>
      )}

      {totalPages > 1 ? (
        <nav className="mt-12 flex items-center justify-center gap-3" aria-label="Pagination">
          {safePage > 1 ? (
            <Link
              href={buildCatalogHref({ query, category, page: safePage - 1 })}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-amber-300 hover:text-amber-700"
            >
              Previous
            </Link>
          ) : null}

          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => {
            const isCurrent = pageNumber === safePage;

            return (
              <Link
                key={pageNumber}
                href={buildCatalogHref({ query, category, page: pageNumber })}
                className={[
                  "rounded-full px-3.5 py-2 text-sm font-medium transition",
                  isCurrent
                    ? "bg-slate-900 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-amber-300 hover:text-amber-700",
                ].join(" ")}
              >
                {pageNumber}
              </Link>
            );
          })}

          {safePage < totalPages ? (
            <Link
              href={buildCatalogHref({ query, category, page: safePage + 1 })}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-amber-300 hover:text-amber-700"
            >
              Next
            </Link>
          ) : null}
        </nav>
      ) : null}
    </>
  );
}
