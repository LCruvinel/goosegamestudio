# Content system

This project uses JSON as the source of truth for page-level game metadata. Editors can update game content without touching code.

## Folder structure

- `data/games.json` — editable game metadata
- `public/images/games/` — local game images
- `lib/content/game-schema.ts` — Zod validation rules

## Editing workflow

1. Open `data/games.json`.
2. Update a game object.
3. Keep `slug`, `id`, and image paths consistent.
4. Use the `longDescriptionMarkdown` field for rich descriptive text.
5. Run `npm run build` to validate the content schema.

## Example image path

`/images/games/crown-of-ember/hero.svg`

This is served directly from the `public/` folder.
