import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a
          href="#top"
          className="flex items-center gap-3 transition hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="CONTRIBE Logo"
            width={50}
            height={50}
            priority
          />

          <span className="text-l font-bold tracking-wide text-slate-900">
            CONTRIBE
          </span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a
            href="#top"
            className="transition hover:text-orange-500"
          >
            Builder Sprint
          </a>

          <a
            href="#timeline"
            className="transition hover:text-orange-500"
          >
            Timeline
          </a>

          <a
            href="#benefits"
            className="transition hover:text-orange-500"
          >
            Benefits
          </a>

          <a
            href="#faq"
            className="transition hover:text-orange-500"
          >
            FAQ
          </a>
        </div>

      <a
  href="/ambassadors"
  className="whitespace-nowrap rounded-full bg-orange-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-orange-600 sm:px-5 sm:py-2.5 sm:text-sm"
>
  <span className="sm:hidden">Ambassador</span>
  <span className="hidden sm:inline">Become an Ambassador</span>
</a>
        
      </nav>
    </header>
  );
}