import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Array of hero images showcasing UNbound Youth Initiative's real impact
const heroImages = ["/lovable-uploads/7bdb6b03-5c23-4b52-8933-c87fede02548.png",
// Miles for Smiles charity run
"/lovable-uploads/3aa7d80a-73bf-423e-8d25-1e6fed176002.png",
// Hands holding Earth - global impact
"/lovable-uploads/3a78a30a-d587-4a65-be4f-7adaf5ee8441.png",
// Youth with SDG signs
"/lovable-uploads/febafb1f-f6bc-48e7-8a22-49351a8f7c45.png" // Medical mission with children
];
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const extraMargin = 0; // No extra margin to show exact section start
      const elementPosition = element.offsetTop - headerHeight - extraMargin;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} style={{
        backgroundImage: `url(${image})`
      }} />)}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-turquoise/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl text-white mb-6 leading-tight lg:text-8xl font-extrabold">
          UNbound Youth Initiative
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 font-medium">
          Global Goals. Local Impact. Youth in Action.
        </p>
        <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          Empowering the next generation of changemakers through SDG-driven, community-based service initiatives.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8 py-3">
            Get Involved
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('about')} className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white hover:text-primary">
            About Us
          </Button>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white scale-110' : 'bg-white/50 hover:bg-white/70'}`} onClick={() => setCurrentImageIndex(index)} />)}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;