"use client";

import { useEffect, useState } from "react";
import { BUILDER_SPRINT } from "@/lib/buildersprint";

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
};

function getTimeRemaining(): TimeRemaining {
  const deadline = new Date(
    BUILDER_SPRINT.registrationDeadline,
  ).getTime();

  const total = Math.max(0, deadline - Date.now());

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (total / (1000 * 60 * 60)) % 24,
  );
  const minutes = Math.floor(
    (total / (1000 * 60)) % 60,
  );
  const seconds = Math.floor(
    (total / 1000) % 60,
  );

  return {
    days,
    hours,
    minutes,
    seconds,
    total,
  };
}

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

export default function RegistrationCountdown() {
  const [timeRemaining, setTimeRemaining] =
    useState<TimeRemaining | null>(null);

  useEffect(() => {
    const updateCountdown = () => {
      setTimeRemaining(getTimeRemaining());
    };

    updateCountdown();

    const interval = window.setInterval(
      updateCountdown,
      1000,
    );

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  if (!timeRemaining) {
    return (
      <div
        aria-hidden="true"
        className="mt-8"
      >
        <div className="mx-auto h-24 max-w-xl animate-pulse rounded-2xl bg-slate-100" />
      </div>
    );
  }

  if (timeRemaining.total <= 0) {
    return (
      <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-red-200 bg-red-50 px-6 py-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
          Registration closed
        </p>

        <p className="mt-2 text-sm text-red-700">
          Builder Sprint registrations are no longer being
          accepted.
        </p>
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
    <div
      className="mx-auto mt-8 max-w-xl"
      aria-live="polite"
      aria-label={`Registration closes in ${timeRemaining.days} days, ${timeRemaining.hours} hours, ${timeRemaining.minutes} minutes, and ${timeRemaining.seconds} seconds`}
    >
      <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
        Registration closes in
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

            <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-3 text-center text-xs text-slate-400">
        Deadline: {BUILDER_SPRINT.registrationDeadlineLabel} at
        11:59 PM IST
      </p>
    </div>
  );
}