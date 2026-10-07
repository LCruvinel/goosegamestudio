import gameData from "@/data/games.json";
import { GameContentListSchema } from "@/lib/content/game-schema";
import type { BoardGame } from "@/lib/types/board-game";

export class GameRepository {
  private static readonly games: BoardGame[] = GameContentListSchema.parse(gameData) as BoardGame[];

  static list(): BoardGame[] {
    return [...this.games];
  }

  static getBySlug(slug: string): BoardGame | undefined {
    return this.games.find((game) => game.slug === slug);
  }

  static getById(id: string): BoardGame | undefined {
    return this.games.find((game) => game.id === id);
  }
}
