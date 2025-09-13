import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverWhiteSection, setIsOverWhiteSection] = useState(false); // Start white initially
  useEffect(() => {
    const checkHeaderPosition = () => {
      const scrollTop = window.scrollY;
      const headerHeight = 80;

      // White sections that should make header blue
      const whiteSections = ['about', 'media'];

      let shouldBeBlue = false;
      
      // Check if header is over any white section
      whiteSections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          // Check if header overlaps with this section
          if (scrollTop + headerHeight >= sectionTop && scrollTop < sectionBottom) {
            shouldBeBlue = true;
          }
        }
      });
      
      setIsOverWhiteSection(shouldBeBlue);
    };
    
    window.addEventListener('scroll', checkHeaderPosition);
    checkHeaderPosition(); // Initial check

    return () => window.removeEventListener('scroll', checkHeaderPosition);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Height of the fixed header
      const extraMargin = 0; // No extra margin to show exact section start
      const elementPosition = element.offsetTop - headerHeight - extraMargin;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${isOverWhiteSection ? 'bg-blue-600/95 border-blue-500/30' : 'bg-background/95 border-border'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            <img alt="UNbound Youth Initiative" className="h-14 w-auto transition-all duration-300" src={isOverWhiteSection ? "/lovable-uploads/f4577dd2-a70d-4462-9754-b8f50d0d9083.png" : "/lovable-uploads/3bd97583-c5bf-40d3-a2f5-a5dbff7ab1d1.png"} />
            <div className="flex flex-col">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${isOverWhiteSection ? 'text-white' : 'text-primary'}`}>UNbound Youth Initiative</h1>
              <p className={`text-sm transition-colors duration-300 ${isOverWhiteSection ? 'text-white/80' : 'text-muted-foreground'}`}>Global Goals. Local Impact. Youth in Action.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about')} className={`transition-colors ${isOverWhiteSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}>
              About Us
            </button>
            <button onClick={() => scrollToSection('methodology')} className={`transition-colors ${isOverWhiteSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}>
              Our Model
            </button>
            <button onClick={() => scrollToSection('media')} className={`transition-colors ${isOverWhiteSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}>
              Media
            </button>
            <Button onClick={() => scrollToSection('contact')} variant="cyan" size="sm">
              Get Involved
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className={isOverWhiteSection ? 'text-white hover:bg-white/10' : ''}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className={`md:hidden border-t transition-colors duration-300 ${isOverWhiteSection ? 'bg-blue-600/95 border-blue-500/30' : 'bg-background border-border'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => scrollToSection('about')} className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${isOverWhiteSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}>
              About Us
            </button>
            <button onClick={() => scrollToSection('methodology')} className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${isOverWhiteSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}>
              Our Model
            </button>
            <button onClick={() => scrollToSection('media')} className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${isOverWhiteSection ? 'text-white hover:text-white/80' : 'text-foreground hover:text-primary'}`}>
              Media
            </button>
            <div className="px-3 py-2">
              <Button onClick={() => scrollToSection('contact')} variant="cyan" size="sm" className="w-full">
                Get Involved
              </Button>
            </div>
          </div>
        </div>}
    </header>;
};
export default Header;