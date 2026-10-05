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
import Survey from "@/components/Survey";
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
        <Hero />

        <BuilderNetwork />

        <WeeklyActivities />

        <BuilderNetworkHowItWorks />

        <CohortOne />

        <Solution />

        <WhoIsThisFor />

        <CohortInfo />

        <Benefits />

        <Survey />

        <BecomeAmbassador />

        <FAQ />

        <CTA />
      </main>

      <Footer />
    </>
  );
}