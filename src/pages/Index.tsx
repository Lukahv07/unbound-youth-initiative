import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnershipSection from "@/components/PartnershipSection";
import MethodologySection from "@/components/MethodologySection";

import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PartnershipSection />
      <MethodologySection />
      
      <MediaSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
