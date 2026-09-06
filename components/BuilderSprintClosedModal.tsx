"use client";

import { useEffect, useState } from "react";

const AMBASSADOR_URL = "/ambassadors";
const INSTAGRAM_URL =
  "https://www.instagram.com/joincontribe?igsh=MTU3M3h5MG91NnZuZw==";

export default function BuilderSprintClosedModal() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="builder-sprint-closed-title"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close Builder Sprint registration notice"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-2xl leading-none text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
        >
          ×
        </button>

        <div className="bg-[#0F172A] px-6 py-8 text-white sm:px-10 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            CONTRIBE Builder Sprint
          </p>

          <h2
            id="builder-sprint-closed-title"
            className="mt-4 text-3xl font-bold leading-tight sm:text-4xl"
          >
            Registrations are now closed.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
            But building, participating, and growing never ends at CONTRIBE.
          </p>
        </div>

        <div className="px-6 py-7 sm:px-10 sm:py-8">
          <p className="text-base leading-7 text-slate-600">
            Something big is coming this October to help you keep going.
            Meanwhile, you can apply for a CONTRIBE Ambassador position and
            take part in what we’re building.
          </p>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Want to follow the Builder Sprint progression? Keep a check on
            our Instagram:
          </p>

          <p className="mt-2 font-semibold text-slate-900">@joincontribe</p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={AMBASSADOR_URL}
              onClick={() => setIsOpen(false)}
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-orange-500 px-5 py-3.5 text-center font-semibold text-white transition hover:bg-orange-600"
            >
              Apply for Ambassador
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 px-5 py-3.5 text-center font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Follow Progression
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-5 w-full text-center text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Continue to Builder Sprint
          </button>
        </div>
      </div>
    </div>
  );
}