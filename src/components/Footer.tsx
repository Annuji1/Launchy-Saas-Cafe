import React from 'react';
import { Rocket, Mail, Phone, ArrowUp, Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#0B1020] text-white pt-16 pb-12 border-t border-white/10 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[250px] bg-[#4F7CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F7CFF] to-[#8B5CF6] p-0.5 shadow-md">
                <div className="w-full h-full bg-[#0B1020] rounded-[10px] flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-white transform -rotate-45" />
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-['Space_Grotesk']">
                Launchly
              </span>
            </div>

            <p className="text-sm text-slate-400 font-medium">
              “Manage Projects. Empower Your Team.”
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Launchly is the all-in-one project management and team velocity platform built for modern startups, high-growth engineering, and creative teams.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-[#4F7CFF] text-slate-400 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-[#4F7CFF] text-slate-400 hover:text-white flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-[#4F7CFF] text-slate-400 hover:text-white flex items-center justify-center transition-all"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#features"
                  onClick={(e) => scrollToSection(e, 'features')}
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => scrollToSection(e, 'pricing')}
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  onClick={(e) => scrollToSection(e, 'showcase')}
                  className="hover:text-white transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#depth-experience"
                  onClick={(e) => scrollToSection(e, 'depth-experience')}
                  className="hover:text-white transition-colors"
                >
                  Updates & 3D Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => scrollToSection(e, 'hero')}
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => scrollToSection(e, 'testimonials')}
                  className="hover:text-white transition-colors"
                >
                  Careers <span className="text-[10px] bg-[#4F7CFF]/20 text-[#4F7CFF] px-1.5 py-0.5 rounded font-semibold ml-1">We're hiring</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact Information
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#4F7CFF]" />
                <a href="mailto:hello@launchly.com" className="hover:text-white transition-colors">
                  hello@launchly.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#8B5CF6]" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
            <p className="text-[11px] text-slate-500 pt-2">
              Fictional demo contact details for the Launchly platform.
            </p>
          </div>

        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p id="footer-copyright">
            © 2026 Launchly. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#hero" className="hover:text-white transition-colors">Security</a>
            
            {/* Scroll to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
