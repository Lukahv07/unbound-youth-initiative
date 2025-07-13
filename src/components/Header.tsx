import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary">UNbound Youth Initiative</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('methodology')}
              className="text-foreground hover:text-primary transition-colors"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('workshops')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Workshops
            </button>
            <button 
              onClick={() => scrollToSection('media')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Media
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="hero" 
              size="sm"
            >
              Get Involved
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('methodology')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
            >
              What We Do
            </button>
            <button 
              onClick={() => scrollToSection('workshops')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
            >
              Workshops
            </button>
            <button 
              onClick={() => scrollToSection('media')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors w-full text-left"
            >
              Media
            </button>
            <div className="px-3 py-2">
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="hero" 
                size="sm"
                className="w-full"
              >
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