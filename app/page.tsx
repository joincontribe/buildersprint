import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import BuilderNetwork from "@/components/BuilderNetwork";
import WeeklyActivities from "@/components/WeeklyActivities";
import BuilderNetworkHowItWorks from "@/components/BuilderNetworkHowItWorks";
import CohortOne from "@/components/CohortOne";
import Solution from "@/components/Solution";
import BuildingTogether from "@/components/BuildingTogether";
import Timeline from "@/components/Timeline";
import WhoIsThisFor from "@/components/WhoIsThisFor";
import CohortInfo from "@/components/CohortInfo";
import InsightBoltBanner from "@/components/InsightBoltBanner";
import InsightBoltPartnership from "@/components/InsightBoltPartnership";
import Benefits from "@/components/Benefits";
import BecomeAmbassador from "@/components/BecomeAmbassador";
import FAQ from "@/components/FAQ";
import Survey from "@/components/Survey";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import InsightBoltOfferPopup from "@/components/InsightBoltOfferPopup";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
<CohortInfo />

<Timeline />

<Solution />

<CohortOne />

<Benefits />

<WhoIsThisFor />

<BuilderNetworkHowItWorks />

<BuildingTogether />

<BuilderNetwork />

<WeeklyActivities />

<InsightBoltBanner />

<InsightBoltPartnership />

<BecomeAmbassador />

<FAQ />

<Survey />

<CTA />

<Footer />

<InsightBoltOfferPopup />
    </main>
  );
}
