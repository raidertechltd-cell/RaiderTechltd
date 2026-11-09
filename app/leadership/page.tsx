import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import NextPageLink from "@/components/NextPageLink";
import SiteShell from "@/components/SiteShell";
import {
  GlobeIcon,
  LayersIcon,
  LightbulbIcon,
  PinIcon,
} from "@/components/icons";

export const metadata = {
  title: "Leadership & Regional Vision — David Abiodun | RaiderTech",
  description:
    "RaiderTech is led by Founder & CEO David Abiodun, with the ambition to become a leading infrastructure authority across Nigeria and West Africa.",
};

const PILLARS = [
  {
    icon: LayersIcon,
    title: "Proprietary SaaS Infrastructure Tools",
    body: "Developing productized SaaS that packages what we have learned building custom systems — so more businesses across the region can access enterprise-grade infrastructure without a bespoke build.",
  },
  {
    icon: LightbulbIcon,
    title: "RaiderTech Innovation Labs",
    body: "Establishing a dedicated home for that product development — where new infrastructure tools are designed, tested, and refined before they reach the market.",
  },
  {
    icon: GlobeIcon,
    title: "Cross-Border Digital Transformation",
    body: "Expanding transformation work beyond national borders to serve 50+ growth-stage companies across Nigeria and the wider West African region.",
  },
];

export default function LeadershipPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Leadership & Regional Vision"
        title="Built in Nigeria, built for West Africa"
        intro="RaiderTech is led by Founder & CEO David Abiodun, with a long-term ambition to become a leading infrastructure authority across Nigeria and West Africa."
      />

      <section className="relative px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex flex-col items-center gap-8 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur-sm sm:flex-row sm:p-12">
              <span className="grid h-28 w-28 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-4xl font-black text-white shadow-glowPurple">
                DA
              </span>
              <div>
                <h2 className="text-2xl font-extrabold text-ink">David Abiodun</h2>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  <PinIcon className="h-4 w-4" />
                  Founder &amp; CEO, RaiderTech
                </p>
                <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">
                  David founded RaiderTech on a single conviction: that most Nigerian
                  and West African growth companies are not short of ambition, capital,
                  or customers — they are short of the digital infrastructure built to
                  carry them. His roadmap for the firm is deliberate and long-term:
                  productize the infrastructure we build, incubate it, and take it to
                  growth companies across the region.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              The roadmap ahead
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed text-body sm:text-lg">
              Three pillars define the next phase of RaiderTech&apos;s growth.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {PILLARS.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white">
                    <pillar.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-base font-bold leading-snug text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-2xl border border-secondary/30 bg-gradient-to-r from-secondary-50 via-white to-secondary-50/50 p-7 text-center">
              <p className="text-3xl font-black text-ink">50+</p>
              <p className="mt-1 text-sm font-semibold text-body">
                growth-stage companies — the regional serving goal for cross-border
                digital transformation.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NextPageLink href="/how-we-work" label="How the Team Works" />
    </SiteShell>
  );
}