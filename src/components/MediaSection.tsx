import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye } from "lucide-react";
import { useState } from "react";
const PhotoGalleryCarousel = () => {
  const [activeGallery, setActiveGallery] = useState(0);
  const galleries = [{
    title: "Miles for Smiles 2024",
    description: "Highlights from our 2024 charity race and fundraising efforts.",
    image: "/lovable-uploads/61655475-7264-48ac-90be-bc69fba72053.png"
  }, {
    title: "Miles for Smiles 2025",
    description: "Our most successful race yet with over 1,000 participants.",
    image: "/lovable-uploads/61655475-7264-48ac-90be-bc69fba72053.png"
  }, {
    title: "Operation Smile Missions",
    description: "Behind-the-scenes moments from medical missions.",
    image: "/lovable-uploads/36bee2e3-53d0-4a61-acd1-a2cd9ada85ab.png"
  }, {
    title: "Global Citizens Initiative 2025",
    description: "Summit moments and global collaboration.",
    image: "/lovable-uploads/5a208512-aae3-45ed-9a75-3e283ea450b4.png"
  }];
  return <div>
      {/* Gallery Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {galleries.map((gallery, index) => <Button key={index} variant={activeGallery === index ? "default" : "outline"} size="sm" onClick={() => setActiveGallery(index)} className="text-xs">
            {gallery.title}
          </Button>)}
      </div>
      
      {/* Active Gallery Preview */}
      <div className="space-y-4">
        <div className="aspect-video bg-light-blue-soft rounded-lg overflow-hidden">
          <img src={galleries[activeGallery].image} alt={galleries[activeGallery].title} className="w-full h-full object-cover" />
        </div>
        <div className="text-center space-y-2">
          <h5 className="font-medium text-foreground">{galleries[activeGallery].title}</h5>
          <p className="text-sm text-muted-foreground">{galleries[activeGallery].description}</p>
          <Button variant="outline" size="sm" className="mt-2">
            View Full Gallery
          </Button>
        </div>
      </div>
    </div>;
};
const MediaSection = () => {
  const features = ["On-the-ground footage from medical missions", "Interviews with families and volunteers", "Reflections from student leaders"];
  return <section id="media" className="bg-gradient-to-b from-background to-light-blue-soft py-[40px] bg-slate-500">
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
                      <Button variant="hero" className="flex items-center space-x-2">
                        <Eye className="w-4 h-4" />
                        <span>Watch in Full Screen Mode (~3 min)</span>
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
                    <PhotoGalleryCarousel />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MediaSection;