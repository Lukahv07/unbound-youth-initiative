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
            
            {/* Design Thinking Process - Circular Layout */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center text-2xl mb-6">Design Thinking Process</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center p-16">
                <div className="relative w-[500px] h-[500px]">
                  {/* Center Circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-turquoise/20 flex items-center justify-center shadow-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground leading-tight">DESIGN</div>
                      <div className="text-lg font-bold text-foreground leading-tight">THINKING</div>
                    </div>
                  </div>
                  
                  {/* Curved arrows following the circle */}
                  {designThinkingSteps.map((_, index) => {
                  const angle = index * 72 - 90;
                  const nextAngle = (index + 1) * 72 - 90;
                  const radius = 140;

                  // Calculate start and end points for the arc
                  const startAngle = angle + 20;
                  const endAngle = nextAngle - 20;
                  const centerX = 250;
                  const centerY = 250;
                  const startX = centerX + Math.cos(startAngle * Math.PI / 180) * radius;
                  const startY = centerY + Math.sin(startAngle * Math.PI / 180) * radius;
                  const endX = centerX + Math.cos(endAngle * Math.PI / 180) * radius;
                  const endY = centerY + Math.sin(endAngle * Math.PI / 180) * radius;

                  // Calculate arrow head position
                  const arrowX = centerX + Math.cos((endAngle - 10) * Math.PI / 180) * radius;
                  const arrowY = centerY + Math.sin((endAngle - 10) * Math.PI / 180) * radius;
                  return <svg key={`arrow-${index}`} className="absolute inset-0 w-full h-full pointer-events-none">
                        {/* Curved path */}
                        <path d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`} fill="none" stroke="hsl(var(--primary))" strokeWidth="2" opacity="0.6" />
                        {/* Arrow head */}
                        <polygon points={`${arrowX},${arrowY} ${arrowX - 8},${arrowY - 4} ${arrowX - 8},${arrowY + 4}`} fill="hsl(var(--primary))" opacity="0.6" transform={`rotate(${endAngle + 90} ${arrowX} ${arrowY})`} />
                      </svg>;
                })}
                  
                  {/* Circular Steps */}
                  {designThinkingSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const angle = index * 72 - 90; // 360/5 = 72 degrees between each step, start at top
                  const iconRadius = 120;
                  const textRadius = 190; // Further out for text positioning
                  const iconX = Math.cos(angle * Math.PI / 180) * iconRadius;
                  const iconY = Math.sin(angle * Math.PI / 180) * iconRadius;
                  const textX = Math.cos(angle * Math.PI / 180) * textRadius;
                  const textY = Math.sin(angle * Math.PI / 180) * textRadius;
                  const colors = ['bg-gradient-to-br from-yellow-400 to-yellow-500',
                  // Empathize - Yellow
                  'bg-gradient-to-br from-orange-400 to-orange-500',
                  // Define - Orange
                  'bg-gradient-to-br from-pink-400 to-pink-500',
                  // Ideate - Pink
                  'bg-gradient-to-br from-blue-400 to-blue-500',
                  // Prototype - Blue
                  'bg-gradient-to-br from-teal-400 to-teal-500' // Test - Teal
                  ];

                  // Determine text alignment and positioning based on position
                  const isLeft = textX < -50;
                  const isRight = textX > 50;
                  const isTop = textY < -50;
                  const isBottom = textY > 50;

                  // Adjust text position to avoid overlaps
                  let finalTextX = textX;
                  let finalTextY = textY;

                  // Push text further out if needed to avoid icon overlap
                  if (Math.abs(textX) < 100 && Math.abs(textY) < 100) {
                    const multiplier = 1.3;
                    finalTextX = textX * multiplier;
                    finalTextY = textY * multiplier;
                  }
                  return <div key={index}>
                        {/* Step Circle */}
                        <div className="absolute hover:scale-110 transition-all duration-300 z-10" style={{
                      left: `calc(50% + ${iconX}px)`,
                      top: `calc(50% + ${iconY}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}>
                          <div className={`w-20 h-20 rounded-full ${colors[index]} flex items-center justify-center shadow-lg relative`}>
                            <IconComponent className="w-8 h-8 text-white" />
                            {/* Number badge */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                              <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Step Text */}
                        <div className={`absolute z-20 ${isLeft ? 'text-right' : isRight ? 'text-left' : 'text-center'}`} style={{
                      left: `calc(50% + ${finalTextX}px)`,
                      top: `calc(50% + ${finalTextY}px)`,
                      transform: isLeft ? 'translate(-100%, -50%)' : isRight ? 'translate(0%, -50%)' : 'translate(-50%, -50%)',
                      width: '120px'
                    }}>
                          <div className="bg-gray-100/95 backdrop-blur-sm rounded-lg p-2.5 shadow-sm border border-gray-200/50">
                            <h4 className="font-semibold text-foreground text-xs mb-1">{step.title}</h4>
                            <p className="text-[10px] text-muted-foreground leading-tight">{step.description}</p>
                          </div>
                        </div>
                      </div>;
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