import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Globe, Users } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with your public key
      emailjs.init("uMNwmyp_ASfpHMYO8");
      
      await emailjs.send(
        "UNboundYouthInitiative",
        "template_xc6jvd9",
        {
          from_name: formData.name,
          from_email: formData.email,
          role: formData.role,
          message: formData.message,
          to_email: "26villarreal7045@asfm.mx"
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        role: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at 26villarreal7045@asfm.mx",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const actionCards = [
    {
      icon: Users,
      title: "Students",
      description: "Want to start a service initiative at your school?",
      action: "Get Started Guide"
    },
    {
      icon: Mail,
      title: "Educators",
      description: "Bring the UNbound Workshop to your campus",
      action: "Schedule Workshop"
    },
    {
      icon: Globe,
      title: "Organizations",
      description: "Partner with us to amplify youth impact",
      action: "Partner with Us"
    }
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-light-blue to-cyan-400 py-[40px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 py-[40px] sm:text-5xl">Ready to Transform Your School?</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Bring the UNbound methodology to your educational community and empower the next generation of changemakers.</p>
          <p className="text-lg text-white/80 mt-4 font-medium">
            Whether you're a student, educator, or changemaker—you belong here.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {actionCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow group bg-white/10 backdrop-blur border-white/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors bg-gradient-icon">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4">{card.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg bg-white/10 backdrop-blur border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-white">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your full name" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role" className="text-white">Role</Label>
                      <Input 
                        id="role" 
                        placeholder="Student, Educator, Organization, etc." 
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your interest in UNbound, your school, or your project ideas..." 
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="hero" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-5 h-5 text-white" />
                    <h4 className="font-semibold text-white">Email Us</h4>
                  </div>
                  <div className="space-y-2">
                    <a 
                      href="https://mail.google.com/mail/?view=cm&to=26villarreal7045@asfm.mx" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-white/80 transition-colors block"
                    >
                      26villarreal7045@asfm.mx (Founder)
                    </a>
                    <a 
                      href="https://mail.google.com/mail/?view=cm&to=unboundyouthinitiative@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-white/80 transition-colors block"
                    >
                      unboundyouthinitiative@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-5 h-5 text-white" />
                    <h4 className="font-semibold text-white">Our Reach</h4>
                  </div>
                  <p className="text-white/80">
                    Working with schools across the Tri-Association network and beyond
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;