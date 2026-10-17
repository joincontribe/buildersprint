import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | CONTRIBE × InsightBolt",
  description:
    "Read the eligibility, redemption, billing, and other conditions for the CONTRIBE Builder Sprint Cohort 2 × InsightBolt offer.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}