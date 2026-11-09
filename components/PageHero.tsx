import Reveal from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
};

export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-36 text-center sm:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 -z-10 h-[360px] w-[640px] -translate-x-1/2 rounded-full opacity-60 blur-[100px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(43, 41, 48, 0.26), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="bg-dots mask-fade-dots pointer-events-none absolute inset-0 -z-10"
      />

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="text-balance mt-4 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-base leading-relaxed text-body sm:text-lg">{intro}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}