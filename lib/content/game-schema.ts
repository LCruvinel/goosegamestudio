import { z } from "zod";

const urlLikeString = z.string().refine(
  (value) => value.startsWith("/") || /^https?:\/\//.test(value),
  {
    message: "Must be a local path or absolute URL",
  },
);

export const GameContentSchema = z.object({
  id: z.string().min(1),
  slug: z
    .string()
    .min(1)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1),
  shortDescription: z.string().min(1),
  longDescription: z.string().min(1),
  longDescriptionMarkdown: z.string().min(1).optional(),
  playerCount: z.string().min(1),
  ageRange: z.string().min(1),
  gameDuration: z.string().min(1),
  gameType: z.string().min(1),
  releaseStatus: z.string().min(1),
  heroImage: urlLikeString,
  galleryImages: z.array(urlLikeString).min(1),
  buyLink: z.string().url(),
});

export const GameContentListSchema = z.array(GameContentSchema);

export type GameContent = z.infer<typeof GameContentSchema>;
