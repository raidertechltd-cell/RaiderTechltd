import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import NextPageLink from "@/components/NextPageLink";
import SiteShell from "@/components/SiteShell";
import { CartIcon, CoinsIcon, GraduationIcon, HomeIcon, TruckIcon } from "@/components/icons";

export const metadata = {
  title: "Who We Work With — Growth-Stage Businesses | RaiderTech",
  description:
    "RaiderTech partners with growth-stage businesses across Real Estate, Logistics, Financial Services, E-commerce, and Education, generally generating ₦200 million to ₦2 billion annually.",
};

const SECTORS = [
  { icon: HomeIcon, name: "Real Estate" },
  { icon: TruckIcon, name: "Logistics" },
  { icon: CoinsIcon, name: "Financial Services" },
  { icon: CartIcon, name: "E-commerce" },
  { icon: GraduationIcon, name: "Education" },
];

export default function ClientsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Who We Work With"
        title="Growth-stage businesses past the breaking point"
        intro="RaiderTech partners with growth-stage businesses across five core sectors, generally generating between ₦200 million and ₦2 billion annually."
      />

      <section className="relative px-5 py-12">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-3.5">
          {SECTORS.map((sector, index) => (
            <Reveal key={sector.name} delay={index * 80}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white/80 px-5 py-3 text-sm font-semibold text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40">
                <sector.icon className="h-5 w-5 text-primary" />
                {sector.name}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative px-5 py-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <Reveal>
            <p className="text-center text-base leading-relaxed text-body sm:text-lg">
              What unites our ideal clients is not industry so much as a stage:{" "}
              <span className="font-semibold text-ink">
                they have outgrown the informal, person-dependent way they used to
                operate, and they know it.
              </span>{" "}
              Orders are getting missed. Reporting is taking too long. Growth is
              starting to feel like it is creating more problems than it solves.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-center text-base leading-relaxed text-body sm:text-lg">
              The right client is not looking for a quick-fix website. They are looking
              for the operational backbone that lets them keep growing without the
              wheels coming off — and they are ready for the work that takes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-20 sm:pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-2xl border border-primary/40 bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-7 text-center sm:p-9">
              <p className="text-balance text-lg font-bold leading-[1.45] tracking-tight text-ink sm:text-xl">
                If your business generates ₦200M–₦2B a year and the systems have not
                scaled with it — that is precisely the moment we are built for.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <NextPageLink href="/leadership" label="Leadership & Regional Vision" />
    </SiteShell>
  );
}