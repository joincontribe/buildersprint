import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTRIBE Ambassador | CONTRIBE",

  description:
    "Become a CONTRIBE Ambassador and represent your institution while helping students discover opportunities to build, participate, and grow.",

  keywords: [
    "CONTRIBE",
    "CONTRIBE Ambassador",
    "Campus Ambassador",
    "Student Ambassador",
    "Student Leadership",
    "Youth Community",
    "School Ambassador",
    "College Ambassador",
    "University Ambassador",
    "Leadership Program",
  ],

  authors: [{ name: "Team CONTRIBE" }],

  creator: "CONTRIBE",

  applicationName: "CONTRIBE Ambassador",

  metadataBase: new URL("https://contribebuildersprint.vercel.app"),

  openGraph: {
    title: "Become a CONTRIBE Ambassador",
    description:
      "Represent your institution, connect with student leaders, and help build a stronger community of young builders.",
    url: "https://contribebuildersprint.vercel.app/ambassadors",
    siteName: "CONTRIBE",
    images: [
      {
        url: "/ambassador-og.png",
        width: 1200,
        height: 630,
        alt: "CONTRIBE Ambassador",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Become a CONTRIBE Ambassador",
    description:
      "Represent your institution and help students discover opportunities.",
    images: ["/ambassador-og.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function AmbassadorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
      }
