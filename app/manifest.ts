import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Goose Game Studio",
    short_name: "Goose Studio",
    description: "Indie game studio website and portal",
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
