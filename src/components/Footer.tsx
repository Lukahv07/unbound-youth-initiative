import { Heart } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">UNbound Youth Initiative</h3>
            <p className="text-white/80 leading-relaxed">
              Empowering the next generation of changemakers through SDG-driven, community-based service initiatives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">What We Do</a></li>
              <li><a href="#workshops" className="hover:text-white transition-colors">Workshops</a></li>
              <li><a href="#media" className="hover:text-white transition-colors">Media</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <p className="text-white/80 mb-2">26villarreal7045@asfm.mx</p>
            <p className="text-white/80">
              Join students across 10+ schools making global impact locally.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 UNbound Youth Initiative. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-white/60 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>for changemakers everywhere</span>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;