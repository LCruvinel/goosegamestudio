export interface BoardGame {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  longDescriptionMarkdown?: string;
  playerCount: string;
  ageRange: string;
  gameDuration: string;
  gameType: string;
  releaseStatus: string;
  heroImage: string;
  galleryImages: string[];
  buyLink: string;
}
