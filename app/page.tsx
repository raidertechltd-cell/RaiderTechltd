import Link from "next/link";
import Reveal from "@/components/Reveal";
import SiteShell from "@/components/SiteShell";
import Hero from "@/components/Hero";
import {
  CompassIcon,
  CpuIcon,
  FunnelIcon,
  GlobeIcon,
  LayersIcon,
  MonitorIcon,
  ShieldIcon,
  SplitIcon,
  TargetIcon,
  UsersIcon,
} from "@/components/icons";

const HOME_CARDS = [
  {
    icon: CpuIcon,
    href: "/what-we-do",
    title: "What Is RaiderTech",
    body: "The firm, its four disciplines, and the mission that drives every engagement.",
  },
  {
    icon: SplitIcon,
    href: "/problem",
    title: "The Problem We Solve",
    body: "Fragmented systems, data silos, and the manual bottlenecks that quietly cap growth.",
  },
  {
    icon: CompassIcon,
    href: "/process",
    title: "Our Philosophy",
    body: "Infrastructure before scale — the four-stage sequence behind every build.",
  },
  {
    icon: LayersIcon,
    href: "/ecosystem",
    title: "The Unified Ecosystem",
    body: "One source of truth across marketing, sales, finance, and operations.",
  },
  {
    icon: MonitorIcon,
    href: "/services",
    title: "Our Services",
    body: "Eight integrated capabilities engineered to work together as one system.",
  },
  {
    icon: FunnelIcon,
    href: "/revenue",
    title: "Revenue Engineering",
    body: "Funnel architecture, retention automation, and subscription models.",
  },
  {
    icon: UsersIcon,
    href: "/clients",
    title: "Who We Work With",
    body: "Five sectors, ₦200M–₦2B revenue stage, one defining problem.",
  },
  {
    icon: GlobeIcon,
    href: "/leadership",
    title: "Leadership & Vision",
    body: "David Abiodun and the roadmap to infrastructure authority in West Africa.",
  },
  {
    icon: ShieldIcon,
    href: "/how-we-work",
    title: "How We Work",
    body: "Contract-based partnerships, benchmarks defined in advance, real guarantees.",
  },
];

export const metadata = {
  title: "RaiderTech — Digital Infrastructure & Revenue Systems Engineering",
  description:
    "RaiderTech is a digital infrastructure and revenue systems engineering firm. We eliminate operational chaos and create predictable, measurable growth for SMEs and emerging enterprises.",
};

export default function Home() {
  return (
    <SiteShell>
      <Hero />

      <section className="relative px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="flex items-start gap-4 rounded-2xl border border-primary-50 bg-gradient-to-r from-primary-50 via-white to-secondary-50 p-7">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-white">
                <TargetIcon className="h-5 w-5" />
              </span>
              <p className="text-base font-semibold leading-relaxed text-ink sm:text-lg">
                Our mission:{" "}
                <span className="text-body">
                  eliminate operational chaos and create predictable, measurable growth
                  for SMEs and emerging enterprises.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 pt-10 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.28em] text-primary sm:text-sm">
              Explore RaiderTech
            </p>
            <h2 className="text-balance mt-3 text-center text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Read the full story, one page at a time
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_CARDS.map((card, index) => (
              <Reveal key={card.href} delay={index * 60}>
                <Link
                  href={card.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glowPurple transition-transform duration-300 group-hover:scale-110">
                    <card.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{card.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read the full story
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}