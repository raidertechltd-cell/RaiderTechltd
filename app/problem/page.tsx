import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import NextPageLink from "@/components/NextPageLink";
import SiteShell from "@/components/SiteShell";
import { ClockIcon, DatabaseIcon, SplitIcon } from "@/components/icons";

export const metadata = {
  title: "The Problem We Solve — Growth Limited by Operational Chaos | RaiderTech",
  description:
    "Growth is rarely limited by the market. Fragmented systems, data silos, and manual bottlenecks are the invisible revenue leaks that quietly cap how big a business can get.",
};

const PROBLEMS = [
  {
    icon: SplitIcon,
    title: "Fragmented Systems",
    body: "Most growing businesses are running on a patchwork: one tool for invoicing, another for leads, a spreadsheet for inventory, a notebook for follow-ups. Nothing talks to anything else. Reports get built by manually copying numbers between systems — which means every report is already out of date and quietly wrong by the time someone reads it.",
    symptom: "The tell: somebody is copying numbers by hand between tools, weekly.",
  },
  {
    icon: DatabaseIcon,
    title: "Data Silos",
    body: "Marketing does not know what sales is closing. Finance does not know what operations is spending in real time. Leadership makes decisions off whatever numbers happened to get compiled last, rather than what is true right now. The result is not just inefficiency — it is decisions made on bad information, and bad decisions compound over time.",
    symptom: "The tell: the last company-wide numbers meeting leaned on a two-week-old export.",
  },
  {
    icon: ClockIcon,
    title: "Manual Bottlenecks",
    body: "Every business has a handful of processes that quietly cap how big it can get: someone manually confirming bank transfers before an order ships, a sales team tracking leads in WhatsApp threads instead of a system of record, a single person who has to personally approve every step before work moves forward. These bottlenecks feel manageable at a small scale — and become existential at a larger one.",
    symptom: "The tell: more orders directly means more chaos for the same people.",
  },
];

export default function ProblemPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="The Problem We Solve"
        title="Growth is rarely limited by the market"
        intro="Most businesses assume their growth ceiling is set by the market — by how many customers exist, how big the addressable audience is, how aggressive the competition is. In practice, that is rarely the real constraint."
      />

      <section className="relative px-5 py-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <p className="text-balance text-center text-xl font-bold leading-[1.45] tracking-tight text-ink sm:text-2xl sm:leading-[1.45]">
              Growth is far more often limited by internal structural inefficiencies
              that leadership cannot see — because no one has ever mapped them.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-body sm:text-lg">
              That is why RaiderTech&apos;s first job on every engagement is to find
              these invisible revenue leaks — and name them precisely.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-5">
          {PROBLEMS.map((problem, index) => (
            <Reveal key={problem.title} delay={index * 90}>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-soft backdrop-blur-sm sm:p-9">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 text-slate-600">
                    <problem.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-ink">{problem.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                      {problem.body}
                    </p>
                    <p className="mt-4 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-sm font-medium text-body">
                      <span className="font-semibold text-ink">The tell: </span>
                      {problem.symptom}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-2xl border border-red-100 bg-gradient-to-r from-red-50 via-white to-red-50/40 p-7 text-center sm:p-9">
              <p className="text-balance text-lg font-bold leading-[1.45] tracking-tight text-ink sm:text-xl">
                None of these problems announce themselves.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-body sm:text-base">
                They are invisible to the teams living inside them — every small
                inefficiency looked reasonable while the company was small. The damage
                is in the compounding: decisions made on bad information, month after
                month. That is the chaos we find, map, and remove.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NextPageLink href="/process" label="Our Philosophy: Infrastructure Before Scale" />
    </SiteShell>
  );
}