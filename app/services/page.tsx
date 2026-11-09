import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import NextPageLink from "@/components/NextPageLink";
import SiteShell from "@/components/SiteShell";
import {
  ChartIcon,
  CompassIcon,
  CreditCardIcon,
  LinkIcon,
  MonitorIcon,
  RulerIcon,
  SlidersIcon,
  UsersIcon,
} from "@/components/icons";

export const metadata = {
  title: "Our Services — 8 Capabilities, One Operating System | RaiderTech",
  description:
    "Digital infrastructure architecture, revenue systems engineering, full-stack development, CRM lifecycle automation, financial integration, data dashboards, workflow automation, and contract-based partnerships.",
};

const SERVICES = [
  {
    number: "01",
    icon: RulerIcon,
    title: "Digital Infrastructure Architecture",
    body: "The foundational service: comprehensive digital blueprints that unify web platforms, CRM systems, automation frameworks, payment infrastructure, and analytics into a single coherent ecosystem — rather than a collection of tools that happen to coexist.",
  },
  {
    number: "02",
    icon: CompassIcon,
    title: "Revenue Systems Engineering",
    body: "Structured revenue engines that automate the full path from lead capture through nurturing, conversion, and payment — designed so revenue generation is a predictable, repeatable system rather than something that depends on any one person\u2019s hustle on a given day.",
  },
  {
    number: "03",
    icon: MonitorIcon,
    title: "Full-Stack Web & Application Development",
    body: "Scalable websites, web applications, and custom digital platforms built to function as central operating infrastructure — the system the business actually runs on, not simply a marketing presence sitting disconnected from the rest of the business.",
  },
  {
    number: "04",
    icon: UsersIcon,
    title: "CRM & Lifecycle Automation Systems",
    body: "Enterprise-grade CRM deployments that manage the full customer journey — acquisition, onboarding, retention, and segmentation — built around the business\u2019s actual customer behavior rather than a generic template.",
  },
  {
    number: "05",
    icon: CreditCardIcon,
    title: "Payment & Financial Integration Systems",
    body: "Secure payment gateways, subscription billing models, invoicing automation, and revenue reconciliation systems that remove manual financial admin and reduce the errors that come with it.",
  },
  {
    number: "06",
    icon: ChartIcon,
    title: "Data Intelligence & Executive Dashboards",
    body: "Real-time analytics dashboards that give marketing, sales, finance, and operations a shared, transparent view of performance — so decisions get made on current data, not on whichever report happened to get compiled last.",
  },
  {
    number: "07",
    icon: SlidersIcon,
    title: "Workflow & Process Automation",
    body: "Targeted automation of the specific internal workflows and reporting processes identified during the architecture phase as bottlenecks — automation that solves a named problem, not automation applied generically.",
  },
  {
    number: "08",
    icon: LinkIcon,
    title: "Contract-Based Infrastructure Partnership",
    body: "Structured 3\u20136 month engagements, or longer enterprise arrangements, that ensure infrastructure work is deployed, optimized, and maintained in a disciplined way — rather than treated as a one-time project that is forgotten once it ships.",
  },
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Services"
        title="Eight capabilities, one operating system"
        intro="Every engagement is built from the same integrated service stack — each capability engineered to work with the others rather than a standalone fix. Here is what each one actually delivers."
      />

      <section className="relative px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2">
          {SERVICES.map((service, index) => (
            <Reveal key={service.number} delay={index * 70}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-7 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-50 text-primary">
                    <service.icon className="h-6 w-6" />
                  </span>
                  <span className="text-4xl font-black leading-none text-slate-100">
                    {service.number}
                  </span>
                </div>
                <h2 className="mt-5 text-lg font-bold leading-snug text-ink">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-body">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <NextPageLink href="/revenue" label="Revenue Systems Engineering" />
    </SiteShell>
  );
}