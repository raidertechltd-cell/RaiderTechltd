import Link from "next/link";
import Reveal from "./Reveal";
import { asset } from "./asset";
import { ArrowDownIcon, PlayIcon, ShieldIcon } from "./icons";

// Add or remove entries here. Images live in /public. Each one is shown for
// SLIDE_SECONDS, then crossfades into the next.
// To add more: drop the files in /public, then extend this list, e.g.
//   ["/hero-bg.jpg", "/hero-slide-2.jpg", "/hero-slide-3.jpg"]
const SLIDES = ["/hero-bg.jpg", "/hero-slide-2.jpg", "/hero-slide-3.jpg"];
const SLIDE_SECONDS = 6;
const FADE_SECONDS = 0.7;

export default function Hero() {
  const cycle = SLIDES.length * SLIDE_SECONDS;

  // Keyframe stops are derived from the cycle so the crossfade stays correct
  // no matter how many images are in the list.
  const stop = (seconds: number) =>
    `${Math.min(100, (seconds / cycle) * 100).toFixed(3)}%`;
  const keyframes =
    `@keyframes heroFade{` +
    `0%{opacity:0;transform:scale(1.12)}` +
    `${stop(FADE_SECONDS)}{opacity:1}` +
    `${stop(SLIDE_SECONDS)}{opacity:1}` +
    `${stop(SLIDE_SECONDS + FADE_SECONDS)}{opacity:0;transform:scale(1)}` +
    `100%{opacity:0;transform:scale(1)}}`;

  return (
    <section
      id="home"
      className="relative overflow-hidden px-5 pb-48 pt-32 text-center sm:pt-40"
    >
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />

      {/* Animated background slideshow */}
      <div aria-hidden="true" className="absolute inset-0 -z-30">
        {SLIDES.map((src, index) => (
          <div
            key={src}
            className="hero-slide absolute inset-0"
            style={{
              backgroundImage: `url(${asset(src)})`,
              animation: `heroFade ${cycle}s ease-in-out ${index * SLIDE_SECONDS}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Dark shade for text contrast */}
      <div
        aria-hidden="true"
        className="hero-shade pointer-events-none absolute inset-0 -z-20"
      />

      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-16 -z-10 h-[460px] w-[720px] -translate-x-1/2 rounded-full opacity-70 blur-[110px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(61, 12, 175, 0.3), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-1/3 -z-10 h-[340px] w-[340px] rounded-full opacity-60 blur-[90px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(95, 128, 107, 0.28), transparent)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-1/4 -z-10 h-[300px] w-[300px] rounded-full opacity-60 blur-[90px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(139,92,246,0.22), transparent)",
        }}
      />

      {/* Light dot / particle pattern */}
      <div
        aria-hidden="true"
        className="bg-dots-light mask-fade-dots pointer-events-none absolute inset-0 -z-10"
      />

      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 shadow-soft backdrop-blur-sm">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-white">
              <ShieldIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-sm font-semibold text-white">
              The growth infrastructure firm for SMEs &amp; emerging enterprises
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Eliminate Operational Chaos.
            <br />
            <span className="bg-gradient-to-r from-primary-50 via-white to-secondary-50 bg-clip-text text-transparent">
              Engineer Predictable Growth.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            RaiderTech transforms fragmented, manual operations into structured,
            scalable, performance-driven ecosystems —
            <br className="hidden sm:block" /> so your growth never becomes the thing
            that breaks you.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/services" className="btn-primary">
              Explore Our Services
              <ArrowDownIcon className="h-4 w-4" />
            </Link>
            <Link href="/how-we-work" className="btn-green-dark">
              <PlayIcon className="h-4 w-4" />
              See How We Work
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400/80">
            Serving growth-stage businesses generating ₦200M – ₦2B annually
          </p>
        </Reveal>
      </div>

      {/* Glowing curved horizon / arc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10"
      >
        <svg
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          className="h-40 w-full sm:h-56"
        >
          <defs>
            <linearGradient id="heroArc" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="22%" stopColor="#8B5CF6" stopOpacity="0.9" />
              <stop offset="55%" stopColor="#8b83b8" stopOpacity="1" />
              <stop offset="78%" stopColor="#22C55E" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="heroArcFill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.14" />
              <stop offset="55%" stopColor="#A78BFA" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#22C55E" stopOpacity="0.02" />
            </linearGradient>
            <filter id="heroGlow" x="-20%" y="-40%" width="140%" height="200%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M0,300 L0,190 C280,90 520,60 720,60 C920,60 1160,90 1440,190 L1440,300 Z"
            fill="url(#heroArcFill)"
          />
          <path
            d="M0,190 C280,90 520,60 720,60 C920,60 1160,90 1440,190"
            fill="none"
            stroke="url(#heroArc)"
            strokeWidth="3"
            filter="url(#heroGlow)"
          />
          <path
            d="M0,230 C300,150 540,120 720,120 C900,120 1140,150 1440,230"
            fill="none"
            stroke="url(#heroArc)"
            strokeWidth="1.5"
            strokeOpacity="0.45"
          />
        </svg>
      </div>
    </section>
  );
}