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
  return <section id="workshops" className="py-20 bg-gradient-to-b from-light-blue-soft to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 sm:text-5xl">Workshops & Conferences</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">Global Goals, Local Impact: Inspiring Youth Leadership With a Cause</h3>
          <Badge variant="outline" className="text-lg px-4 py-2 bg-white">
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
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-6 h-6 text-primary" />
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
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activities.map((activity, index) => <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-muted-foreground">{activity}</p>
                  </div>)}
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-primary to-turquoise rounded-2xl p-8 text-white">
            <h3 className="font-bold mb-4 text-3xl">Ready to Transform Your School?</h3>
            <p className="text-lg mb-6 opacity-90">
              Bring the UNbound methodology to your educational community and empower the next generation of changemakers.
            </p>
            <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90">
              Bring UNbound to Your School
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default WorkshopsSection;