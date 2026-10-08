const defaultSiteUrl = "https://goosegamestudio.com";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || defaultSiteUrl;
const siteName = process.env.NEXT_PUBLIC_SITE_NAME?.trim() || "Goose Game Studio";
const siteEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@goosegamestudio.com";

export const siteConfig = {
  name: siteName,
  url: siteUrl,
  description:
    "Goose Game Studio creates strategic, story-rich tabletop games that bring people together for memorable nights.",
  email: siteEmail,
  logo: `${siteUrl}/icon.svg`,
  ogImage:
    "https://goosegamestudio.com/wp-content/uploads/Plot-Mock3.jpg",
  social: {
    x: "https://x.com/goosegamestudio",
    youtube: "https://youtube.com/@goosegamestudio",
    discord: "https://discord.com/invite/goosegamestudio",
    shop: "https://shop.goosegamestudio.com/",
  },
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "https://shop.goosegamestudio.com/", label: "Shop" },
];
