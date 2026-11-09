import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import NextPageLink from "@/components/NextPageLink";
import SiteShell from "@/components/SiteShell";
import { CalendarIcon, FunnelIcon, HeartIcon } from "@/components/icons";

export const metadata = {
  title: "Revenue Systems Engineering — A Closer Look | RaiderTech",
  description:
    "Revenue architecture sits at the center of everything RaiderTech builds: funnel architecture, retention automation, and subscription models engineered for predictable cash flow.",
};

const AREAS = [
  {
    icon: FunnelIcon,
    title: "Funnel Architecture",
    body: "Structured lead capture and conversion systems engineered so prospects move through a defined path — instead of falling through the cracks between marketing and sales. Every stage of the journey, from first touch to signed deal, is mapped, owned, and measured, so leads never depend on memory or follow-up luck.",
  },
  {
    icon: HeartIcon,
    title: "Retention Automation",
    body: "Systems specifically designed to increase customer lifetime value, on the premise that most businesses over-invest in acquiring new customers and under-invest in keeping the ones they already have. Onboarding, health checks, renewals, and win-back are automated into a lifecycle that quietly compounds.",
  },
  {
    icon: CalendarIcon,
    title: "Subscription Models",
    body: "Recurring billing structures built for stable, predictable cash flow — so revenue is a forecastable number rather than a monthly surprise. Billing is automated, churn is visible in an executive dashboard, and leadership always knows what is coming next month.",
  },
];

export default function RevenuePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="A Closer Look"
        title="Revenue Systems Engineering"
        intro="Because revenue architecture sits at the center of what RaiderTech builds, it is worth detailing further. Our engineering focus in this area breaks down into three areas."
      />

      <section className="relative px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-balance text-center text-xl font-bold leading-[1.45] tracking-tight text-ink sm:text-2xl sm:leading-[1.45]">
              The goal: revenue that is a predictable, repeatable system — not a number
              that depends on any one person&apos;s hustle on a given day.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {AREAS.map((area, index) => (
              <Reveal key={area.title} delay={index * 90}>
                <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-soft backdrop-blur-sm sm:flex-row sm:items-start sm:p-9">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-secondary to-emerald-500 text-white shadow-glowGreen">
                    <area.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-xl font-bold text-ink">{area.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                      {area.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-2xl border border-secondary/30 bg-gradient-to-r from-secondary-50 via-white to-secondary-50/50 p-7 text-center sm:p-9">
              <p className="text-balance text-lg font-bold leading-[1.45] tracking-tight text-ink sm:text-xl">
                Because revenue architecture sits at the center of everything RaiderTech
                builds, it is the first system we engineer — the one every other system
                ultimately has to feed.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NextPageLink href="/clients" label="Who We Work With" />
    </SiteShell>
  );
}