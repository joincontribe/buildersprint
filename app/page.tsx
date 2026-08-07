import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import Timeline from "@/components/Timeline";
import CohortInfo from "@/components/CohortInfo";
import Benefits from "@/components/Benefits";
import BecomeAmbassador from "@/components/BecomeAmbassador";
import FAQ from "@/components/FAQ";
import Survey from "@/components/Survey";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <>
            <Navbar />

                  <main>
                          <Hero />
                                  <Problem />
                                          <Solution />
                                                  <WhoIsThisFor />
                                                          <Timeline />
                                                                  <CohortInfo />
                                                                          <Benefits />

<BecomeAmbassador />
                                                                                  <FAQ />
                                                                                          <Survey />
                                                                                                  <CTA />
                                                                                                        </main>

                                                                                                              <Footer />
                                                                                                                  </>
                                                                                                                    );
                                                                                                                    }
