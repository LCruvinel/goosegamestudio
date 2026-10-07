import { GameRepository } from "@/lib/repositories/game-repository";
import type { BoardGame } from "@/lib/types/board-game";

export type Game = BoardGame;

export const games: Game[] = GameRepository.list();

export function getGameBySlug(slug: string): Game | undefined {
  return GameRepository.getBySlug(slug);
}

export function getGameById(id: string): Game | undefined {
  return GameRepository.getById(id);
}
