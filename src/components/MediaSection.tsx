import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Eye, Mail } from "lucide-react";

const MediaSection = () => {
  const features = [
    "On-the-ground footage from medical missions",
    "Interviews with families, doctors, and volunteers",
    "Reflections from student leaders"
  ];

  return (
    <section id="media" className="py-20 bg-gradient-to-b from-background to-light-blue-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Media</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Documentary Card */}
          <Card className="shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary to-turquoise text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5" />
                </div>
                <div>
                  <Badge variant="outline" className="border-white text-white mb-2">
                    🎬 Documentary
                  </Badge>
                  <CardTitle className="text-2xl">"More Than a Race"</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A behind-the-scenes look at Miles for Smiles, Operation Smile Mexico, and the moments that sparked a movement.
              </p>
              
              <p className="text-muted-foreground mb-6">
                From hospital hallways to 1,000-runner fundraisers, explore the journey of students who turned compassion into action.
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4">Featuring:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Watch Trailer</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Contact for Screening</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Media Content */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Photo Gallery</h4>
                <p className="text-muted-foreground mb-4">
                  Explore moments from our missions, workshops, and student-led initiatives around the world.
                </p>
                <Button variant="outline" size="sm">View Gallery</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Press & Articles</h4>
                <p className="text-muted-foreground mb-4">
                  Read about our impact in local and international publications, and download our press kit.
                </p>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;