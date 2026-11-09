import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import NextPageLink from "@/components/NextPageLink";
import SiteShell from "@/components/SiteShell";
import { GaugeIcon, GitBranchIcon, RulerIcon, SlidersIcon } from "@/components/icons";

export const metadata = {
  title: "Our Philosophy — Infrastructure Before Scale | RaiderTech",
  description:
    "Growth without infrastructure leads to chaos. RaiderTech refuses to scale anything before it is structurally sound — following a four-stage sequence on every engagement.",
};

const STAGES = [
  {
    number: "01",
    icon: RulerIcon,
    title: "System Architecture Design",
    body: "Before a single line of code is written or a single workflow is changed, we map the full digital blueprint — every system currently in use, every handoff between departments, every place where information gets lost or duplicated. This is the diagnostic phase, and it is non-negotiable: you cannot fix what you have not mapped.",
    why: "Positioning the business correctly on the map comes before any road-building. Deploying tools into an unmapped operation just automates the existing confusion.",
  },
  {
    number: "02",
    icon: GitBranchIcon,
    title: "Workflow Optimization",
    body: "With the blueprint in hand, we refine how work actually moves through the business — not how it is supposed to move according to an org chart, but how it really moves day to day. This is often where the biggest, least glamorous wins live: removing a redundant approval step, merging two disconnected tools into one, rerouting a process so it no longer depends on one specific person being available.",
    why: "Process fixes cost almost nothing compared to software builds — and they are what make every later investment pay off.",
  },
  {
    number: "03",
    icon: SlidersIcon,
    title: "Automation Frameworks",
    body: "Once the workflow itself is sound, we remove human error from the repetitive, high-volume parts of it. This is not automation for its own sake — every automation we build exists to eliminate a specific, previously-identified bottleneck that we can name.",
    why: "Automating a broken workflow simply produces more broken output, faster. The sequence protects against exactly that.",
  },
  {
    number: "04",
    icon: GaugeIcon,
    title: "Performance Measurement",
    body: "Only after the first three stages do we amplify growth — because scaling a broken process just breaks it faster and more expensively. This stage builds in the transparency and measurement needed to know, in real time, whether the new system is actually working.",
    why: "Nothing gets deployed without a clear answer to \u201chow will we know this worked?\u201d defined in advance.",
  },
];

export default function ProcessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Philosophy"
        title="Infrastructure Before Scale"
        intro="Our guiding principle is that growth without infrastructure leads to chaos. We have seen the pattern constantly: a business gets a marketing win, a viral moment, or a big new client — revenue spikes — and three months later it is in worse shape than before, because the operational foundation was never built to carry that volume."
      />

      <section className="relative px-5 py-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-balance text-center text-xl font-bold leading-[1.45] tracking-tight text-ink sm:text-2xl sm:leading-[1.45]">
              More customers just meant more chaos, faster.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-body sm:text-lg">
              RaiderTech exists to prevent that — by refusing to scale anything before
              it is structurally sound. Every engagement follows the same disciplined,
              repeatable sequence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-14 hidden h-[calc(100%-7rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 via-primary/50 to-secondary/40 lg:block"
          />
          <div className="space-y-10">
            {STAGES.map((stage, index) => (
              <Reveal key={stage.number} delay={index * 90}>
                <div className="relative flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-soft backdrop-blur-sm lg:flex-row lg:items-start lg:p-9">
                  <div className="flex items-center gap-4 lg:flex-col lg:items-center">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-glowPurple">
                      <stage.icon className="h-6 w-6" />
                    </span>
                    <span className="text-lg font-black text-primary lg:mt-3">
                      Stage {stage.number}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-ink">{stage.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                      {stage.body}
                    </p>
                    <p className="mt-4 rounded-xl border border-primary/10 bg-primary-50/40 px-4 py-3 text-sm font-medium text-body">
                      <span className="font-semibold text-primary">Why this order matters: </span>
                      {stage.why}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NextPageLink href="/ecosystem" label="The Unified Digital Ecosystem" />
    </SiteShell>
  );
}