import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import SiteShell from "@/components/SiteShell";
import {
  ArrowRightIcon,
  BoltIcon,
  CompassIcon,
  MailIcon,
  PinIcon,
  ShieldCheckIcon,
} from "@/components/icons";

export const metadata = {
  title: "Contact RaiderTech — Start the Conversation",
  description:
    "Tell RaiderTech where operational chaos is showing up in your business. Start a conversation about digital infrastructure and revenue systems engineering.",
};

export default function ContactPage() {
  return (
    <SiteShell showCta={false}>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation"
        intro="Tell us where operational chaos is showing up in your business. We will map it, name it precisely, and show you what fixing it looks like — no jargon, no obligation."
      />

      <section className="relative px-5 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="text-center">
              <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                RaiderTech eliminates operational chaos.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-relaxed text-ink sm:text-lg">
                We engineer systems. We build infrastructure.
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  We create predictable revenue ecosystems.
                </span>
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <Reveal>
              <a
                href="mailto:raidertechltd@gmail.com?subject=Infrastructure%20partnership%20inquiry"
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-glowPurple">
                  <MailIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">Email the team</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  The fastest way to reach us. Tell us about your stage, the systems you
                  currently run, and where the chaos is showing up.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  raidertechltd@gmail.com
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </a>
            </Reveal>

            <Reveal delay={90}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-soft backdrop-blur-sm">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary-50 text-secondary">
                  <ShieldCheckIcon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">
                  What a first conversation looks like
                </h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-body">
                  <li className="flex items-start gap-2.5">
                    <CompassIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    We ask about how work actually moves today — not how it looks on
                    paper.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CompassIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    We map the gaps: systems, data, handoffs, and bottlenecks.
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CompassIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    We name the stage you would start from and the benchmark we would
                    hold ourselves to.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-slate-200 bg-white/80 px-6 py-6 text-sm font-semibold text-body shadow-soft backdrop-blur-sm">
              <span className="inline-flex items-center gap-2">
                <PinIcon className="h-4 w-4 text-primary" />
                Nigeria · West Africa
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                </span>
                Currently onboarding new partnerships
              </span>
              <span className="inline-flex items-center gap-2">
                <BoltIcon className="h-4 w-4 text-primary" />
                Infrastructure before scale, always
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}