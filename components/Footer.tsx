import Image from "next/image";
import Link from "next/link";
import { asset } from "./asset";

const LINK_GROUPS = [
  {
    heading: "Services",
    links: [
      { label: "Our Services", href: "/services" },
      { label: "Revenue Engineering", href: "/revenue" },
      { label: "The Ecosystem", href: "/ecosystem" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "What Is RaiderTech", href: "/what-we-do" },
      { label: "Our Philosophy", href: "/process" },
      { label: "Leadership & Vision", href: "/leadership" },
      { label: "Who We Work With", href: "/clients" },
    ],
  },
  {
    heading: "Get Started",
    links: [
      { label: "How We Work", href: "/how-we-work" },
      { label: "Start a Conversation", href: "/contact" },
      { label: "raidertechltd@gmail.com", href: "mailto:raidertechltd@gmail.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative px-5 pb-10 pt-20 sm:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="group flex items-center gap-2.5">
              <Image
                src={asset("/raidertech-logo.png")}
                alt="RaiderTech logo"
                width={40}
                height={40}
                className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <span className="text-lg font-extrabold tracking-tight text-ink">
                Raider<span className="text-primary">tech</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-body">
              A digital infrastructure and revenue systems engineering firm turning
              fragmented operations into predictable, measurable growth ecosystems.
            </p>
            <p className="mt-4 text-sm font-semibold text-body">Nigeria · West Africa</p>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-bold text-ink">{group.heading}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        className="text-sm text-body transition-colors hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-body transition-colors hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 border-t border-slate-200/70 pt-8 text-center text-xs text-body/70">
          © {new Date().getFullYear()} RaiderTech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}