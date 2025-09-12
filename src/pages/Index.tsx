import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PartnershipSection from "@/components/PartnershipSection";
import MethodologySection from "@/components/MethodologySection";
import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const aboutAnimation = useScrollAnimation(0.2);
  const partnershipAnimation = useScrollAnimation(0.2);
  const methodologyAnimation = useScrollAnimation(0.2);
  const mediaAnimation = useScrollAnimation(0.2);
  const contactAnimation = useScrollAnimation(0.2);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <div 
        ref={aboutAnimation.elementRef}
        className={`transition-all duration-700 ease-out ${
          aboutAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <AboutSection />
      </div>
      <div 
        ref={partnershipAnimation.elementRef}
        className={`transition-all duration-700 ease-out ${
          partnershipAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <PartnershipSection />
      </div>
      <div 
        ref={methodologyAnimation.elementRef}
        className={`transition-all duration-700 ease-out ${
          methodologyAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <MethodologySection />
      </div>
      <div 
        ref={mediaAnimation.elementRef}
        className={`transition-all duration-700 ease-out ${
          mediaAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <MediaSection />
      </div>
      <div 
        ref={contactAnimation.elementRef}
        className={`transition-all duration-700 ease-out ${
          contactAnimation.isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}
      >
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
