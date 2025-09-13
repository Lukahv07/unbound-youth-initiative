import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye } from "lucide-react";
import { useState } from "react";
import PhotoGalleryModal from "./PhotoGalleryModal";
const PhotoGalleryCarousel = ({
  onOpenGallery
}: {
  onOpenGallery: (galleryIndex: number) => void;
}) => {
  const [activeGallery, setActiveGallery] = useState(0);
  
  const galleries = [{
    title: "Miles for Smiles 2025",
    description: "Our biggest, boldest, and most inspiring race yet—this year's run captured unforgettable moments of unity, resilience, and joy as we pushed past our goals for global smiles. M4S 2025 had the most successful finance team in recent history, with the most extensive list of sponsors and raffle prizes yet. The 2025 M4S Executive Council faced some challenges along the way. Due to school administrative decisions, the race's staff was selected three months later than expected. Air quality even forced the team to delay the race.  Ultimately, however, M4S staff succeeded in overcoming hurdles and making 2025 a year to remember. With guest speakers from Operation Smile Mexico, family testimonies, Yoghurt trucks, and a professional host, M4S 2025 brought flare, character, and a whole lot of smiles.",
    image: "/lovable-uploads/2d1077b3-de6a-4131-b2f2-5bebb1fccfad.png"
  }, {
    title: "Operation Smile Missions",
    description: "This gallery offers behind-the-scenes glimpses into surgical missions at Christus Muguerza Hospital Sur, where dedicated medical teams and volunteers transform lives one smile at a time. While supporting Operation Smile staff, M4S organizers translated for nurses and surgeons, assisted with medical records, and comforted families awaiting life-changing surgery. Here, their year-long efforts culminate in the opportunity to see their work manifest. \"It's beautiful to see all hands on deck,\" says one staff member, \"as everyone—from doctors to volunteers—collaborates for a common purpose.\" This year, the M4S team received an honorary Operation Smile recognition Mexico for their continued aid in changing lives.",
    image: "/lovable-uploads/70847e30-0738-434c-806b-66d49a84c057.png"
  }, {
    title: "Global Citizens Initiative 2025",
    description: "A window into the place that started it all. Located in St. Andrews Scotland, the 2025 GCI Summit brought leaders from around the world together to launch \"Glocal Service Projects (GSPs).\" The 8-day experience was quintessential for UNbound's partnership with GCI, which empowered our international network to thrive. GCI was also the launchpad off of which UNbound sprung forward. In ideating his very own GSP, Founder Lukah Villarreal formulated a question: \"How might we unite Latin American HS communities to launch NGO-partnered fundraising events that follow the Miles for Smiles (Operation Smile) roadmap?\" This question—a story—is at the heart of what UNbound does.",
    image: "/lovable-uploads/f0d2be46-6442-4e07-89f9-0155c9c76268.png"
  }];

  const handleGallerySwitch = (index: number) => {
    setActiveGallery(index);
  };
  return <div>
      {/* Gallery Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {galleries.map((gallery, index) => <Button key={index} variant={activeGallery === index ? "default" : "outline"} size="sm" onClick={() => handleGallerySwitch(index)} className="text-xs">
            {gallery.title}
          </Button>)}
      </div>
      
      {/* Active Gallery Preview */}
      <div className="space-y-6">
        <div className="aspect-video bg-light-blue-soft rounded-lg overflow-hidden">
          <img src={galleries[activeGallery].image} alt={galleries[activeGallery].title} className="w-full h-full object-cover" />
        </div>
        <div className="text-center space-y-3 flex flex-col justify-center h-full px-2 py-4">
          <h5 className="font-bold text-turquoise text-2xl mb-1">{galleries[activeGallery].title}</h5>
          <p className="text-turquoise/70 text-sm mb-2">{galleries[activeGallery].description}</p>
          <Button variant="outline" size="sm" className="mt-2" onClick={() => onOpenGallery(activeGallery)}>
            {activeGallery === 0 ? "View Full M4S25 Gallery" : activeGallery === 1 ? "View Full OpSmile Gallery" : "View Full GCI Gallery"}
          </Button>
        </div>
      </div>
    </div>;
};
const MediaSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(0);
  const features = ["On-the-ground footage from medical missions", "Interviews with families and volunteers", "Reflections from student leaders"];

  // Gallery data with images from each folder - filtered for browser compatibility
  const galleryData = [{
    title: "Miles for Smiles 2025",
    images: ["/M4S25/002A0F40-188A-4DCC-86BE-1C9EB1AD7D65.jpeg", "/M4S25/006C53BF-990E-4110-B9A4-965B485C261C.jpeg", "/M4S25/0D71F6B8-7759-4008-BCDE-B1740B08B694.jpeg", "/M4S25/18B2D6E7-5FAC-4245-A8FD-DB0B1C38A8D0.jpeg", "/M4S25/1D253FE5-655C-4C8C-9305-8844D4FE758C.jpeg", "/M4S25/33EA2C4F-B76D-4BEE-9D4D-EBDC94AB85D7.jpeg", "/M4S25/4A76CE1E-5F3E-4035-BFF0-A43D054CEF6A.jpeg", "/M4S25/59E84F39-6688-4051-8780-09685A6918E1.jpeg", "/M4S25/5BA4A982-CA10-444B-BE91-FD59969F5205.JPG", "/M4S25/72A58E4C-0DBF-401B-8F8F-F6E75D8D48EA.jpeg", "/M4S25/9F252E58-447C-4E48-9997-4DC85D0766BA.jpeg", "/M4S25/A79F854A-222E-4857-AF51-70ABBB737482.jpeg", "/M4S25/A9F24B94-B1DA-41DE-9936-626A334E8FE0.jpeg", "/M4S25/IMG_3481.JPG", "/M4S25/IMG_4965.JPG", "/M4S25/IMG_5126.JPG"]
  }, {
    title: "Operation Smile Missions",
    images: ["/OpSmile/DSC00463.JPG", "/OpSmile/DSC00465.JPG", "/OpSmile/DSC00469.JPG", "/OpSmile/DSC00470.JPG", "/OpSmile/DSC00471.JPG", "/OpSmile/DSC00472.JPG", "/OpSmile/DSC00473.JPG", "/lovable-uploads/75859d8c-cd41-4167-b792-04099c478f86.png", "/lovable-uploads/90fb8603-4046-45ee-9570-3c02ac09aa9b.png", "/lovable-uploads/5322c2ad-df0b-4450-895f-4d08c77f4d68.png", "/lovable-uploads/38e53cb8-6692-4c16-846e-40426cecd673.png", "/lovable-uploads/dab02569-0cb2-4886-babf-c8da8dc19a22.png", "/lovable-uploads/9e7c1cd4-3df3-4004-ad83-29b3cb0f5181.png", "/lovable-uploads/be7c15de-2553-4e52-880f-7bc8739fc071.png", "/lovable-uploads/95a89bcf-69fc-497a-b162-f6f1755b5f20.png", "/lovable-uploads/bacaeab9-cd69-4daf-8147-daea708c3d5b.png", "/lovable-uploads/566eff49-11cb-4021-aba3-edcc75a607c3.png"]
  }, {
    title: "Global Citizens Initiative 2025",
    images: ["/GCI/TAP-2909.jpg", "/GCI/TAPC3883.jpg", "/GCI/TAPC4775.jpg", "/GCI/TAPC4844.jpg", "/GCI/TAPC4872.jpg", "/GCI/TAPC5721.jpg", "/GCI/TAPC6213.jpg", "/GCI/TAPC6320.jpg", "/GCI/TAPC6720.jpg", "/GCI/TAPS3340.jpg", "/GCI/TAPS5139.jpg", "/GCI/TAPS5332.jpg", "/GCI/TAPS5516.jpg", "/GCI/TAPS5726.jpg", "/GCI/TAPS5989.jpg", "/GCI/TAPS6038.jpg"]
  }];
  const handleOpenGallery = (galleryIndex: number) => {
    // Optimize by setting both states simultaneously
    setSelectedGallery(galleryIndex);
    setIsGalleryOpen(true);
  };
  return <section id="media" className="bg-gradient-to-b from-background to-light-blue-soft py-[40px] bg-slate-500 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-0">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 py-0 my-[40px] sm:text-7xl">Media</h2>
        </div>

        <div className="max-w-7xl mx-auto">
            {/* Documentary and Photo Gallery - Side by Side */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              
              {/* Documentary Card - Takes equal space */}
              <div>
              <Card className="shadow-lg overflow-hidden h-full">
                <CardHeader className="bg-gradient-to-r from-primary to-turquoise text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5" />
                    </div>
                    <div>
                      <Badge variant="outline" className="border-white text-white mb-2">🎬 Mini Documentary</Badge>
                      <CardTitle className="text-4xl">"More Than a Race"</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Text Content */}
                  <div className="space-y-4 mb-6">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      A behind-the-scenes look at Miles for Smiles, Operation Smile Mexico, and the moments that sparked a movement.
                    </p>
                    
                    <p className="text-muted-foreground text-lg">
                      From hospital hallways to 1,000-runner fundraisers, explore the journey of students who turned compassion into action.
                    </p>
                  </div>

                  {/* Documentary Player Frame */}
                  <div className="relative bg-gradient-to-br from-primary to-turquoise rounded-lg overflow-hidden aspect-video mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-icon flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-white text-sm font-medium bg-black/30 px-3 py-1 rounded">
                      Documentary Preview
                    </div>
                    <div className="absolute bottom-4 left-4 text-white text-xs bg-black/30 px-2 py-1 rounded">
                      Coming Soon
                    </div>
                  </div>
                  
                  {/* Features spanning full width */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-4">Featuring:</h4>
                      <div className="space-y-3">
                        {features.map((feature, index) => <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                            <p className="text-sm text-muted-foreground">{feature}</p>
                          </div>)}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex justify-center md:justify-start items-end">
                      <Button variant="hero" className="flex items-center space-x-2 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>Watch in Full Screen (~3 min)</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Photo Gallery - Takes equal space */}
            <div>
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <h4 className="font-semibold text-foreground mb-6 text-4xl">Photo Galleries</h4>
                  <div className="flex-1">
                    <PhotoGalleryCarousel onOpenGallery={handleOpenGallery} />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <PhotoGalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} galleryTitle={galleryData[selectedGallery]?.title || ""} images={galleryData[selectedGallery]?.images || []} />
    </section>;
};
export default MediaSection;