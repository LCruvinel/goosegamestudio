import type { Metadata } from "next";
import Image from "next/image";
import { SiteShell } from "@/components/layout/site-shell";
import { TeamCarousel } from "@/components/marketing/team-carousel";
import { JsonLd } from "@/components/seo/json-ld";
import { getCanonicalUrl, getOrganizationSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Goose Game Studio",
  description:
    "Learn how Goose Game Studio designs strategic, imaginative tabletop games that turn great ideas into memorable play experiences.",
  alternates: {
    canonical: getCanonicalUrl("/about"),
  },
  openGraph: {
    title: "About Goose Game Studio",
    description:
      "Learn how Goose Game Studio designs strategic, imaginative tabletop games that turn great ideas into memorable play experiences.",
    url: getCanonicalUrl("/about"),
    type: "website",
  },
};

const values = [
  {
    title: "Creative from the start",
    text: "The unifying philosophy at Goose Game Studio is that every idea can be the seed of a beautiful game, even when the final form surprises everyone.",
  },
  {
    title: "Built for play",
    text: "We prototype, test, and iterate around real tables so each game balances clarity, tension, and replay value.",
  },
  {
    title: "Made to bring people together",
    text: "The best games are the ones that spark conversation, strategy, and laughter long after the final scoring card is laid down.",
  },
];

