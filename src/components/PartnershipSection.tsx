import { Button } from "@/components/ui/button";

const PartnershipSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-500/20 to-green-600/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-green-500/15 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-10 left-1/3 w-40 h-40 bg-emerald-300/25 rounded-full blur-xl animate-[pulse_5s_ease-in-out_infinite_2s]"></div>
        <div className="absolute bottom-20 right-10 w-36 h-36 bg-green-400/20 rounded-full blur-xl animate-[pulse_7s_ease-in-out_infinite_3s]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Glassmorphism Card */}
          <div className="relative bg-emerald-500/15 backdrop-blur-md border border-emerald-300/30 rounded-3xl p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md animate-[pulse_3s_ease-in-out_infinite]"></div>
                  <img 
                    src="/lovable-uploads/56cc645c-6222-4062-8653-9e8d0400cd9c.png" 
                    alt="Global Citizens Initiative Logo" 
                    className="relative w-24 h-24 object-contain"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  UNbound proudly partnered with the Global Citizens Initiative to launch its international network, gaining access to a community of visionary youth leaders and world-class mentorship. This pivotal alliance accelerated UNbound's mission to redefine student leadership through real-world, SDG-driven action across Latin America.
                </p>
                
                {/* CTA Button */}
                <a 
                  href="https://www.globalci.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-gradient-to-r from-emerald-300 to-green-500 hover:from-emerald-400 hover:to-green-600 text-white border-0 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Visit Global Citizens Initiative
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;