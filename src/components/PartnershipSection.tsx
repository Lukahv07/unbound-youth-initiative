const PartnershipSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism Card */}
          <div className="relative bg-green-500/10 backdrop-blur-sm border border-green-300/20 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/56cc645c-6222-4062-8653-9e8d0400cd9c.png" 
                  alt="Global Citizens Initiative Logo" 
                  className="w-20 h-20 object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-foreground leading-relaxed">
                  UNbound proudly partnered with the Global Citizens Initiative to launch its international network, gaining access to a community of visionary youth leaders and world-class mentorship. This pivotal alliance accelerated UNbound's mission to redefine student leadership through real-world, SDG-driven action across Latin America.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;