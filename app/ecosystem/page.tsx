import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import NextPageLink from "@/components/NextPageLink";
import SiteShell from "@/components/SiteShell";
import {
  ChartIcon,
  CreditCardIcon,
  CheckIcon,
  MonitorIcon,
  SplitIcon,
  UsersIcon,
} from "@/components/icons";

export const metadata = {
  title: "The Unified Digital Ecosystem — One Source of Truth | RaiderTech",
  description:
    "The output of our four-stage process: an environment where marketing, sales, finance, and operations all read from and write to a single source of truth.",
};

const COMPONENTS = [
  {
    icon: MonitorIcon,
    title: "Enterprise-Grade Assets",
    body: "Custom web applications and API integrations engineered to be a business\u2019s actual operating infrastructure — not a static brochure site that has nothing to do with how the business runs day to day. These are the systems the business runs on: order flows, client portals, internal tools, and the integrations that connect them.",
  },
  {
    icon: UsersIcon,
    title: "CRM & Lifecycle Systems",
    body: "A customer management architecture built around how this specific business actually sells and retains customers — rather than a generic out-of-the-box CRM template forced onto a workflow it was not designed for. Acquisition, onboarding, retention, and segmentation all live in one place that matches real behavior.",
  },
  {
    icon: CreditCardIcon,
    title: "Financial Integration",
    body: "Automated payment gateways and reconciliation systems that remove the manual finance work — chasing which transfer matches which invoice, reconciling accounts by hand — that quietly eats hours every week. Subscription billing, invoicing automation, and revenue reconciliation flow without a human touchpoint.",
  },
  {
    icon: ChartIcon,
    title: "Intelligence Layer",
    body: "Real-time dashboards, backed by secure cloud deployment, so leadership is always looking at current numbers instead of last week\u2019s export. Marketing, sales, finance, and operations watch the same live numbers — so one shared, transparent version of the truth drives the whole company.",
  },
];

export default function EcosystemPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="What We Build"
        title="The Unified Digital Ecosystem"
        intro="The output of that four-stage process is a unified digital ecosystem — an environment where marketing, sales, finance, and operations all read from and write to a single source of truth, instead of four departments each trusting their own disconnected spreadsheet."
      />

      <section className="relative px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-200 text-slate-500">
                  <SplitIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-body/70">
                  Without the ecosystem
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-body">
                  <li>• Four departments, four disconnected spreadsheets</li>
                  <li>• Reports copied by hand between systems</li>
                  <li>• Leadership deciding on last week&apos;s export</li>
                  <li>• Every team trusting a different version of the truth</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex h-full flex-col rounded-2xl border border-primary/40 bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-7 shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                  With RaiderTech
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-body">
                  <li>• One source of truth, read by every department</li>
                  <li>• Live numbers for marketing, sales, finance, operations</li>
                  <li>• Reports that build themselves from real data</li>
                  <li>• Growth that gets more efficient, not more chaotic</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative px-5 pb-16 sm:pb-24">
        <div className="mx-auto max-w-5xl space-y-5">
          {COMPONENTS.map((component, index) => (
            <Reveal key={component.title} delay={index * 90}>
              <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-soft backdrop-blur-sm sm:flex-row sm:items-start sm:p-9">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glowPurple">
                  <component.icon className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-ink">{component.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                    {component.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <NextPageLink href="/services" label="Our Services" />
    </SiteShell>
  );
}