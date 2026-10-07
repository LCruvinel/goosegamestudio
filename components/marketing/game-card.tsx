import Link from "next/link";
import type { Game } from "@/lib/games";

type GameCardProps = {
  game: Game;
};

export function GameCard({ game }: GameCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-lg shadow-slate-950/40 transition-transform duration-200 hover:-translate-y-1">
      <div
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${game.heroImage})` }}
      />

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-300">{game.gameType}</p>
          <span className="rounded-full border border-slate-700 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
            {game.releaseStatus}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-bold text-white">{game.name}</h3>
        <p className="mt-3 text-slate-300">{game.shortDescription}</p>

        <div className="mt-5 flex items-center justify-between text-sm text-slate-300">
          <span>{game.playerCount}</span>
          <span>{game.gameDuration}</span>
        </div>

        <div className="mt-2 flex items-center justify-between text-sm text-slate-300">
          <span>{game.ageRange}</span>
          <span>{game.releaseStatus}</span>
        </div>

        <Link
          href={`/games/${game.slug}`}
          className="mt-6 inline-flex text-sm font-semibold text-amber-300 hover:text-amber-200"
        >
          View details →
        </Link>
      </div>
    </article>
  );
}
