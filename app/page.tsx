import type { Metadata } from "next";
import { HomeSlideshow } from "@/components/homepage/home-slideshow";
import { SiteShell } from "@/components/layout/site-shell";
import { GameCard } from "@/components/marketing/game-card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { games } from "@/lib/games";
import { getCanonicalUrl, getWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Goose Game Studio | Strategy Tabletop Games",
  description:
    "Goose Game Studio creates strategic, narrative, and social tabletop games designed for memorable evenings and bold table moments.",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    title: "Goose Game Studio | Strategy Tabletop Games",
    description:
      "Goose Game Studio creates strategic, narrative, and social tabletop games designed for memorable evenings and bold table moments.",
    url: getCanonicalUrl("/"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goose Game Studio | Strategy Tabletop Games",
    description:
      "Goose Game Studio creates strategic, narrative, and social tabletop games designed for memorable evenings and bold table moments.",
  },
};

const studioStats = [
  { value: "6", label: "creative game concepts" },
  { value: "2–6", label: "players at the table" },
  { value: "20–90", label: "minutes of play" },
  { value: "100%", label: "crafted for shared moments" },
];

const philosophy = [
  {
    title: "Strategy with heart",
    text: "Every design starts with a strong decision space and a rewarding table rhythm that keeps players engaged.",
  },
  {
    title: "A story in every round",
    text: "Whether it is trade, diplomacy, or conflict, our games turn every turn into a memorable chapter.",
  },
  {
    title: "Accessible but rich",
    text: "We build games that are easy to learn, difficult to master, and full of replay value across sessions.",
  },
  {
    title: "Made to share",
    text: "From family nights to strategic duels, the best games are the ones that make people want another round.",
  },
];

const heroItems = [
  {
    name: "Plot",
    subtitle: "The strategy and bluffing card game",
    description: "Discover who among you is the true master of secrets.",
    image: "https://goosegamestudio.com/wp-content/uploads/Plot-Mock3.jpg",
    link: "https://shop.goosegamestudio.com/",
  },
  {
    name: "Caravela",
    subtitle: "Join the Age of Discovery",
    description: "A strategic card game about commerce and the spice trade for family and friends.",
    image: "https://goosegamestudio.com/wp-content/uploads/CAR-Mock2.jpg",
    link: "https://shop.goosegamestudio.com/",
  },
  {
    name: "Jovian Rising",
    subtitle: "Command the galaxy",
    description: "Take on the role of fleet admirals in a post-Earth solar system.",
    image: "https://goosegamestudio.com/wp-content/uploads/jovian.jpg",
    link: "https://shop.goosegamestudio.com/",
  },
];

export default function HomePage() {
  return (
    <SiteShell>
      <JsonLd data={getWebsiteSchema()} />
      <HomeSlideshow />

      <section className="relative overflow-hidden bg-[#081a15] text-[#f5efe5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,162,87,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-10 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[2rem] border border-[#2f4a3d] bg-[#10271f] shadow-[0_28px_80px_rgba(0,0,0,0.35)]">
            <div className="grid items-center gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-10">
              <div>
                <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d9b971]">
                  Available now
                </p>
                <h1 className="max-w-xl text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                  Strategy games that turn a table into a story.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#e4dbc7] sm:text-lg">
                  Goose Game Studio crafts bold, memorable tabletop experiences built around strategy,
                  bluffing, diplomacy, and the kind of shared moments people talk about long after the game ends.
                </p>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href="https://shop.goosegamestudio.com/" target="_blank" rel="noreferrer">
                    Buy now
                  </ButtonLink>
                  <ButtonLink href="/games" variant="secondary">
                    Our games
                  </ButtonLink>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-[#dfe8df]">
                  {heroItems.map((item) => (
                    <span key={item.name} className="rounded-full border border-[#315440] bg-[#102e25] px-3 py-2">
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-[2rem] bg-[radial-gradient(circle,_rgba(212,178,101,0.32),transparent_55%)] blur-3xl" />
                <div
                  className="relative h-[440px] overflow-hidden rounded-[2rem] border border-[#2e4738] bg-cover bg-center shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
                  style={{ backgroundImage: `url(${heroItems[0].image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081a15] via-[#081a15]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#d9b971]/40 bg-[#081a15]/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f0d89c]">
                      Featured release
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                      {heroItems[0].name}
                    </h2>
                    <p className="mt-2 max-w-md text-sm text-[#eee2c5] sm:text-base">
                      {heroItems[0].description}
                    </p>
                    <div className="mt-5 flex items-center gap-3">
                      <a
                        href={heroItems[0].link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-full bg-[#d9b971] px-4 py-2 text-sm font-semibold text-[#0b1b17] transition hover:bg-[#e5c77f]"
                      >
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ECFCF6] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our games"
            title="A catalogue shaped by strategy, story, and memorable table moments."
            description="From bluff-heavy duels to diplomatic conflicts and tense space opera command, each design explores a different way to bring players together."
            align="center"
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.82fr_1.18fr] sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#10271f] shadow-[0_22px_60px_rgba(13,29,22,0.2)]">
            <div
              className="h-full min-h-[440px] bg-cover bg-center"
              style={{ backgroundImage: "url(https://goosegamestudio.com/wp-content/uploads/GGSNLogov2.png)" }}
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">Who are we</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              A small but driven studio obsessed with great tabletop ideas.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
              Goose Game Studio is a creative team dedicated to making games that are imaginative, memorable,
              and built to bring people together around the table. Founded by lifelong game enthusiasts, the studio draws on a blend of design thinking, engineering, and entrepreneurial energy.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">Our approach</p>
                <p className="mt-3 text-xl font-bold text-white">Creative and curious</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#111111] p-5 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">Our focus</p>
                <p className="mt-3 text-xl font-bold text-white">Designs with narrative weight</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b0b0b] py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">Our approach</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              We build games from the spark of an idea and let the design story grow from there.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {philosophy.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-[#111111] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.28)]">
                <div className="mb-4 h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,#d9b971,#a77c3a)]" />
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/75">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="rounded-[2.25rem] border border-[#d5bf91] bg-[#1CB57E] p-8 text-center shadow-[0_20px_48px_rgba(11,20,18,0.12)] sm:p-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white">We are always open</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            If the idea makes us ask, “would I play this?” then we are ready to explore it.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/85">
            We are always open to collaborating and listening to new ideas, building on creative sparks, and translating them into game experiences that surprise and delight players.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact">Contact us</ButtonLink>
            <ButtonLink href="/games" variant="secondary">
              Explore catalog
            </ButtonLink>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
