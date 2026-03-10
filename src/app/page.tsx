import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VSLSection from "@/components/VSLSection";
import PainPoints from "@/components/PainPoints";
import AuthoritySection from "@/components/AuthoritySection";
import DiagnosisSection from "@/components/DiagnosisSection";
import BenefitsGrid from "@/components/BenefitsGrid";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-green-primary/30 selection:text-white">
      <Header />
      <Hero />
      <VSLSection />
      <PainPoints />
      <AuthoritySection />
      <DiagnosisSection />
      <BenefitsGrid />
      <OfferSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
