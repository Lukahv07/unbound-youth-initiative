import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnershipSection from "@/components/PartnershipSection";
import MethodologySection from "@/components/MethodologySection";

import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollAnimation, useScrollWhiteFade } from "@/hooks/useScrollAnimation";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-600 ${
        isVisible ? 'scroll-fade-in' : 'scroll-fade-hidden'
      }`}
    >
      {children}
    </div>
  );
};

const Index = () => {
  const isFlickScrolling = useScrollWhiteFade();

  return (
    <div className="min-h-screen">
      <div className={`white-fade-overlay ${isFlickScrolling ? 'white-fade-active' : ''}`} />
      <Header />
      <HeroSection />
      <AnimatedSection>
        <AboutSection />
      </AnimatedSection>
      <AnimatedSection>
        <PartnershipSection />
      </AnimatedSection>
      <AnimatedSection>
        <MethodologySection />
      </AnimatedSection>
      <AnimatedSection>
        <MediaSection />
      </AnimatedSection>
      <AnimatedSection>
        <ContactSection />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
