import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye } from "lucide-react";
import { useState } from "react";
import PhotoGalleryModal from "./PhotoGalleryModal";
const PhotoGalleryCarousel = ({ onOpenGallery }: { onOpenGallery: (galleryIndex: number) => void }) => {
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
          <Button variant="outline" size="sm" className="mt-2" onClick={() => onOpenGallery(activeGallery)}>
            View Full Gallery
          </Button>
        </div>
      </div>
    </div>;
};
const MediaSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(0);
  const features = ["On-the-ground footage from medical missions", "Interviews with families and volunteers", "Reflections from student leaders"];

  // Gallery data with images from each folder
  const galleryData = [
    {
      title: "Miles for Smiles 2024",
      images: [
        "/M4S24/F8D28564-A930-48AA-BA59-A1F8DD868C46.jpg",
        "/M4S24/PHOTO-2023-04-23-18-01-09 2.jpg",
        "/M4S24/PHOTO-2023-04-23-18-37-21 2.jpg",
        "/M4S24/PHOTO-2023-04-23-18-37-21 3.jpg",
        "/M4S24/PHOTO-2023-04-23-18-37-21 4.jpg",
        "/M4S24/PHOTO-2023-04-23-18-37-21 5.jpg",
        "/M4S24/PHOTO-2023-04-23-18-37-21.jpg",
        "/M4S24/PHOTO-2023-04-23-18-37-22.jpg",
        "/M4S24/Screen Shot 2024-02-07 at 2.36.21 p.m..png",
        "/M4S24/Screen Shot 2024-02-07 at 2.36.30 p.m..png",
        "/M4S24/Screen Shot 2024-02-07 at 2.36.39 p.m..png",
        "/M4S24/Screen Shot 2024-02-07 at 2.36.55 p.m..png",
        "/M4S24/Screen Shot 2024-02-07 at 2.37.03 p.m..png"
      ]
    },
    {
      title: "Miles for Smiles 2025",
      images: [
        "/M4S25/002A0F40-188A-4DCC-86BE-1C9EB1AD7D65.jpeg",
        "/M4S25/006C53BF-990E-4110-B9A4-965B485C261C.jpeg",
        "/M4S25/01DA1BD4-3520-440F-851C-2DE1311EE8B4 2.JPG",
        "/M4S25/0D71F6B8-7759-4008-BCDE-B1740B08B694.jpeg",
        "/M4S25/18B2D6E7-5FAC-4245-A8FD-DB0B1C38A8D0.jpeg",
        "/M4S25/1D253FE5-655C-4C8C-9305-8844D4FE758C.jpeg",
        "/M4S25/33EA2C4F-B76D-4BEE-9D4D-EBDC94AB85D7.jpeg",
        "/M4S25/4A76CE1E-5F3E-4035-BFF0-A43D054CEF6A.jpeg",
        "/M4S25/59E84F39-6688-4051-8780-09685A6918E1.jpeg",
        "/M4S25/5BA4A982-CA10-444B-BE91-FD59969F5205.JPG",
        "/M4S25/72A58E4C-0DBF-401B-8F8F-F6E75D8D48EA.jpeg",
        "/M4S25/9F252E58-447C-4E48-9997-4DC85D0766BA.jpeg",
        "/M4S25/A79F854A-222E-4857-AF51-70ABBB737482.jpeg",
        "/M4S25/A9F24B94-B1DA-41DE-9936-626A334E8FE0.jpeg",
        "/M4S25/IMG_1536 2.HEIC",
        "/M4S25/IMG_1550.HEIC",
        "/M4S25/IMG_3481.JPG",
        "/M4S25/IMG_4965.JPG",
        "/M4S25/IMG_5058 2.JPG",
        "/M4S25/IMG_5126.JPG"
      ]
    },
    {
      title: "Operation Smile Missions",
      images: [
        "/OpSmile/Copy of Copy of Copy of DSC_0009.jpg",
        "/OpSmile/Copy of Copy of Copy of DSC_0017.jpg",
        "/OpSmile/Copy of Copy of DSC_0128.JPG",
        "/OpSmile/Copy of Copy of DSC_0170.jpg",
        "/OpSmile/Copy of Copy of DSC_0190.jpg",
        "/OpSmile/Copy of Copy of DSC_0239.jpg",
        "/OpSmile/Copy of Copy of DSC_0272 (1).jpg",
        "/OpSmile/Copy of Copy of DSC_0290.jpg",
        "/OpSmile/Copy of Copy of DSC_0317.jpg",
        "/OpSmile/Copy of Copy of DSC_0319.jpg",
        "/OpSmile/Copy of Copy of DSC_0334.jpg",
        "/OpSmile/Copy of Copy of DSC_0338.jpg",
        "/OpSmile/Copy of Copy of DSC_0345.jpg",
        "/OpSmile/DSC00463.JPG",
        "/OpSmile/DSC00465.JPG",
        "/OpSmile/DSC00469.JPG",
        "/OpSmile/DSC00470.JPG",
        "/OpSmile/DSC00471.JPG",
        "/OpSmile/DSC00472.JPG",
        "/OpSmile/DSC00473.JPG"
      ]
    },
    {
      title: "Global Citizens Initiative 2025",
      images: [
        "/GCI/TAP-2909.jpg",
        "/GCI/TAPC3883.jpg",
        "/GCI/TAPC4775.jpg",
        "/GCI/TAPC4844.jpg",
        "/GCI/TAPC4872.jpg",
        "/GCI/TAPC5721.jpg",
        "/GCI/TAPC6213.jpg",
        "/GCI/TAPC6320.jpg",
        "/GCI/TAPC6720.jpg",
        "/GCI/TAPS3340.jpg",
        "/GCI/TAPS5139.jpg",
        "/GCI/TAPS5332.jpg",
        "/GCI/TAPS5516.jpg",
        "/GCI/TAPS5726.jpg",
        "/GCI/TAPS5989.jpg",
        "/GCI/TAPS6038.jpg"
      ]
    }
  ];

  const handleOpenGallery = (galleryIndex: number) => {
    setSelectedGallery(galleryIndex);
    setIsGalleryOpen(true);
  };
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
                      <Button variant="hero" className="flex items-center space-x-2 text-sm">
                        <Eye className="w-4 h-4" />
                        <span>Watch Full (~3 min)</span>
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
      <PhotoGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        galleryTitle={galleryData[selectedGallery]?.title || ""}
        images={galleryData[selectedGallery]?.images || []}
      />
    </section>;
};
export default MediaSection;