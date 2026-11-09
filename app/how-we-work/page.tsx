import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import NextPageLink from "@/components/NextPageLink";
import SiteShell from "@/components/SiteShell";
import { ArrowRightIcon, CheckIcon, ShieldIcon } from "@/components/icons";

export const metadata = {
  title: "How the Team Works — Contract-Based Partnerships | RaiderTech",
  description:
    "Every RaiderTech engagement runs as a structured, contract-based infrastructure partnership — typically 3–6 months — moving through architecture, workflow, automation, and measurement.",
};

const SEQUENCE = ["Architecture", "Workflow", "Automation", "Measurement"];

const ASSURANCES = [
  {
    title: "A structured, contract-based partnership",
    body: "Typically 3–6 months, or longer for enterprise arrangements — never a one-off project with an ambiguous end date. The commitment is defined, signed, and scoped before work begins.",
  },
  {
    title: "One repeatable sequence, always",
    body: "Every engagement moves through the same architecture → workflow → automation → measurement sequence described on our Process page — so a client always knows exactly what stage their build is at and what comes next.",
  },
  {
    title: "Benchmarks defined in advance",
    body: "Each stage of work is measured against a specific performance benchmark agreed up front. A client always knows what success looks like before work starts — and can see it in real time once it does.",
  },
];

export default function HowWeWorkPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="How the Team Works"
        title="Engagements with a spine"
        intro="Every engagement runs as a structured, contract-based infrastructure partnership — typically 3–6 months, or longer for enterprise arrangements — rather than a one-off project with an ambiguous end date."
      />

      <section className="relative px-5 py-10">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {SEQUENCE.map((step, index) => (
                <span key={step} className="flex items-center gap-2.5">
                  <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-ink shadow-soft">
                    {step}
                  </span>
                  {index < SEQUENCE.length - 1 && (
                    <ArrowRightIcon className="h-4 w-4 text-primary" />
                  )}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-body sm:text-lg">
              The same disciplined sequence every time — so progress is never a
              mystery and &ldquo;how will we know this worked?&rdquo; is answered before the
              work begins, not after.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-4">
          {ASSURANCES.map((assurance, index) => (
            <Reveal key={assurance.title} delay={index * 90}>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-soft backdrop-blur-sm sm:p-7">
                <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-secondary-50 text-secondary">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-base font-bold text-ink">{assurance.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-body sm:text-base">
                    {assurance.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="flex items-start gap-4 rounded-2xl border border-primary-50 bg-gradient-to-r from-primary-50 via-white to-secondary-50 p-7 sm:p-9">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glowPurple">
                <ShieldIcon className="h-5 w-5" />
              </span>
              <p className="text-base font-semibold leading-relaxed text-ink sm:text-lg">
                Nothing gets deployed without a clear answer to{" "}
                <span className="text-primary">
                  &ldquo;how will we know this worked?&rdquo;
                </span>{" "}
                defined in advance.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NextPageLink href="/contact" label="Start the Conversation" />
    </SiteShell>
  );
}