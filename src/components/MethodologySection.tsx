import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, Lightbulb, Hammer, TestTube } from "lucide-react";
const MethodologySection = () => {
  const designThinkingSteps = [{
    icon: Heart,
    title: "Empathize",
    description: "Understand local needs through deep listening and research.",
    color: "bg-primary/10 text-primary"
  }, {
    icon: Eye,
    title: "Define",
    description: "Frame community challenges as solvable, focused problems.",
    color: "bg-turquoise/10 text-turquoise"
  }, {
    icon: Lightbulb,
    title: "Ideate",
    description: "Generate bold, collaborative ideas tailored to real-world needs.",
    color: "bg-light-blue/10 text-light-blue"
  }, {
    icon: Hammer,
    title: "Prototype",
    description: "Design small-scale solutions to test creative hypotheses.",
    color: "bg-primary/10 text-primary"
  }, {
    icon: TestTube,
    title: "Test",
    description: "Gather feedback and iterate for maximum real-world impact.",
    color: "bg-turquoise/10 text-turquoise"
  }];
  return <section id="methodology" className="py-20 bg-gradient-mission">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 sm:text-5xl">Our Model: Design Thinking Meets the SDGs</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-white/90 mb-6">Where Creative Process Meets Global Purpose</h3>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            UNbound empowers students to become changemakers through a model rooted in Stanford's design thinking process and guided by the United Nations Sustainable Development Goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Design Thinking Process */}
          <Card className="mb-12 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-3xl">Design Thinking Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Circular Design Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
                {designThinkingSteps.map((step, index) => {
                const IconComponent = step.icon;
                return <div key={index} className="text-center p-4 group hover:scale-105 transition-transform cursor-pointer">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 bg-gradient-icon group-hover:shadow-lg transition-shadow">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2 text-lg">{step.title}</h4>
                      <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {step.description}
                      </p>
                    </div>;
              })}
              </div>
            </CardContent>
          </Card>

          {/* SDG Alignment Section */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Rooted in Global Goals</CardTitle>
            </CardHeader>
            <CardContent className="px-8">
              <p className="text-lg text-center text-muted-foreground mb-6">
                Each UNbound project is guided by the principles of the United Nations Sustainable Development Goals. While our project network is still growing, our commitment to aligning youth action with global needs—from climate resilience to inclusive education—is already shaping our foundation.
              </p>
              
              {/* SDG Icons Placeholder */}
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {Array.from({
                length: 17
              }, (_, i) => <div key={i} className="w-12 h-12 bg-gradient-to-br from-primary/20 to-turquoise/20 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-bold text-foreground">{i + 1}</span>
                  </div>)}
              </div>
              
              <div className="text-center">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  Explore our project stories—coming soon!
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Impact Statement - Keeping this from original */}
          <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-2xl p-8 text-center backdrop-blur-sm">
            <div className="mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-bold text-white mb-4 text-3xl">Real Projects. Real People. Real Change.</h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              UNbound has rallied students and educators across 10 Tri-Association schools for the 2025-26 school year to launch service projects across 5 countries—from environmental campaigns to health equity drives—each uniquely rooted in their context but united by shared values.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default MethodologySection;