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
  return <section className="py-20 bg-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Equity & Impact</h2>
          <h3 className="text-2xl text-primary mb-8 font-semibold">We believe service is the great equalizer.</h3>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            UNbound places equity at the core by:
          </p>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-left">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{principle.title}</h4>
                        <p className="text-sm text-muted-foreground">{principle.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-r from-primary/5 to-turquoise/5 rounded-2xl p-8">
            <p className="text-lg text-foreground leading-relaxed">
              Inspired by Lukah's Operation Smile journey, we understand that equity is not just a value—it's a practice. A process. A promise.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default EquitySection;