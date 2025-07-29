import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Zap, PenTool, Rocket, RotateCcw } from "lucide-react";
const MethodologySection = () => {
  const steps = [{
    icon: Search,
    title: "Identify",
    description: "Students identify personal passions, local needs, and global SDG connections.",
    color: "bg-primary/10 text-primary"
  }, {
    icon: Zap,
    title: "Empower",
    description: "We guide students through a structured, mentored process of turning ideas into impact.",
    color: "bg-turquoise/10 text-turquoise"
  }, {
    icon: PenTool,
    title: "Design",
    description: "Together, students build collaborative action plans that involve educators, peers, administrators, and community members.",
    color: "bg-light-blue/10 text-light-blue"
  }, {
    icon: Rocket,
    title: "Launch",
    description: "Initiatives are implemented with school-wide support, NGO partnerships, and real-world engagement.",
    color: "bg-primary/10 text-primary"
  }, {
    icon: RotateCcw,
    title: "Sustain",
    description: "We foster continuity through feedback, reflection, and leadership development, empowering new cohorts to carry the torch.",
    color: "bg-turquoise/10 text-turquoise"
  }];
  return <section id="methodology" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 sm:text-5xl">What We Do</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">Our Methodology: The UNbound Model</h3>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => {
            const IconComponent = step.icon;
            return <Card key={index} className="relative hover:shadow-lg transition-shadow border-l-4 border-primary">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#5DADE2] to-[#48CAE4] rounded-full flex items-center justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-foreground font-bold text-2xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="text-xs">
                      {index + 1}
                    </Badge>
                  </div>
                </Card>;
          })}
          </div>

          {/* Impact Statement */}
          <div className="bg-gradient-to-r from-primary/5 to-turquoise/5 rounded-2xl p-8 text-center">
            <div className="mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="font-bold text-foreground mb-4 text-3xl">Real Projects. Real People. Real Change.</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">UNbound has rallied students and educators across 10 Tri-Association schools for the 2025-26 school year to launch service projects across 5 countries—from environmental campaigns to health equity drives—each uniquely rooted in their context but united by shared values.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default MethodologySection;