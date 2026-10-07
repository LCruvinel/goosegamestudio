const defaultSiteUrl = "https://goosegamestudio.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;
const siteName = process.env.NEXT_PUBLIC_SITE_NAME?.trim() || "Goose Game Studio";
const siteEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@goosegamestudio.com";

export const siteConfig = {
  name: siteName,
  url: siteUrl,
  description:
    "Goose Game Studio creates elegant, replayable board games for modern tabletop enthusiasts.",
  email: siteEmail,
  logo: `${siteUrl}/icon.svg`,
  ogImage:
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
  social: {
    x: "https://x.com/goosegamestudio",
    youtube: "https://youtube.com/@goosegamestudio",
    discord: "https://discord.com/invite/goosegamestudio",
  },
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
