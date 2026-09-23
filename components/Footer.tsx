import Image from "next/image";

const exploreLinks = [
  { label: "Builder Network", href: "#builder-network" },
  { label: "Weekly Activities", href: "#weekly-activities" },
  { label: "Builder Sprint", href: "#builder-sprint" },
  { label: "FAQ", href: "#faq" },
];

const getInvolvedLinks = [
  { label: "Join Builder Network", href: "#builder-network" },
  { label: "Become an Ambassador", href: "/ambassadors" },
  {
    label: "Linktree",
    href: "https://linktr.ee/joincontribe",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/joincontribibe",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* BRAND */}
          <div className="max-w-sm">
            <a
              href="#top"
              className="inline-flex items-center gap-3 transition hover:opacity-90"
              aria-label="CONTRIBE Home"
            >
              <Image
                src="/logo.png"
                alt="CONTRIBE Logo"
                width={52}
                height={52}
                className="h-12 w-12 object-contain"
              />

              <span className="text-xl font-bold tracking-wide">
                CONTRIBE
              </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Build. Participate. Grow.
            </p>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              A community for young builders to discover opportunities,
              participate, create, and keep moving forward.
            </p>
          </div>

          {/* EXPLORE */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Explore
            </h3>

            <div className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-400 transition hover:text-[#FF7A00]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* GET INVOLVED */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Get Involved
            </h3>

            <div className="mt-5 space-y-3">
              {getInvolvedLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="block text-sm text-slate-400 transition hover:text-[#FF7A00]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-slate-800" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CONTRIBE. All rights reserved.</p>

          <p>
            Made with{" "}
            <span aria-label="love" className="text-red-400">
              ♥
            </span>{" "}
            by{" "}
            <a
              href="https://www.instagram.com/insightbolt.enquiries"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-300 transition hover:text-[#FF7A00]"
            >
              InsightBolt
            </a>
          </p>
        </div>

        {/* CLOSING LINE */}
        <div className="mt-8 text-center">
          <p className="text-sm font-medium tracking-wide text-slate-600">
            The sprint ends. The building doesn&apos;t.
          </p>
        </div>
      </div>
    </footer>
  );
}