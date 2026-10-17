"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import {
  INSIGHTBOLT_LINKS,
  isInsightBoltOfferAnnouncementWindow,
} from "@/lib/buildersprint";

const SESSION_KEY = "contribe-insightbolt-offer-popup-dismissed";

export default function InsightBoltOfferPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isInsightBoltOfferAnnouncementWindow()) {
      return;
    }

    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === "true") {
        return;
      }
    } catch {
      // If session storage is unavailable, the popup can
      // still function for the current page visit.
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 4500);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closePopup();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closePopup() {
    try {
      window.sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Dismissal still works for the current page visit.
    }

    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/75 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePopup();
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="insightbolt-popup-heading"
        className="relative my-auto w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-2xl sm:p-9"
      >
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close partnership announcement"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          ×
        </button>

        <p className="pr-10 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 sm:text-sm">
          CONTRIBE × INSIGHTBOLT
        </p>

        <h2
          id="insightbolt-popup-heading"
          className="mt-5 pr-5 text-3xl font-black leading-tight sm:text-4xl"
        >
          Built something?
          <span className="mt-1 block text-orange-600">
            Here's your next benefit.
          </span>
        </h2>

        <div className="mt-6 rounded-2xl bg-[#0F172A] p-6 text-white">
          <p className="text-5xl font-black text-orange-400 sm:text-6xl">
            50% OFF
          </p>

          <p className="mt-2 text-lg font-bold">
            for 3 months
          </p>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            On one eligible InsightBolt monthly plan.
          </p>
        </div>

        <p className="mt-6 text-sm leading-7 text-slate-600">
          This offer is exclusively for eligible Builder Sprint
          Cohort 2 participants who submitted their projects
          according to the sprint requirements. Redemption
          instructions are expected by email during the
          December 25–30, 2026 window.
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-600">
          Your individual three-month redemption window begins
          when your redemption instructions are sent. The
          discounted fee is paid in advance for each respective
          monthly billing period. Upgrading or downgrading the
          selected plan terminates the offer.
        </p>

        <Link
          href={INSIGHTBOLT_LINKS.terms}
          onClick={closePopup}
          className="mt-4 inline-block text-sm font-semibold text-orange-700 underline decoration-orange-500 underline-offset-4 hover:text-orange-800"
        >
          Read Terms &amp; Conditions
        </Link>

        <button
          type="button"
          onClick={closePopup}
          className="mt-7 flex w-full items-center justify-center rounded-xl bg-[#0F172A] px-6 py-3.5 font-bold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          Got it
        </button>
      </section>
    </div>
  );
}