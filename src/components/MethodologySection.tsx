import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, Lightbulb, Hammer, TestTube, MapPin } from "lucide-react";
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
          <h2 className="text-3xl font-bold text-white mb-4 sm:text-7xl">Our Model: Design Thinking Meets the SDGs</h2>
          <h3 className="text-2xl font-semibold text-white/90 mb-6 sm:text-4xl">Where Creative Process Meets Global Purpose</h3>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            UNbound empowers students to become changemakers through a model rooted in Stanford's design thinking process and guided by the United Nations Sustainable Development Goals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Side by Side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            
            {/* Design Thinking Process - Using Provided Image */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center mb-3 text-4xl my-0">Design Thinking Process</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-start pt-2 pb-2">
                <img src="/lovable-uploads/6b74b7b7-c84c-4104-9f3e-8d486244affb.png" alt="Design Thinking Process diagram showing 5 steps: Empathize, Define, Ideate, Prototype, and Test & Revise arranged in a circle with arrows connecting them" className="max-w-full h-auto max-h-[450px] object-contain mx-auto" />
              </CardContent>
            </Card>

            {/* SDG Alignment Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-4xl">Rooted in Global Goals</CardTitle>
              </CardHeader>
              <CardContent className="px-6">
                <p className="text-base text-center text-muted-foreground mb-6">Each UNbound project is guided by the principles of the United Nations Sustainable Development Goals. While our project network is still growing, our commitment to aligning youth action with global needs—from climate resilience to inclusive education—shapes our foundation.</p>
                
                {/* SDG Diagram */}
                <div className="flex justify-center mb-6">
                  <img src="/lovable-uploads/caea4c68-9ed3-4018-97e3-679869ce21fc.png" alt="UN Sustainable Development Goals diagram showing interconnected goals" className="max-w-full h-auto max-h-64 object-contain" />
                </div>
                
                <div className="text-center">
                  <Badge variant="outline" className="text-sm px-4 py-2">
                    Explore our project stories—coming soon!
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Statement - Beach Image Background */}
          <div className="relative overflow-hidden rounded-3xl p-12 text-center shadow-2xl">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center" style={{
            backgroundImage: 'url(/lovable-uploads/9ba2bc88-acf8-4613-892e-5ee0b48c8305.png)'
          }}></div>
            
            {/* Gradient Color Overlay - Apple Green to Lime Green */}
            <div className="absolute inset-0 bg-gradient-to-t from-green-700/90 to-lime-500/60"></div>
            
            {/* Semi-translucent Cloud Icons - Larger and positioned around text */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-8 -left-16 w-48 h-32 opacity-40 animate-float" style={{
              animationDelay: '0s'
            }}>
                <img src="/lovable-uploads/0ebd7247-2a3e-4b99-bdb1-e2c8c9df01df.png" alt="Cloud decoration" className="w-full h-full object-contain" />
              </div>
              <div className="absolute top-8 -right-20 w-56 h-36 opacity-30 animate-float" style={{
              animationDelay: '2s'
            }}>
                <img src="/lovable-uploads/8d35549f-5fa3-4cd5-b625-9fc3b18b4a7e.png" alt="Cloud decoration" className="w-full h-full object-contain" />
              </div>
              <div className="absolute -bottom-12 -left-20 w-52 h-32 opacity-35 animate-float" style={{
              animationDelay: '4s'
            }}>
                <img src="/lovable-uploads/b8bdaa5f-f117-48ba-81e5-b194646f76af.png" alt="Cloud decoration" className="w-full h-full object-contain" />
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-icon rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="font-bold text-white mb-6 leading-tight text-4xl">Real Projects. Real People. Real Change.</h3>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                UNbound has rallied students and educators across 10 Tri-Association schools for the 2025-26 school year to launch service projects across 5 countries—from environmental campaigns to health equity drives—each uniquely rooted in their context but united by shared values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MethodologySection;