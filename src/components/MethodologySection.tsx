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

        <div className="max-w-7xl mx-auto">
          {/* Side by Side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            
            {/* Design Thinking Process - Using Provided Image */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl mb-6">Design Thinking Process</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center p-8">
                <img 
                  src="/lovable-uploads/6b74b7b7-c84c-4104-9f3e-8d486244affb.png" 
                  alt="Design Thinking Process diagram showing 5 steps: Empathize, Define, Ideate, Prototype, and Test & Revise arranged in a circle with arrows connecting them"
                  className="max-w-full h-auto max-h-96 object-contain"
                />
              </CardContent>
            </Card>

            {/* SDG Alignment Section */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Rooted in Global Goals</CardTitle>
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

          {/* Impact Statement - Enhanced Glassmorphism */}
          <div className="relative overflow-hidden rounded-3xl p-12 text-center backdrop-blur-lg bg-white/20 border border-white/30 shadow-2xl">
            {/* Animated Background Swirls */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-emerald-400/30 to-teal-500/30 rounded-full blur-xl animate-float" style={{
              animationDelay: '0s'
            }}></div>
              <div className="absolute top-1/2 -right-20 w-60 h-60 bg-gradient-to-br from-blue-400/25 to-cyan-500/25 rounded-full blur-2xl animate-float" style={{
              animationDelay: '2s'
            }}></div>
              <div className="absolute -bottom-20 left-1/3 w-50 h-50 bg-gradient-to-br from-green-300/35 to-emerald-400/35 rounded-full blur-xl animate-float" style={{
              animationDelay: '4s'
            }}></div>
              <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-white/40 to-blue-200/40 rounded-full blur-lg animate-float" style={{
              animationDelay: '1s'
            }}></div>
              <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-gradient-to-br from-teal-300/30 to-green-400/30 rounded-full blur-xl animate-float" style={{
              animationDelay: '3s'
            }}></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-6">
                <span className="text-4xl">📍</span>
              </div>
              <h3 className="font-bold text-slate-800 mb-6 text-4xl leading-tight">Real Projects. Real People. Real Change.</h3>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
                UNbound has rallied students and educators across 10 Tri-Association schools for the 2025-26 school year to launch service projects across 5 countries—from environmental campaigns to health equity drives—each uniquely rooted in their context but united by shared values.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MethodologySection;