import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigateToPlan?: (planName: string) => void;
}

export default function Navbar({}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['hero', 'features', 'how-it-works', 'showcase', 'pricing', 'testimonials', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Showcase', href: '#showcase', id: 'showcase' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1020]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          id="navbar-brand-logo"
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] rounded-lg"
          aria-label="Launchly Homepage"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#4F7CFF] to-[#8B5CF6] p-0.5 shadow-md shadow-[#4F7CFF]/25 group-hover:scale-105 transition-transform duration-200">
            <div className="w-full h-full bg-[#0B1020] rounded-[10px] flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white transform -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white font-['Space_Grotesk'] leading-tight">
              Launchly
            </span>
            <span className="text-[10px] tracking-wider text-slate-400 uppercase font-medium">
              SaaS Workspace
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center gap-1 bg-white/[0.04] border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-sm"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                id={`nav-link-${link.id}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] ${
                  isActive
                    ? 'text-white bg-white/15 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <a
            id="navbar-cta-button"
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3f6be8] hover:to-[#7c4ee0] shadow-md shadow-[#4F7CFF]/25 hover:shadow-lg hover:shadow-[#4F7CFF]/40 transition-all duration-200 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F7CFF] focus-visible:ring-offset-[#0B1020]"
          >
            <span>Start Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger button */}
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle main menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="md:hidden bg-[#0B1020]/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-${link.id}`}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-white bg-[#4F7CFF]/20 border border-[#4F7CFF]/30 font-semibold'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              id="mobile-cta-button"
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] shadow-lg shadow-[#4F7CFF]/25 active:scale-[0.98]"
            >
              <span>Start Free Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
