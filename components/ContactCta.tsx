import Link from "next/link";
import Reveal from "./Reveal";

export default function ContactCta() {
  return (
    <section className="relative scroll-mt-24 px-5 pt-20 sm:pt-24">
      <Reveal>
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-primary/15 bg-white/80 px-6 py-14 text-center shadow-soft backdrop-blur-sm sm:px-12">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            RaiderTech eliminates operational chaos.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-semibold leading-relaxed text-ink sm:text-lg">
            We engineer systems. We build infrastructure.
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              We create predictable revenue ecosystems.
            </span>
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Start a Conversation
            </Link>
            <a href="mailto:hello@raidertech.app" className="btn-green">
              Email the Team
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}