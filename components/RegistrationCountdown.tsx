"use client";

import { useEffect, useState } from "react";

import {
  BUILDER_SPRINT,
  getRegistrationStatus,
} from "@/lib/buildersprint";

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

function getTimeRemaining(): TimeRemaining {
  const openDate = new Date(
    BUILDER_SPRINT.registrationOpenDate,
  ).getTime();

  const total = Math.max(0, openDate - Date.now());

  return {
    days: Math.floor(total / 86_400_000),
    hours: Math.floor((total / 3_600_000) % 24),
    minutes: Math.floor((total / 60_000) % 60),
    seconds: Math.floor((total / 1_000) % 60),
    total,
  };
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

export default function RegistrationCountdown() {
  const [timeRemaining, setTimeRemaining] =
    useState<TimeRemaining | null>(null);

  const [registrationStatus, setRegistrationStatus] =
    useState<ReturnType<typeof getRegistrationStatus> | null>(
      null,
    );

  useEffect(() => {
    function updateState() {
      setTimeRemaining(getTimeRemaining());
      setRegistrationStatus(getRegistrationStatus());
    }

    updateState();

    const interval = window.setInterval(updateState, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  if (!timeRemaining || !registrationStatus) {
    return (
      <div
        aria-hidden="true"
        className="mx-auto mt-8 h-24 max-w-xl animate-pulse rounded-2xl bg-slate-100"
      />
    );
  }

  if (registrationStatus === "open") {
    return (
      <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-green-200 bg-green-50 px-6 py-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
          Registrations Open
        </p>

        <p className="mt-2 text-sm leading-6 text-green-800">
          Builder Sprint {BUILDER_SPRINT.cohort} registration
          is available.
        </p>

        <a
          href={BUILDER_SPRINT.registrationFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-green-700 px-6 py-3 font-bold text-white transition hover:bg-green-800"
        >
          Register Now
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    );
  }

  if (registrationStatus === "awaiting-form") {
    return (
      <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-orange-200 bg-orange-50 px-6 py-6 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-700">
          Registration Link Pending
        </p>

        <p className="mt-3 text-sm leading-7 text-orange-900">
          The registration opening date has arrived, but
          the registration form link has not been configured.
          Please check the official CONTRIBE channels for
          updates.
        </p>

        <a
          href="https://discord.gg/GZ95dR5t9K"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center justify-center rounded-xl border border-orange-300 px-6 py-3 font-bold text-orange-800 transition hover:bg-orange-100"
        >
          Follow CONTRIBE Updates
          <span className="ml-2" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    );
  }

  const units = [
    {
      label: "Days",
      value: timeRemaining.days.toString(),
    },
    {
      label: "Hours",
      value: pad(timeRemaining.hours),
    },
    {
      label: "Minutes",
      value: pad(timeRemaining.minutes),
    },
    {
      label: "Seconds",
      value: pad(timeRemaining.seconds),
    },
  ];

  return (
    <div className="mx-auto mt-8 max-w-xl">
      <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-slate-500">
        Registrations open in
      </p>

      <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
        {units.map((unit) => (
          <div
            key={unit.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-2 py-4 shadow-sm sm:px-4"
          >
            <div className="text-2xl font-bold tabular-nums text-slate-900 sm:text-3xl">
              {unit.value}
            </div>

            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 sm:text-xs">
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-slate-500">
        Opening: {BUILDER_SPRINT.registrationOpenDateLabel}
      </p>
    </div>
  );
}