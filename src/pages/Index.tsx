import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MethodologySection from "@/components/MethodologySection";
import WorkshopsSection from "@/components/WorkshopsSection";
import EquitySection from "@/components/EquitySection";
import MediaSection from "@/components/MediaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <MethodologySection />
      <WorkshopsSection />
      <EquitySection />
      <MediaSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
