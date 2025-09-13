import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Globe, Target, ArrowDown } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);
  const scrollToSlide = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };
  const scrollToPartnership = () => {
    const element = document.getElementById('partnership');
    if (element) {
      const headerHeight = 80;
      const extraMargin = 20;
      const elementPosition = element.offsetTop - headerHeight - extraMargin;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };
  return <section id="about" className="py-20 bg-gradient-to-b from-background to-light-blue-soft scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 sm:text-7xl">About Us</h2>
          <h3 className="text-2xl font-semibold text-primary mb-6 sm:text-4xl">Our Story: From Miles to Movements</h3>
        </div>

        {/* Opening Paragraph - Full Width */}
        <div className="max-w-6xl mx-auto mb-16">
          <p className="mb-12 text-xl font-bold text-foreground leading-relaxed text-center">
            The UNbound Youth Initiative was born from a story of transformation.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Text Content */}
            <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
              <p className="mb-6">At 16, founder Lukah Villarreal stood in the recovery room of an Operation Smile medical mission—translating between surgeons and nurses and playing with children before life-changing cleft palate surgeries. As Finance Chair of Miles for Smiles (M4S), the largest student-led Operation Smile initiative in Mexico, Lukah helped raise $30,000 annually—enough for around 20 surgeries—rallied over 1,000 runners each year for the M4S charity raced, and worked side-by-side with surgeons, nurses, and children whose lives were about to change.</p>
              <p className="mb-6">But Lukah saw a bigger pattern. While powerful, initiatives like M4S often operated in silos—limited in size, diversity, and interest. What if students could be empowered to build their own movements, tailored to their communities, aligned with the United Nations Sustainable Development Goals (SDGs)?</p>
            </div>

            {/* Image Carousel */}
            <div className="w-full relative">
              <Carousel className="w-full max-w-lg mx-auto" setApi={setCarouselApi}>
                <CarouselContent>
                  <CarouselItem>
                    <div className="p-1">
                      <Card className="relative">
                        <CardContent className="p-4">
                          <div className="w-full h-64 bg-light-blue-soft rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                            <img src="/lovable-uploads/5a208512-aae3-45ed-9a75-3e283ea450b4.png" alt="Founder Lukah Villarreal with fellows at Global Citizens Initiative Summit" className="w-full h-full object-cover" />
                            {currentSlide === 0 && <div onClick={scrollToPartnership} className="absolute top-3 right-3 bg-gradient-to-r from-lime-300 to-green-500 text-white font-bold text-xs px-3 py-1 rounded-full shadow-lg cursor-pointer opacity-100">
                                Scroll to Learn More About GCI
                                <ArrowDown className="w-3 h-3 ml-1 inline" />
                              </div>}
                          </div>
                          <p className="text-sm text-muted-foreground text-center">
                            Founder Lukah Villarreal (middle) launching UNbound at the Global Citizens Initiative Summit in St. Andrews, Scotland.<br />
                            <span className="font-medium">— July, 2025</span>
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardContent className="p-4">
                          <div className="w-full h-64 bg-light-blue-soft rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                            <img src="/lovable-uploads/36bee2e3-53d0-4a61-acd1-a2cd9ada85ab.png" alt="Founder Lukah Villarreal in medical scrubs" className="w-full h-full object-contain" />
                          </div>
                          <p className="text-sm text-muted-foreground text-center">
                            Founder Lukah Villarreal while translating for Operation Smile.<br />
                            <span className="font-medium">— July, 2024</span>
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="p-1">
                      <Card>
                        <CardContent className="p-4">
                          <div className="w-full h-64 bg-light-blue-soft rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                            <img src="/lovable-uploads/61655475-7264-48ac-90be-bc69fba72053.png" alt="Miles for Smiles charity race with participants" className="w-full h-full object-cover" />
                          </div>
                          <p className="text-sm text-muted-foreground text-center">
                            Miles for Smiles race.<br />
                            <span className="font-medium">— April, 2025</span>
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {[0, 1, 2].map(index => <button key={index} onClick={() => scrollToSlide(index)} className={`w-3 h-3 rounded-full transition-colors duration-200 ${currentSlide === index ? 'bg-primary' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`} aria-label={`Go to slide ${index + 1}`} />)}
              </div>
            </div>
          </div>

          {/* Closing Paragraph - Full Width */}
          <p className="font-medium text-primary text-xl text-center leading-relaxed">
            That's how UNbound began: a platform to unchain youth service from boundaries—of subject, of setting, of expectation—and replace them with bold collaboration and global purpose.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-gradient-mission rounded-2xl shadow-lg p-8 mb-16 text-white">
          <h3 className="font-bold text-center text-white mb-6 text-4xl">Our Mission</h3>
          <p className="text-lg text-center text-white leading-relaxed max-w-3xl mx-auto font-normal">
            To equip students with the tools, guidance, and global lens to lead multilateral, community-based service initiatives—sparking lasting impact that begins in schools and ripples outward.
          </p>
          <p className="text-center text-white/90 mt-4 max-w-3xl mx-auto text-lg font-normal">We challenge the traditional, silo-centric "club" model by cultivating multi-stakeholder and SDG-aligned action plans that elevate student agency and transform extracurricular learning.</p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-icon">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">Compassion</h4>
              <p className="text-sm text-muted-foreground">Driven by empathy and the desire to make a difference</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-icon">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">Collaboration</h4>
              <p className="text-sm text-muted-foreground">Building bridges between students, educators, and communities</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-icon">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-foreground mb-2 font-semibold text-lg">Global Perspective</h4>
              <p className="text-sm text-muted-foreground">Connecting local actions to worldwide sustainable development</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-icon">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">Impact</h4>
              <p className="text-sm text-muted-foreground">Creating lasting change that ripples through communities</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default AboutSection;