const teamMembers = [
  {
    id: "felipe",
    name: "Felipe Fulcher Cruvinel",
    role: "Lead Designer",
    bio: "Just a goose!\n\nI have designed my own board games since the first time I played Monopoly at 8 years old and was determined that I could make it better. I’ve now moved on from Monopoly to new games, and I want you to come with me!\n\nI lived in the UK for 14 years, emerging with a couple of Master’s Degrees from Saint Andrews and a Bachelor’s in International Relations from Queen Mary in London. Other academic interests include security and foreign policy matters at the global level, applied data analytics in conflict analysis.",
    image: "/Corrected.png",
  },
  {
    id: "enzo-grimaldi",
    name: "Enzo Grimaldi",
    role: "Art and Design Specialist",
    bio: "A designer goose!\n\nArchitect and urbanist graduated from UFRJ, passionate about games. I combine design and architectural knowledge to create unique visual identities, exploring new forms of interaction and immersion.\n\nMy goal is to enhance the player’s experience through innovative and engaging artwork, making every game visually striking and memorable.",
    image: "/EnzoS.jpg",
  },
  {
    id: "marie-dargent",
    name: "Marie Dargent",
    role: "Communications & Production Manager",
    bio: "A social goose!",
    image: "/1517286644232.jpg",
  },
  {
    id: "tomas-leal-pereira",
    name: "Tomás Leal Pereira",
    role: "Art and Design Specialist",
    bio: "An artistic goose!\n\nSpecializing in design, Tomás leverages a keen insight and well developed aesthetic instincts to make things look and feel good.\n\nIf you find yourself looking at one of our games and think to yourself \"Hmm, that’s one good looking visual component!\" then you probably have him to thank!\n\nWhile his art does speak for itself, feel free to reach out to him on Instagram if you want to hear from him too.",
    image: "/Picture4.jpg",
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={getOrganizationSchema()} />

      <div className="bg-white">
      <section className="w-full">
        <div className="relative h-[440px] overflow-hidden bg-[#101916]">
          <Image
            src="/IMG-20240525-WA0016-scaled.jpg"
            alt="Goose Game Studio team"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
          />

          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#0b0b0b]/70 via-[#0b0b0b]/25 to-transparent">
            <div className="w-full max-w-5xl px-6 text-left sm:px-8 lg:px-12">
              <p
                className="text-lg font-normal uppercase tracking-[0.12em] text-white"
                style={{
                  fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", serif',
                  fontWeight: 400,
                  fontStyle: "normal",
                  letterSpacing: "0.12em",
                }}
              >
                GOOSE GAMESTUDIO
              </p>
              <p
                className="mt-3 text-[2.3rem] uppercase leading-[0.82] text-white sm:text-[2.9rem] lg:text-[3.6rem]"
                style={{
                  fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", serif',
                  fontWeight: 700,
                  fontStyle: "normal",
                  letterSpacing: "-0.04em",
                }}
              >
                GAMES BORN FROM CREATIVITY
              </p>
              <p
                className="mt-3 text-[2.3rem] uppercase leading-[0.82] text-white sm:text-[2.9rem] lg:text-[3.6rem]"
                style={{
                  fontFamily: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", "Georgia", serif',
                  fontWeight: 700,
                  fontStyle: "normal",
                  letterSpacing: "-0.04em",
                }}
              >
                AND BUILT FOR FUN
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-20">
          <div className="relative w-full max-w-[298px] shrink-0 overflow-visible rounded-[18px] bg-[#f3efe8] shadow-[0_12px_24px_rgba(17,25,21,0.08)] lg:max-w-[280px]">
            <Image
              src="/GGSDevTeam-WhatsApp-Image-2025-01-17-at-4.44.18-PM-17.jpeg"
              alt="Goose Game Studio team portrait"
              width={373}
              height={663}
              className="h-[530px] w-full rounded-[18px] object-cover"
              sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1152px, 100vw"
            />
            <div className="absolute bottom-0 left-[66.66%] z-20 w-[85%] overflow-visible rounded-[14px] border-4 border-white shadow-[0_16px_28px_rgba(0,0,0,0.18)]">
              <Image
                src="/GGSDevTeam-WhatsApp-Image-2025-01-17-at-4.44.18-PM-11-scaled.jpeg"
                alt="Goose Game Studio team detail"
                width={373}
                height={663}
                className="block h-auto w-full rounded-[10px] object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
          </div>

          <div className="max-w-3xl text-[#46615c] lg:pl-20" style={{ fontFamily: "'Roboto Condensed', Helvetica, Arial, Lucida, sans-serif" }}>
            <p className="text-[0.95rem] leading-7 sm:text-[1rem] lg:text-[1.1rem]">
              Goose Game Studio (GGS) is a small but driven team dedicated to creating innovative, memorable board games that capture the imagination and bring people together.
            </p>
            <div className="mt-5 text-[0.78rem] leading-7 sm:text-[0.85rem] lg:text-[0.9rem]">
              <p>
                Founded in 2025 by someone who wishes there were more board games in the world! Specifically: strange and different ones, both educational and non-educational games. The unifying philosophy at GGS is that every idea can be used as the seed from which a beautiful game will sprout. It doesn’t mean every seed makes it into a gamified tree, but the adventure of designing a new game is a reward in itself!
              </p>
              <p className="mt-4">
                The shape, format and outcome of these design journeys can and often are unexpected, and our catalogue keeps growing in unexpected directions.
              </p>
              <p className="mt-4">
                At Goose Game Studio we intend to create games and explore new ideas that surprise and delight players. Or at the very least keep them engaged and coming back for more! We are always open to collaborating and listening to new ideas.
              </p>
              <p className="mt-4">
                At the end of the day, the one guiding question remains: Would I play this?
                If you find yourself asking that question while browsing our catalogue, then feel free to make the jump and find out!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 sm:grid-cols-3 sm:px-8 lg:px-12">
        {values.map((value) => (
          <article key={value.title} className="rounded-[1.7rem] border border-[#d7c6a2] bg-[#fffaf1] p-6 shadow-[0_12px_28px_rgba(16,39,31,0.08)]">
            <h2 className="text-xl font-black text-[#12231d]">{value.title}</h2>
            <p className="mt-4 text-base leading-7 text-[#49615b]">{value.text}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-8 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-[#d7c6a2] bg-[#f6f1e8] p-6 shadow-[0_20px_50px_rgba(13,29,22,0.08)] sm:p-8 lg:p-10">
          <div className="grid grid-cols-[1fr_1fr_2fr] gap-3 lg:gap-4">
            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-[1.2rem] bg-[#d8d0c4]">
                <Image src="/GGSDevTeam-WhatsApp-Image-2025-01-17-at-4.44.18-PM-16-1.jpeg" alt="Team photo 1" width={500} height={700} className="h-[140px] w-full object-cover sm:h-[168px] lg:h-[217px]" />
              </div>
              <div className="overflow-hidden rounded-[1.2rem] bg-[#d8d0c4]">
                <Image src="/GGSDevTeam-WhatsApp-Image-2025-01-17-at-4.44.18-PM-14-scaled.jpeg" alt="Team photo 2" width={500} height={600} className="h-[98px] w-full object-cover sm:h-[126px] lg:h-[154px]" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-[1.2rem] bg-[#d8d0c4]">
                <Image src="/GGSDevTeam-WhatsApp-Image-2025-01-17-at-4.44.18-PM-10-scaled.jpeg" alt="Team photo 3" width={500} height={700} className="h-[126px] w-full object-cover sm:h-[154px] lg:h-[196px]" />
              </div>
              <div className="overflow-hidden rounded-[1.2rem] bg-[#d8d0c4]">
                <Image src="/GGSDevTeam-WhatsApp-Image-2025-01-17-at-4.44.18-PM-1.jpeg" alt="Team photo 4" width={500} height={500} className="h-[70px] w-full object-cover sm:h-[91px] lg:h-[105px]" />
              </div>
              <div className="overflow-hidden rounded-[1.2rem] bg-[#d8d0c4]">
                <Image src="/GGSDevTeam-WhatsApp-Image-2025-01-17-at-4.44.18-PM-9.jpeg" alt="Team photo 5" width={500} height={500} className="h-[70px] w-full object-cover sm:h-[91px] lg:h-[105px]" />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-[1.2rem] bg-[#d8d0c4]">
                <Image src="/GGSDevTeam-WhatsApp-Image-2025-01-17-at-4.44.18-PM-13.jpeg" alt="Team photo 6" width={500} height={500} className="h-[105px] w-full object-cover sm:h-[133px] lg:h-[168px]" />
              </div>
              <div className="overflow-hidden rounded-[1.2rem] bg-[#d8d0c4]">
                <Image src="/GGSDevTeam-WhatsApp-Image-2025-01-17-at-4.44.18-PM-8.jpeg" alt="Team photo 7" width={500} height={500} className="h-[105px] w-full object-cover sm:h-[133px] lg:h-[168px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-8 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-[#d7c6a2] bg-[#ECFCF6] p-4 shadow-[0_20px_50px_rgba(13,29,22,0.08)] sm:p-6 lg:p-8">
          <TeamCarousel members={teamMembers} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="rounded-[2rem] border border-[#d7c6a2] bg-[#10271f] p-8 text-[#edf3ed] shadow-[0_20px_50px_rgba(13,29,22,0.18)] sm:p-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#d9b971]">Our approach</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
            We follow the seeds of the best ideas and let the game grow from there.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#dfe8df]">
            Some ideas become game trees, some stay as seeds, but the process itself is part of the creative adventure. At Goose Game Studio, the guiding question is always the same: would we want to play this ourselves?
          </p>
        </div>
      </section>
      </div>
    </SiteShell>
  );
}
