import Link from "next/link";
import Reveal from "./Reveal";

export default function NextPageLink({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <div className="mx-auto px-5 pb-24 pt-6 text-center sm:pb-28">
      <Reveal>
        <Link
          href={href}
          className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-600"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-body/60">
            Up next
          </span>
          <span className="text-ink group-hover:underline">{label}</span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </Reveal>
    </div>
  );
}