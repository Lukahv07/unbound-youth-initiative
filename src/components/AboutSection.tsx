import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Globe, Target } from "lucide-react";
const AboutSection = () => {
  return <section id="about" className="py-20 bg-gradient-to-b from-background to-light-blue-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 sm:text-5xl">About</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">Our Story: From Miles to Movements</h3>
        </div>

        {/* Story Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none text-foreground leading-relaxed">
            <p className="mb-6 text-xl font-bold">
              The UNbound Youth Initiative was born from a story of transformation.
            </p>
            <p className="mb-6">At 16, founder Lukah Villarreal stood in the recovery room of an Operation Smile medical mission—translating between surgeons and nurses and playing with children before life-changing cleft palate surgeries. As Finance Chair of Miles for Smiles (M4S), the largest student-led Operation Smile initiative in Mexico, Lukah helped raise $30,000 annually—enough for around 20 surgeries—rallied over 1,000 runners each year for the M4S charity raced, and worked side-by-side with surgeons, nurses, and children whose lives were about to change.</p>
            <p className="mb-6">
              But Lukah saw a bigger pattern. While powerful, initiatives like M4S often operated in silos—limited to single causes or events. What if students could be empowered to build their own movements, tailored to their communities, aligned with the United Nations Sustainable Development Goals (SDGs)?
            </p>
            <p className="font-medium text-primary text-xl">
              That's how UNbound began: a platform to unchain youth service from boundaries—of subject, of setting, of expectation—and replace them with bold collaboration and global purpose.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h3 className="font-bold text-center text-foreground mb-6 text-3xl">Our Mission</h3>
          <p className="text-lg text-center text-foreground leading-relaxed max-w-3xl mx-auto font-normal">
            To equip students with the tools, guidance, and global lens to lead multilateral, community-based service initiatives—sparking lasting impact that begins in schools and ripples outward.
          </p>
          <p className="text-center text-muted-foreground mt-4 max-w-3xl mx-auto text-lg font-normal">We challenge the traditional, silo-centric "club" model by cultivating interdisciplinary, multi-stakeholder, and SDG-aligned action plans that elevate student agency and transform extracurricular learning.</p>
        </div>

        {/* Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">Compassion</h4>
              <p className="text-sm text-muted-foreground">Driven by empathy and the desire to make a difference</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">Collaboration</h4>
              <p className="text-sm text-muted-foreground">Building bridges between students, educators, and communities</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-foreground mb-2 font-semibold text-lg">Global Perspective</h4>
              <p className="text-sm text-muted-foreground">Connecting local actions to worldwide sustainable development</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-lg">Impact</h4>
              <p className="text-sm text-muted-foreground">Creating lasting change that ripples through communities</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default AboutSection;