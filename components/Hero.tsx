"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  BUILDER_SPRINT,
  CONTRIBE_LINKS,
  getRegistrationStatus,
} from "@/lib/buildersprint";

const slides = [
  {
    id: "builder-sprint",
    eyebrow: "CONTRIBE BUILDER SPRINT · COHORT 2",
    title: "14 Days. One Project.<br /> Real Progress.",
    description:
      "You build it. We guide you forward. Turn an idea into something real.",
    image: "/images/hero-builder-sprint.webp",
    imageAlt:
      "CONTRIBE Builder Sprint Cohort 2 promotional banner",
    href: "#builder-sprint",
    linkLabel: "Explore Builder Sprint",
    style: "orange",
  },
  {
    id: "insightbolt",
    eyebrow: "CONTRIBE × INSIGHTBOLT",
    title: "Build It. Ship It.<br /> Get Recognised.",
    description:
      "Eligible Builder Sprint Cohort 2 project submitters can qualify for 50% off one eligible InsightBolt monthly plan for three months.",
    image: "/images/hero-insightbolt-offer.webp",
    imageAlt:
      "CONTRIBE and InsightBolt partnership promotional banner",
    href: "#insightbolt-partnership",
    linkLabel: "Explore the Partnership",
    style: "purple",
  },
  {
    id: "builder-network",
    eyebrow: "THE BUILDER NETWORK",
    title: "The Sprint Ends.<br /> The Building Doesn't.",
    description:
      "Find your people. Share ideas. Build together. Keep participating beyond the sprint.",
    image: "/images/hero-builder-network.webp",
    imageAlt: "CONTRIBE Builder Network promotional banner",
    href: CONTRIBE_LINKS.discord,
    linkLabel: "Join the Builder Network",
    style: "orange",
    external: true,
  },
  {
    id: "weekly-activities",
    eyebrow: "WEEKLY ACTIVITIES",
    title: "Small Builds.<br /> Real Progress.",
    description:
      "Show up, try something new, and build every week with CONTRIBE.",
    image: "/images/hero-weekly-activities.webp",
    imageAlt: "CONTRIBE Weekly Activities promotional banner",
    href: CONTRIBE_LINKS.whatsapp,
    linkLabel: "Explore Weekly Activities",
    style: "purple",
    external: true,
  },
] as const;

const AUTOPLAY_DELAY = 5000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const registrationStatus = getRegistrationStatus();

  const moveTo = useCallback((index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => {
    moveTo(activeIndex + 1);
  }, [activeIndex, moveTo]);

  const previous = useCallback(() => {
    moveTo(activeIndex - 1);
  }, [activeIndex, moveTo]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateMotionPreference,
      );
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => {
      window.clearInterval(timer);
    };
  }, [reducedMotion, activeIndex]);

  function getSlideHref(slideId: string, fallback: string) {
    if (slideId === "builder-sprint") {
      if (registrationStatus === "open") {
        return BUILDER_SPRINT.registrationFormUrl;
      }

      return fallback;
    }

    return fallback;
  }

  function getSlideLabel(slideId: string, defaultLabel: string) {
    if (slideId !== "builder-sprint") {
      return defaultLabel;
    }

    if (registrationStatus === "open") {
      return "Register for Cohort 2";
    }

    if (registrationStatus === "awaiting-form") {
      return "View Sprint Details";
    }

    return `Registrations open ${BUILDER_SPRINT.registrationOpenDateLabel}`;
  }

  const currentSlide = slides[activeIndex];

  return (
    <section
      id="top"
      aria-label="CONTRIBE featured initiatives"
      className="relative overflow-hidden bg-[#0F172A]"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
        touchStartY.current = event.touches[0]?.clientY ?? null;
      }}
      onTouchEnd={(event) => {
        if (
          touchStartX.current === null ||
          touchStartY.current === null
        ) {
          return;
        }

        const endX = event.changedTouches[0]?.clientX ?? 0;
        const endY = event.changedTouches[0]?.clientY ?? 0;

        const deltaX = endX - touchStartX.current;
        const deltaY = endY - touchStartY.current;

        if (
          Math.abs(deltaX) > 45 &&
          Math.abs(deltaX) > Math.abs(deltaY)
        ) {
          if (deltaX < 0) {
            next();
          } else {
            previous();
          }
        }

        touchStartX.current = null;
        touchStartY.current = null;
      }}
    >
      <div className="relative min-h-[590px] sm:min-h-[650px] lg:min-h-[690px]">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const href = getSlideHref(slide.id, slide.href);
          const label = getSlideLabel(slide.id, slide.linkLabel);

          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={[
                "absolute inset-0 transition-opacity duration-700",
                isActive ? "z-10 opacity-100" : "z-0 opacity-0",
                reducedMotion ? "transition-none" : "",
              ].join(" ")}
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/80 to-[#0F172A]/35"
              />

              <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl items-center px-6 py-20 sm:min-h-[650px] lg:min-h-[690px]">
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-300 sm:text-sm">
                    {slide.eyebrow}
                  </p>

                  <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg md:text-xl">
                    {slide.description}
                  </p>

                  {slide.id === "insightbolt" && (
                    <p className="mt-3 text-xs leading-6 text-slate-300 sm:text-sm">
                      Offer eligibility and conditions apply.
                    </p>
                  )}

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a
                      href={href}
                      target={
                        "external" in slide && slide.external
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        "external" in slide && slide.external
                          ? "noopener noreferrer"
                          : undefined
                      }
                      tabIndex={isActive ? 0 : -1}
                      className="inline-flex min-h-12 items-center justify-center rounded-xl bg-orange-500 px-6 py-3.5 text-center font-bold text-white transition hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A]"
                    >
                      {label}
                      <span className="ml-2" aria-hidden="true">
                        →
                      </span>
                    </a>

                    {slide.id === "builder-sprint" && (
                      <p className="text-sm text-slate-300">
                        {registrationStatus === "upcoming"
                          ? "Prepare for Cohort 2."
                          : registrationStatus === "awaiting-form"
                            ? "The registration form link is being configured."
                            : "Registration is available."}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-6 left-0 right-0 z-20 mx-auto flex max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to slide ${index + 1}: ${slide.eyebrow}`}
                aria-current={index === activeIndex ? "true" : undefined}
                onClick={() => moveTo(index)}
                className={[
                  "h-2.5 rounded-full transition-all",
                  index === activeIndex
                    ? "w-9 bg-orange-400"
                    : "w-2.5 bg-white/50 hover:bg-white/80",
                ].join(" ")}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={previous}
              aria-label="Previous banner"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xl text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={next}
              aria-label="Next banner"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-xl text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
