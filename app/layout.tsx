import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// 1️⃣ METADATA EXPORT (For SEO, Titles, OpenGraph)
export const metadata: Metadata = {
  title: "Builder Sprint | CONTRIBE",
    description:
        "Build your first real project in just 14 days with CONTRIBE. Join our free online Builder Sprint and turn your ideas into reality alongside 100 young builders.",
          keywords: [
              "CONTRIBE",
                  "Builder Sprint",
                      "Student Projects",
                          "Youth Community",
                              "Innovation",
                                  "Startups",
                                      "Build",
                                          "Online Community",
                                              "India",
                                                  "Young Builders",
                                                    ],
                                                      authors: [{ name: "Team CONTRIBE" }],
                                                        creator: "CONTRIBE",
                                                          applicationName: "Builder Sprint",
                                                            metadataBase: new URL("https://contribebuildersprint.vercel.app"),
                                                              openGraph: {
                                                                  title: "Builder Sprint | CONTRIBE",
                                                                      description:
                                                                            "Build your first real project in just 14 days with CONTRIBE.",
                                                                                url: "https://contribebuildersprint.vercel.app",
                                                                                    siteName: "CONTRIBE",
                                                                                        images: [
                                                                                              {
                                                                                                      url: "/og-image.png",
                                                                                                              width: 1200,
                                                                                                                      height: 630,
                                                                                                                              alt: "CONTRIBE Builder Sprint",
                                                                                                                                    },
                                                                                                                                        ],
                                                                                                                                            locale: "en_IN",
                                                                                                                                                type: "website",
                                                                                                                                                  },
                                                                                                                                                    twitter: {
                                                                                                                                                        card: "summary_large_image",
                                                                                                                                                            title: "Builder Sprint | CONTRIBE",
                                                                                                                                                                description:
                                                                                                                                                                      "Build your first real project in just 14 days with CONTRIBE.",
                                                                                                                                                                          images: ["/og-image.png"],
                                                                                                                                                                            },
                                                                                                                                                                              icons: {
                                                                                                                                                                                  icon: "/favicon.ico",
                                                                                                                                                                                    },
                                                                                                                                                                                    };

                                                                                                                                                                                    // 2️⃣ VIEWPORT EXPORT (Separated in the same file)
                                                                                                                                                                                    export const viewport: Viewport = {
                                                                                                                                                                                      themeColor: "#FF7A00",
                                                                                                                                                                                      };

                                                                                                                                                                                      // 3️⃣ DEFAULT COMPONENT EXPORT (The UI Shell)
                                                                                                                                                                                      export default function RootLayout({
                                                                                                                                                                                        children,
                                                                                                                                                                                        }: {
                                                                                                                                                                                          children: React.ReactNode;
                                                                                                                                                                                          }) {
                                                                                                                                                                                            return (
                                                                                                                                                                                                <html lang="en">
                                                                                                                                                                                                      <body>{children}
                                                                                                                                                                                                        <Analytics />
                                                                                                                                                                                                        <SpeedInsights /> 
                                                                                                                                                                                                        </body>
                                                                                                                                                                                                          </html>
                                                                                                                                                                                                            );
                                                                                                                                                                                                        }
