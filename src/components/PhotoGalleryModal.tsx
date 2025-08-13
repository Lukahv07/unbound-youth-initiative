import { useState } from "react";
import { X, Grid, ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PhotoGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  galleryTitle: string;
  images: string[];
}

const PhotoGalleryModal = ({ isOpen, onClose, galleryTitle, images }: PhotoGalleryModalProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "carousel">("grid");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!isOpen) return null;

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setViewMode("carousel");
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="fixed inset-0 bg-black/90 z-[9998] flex items-center justify-center">
      <div className="relative w-full h-full">
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20"
          >
            <X className="w-6 h-6" />
          </Button>
          
          <h2 className="text-white text-xl font-semibold">{galleryTitle}</h2>
          
          <Button
            variant="ghost"
            onClick={() => setViewMode(viewMode === "grid" ? "carousel" : "grid")}
            className="text-white hover:bg-white/20 px-3 py-2 text-sm"
          >
            {viewMode === "grid" ? "Switch to Carousel Mode" : "Switch to Grid Mode"}
          </Button>
        </div>

        {/* Content */}
        <div className="w-full h-full pt-16 pb-4">
          {viewMode === "grid" ? (
            // Grid View
            <ScrollArea className="w-full h-full px-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-square cursor-pointer group overflow-hidden rounded-lg"
                    onClick={() => handleImageClick(index)}
                  >
                    <img
                      src={image}
                      alt={`${galleryTitle} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            // Carousel View
            <div className="flex flex-col h-full">
              {/* Main Image */}
              <div className="flex-1 flex items-center justify-center relative px-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToPrevious}
                  className="absolute left-4 text-white hover:bg-white/20 z-10"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>
                
                <div className="max-w-4xl max-h-full">
                  <img
                    src={images[selectedImageIndex]}
                    alt={`${galleryTitle} ${selectedImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={goToNext}
                  className="absolute right-4 text-white hover:bg-white/20 z-10"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </div>
              
              {/* Thumbnail Strip */}
              <div className="h-24 px-4 py-2 flex-shrink-0">
                <ScrollArea className="w-full h-full">
                  <div className="flex gap-2 pb-2 h-20">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-20 h-20 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                          index === selectedImageIndex 
                            ? "border-white" 
                            : "border-transparent hover:border-white/50"
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <img
                          src={image}
                          alt={`${galleryTitle} thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoGalleryModal;