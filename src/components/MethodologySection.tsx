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
            
            {/* Design Thinking Process - New Clean Design */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl mb-6">Design Thinking Process</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center p-16">
                <div className="relative w-[700px] h-[700px]">
                  {/* Center Circle with Globe Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center shadow-lg border-4 border-white">
                    <svg className="w-10 h-10 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  
                  {/* Curved Arrows */}
                  {designThinkingSteps.map((_, index) => {
                    const currentAngle = index * 72 - 90;
                    const nextAngle = ((index + 1) % 5) * 72 - 90;
                    const radius = 160;
                    const centerX = 350;
                    const centerY = 350;
                    
                    // Calculate arrow path
                    const startAngle = currentAngle + 15;
                    const endAngle = nextAngle - 15;
                    const startX = centerX + Math.cos(startAngle * Math.PI / 180) * radius;
                    const startY = centerY + Math.sin(startAngle * Math.PI / 180) * radius;
                    const endX = centerX + Math.cos(endAngle * Math.PI / 180) * radius;
                    const endY = centerY + Math.sin(endAngle * Math.PI / 180) * radius;
                    
                    // Arrow direction
                    const arrowAngle = endAngle * Math.PI / 180;
                    const arrowLength = 12;
                    const arrowHeadX = endX - Math.cos(arrowAngle) * arrowLength;
                    const arrowHeadY = endY - Math.sin(arrowAngle) * arrowLength;
                    
                    return (
                      <svg key={`arrow-${index}`} className="absolute inset-0 w-full h-full pointer-events-none">
                        {/* Curved arrow path */}
                        <path 
                          d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`} 
                          fill="none" 
                          stroke="#60A5FA" 
                          strokeWidth="4" 
                          strokeLinecap="round"
                        />
                        {/* Arrow head */}
                        <polygon 
                          points={`${endX},${endY} ${arrowHeadX - 6},${arrowHeadY - 3} ${arrowHeadX - 6},${arrowHeadY + 3}`}
                          fill="#60A5FA" 
                          transform={`rotate(${endAngle + 90} ${endX} ${endY})`}
                        />
                      </svg>
                    );
                  })}
                  
                  {/* Step Icons and Text Boxes */}
                  {designThinkingSteps.map((step, index) => {
                    const IconComponent = step.icon;
                    const angle = index * 72 - 90;
                    const iconRadius = 160;
                    const textRadius = 280;
                    
                    const iconX = Math.cos(angle * Math.PI / 180) * iconRadius;
                    const iconY = Math.sin(angle * Math.PI / 180) * iconRadius;
                    const textX = Math.cos(angle * Math.PI / 180) * textRadius;
                    const textY = Math.sin(angle * Math.PI / 180) * textRadius;
                    
                    const colors = [
                      'bg-gradient-to-br from-yellow-400 to-yellow-500', // Empathize
                      'bg-gradient-to-br from-orange-400 to-orange-500', // Define  
                      'bg-gradient-to-br from-pink-400 to-pink-500',     // Ideate
                      'bg-gradient-to-br from-blue-500 to-blue-600',     // Prototype
                      'bg-gradient-to-br from-teal-400 to-teal-500'      // Test
                    ];
                    
                    return (
                      <div key={index}>
                        {/* Step Circle */}
                        <div 
                          className="absolute z-20" 
                          style={{
                            left: `calc(50% + ${iconX}px)`,
                            top: `calc(50% + ${iconY}px)`,
                            transform: 'translate(-50%, -50%)'
                          }}
                        >
                          <div className={`w-16 h-16 rounded-full ${colors[index]} flex items-center justify-center shadow-lg relative border-4 border-white`}>
                            <IconComponent className="w-7 h-7 text-white" />
                            {/* Number badge */}
                            <div className="absolute -top-2 -right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-gray-100">
                              <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Step Text Box */}
                        <div 
                          className="absolute z-10" 
                          style={{
                            left: `calc(50% + ${textX}px)`,
                            top: `calc(50% + ${textY}px)`,
                            transform: 'translate(-50%, -50%)',
                            width: '180px'
                          }}
                        >
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 shadow-lg border border-blue-200">
                            <h4 className="font-bold text-gray-800 text-lg mb-2 text-center">{step.title}</h4>
                            <p className="text-sm text-gray-600 leading-relaxed text-center">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
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