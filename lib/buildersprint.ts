export type RegistrationStatus =
  | "upcoming"
  | "awaiting-form"
  | "open";

export const BUILDER_SPRINT = {
  cohort: "Cohort 2",

  // Registration
  registrationOpenDate: "2026-11-01T00:00:00+05:30",
  registrationOpenDateLabel: "1 November 2026",
  registrationStatusLabel: "Registrations open 1 November 2026",
  registrationFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSecAUHEl8aOmYzpKMsver0eBMEmyAPaL76kgug1_ZzCFoUICQ/viewform?usp=header",

  // Onboarding
  onboardingStartDate: "2026-12-01",
  onboardingEndDate: "2026-12-04",
  onboardingDateLabel: "1–4 December 2026",

  // Sprint
  sprintStartDate: "2026-12-07",
  sprintEndDate: "2026-12-20",
  sprintDateLabel: "7–20 December 2026",
  sprintDurationLabel: "14 days",

  getRegistrationStatus: (): RegistrationStatus => {
    const currentTime = Date.now();
    const openingTime = new Date(
      "2026-11-01T00:00:00+05:30",
    ).getTime();

    if (currentTime < openingTime) {
      return "upcoming";
    }

    if (!BUILDER_SPRINT.registrationFormUrl.trim()) {
      return "awaiting-form";
    }

    return "open";
  },
} as const;

// Registration status for components that import the function directly.
export function getRegistrationStatus(): RegistrationStatus {
  return BUILDER_SPRINT.getRegistrationStatus();
}

// CONTRIBE links
export const CONTRIBE_LINKS = {
  discord: "https://discord.gg/GZ95dR5t9K",

  whatsappChannel:
    "https://whatsapp.com/channel/0029Vb8HjKX7YSd84jIXVi2D",

  // Backwards-compatible alias used by existing components.
  whatsapp:
    "https://whatsapp.com/channel/0029Vb8HjKX7YSd84jIXVi2D",

  linktree: "https://linktr.ee/joincontribe",

  terms: "/terms-and-conditions",
} as const;

// InsightBolt partnership
export const INSIGHTBOLT_LINKS = {
  instagram: "https://www.instagram.com/insightbolt.enquiries/",

  // CONTRIBE hosts the partnership's terms page.
  terms: "/terms-and-conditions",
} as const;

// InsightBolt offer configuration
export const INSIGHTBOLT_OFFER = {
  discountPercentage: 50,
  durationMonths: 3,
  redemptionWindowMonths: 3,

  emailWindowStartDate: "2026-12-25",
  emailWindowEndDate: "2026-12-30",

  emailWindowLabel: "25–30 December 2026",
} as const;

export function isInsightBoltOfferAnnouncementWindow(): boolean {
  const now = new Date();

  const start = new Date(
    `${INSIGHTBOLT_OFFER.emailWindowStartDate}T00:00:00`,
  );

  const end = new Date(
    `${INSIGHTBOLT_OFFER.emailWindowEndDate}T23:59:59.999`,
  );

  return now >= start && now <= end;
}