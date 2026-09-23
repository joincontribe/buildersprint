import Image from "next/image";

const navItems = [
  {
    label: "Builder Network",
    href: "#builder-network",
  },
  {
    label: "Weekly Activities",
    href: "#weekly-activities",
  },
  {
    label: "Builder Sprint",
    href: "#builder-sprint",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6">
        {/* CONTRIBE BRAND */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 transition hover:opacity-90"
          aria-label="CONTRIBE Home"
        >
          <Image
            src="/logo.png"
            alt="CONTRIBE Logo"
            width={46}
            height={46}
            priority
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />

          <span className="text-lg font-bold tracking-wide text-slate-900 sm:text-xl">
            CONTRIBE
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-orange-500"
            >
              {item.label}
            </a>
          ))}

          {/* DESKTOP CTA */}
          <a
            href="#builder-network"
            className="ml-1 whitespace-nowrap rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Join Builder Network
          </a>
        </div>

        {/* MOBILE / TABLET CTA */}
        <div className="flex items-center lg:hidden">
          <a
            href="#builder-network"
            className="whitespace-nowrap rounded-full bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            <span className="sm:hidden">Builder Network</span>
            <span className="hidden sm:inline">Join Builder Network</span>
          </a>
        </div>
      </nav>
    </header>
  );
}