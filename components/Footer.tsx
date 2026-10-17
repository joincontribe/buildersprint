import Image from "next/image";

import {
  CONTRIBE_LINKS,
  INSIGHTBOLT_LINKS,
} from "@/lib/buildersprint";

const exploreLinks = [
  {
    label: "Builder Network",
    href: "/#builder-network",
  },
  {
    label: "Weekly Activities",
    href: "/#weekly-activities",
  },
  {
    label: "Builder Sprint",
    href: "/#builder-sprint",
  },
  {
    label: "InsightBolt Partnership",
    href: "/#insightbolt-partnership",
  },
  {
    label: "Frequently Asked Questions",
    href: "/#faq",
  },
];

const communityLinks = [
  {
    label: "Join Discord",
    href: CONTRIBE_LINKS.discord,
    external: true,
  },
  {
    label: "WhatsApp Channel",
    href: CONTRIBE_LINKS.whatsapp,
    external: true,
  },
  {
    label: "CONTRIBE Linktree",
    href: CONTRIBE_LINKS.linktree,
    external: true,
  },
  {
    label: "Ambassador Programme",
    href: "/ambassadors",
    external: false,
  },
  {
    label: "Terms & Conditions",
    href: INSIGHTBOLT_LINKS.terms,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div className="max-w-sm">
            <a
              href="/"
              className="inline-flex items-center gap-3 transition hover:opacity-90"
              aria-label="CONTRIBE homepage"
            >
              <Image
                src="/logo.png"
                alt="CONTRIBE"
                width={48}
                height={48}
                className="h-11 w-11 object-contain"
              />

              <span className="text-xl font-bold tracking-wide">
                CONTRIBE
              </span>
            </a>

            <p className="mt-5 text-lg font-semibold text-white">
              Build. Participate. Grow.
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              A community for young people who want to turn
              ideas into action, connect with other builders,
              and keep creating.
            </p>

            <a
              href={CONTRIBE_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              Join the Community →
            </a>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
              Explore
            </h2>

            <nav
              aria-label="Footer navigation"
              className="mt-5 space-y-4"
            >
              {exploreLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-400 transition hover:text-orange-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-200">
              Get Involved
            </h2>

            <nav
              aria-label="Community and legal links"
              className="mt-5 space-y-4"
            >
              {communityLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={
                    link.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block text-sm text-slate-400 transition hover:text-orange-400"
                >
                  {link.label}
                  {link.external && (
                    <span className="ml-1" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="my-10 h-px bg-slate-800 sm:my-12" />

        <div className="flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CONTRIBE. All rights
            reserved.
          </p>

          <p>
            Made with{" "}
            <span className="text-red-400" aria-label="love">
              ♥
            </span>{" "}
            by{" "}
            <a
              href={INSIGHTBOLT_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-slate-300 transition hover:text-orange-400"
            >
              InsightBolt
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}