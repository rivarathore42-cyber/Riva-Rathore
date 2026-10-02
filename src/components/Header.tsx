import React, { useState } from 'react';
import { Phone, Menu, X, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo: Stylized R monogram with dark navy & cyan swoop + RAJPUTANA text */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group"
            aria-label="Rajputana Home"
          >
            {/* Custom stylized dual-tone 'R' monogram matching user reference */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 44 44" fill="none">
                {/* Dark navy vertical stem */}
                <path
                  d="M10 8H18C23 8 26.5 11 26.5 16C26.5 20 23.5 23 19 23.5H10V8Z"
                  fill="#1B2A4A"
                />
                <rect x="10" y="8" width="6.5" height="28" rx="1.5" fill="#1B2A4A" />
                
                {/* Cyan dynamic swoop leg */}
                <path
                  d="M17 22L27 36H34.5L23.5 20.5C27 19.5 29.5 17 29.5 13C29.5 7.5 24.5 5 18 5H7V36H13.5V22H17Z"
                  fill="#009688"
                  opacity="0.15"
                />
                <path
                  d="M19 22L29.5 36.5H36.5L25 21C29.5 19.5 32 16.5 32 12C32 6.5 26.5 4 19 4H10V10H18.5C23 10 25.5 11.5 25.5 14.5C25.5 17.5 23 19.5 18.5 19.5H15V24.5L23.5 36.5H18"
                  stroke="#009688"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Brand text */}
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-black tracking-wider text-[#1B2A4A] group-hover:text-teal-700 transition-colors">
                RAJPUTANA
              </span>
              <span className="text-[9px] tracking-widest uppercase font-semibold text-slate-400 -mt-1 hidden sm:block">
                TILES · SANITARYWARE · GRANITO
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links matching the uploaded image */}
          <nav className="hidden lg:flex items-center space-x-7 font-medium text-sm text-slate-700">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors py-1 relative ${
                activeSection === 'home'
                  ? 'text-[#009688] font-bold'
                  : 'hover:text-[#009688]'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009688] rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors py-1 relative ${
                activeSection === 'about'
                  ? 'text-[#009688] font-bold'
                  : 'hover:text-[#009688]'
              }`}
            >
              About Us
              {activeSection === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009688] rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('tiles')}
              className={`transition-colors py-1 relative ${
                activeSection === 'tiles'
                  ? 'text-[#009688] font-bold'
                  : 'hover:text-[#009688]'
              }`}
            >
              Wall & Floor Tiles
              {activeSection === 'tiles' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009688] rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('sanitaryware')}
              className={`transition-colors py-1 relative ${
                activeSection === 'sanitaryware'
                  ? 'text-[#009688] font-bold'
                  : 'hover:text-[#009688]'
              }`}
            >
              Sanitaryware
              {activeSection === 'sanitaryware' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009688] rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('granito')}
              className={`transition-colors py-1 relative ${
                activeSection === 'granito'
                  ? 'text-[#009688] font-bold'
                  : 'hover:text-[#009688]'
              }`}
            >
              Granito
              {activeSection === 'granito' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009688] rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('plumbing')}
              className={`transition-colors py-1 relative ${
                activeSection === 'plumbing'
                  ? 'text-[#009688] font-bold'
                  : 'hover:text-[#009688]'
              }`}
            >
              Plumbing
              {activeSection === 'plumbing' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009688] rounded-full"></span>
              )}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors py-1 relative ${
                activeSection === 'contact'
                  ? 'text-[#009688] font-bold'
                  : 'hover:text-[#009688]'
              }`}
            >
              Contact
              {activeSection === 'contact' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#009688] rounded-full"></span>
              )}
            </button>
          </nav>

          {/* Quick Call / WhatsApp Pill */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#121c32] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="p-2 bg-teal-600 rounded-lg text-white"
              aria-label="Call Store"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick('tiles')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-[#009688] hover:bg-slate-50 font-bold text-sm"
          >
            Wall & Floor Tiles
          </button>
          <button
            onClick={() => handleNavClick('sanitaryware')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
          >
            Sanitaryware
          </button>
          <button
            onClick={() => handleNavClick('granito')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
          >
            Granito
          </button>
          <button
            onClick={() => handleNavClick('plumbing')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
          >
            Plumbing
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="w-full text-left py-2.5 px-3 rounded-lg text-slate-800 hover:bg-slate-50 font-medium text-sm"
          >
            Contact
          </button>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 bg-[#1B2A4A] text-white py-2.5 rounded-xl font-semibold text-xs shadow"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>Call +91-90573 12991</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=Hello%20Rathod%20Ravindra%20Singh%20ji`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-2.5 rounded-xl font-semibold text-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
