import { Button } from "@/components/ui/button";

const PartnershipSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 relative overflow-hidden">
      {/* Slowly Moving Glassmorphism Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-20 w-80 h-80 bg-emerald-300/40 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite] opacity-70"></div>
        <div className="absolute top-32 right-16 w-96 h-96 bg-green-200/35 rounded-full blur-3xl animate-[pulse_12s_ease-in-out_infinite_2s] opacity-80"></div>
        <div className="absolute bottom-24 left-1/4 w-88 h-88 bg-emerald-400/30 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite_4s] opacity-60"></div>
        <div className="absolute bottom-16 right-1/3 w-72 h-72 bg-green-300/45 rounded-full blur-3xl animate-[pulse_14s_ease-in-out_infinite_6s] opacity-75"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-112 h-112 bg-emerald-200/25 rounded-full blur-3xl animate-[pulse_16s_ease-in-out_infinite_8s] opacity-50"></div>
        <div className="absolute top-8 left-1/3 w-64 h-64 bg-green-400/30 rounded-full blur-3xl animate-[pulse_20s_ease-in-out_infinite_10s] opacity-65"></div>
        <div className="absolute bottom-8 left-16 w-56 h-56 bg-emerald-300/35 rounded-full blur-3xl animate-[pulse_18s_ease-in-out_infinite_12s] opacity-55"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-300/40 rounded-full blur-lg animate-[pulse_4s_ease-in-out_infinite]"></div>
              <img 
                src="/lovable-uploads/56cc645c-6222-4062-8653-9e8d0400cd9c.png" 
                alt="Global Citizens Initiative Logo" 
                className="relative w-28 h-28 object-contain"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-white text-xl leading-relaxed mb-8 font-medium">
              UNbound proudly partnered with the Global Citizens Initiative to launch its international network, gaining access to a community of visionary youth leaders and world-class mentorship. This pivotal alliance accelerated UNbound's mission to redefine student leadership through real-world, SDG-driven action across Latin America.
            </p>
            
            {/* Glowing CTA Button */}
            <a 
              href="https://www.globalci.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-gradient-to-r from-emerald-300 to-green-400 hover:from-emerald-200 hover:to-green-300 text-emerald-900 border-0 px-10 py-4 text-lg font-bold shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] transition-all duration-300 hover:scale-105 rounded-full">
                Learn More About the Global Citizens Initiative
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;