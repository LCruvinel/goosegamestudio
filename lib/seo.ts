import type { BoardGame } from "@/lib/types/board-game";
import { siteConfig } from "@/lib/site";

export function getCanonicalUrl(path = "/"): string {
  return new URL(path, siteConfig.url).toString();
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: siteConfig.logo,
    email: `mailto:${siteConfig.email}`,
    sameAs: [
      siteConfig.social.x,
      siteConfig.social.youtube,
      siteConfig.social.discord,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "customer support",
      availableLanguage: ["English"],
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/games?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function getProductSchema(game: BoardGame) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: game.name,
    description: game.shortDescription,
    sku: game.id,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: game.gameType,
    image: game.galleryImages.length > 0 ? game.galleryImages : [game.heroImage],
    url: getCanonicalUrl(`/games/${game.slug}`),
    offers: {
      "@type": "Offer",
      url: game.buyLink,
      priceCurrency: "USD",
      price: "59.00",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "32",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Players",
        value: game.playerCount,
      },
      {
        "@type": "PropertyValue",
        name: "Age",
        value: game.ageRange,
      },
      {
        "@type": "PropertyValue",
        name: "Playtime",
        value: game.gameDuration,
      },
      {
        "@type": "PropertyValue",
        name: "Release Status",
        value: game.releaseStatus,
      },
    ],
  };
}
