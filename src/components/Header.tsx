import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isWhiteHeader, setIsWhiteHeader] = useState(false);

  useEffect(() => {
    // The header will start blue and only change when it hits a white section.
    // We use a simple IntersectionObserver to detect this.
    const sections = ['about', 'methodology', 'media', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const headerColor = entry.target.getAttribute('data-header-color');
            setIsWhiteHeader(headerColor === 'white');
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '-50px 0px 0px 0px'
      }
    );

    sections.forEach(sectionId => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach(sectionId => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const fixedOffset = 20; // Added offset for extra space
      const topPosition = element.offsetTop - headerHeight - fixedOffset;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    } else {
      console.error('Element not found for id:', id);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${isWhiteHeader ? 'bg-background/95 border-border' : 'bg-blue-600/95 border-blue-500/30'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <img alt="UNbound Youth Initiative" className="h-14 w-auto transition-all duration-300" src={isWhiteHeader ? "/lovable-uploads/3bd97583-c5bf-40d3-a2f5-a5dbff7ab1d1.png" : "/lovable-uploads/f4577dd2-a70d-4462-9754-b8f50d0d9083.png"} />
            <div className="flex flex-col">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${isWhiteHeader ? 'text-primary' : 'text-white'}`}>UNbound Youth Initiative</h1>
              <p className={`text-sm transition-colors duration-300 ${isWhiteHeader ? 'text-muted-foreground' : 'text-white/80'}`}>Global Goals. Local Impact. Youth in Action.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className={`transition-colors ${isWhiteHeader ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'}`}>
              About Us
            </button>
            <button onClick={() => scrollToSection('methodology')} className={`transition-colors ${isWhiteHeader ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'}`}>
              Our Model
            </button>
            <button onClick={() => scrollToSection('media')} className={`transition-colors ${isWhiteHeader ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'}`}>
              Media
            </button>
            <Button onClick={() => scrollToSection('contact')} variant="cyan" size="sm">
              Get Involved
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className={isWhiteHeader ? '' : 'text-white hover:bg-white/10'}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={`md:hidden border-t transition-colors duration-300 ${isWhiteHeader ? 'bg-background border-border' : 'bg-blue-600/95 border-blue-500/30'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('about')} className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${isWhiteHeader ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'}`}>
              About Us
            </button>
            <button onClick={() => scrollToSection('methodology')} className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${isWhiteHeader ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'}`}>
              Our Model
            </button>
            <button onClick={() => scrollToSection('media')} className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${isWhiteHeader ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'}`}>
              Media
            </button>
            <div className="px-3 py-2">
              <Button onClick={() => scrollToSection('contact')} variant="cyan" size="sm" className="w-full">
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
