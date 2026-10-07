import type { MetadataRoute } from "next";
import { GameRepository } from "@/lib/repositories/game-repository";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/about", "/games", "/news", "/press", "/contact"];
  const dynamicGameRoutes = GameRepository.list().map((game) => `/games/${game.slug}`);

  return [...staticRoutes, ...dynamicGameRoutes].map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: path === "/games" || path.startsWith("/games/") ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/games" ? 0.9 : 0.7,
  }));
}
