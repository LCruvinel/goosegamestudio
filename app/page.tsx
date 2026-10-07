import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/site-shell";
import { GameCard } from "@/components/marketing/game-card";
import { SectionHeading } from "@/components/marketing/section-heading";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button-link";
import { games } from "@/lib/games";
import { getCanonicalUrl, getWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Premium Board Games for Memorable Nights",
  description:
    "Goose Game Studio designs premium tabletop games, strategy experiences, and modern social play sessions for memorable evenings.",
  alternates: {
    canonical: getCanonicalUrl("/"),
  },
  openGraph: {
    title: "Premium Board Games for Memorable Nights",
    description:
      "Goose Game Studio designs premium tabletop games, strategy experiences, and modern social play sessions for memorable evenings.",
    url: getCanonicalUrl("/"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Board Games for Memorable Nights",
    description:
      "Goose Game Studio designs premium tabletop games, strategy experiences, and modern social play sessions for memorable evenings.",
  },
};

const studioStats = [
  { value: "12+", label: "Years of tabletop design" },
  { value: "3", label: "Core releases in production" },
  { value: "4.9/5", label: "Prototype review score" },
  { value: "100%", label: "Crafted for social play" },
];

const philosophy = [
  {
    title: "Elegant systems",
    text: "Rules that are easy to learn, rich in strategy, and beautifully paced from opening move to final turn.",
  },
  {
    title: "Premium components",
    text: "From tactile tiles to custom art direction, every physical detail elevates the table experience.",
  },
  {
    title: "Replayable stories",
    text: "We build games that reward different player styles and spark new conversations on every session.",
  },
  {
    title: "Warm social energy",
    text: "Our games are designed for laughter, trust, rivalry, and the kind of moments everyone remembers.",
  },
];

const heroHighlights = ["Award-caliber design", "Premium print production", "Global distribution ready"];

export default function HomePage() {
  return (
    <SiteShell>
      <JsonLd data={getWebsiteSchema()} />
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(244,188,79,0.19),transparent_35%),linear-gradient(135deg,#f8f3ea_0%,#f4ede3_30%,#efe4d3_100%)] text-slate-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:pb-28 lg:pt-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-900 shadow-sm backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Premium tabletop publishing
            </div>

            <h1 className="max-w-xl text-5xl font-black tracking-[-0.06em] text-slate-900 sm:text-6xl lg:text-7xl">
              Modern games for memorable evenings.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700">
              Goose Game Studio creates elevated board games that blend strategy, craftsmanship, and
              storytelling—built to feel beautiful on the table and unforgettable in play.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="https://example.myshopify.com" target="_blank" rel="noreferrer">
                Shop the collection
              </ButtonLink>
              <ButtonLink href="/games" variant="secondary">
                Explore our titles
              </ButtonLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {heroHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-300 bg-white/80 px-3 py-2 text-sm text-slate-700 shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-amber-200/70 via-orange-200/60 to-rose-200/70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white/80 p-5 shadow-[0_30px_80px_rgba(68,44,23,0.14)] backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Featured release
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-slate-900">Crown of Ember</h2>
                </div>
                <span className="rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  New
                </span>
              </div>

              <div className="h-[420px] rounded-[2rem] bg-[linear-gradient(135deg,#f6d76d_0%,#ef8c4a_32%,#7a2e3b_100%)] shadow-inner">
                <div className="flex h-full items-end p-6">
                  <div className="w-full rounded-[1.5rem] border border-white/30 bg-slate-900/20 p-4 text-white backdrop-blur-sm">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-amber-100/90">
                      <span>2–4 Players</span>
                      <span>45–75 min</span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <p className="text-3xl font-black tracking-tight">A kingdom in flux</p>
                        <p className="mt-2 text-sm text-amber-50/80">Strategy • Fantasy • Prestige</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm text-slate-700">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xl font-black text-slate-900">2–4</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-500">Players</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xl font-black text-slate-900">45–75</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-500">Minutes</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <div className="text-xl font-black text-slate-900">12+</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-slate-500">Age</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-amber-100 bg-[#f1e6d6]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 sm:px-8 lg:px-12">
          {studioStats.map((stat) => (
            <div key={stat.label} className="rounded-[1.5rem] border border-slate-200 bg-[#fffaf4] p-6 text-center shadow-sm">
              <div className="text-4xl font-black tracking-tight text-slate-900">{stat.value}</div>
              <div className="mt-3 text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Featured games"
          title="A curated portfolio of premium play experiences."
          description="Every title is designed for bold table presence, rich strategy, and deeply social play sessions."
          align="center"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </section>

      <section className="bg-[#f6f1e7] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-[0_25px_50px_rgba(78,58,31,0.12)]">
            <div className="h-full min-h-[440px] bg-[linear-gradient(135deg,#b9935a_0%,#734d25_28%,#1e1a17_100%)]" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700">About the studio</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
              We design games that feel rich, tactile, and worth revisiting.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
              Goose Game Studio is a boutique publisher focused on the craft of modern tabletop design.
              We blend elegant mechanics with premium production values so every session feels intentional,
              immersive, and social from the first round to the last.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Focus</div>
                <div className="mt-3 text-xl font-bold text-slate-900">Strategy-led design</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Approach</div>
                <div className="mt-3 text-xl font-bold text-slate-900">Player-first experiences</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Design philosophy</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Built for beautiful play and lasting memories.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {philosophy.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(74,58,40,0.08)]">
              <div className="mb-4 h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,#f5d777,#e69a4e)]" />
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="rounded-[2.25rem] border border-amber-200 bg-[linear-gradient(135deg,#f7efe5_0%,#efe1cb_50%,#f8f4ef_100%)] p-8 text-center shadow-[0_22px_50px_rgba(92,66,35,0.12)] sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-700">Storefront</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Discover the collection.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Shop premium tabletop editions, prototype drops, and upcoming releases from our curated
            publishing line.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ButtonLink href="https://example.myshopify.com" target="_blank" rel="noreferrer">
              Visit Shopify store
            </ButtonLink>
            <ButtonLink href="/games" variant="secondary">
              View all games
            </ButtonLink>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#201b18] py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Contact</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Let’s build the next standout table favorite.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              For partnerships, distributor enquiries, press requests, or retail conversations, we would love to hear from you.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="space-y-6 text-base text-slate-200">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Email</div>
                <a href="mailto:hello@goosegamestudio.com" className="mt-2 inline-block text-xl font-semibold text-white hover:text-amber-200">
                  hello@goosegamestudio.com
                </a>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Press</div>
                <p className="mt-2 text-lg text-slate-200">media@goosegamestudio.com</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Studio</div>
                <p className="mt-2 text-lg text-slate-200">North Shore, Portland, OR</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
