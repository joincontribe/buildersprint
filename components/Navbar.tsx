"use client";

import Image from "next/image";
import { useState } from "react";

import { BUILDER_SPRINT, CONTRIBE_LINKS } from "@/lib/buildersprint";

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
    label: "Partnership",
    href: "#insightbolt-partnership",
  },
  {
    label: "FAQs",
    href: "#faq",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const registrationUrl = BUILDER_SPRINT.registrationFormUrl;

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSprintClick() {
    closeMenu();

    if (registrationUrl) {
      window.open(registrationUrl, "_blank", "noopener,noreferrer");
      return;
    }

    document
      .getElementById("builder-sprint")
      ?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-5 sm:px-6"
      >
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5"
          aria-label="CONTRIBE homepage"
        >
          <Image
            src="/logo.png"
            alt="CONTRIBE"
            width={44}
            height={44}
            priority
            className="h-10 w-10 object-contain"
          />

          <span className="text-lg font-bold tracking-wide text-slate-900 sm:text-xl">
            CONTRIBE
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-slate-600 transition hover:text-orange-600"
            >
              {item.label}
            </a>
          ))}

          {/* Primary CTA */}
          <button
            type="button"
            onClick={handleSprintClick}
            className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            Register for Builder Sprint →
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-2xl text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 lg:hidden"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-5 py-5 shadow-lg lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {/* Primary CTA first on mobile */}
            <button
              type="button"
              onClick={handleSprintClick}
              className="mb-3 rounded-xl bg-orange-500 px-5 py-4 text-center font-bold text-white shadow-sm transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
            >
              Register for Builder Sprint →
            </button>

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-orange-50 hover:text-orange-700"
              >
                {item.label}
              </a>
            ))}

            <a
              href={CONTRIBE_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 rounded-xl border border-orange-200 px-5 py-3.5 text-center font-bold text-orange-700 transition hover:bg-orange-50"
            >
              Join the Builder Network ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}