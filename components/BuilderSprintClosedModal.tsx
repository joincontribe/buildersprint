"use client";

import { useEffect, useState } from "react";

export default function BuilderSprintClosedModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-5 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="builder-network-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
        >
          ×
        </button>

        <div className="bg-[#0F172A] px-7 pb-8 pt-10 text-white sm:px-9">
          <div className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
            CONTRIBE BUILDER NETWORK
          </div>

          <h2
            id="builder-network-modal-title"
            className="mt-6 pr-8 text-3xl font-bold leading-tight sm:text-4xl"
          >
            The sprint may be over.
            <span className="block text-orange-400">
              The building isn't.
            </span>
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            Builder Sprint Cohort 1 is complete, and Cohort 2 registrations
            open November 1, 2026.
          </p>
        </div>

        <div className="px-7 py-7 sm:px-9 sm:py-8">
          <p className="leading-7 text-slate-600">
            You don't have to wait until November to participate. Join the
            Builder Network to meet builders, find teammates, discover
            opportunities, and take part in Weekly Activities.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <a
              href="#builder-network"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center rounded-xl bg-orange-500 px-5 py-3.5 font-bold text-white transition hover:bg-orange-600"
            >
              Join the Network →
            </a>

            <a
              href="#weekly-activities"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              See Activities
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-5 w-full text-center text-sm font-medium text-slate-400 transition hover:text-slate-600"
          >
            Continue exploring CONTRIBE
          </button>
        </div>
      </div>
    </div>
  );
}