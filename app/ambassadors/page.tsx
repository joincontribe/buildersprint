import Navbar from "@/components/Navbar";
import AmbassadorHero from "@/components/AmbassadorHero";
import AboutContribe from "@/components/AboutContribe";
import AmbassadorWhy from "@/components/AmbassadorWhy";
import AmbassadorBenefits from "@/components/AmbassadorBenefits";
import AmbassadorResponsibilities from "@/components/AmbassadorResponsibilities";
import AmbassadorEligibility from "@/components/AmbassadorEligibility";
import AmbassadorProcess from "@/components/AmbassadorProcess";
import AmbassadorFAQ from "@/components/AmbassadorFAQ";
import AmbassadorCTA from "@/components/AmbassadorCTA";
import Footer from "@/components/Footer";

export default function AmbassadorPage() {
  return (
    <>
      <Navbar />

      <main>
        <AmbassadorHero />
        <AboutContribe />
        <AmbassadorWhy />
        <AmbassadorBenefits />
        <AmbassadorResponsibilities />
        <AmbassadorEligibility />
        <AmbassadorProcess />
        <AmbassadorFAQ />
        <AmbassadorCTA />
      </main>

      <Footer />
    </>
  );
        }
