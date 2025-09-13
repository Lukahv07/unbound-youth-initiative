import { Button } from "@/components/ui/button";

const PartnershipSection = () => {
  return (
    <section id="partnership" className="py-20 bg-gradient-to-br from-green-500 via-green-600 to-emerald-700 relative overflow-hidden">
      {/* Floating Circular Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Small floating circles */}
        <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-br from-lime-300/30 to-green-400/20 rounded-full animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-chartreuse-300/25 to-emerald-400/30 rounded-full animate-[float_8s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-32 left-20 w-14 h-14 bg-gradient-to-br from-green-300/35 to-lime-400/25 rounded-full animate-[float_7s_ease-in-out_infinite_2s]"></div>
        
        {/* Medium floating circles */}
        <div className="absolute top-16 right-10 w-24 h-24 bg-gradient-to-br from-lime-400/20 to-green-500/15 rounded-full animate-[float_10s_ease-in-out_infinite_3s]"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 bg-gradient-to-br from-chartreuse-400/30 to-emerald-300/20 rounded-full animate-[float_9s_ease-in-out_infinite_4s]"></div>
        <div className="absolute top-1/2 left-16 w-20 h-20 bg-gradient-to-br from-green-400/25 to-lime-300/30 rounded-full animate-[float_11s_ease-in-out_infinite_5s]"></div>
        
        {/* Large floating circles */}
        <div className="absolute top-8 left-1/3 w-40 h-40 bg-gradient-to-br from-lime-300/15 to-green-400/10 rounded-full animate-[float_14s_ease-in-out_infinite_6s]"></div>
        <div className="absolute bottom-8 right-1/4 w-36 h-36 bg-gradient-to-br from-chartreuse-300/20 to-emerald-400/15 rounded-full animate-[float_12s_ease-in-out_infinite_7s]"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-green-300/25 to-lime-400/20 rounded-full animate-[float_13s_ease-in-out_infinite_8s]"></div>
      </div>

      {/* Glassmorphism Orbs */}
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
              <Button className="bg-gradient-to-r from-lime-300 to-lime-500 hover:from-lime-200 hover:to-lime-400 text-green-900 border-0 px-10 py-4 text-lg font-bold shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:shadow-[0_0_30px_rgba(132,204,22,0.6)] transition-all duration-300 hover:scale-105 rounded-full">
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