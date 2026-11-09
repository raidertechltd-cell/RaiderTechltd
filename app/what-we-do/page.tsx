import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import NextPageLink from "@/components/NextPageLink";
import SiteShell from "@/components/SiteShell";
import { ChartIcon, CompassIcon, CpuIcon, SlidersIcon, TargetIcon } from "@/components/icons";

export const metadata = {
  title: "What Is RaiderTech — Digital Infrastructure & Revenue Systems Engineering",
  description:
    "RaiderTech is a specialized digital infrastructure and revenue systems engineering firm operating at the intersection of Technology, Automation, Data Intelligence, and Revenue Architecture.",
};

const DISCIPLINES = [
  {
    icon: CpuIcon,
    title: "Technology",
    body: "Engineer-grade systems, platforms, and integrations. Where most firms build a brochure, RaiderTech builds the actual operating infrastructure a business runs on — custom web applications, API integrations, and platforms wired directly into day-to-day operations.",
  },
  {
    icon: SlidersIcon,
    title: "Automation",
    body: "Removal of human error from the repetitive, high-volume parts of a workflow. Automation here is never applied generically — every automation exists to eliminate a specific, previously-identified bottleneck, and only after the workflow itself has been made sound.",
  },
  {
    icon: ChartIcon,
    title: "Data Intelligence",
    body: "Real-time visibility for leadership. Marketing, sales, finance, and operations all read from the same current numbers — so decisions are made on what is true right now, not on whichever export happened to get compiled last week.",
  },
  {
    icon: CompassIcon,
    title: "Revenue Architecture",
    body: "Revenue designed as a system. Lead capture, nurturing, conversion, and payment are structured into a predictable, repeatable engine — not dependent on any one person\u2019s hustle on a given day.",
  },
];

export default function WhatWeDoPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="What RaiderTech Is"
        title="The firm behind the operating infrastructure"
        intro="RaiderTech is a specialized digital infrastructure and revenue systems engineering firm. Our core purpose is to transform growth-focused businesses from fragmented, manual operational models into structured, scalable, performance-driven ecosystems."
      />

      <section className="relative px-5 pt-10">
        <Reveal>
          <p className="text-balance mx-auto max-w-4xl text-center text-xl font-bold leading-[1.45] tracking-tight text-ink sm:text-2xl sm:leading-[1.45]">
            We refuse to treat technology, automation, data, and revenue as separate
            projects. A business is one system — and we engineer it that way.
          </p>
        </Reveal>
      </section>

      <section className="relative px-5 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              The intersection
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
              RaiderTech operates at the meeting point of four disciplines that most
              companies treat separately — but that we believe must work as one system.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {DISCIPLINES.map((discipline, index) => (
              <Reveal key={discipline.title} delay={index * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glowPurple">
                    <discipline.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-ink">{discipline.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{discipline.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
              Not an agency. Not a vendor. A partner.
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-soft">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-body/70">
                  Not a marketing agency
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  Agencies optimize for clicks and impressions. When the campaign ends,
                  the growth ends — nothing structural was changed underneath.
                </p>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-soft">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-body/70">
                  Not a software vendor
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  Vendors sell a tool and disappear once it is installed. The tool gets
                  adopted unevenly, and the underlying workflow problems remain untouched.
                </p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="flex h-full flex-col rounded-2xl border border-primary/40 bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-7 shadow-soft">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  A long-term infrastructure partner
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-body">
                  We are not interested in a single deliverable. We are building the
                  sustainable digital foundation a business needs to expand — without
                  its own growth becoming the thing that breaks it.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="flex items-start gap-4 rounded-2xl border border-primary-50 bg-gradient-to-r from-primary-50 via-white to-secondary-50 p-7 sm:p-8">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-white">
                <TargetIcon className="h-5 w-5" />
              </span>
              <p className="text-base font-semibold leading-relaxed text-ink sm:text-lg">
                Our mission, in one sentence:{" "}
                <span className="text-body">
                  eliminate operational chaos and create predictable, measurable growth
                  for SMEs and emerging enterprises.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NextPageLink href="/problem" label="The Problem We Solve" />
    </SiteShell>
  );
}