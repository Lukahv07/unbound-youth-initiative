import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, ArrowRight } from "lucide-react";
const WorkshopsSection = () => {
  const features = [{
    icon: Target,
    title: "Recognize student passions and SDG alignment opportunities",
    description: "Learn to identify where student interests intersect with global goals"
  }, {
    icon: Users,
    title: "Facilitate community partnerships for youth-led change",
    description: "Build bridges between schools, NGOs, and local organizations"
  }, {
    icon: Lightbulb,
    title: "Help students design actionable service plans",
    description: "Guide students through creating impactful, measurable initiatives"
  }];
  const activities = ["A Quote Gallery Walk on service values", "Brainstorming & co-design activities", "Reflections on the Miles for Smiles story", "Tools to replicate the UNbound model in their own schools"];
  return <section id="workshops" className="py-20 bg-gradient-mission">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 sm:text-5xl">Workshops & Conferences</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white/90 mb-6">Global Goals, Local Impact: Inspiring Youth Leadership With a Cause</h3>
          <Badge variant="outline" className="text-lg px-4 py-2 bg-white/20 border-white/30 text-white">
            Our ServiceEd Session at NEASC
          </Badge>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Workshop Description */}
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-3xl">Interactive Hour-Long Workshop</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-center text-muted-foreground">
                An interactive workshop where educators learn how to empower student-led change in their communities.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return <div key={index} className="text-center p-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 bg-gradient-icon">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>;
              })}
              </div>
            </CardContent>
          </Card>

          {/* Activities */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Participants engage in:</CardTitle>
            </CardHeader>
            <CardContent className="px-[80px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activities.map((activity, index) => <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-muted-foreground">{activity}</p>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          
        </div>
      </div>
    </section>;
};
export default WorkshopsSection;