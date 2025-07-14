import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Globe, Users } from "lucide-react";
const ContactSection = () => {
  const actionCards = [{
    icon: Users,
    title: "Students",
    description: "Want to start a service initiative at your school?",
    action: "Get Started Guide"
  }, {
    icon: Mail,
    title: "Educators",
    description: "Bring the UNbound Workshop to your campus",
    action: "Schedule Workshop"
  }, {
    icon: Globe,
    title: "Organizations",
    description: "Partner with us to amplify youth impact",
    action: "Partner with Us"
  }];
  return <section id="contact" className="bg-gradient-to-b from-light-blue-soft to-white py-[40px] bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Join the Movement</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Want to start a service initiative at your school? Already leading a cause but want to connect it to the SDGs?
          </p>
          <p className="text-lg text-primary mt-4 font-medium">
            Whether you're a student, educator, or changemaker—you belong here.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {actionCards.map((card, index) => {
            const IconComponent = card.icon;
            return <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{card.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      {card.action}
                    </Button>
                  </CardContent>
                </Card>;
          })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input id="role" placeholder="Student, Educator, Organization, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your interest in UNbound, your school, or your project ideas..." rows={4} />
                </div>
                <Button variant="hero" className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Email Us</h4>
                  </div>
                  <a href="mailto:26villarreal7045@asfm.mx" className="text-primary hover:text-turquoise transition-colors">
                    26villarreal7045@asfm.mx
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">Our Reach</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Working with schools across the Tri-Association network and beyond
                  </p>
                </CardContent>
              </Card>

              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;