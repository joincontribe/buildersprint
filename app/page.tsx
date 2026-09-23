import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BuilderNetwork from "@/components/BuilderNetwork";
import WeeklyActivities from "@/components/WeeklyActivities";
import BuilderNetworkHowItWorks from "@/components/BuilderNetworkHowItWorks";
import CohortOne from "@/components/CohortOne";
import Solution from "@/components/Solution";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import CohortInfo from "@/components/CohortInfo";
import Benefits from "@/components/Benefits";
import BecomeAmbassador from "@/components/BecomeAmbassador";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BuilderSprintClosedModal from "@/components/BuilderSprintClosedModal";

export default function Home() {
  return (
    <>
      <BuilderSprintClosedModal />

      <Navbar />

      <main>
        {/* Current CONTRIBE */}
        <Hero />

        {/* Always-on community */}
        <BuilderNetwork />

        {/* New recurring engagement layer */}
        <WeeklyActivities />

        {/* How the weekly/community loop works */}
        <BuilderNetworkHowItWorks />

        {/* What Cohort 1 accomplished */}
        <CohortOne />

        {/* What Builder Sprint actually is */}
        <Solution />

        {/* Who Builder Sprint is for */}
        <WhoIsThisFor />

        {/* Cohort 2 / sprint information */}
        <CohortInfo />

        {/* What builders get from the experience */}
        <Benefits />

        {/* Secondary community pathway */}
        <BecomeAmbassador />

        {/* Accordion FAQ */}
        <FAQ />

        {/* Final conversion */}
        <CTA />
      </main>

      <Footer />
    </>
  );
}