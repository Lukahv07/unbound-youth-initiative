import { Card, CardContent } from "@/components/ui/card";
import { Scale, Users, Heart, Globe } from "lucide-react";
const EquitySection = () => {
  const principles = [{
    icon: Scale,
    title: "Promoting inclusive service design",
    description: "Across socioeconomic and cultural contexts"
  }, {
    icon: Users,
    title: "Empowering students of all backgrounds",
    description: "To become community leaders"
  }, {
    icon: Heart,
    title: "Fostering partnerships",
    description: "Between NGOs, educators, and students"
  }, {
    icon: Globe,
    title: "Emphasizing projects",
    description: "That reflect local voices and collective needs"
  }];
  
  return (
    <section id="equity" className="py-20 bg-gradient-to-b from-background to-light-blue-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 sm:text-5xl">Equity & Inclusion</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <Card key={index} className="text-center hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-icon">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 text-lg">{principle.title}</h4>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default EquitySection;