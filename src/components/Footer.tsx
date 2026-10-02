import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp, ChevronRight, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS, CATEGORIES } from '../data/companyData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121c32] text-slate-300 border-t border-teal-500/20 text-sm">
      
      {/* Top Banner with Brand Identity */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Col 1: Brand & Firm Profile */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#009688] to-[#00B4D8] rounded-xl flex items-center justify-center shadow">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M20 4L7 11V22C7 30 12.5 35.5 20 37C27.5 35.5 33 30 33 22V11L20 4Z"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    />
                    <path d="M12 21C16 15 25 15 29 23" stroke="#FFFFFF" strokeWidth="2.5" />
                  </svg>
                </div>
                <div>
                  <span className="font-heading text-xl font-black text-white tracking-wider">
                    RAJPUTANA
                  </span>
                  <div className="text-[9px] tracking-widest uppercase font-bold text-teal-300">
                    TILES · SANITARYWARE · GRANITO
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Premier architectural surface and building material establishment in Ladnun-Deedwana, Rajasthan. Delivering lasting strength and royal finish.
              </p>

              <div className="pt-2 border-t border-white/10 space-y-1 text-xs">
                <div>Firm: <strong className="text-white">{COMPANY_DETAILS.firmName}</strong></div>
                <div>Proprietor: <strong className="text-white">{COMPANY_DETAILS.proprietor}</strong></div>
                <div className="text-teal-300 font-mono flex items-center gap-1.5 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  GSTIN: {COMPANY_DETAILS.gstin}
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                Quick Navigation
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    onClick={() => onNavigate('home')}
                    className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-400" />
                    <span>Home & Introduction</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('products')}
                    className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-400" />
                    <span>Browse Product Inventory</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('visualizer')}
                    className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-400" />
                    <span>Interactive 3D Room Visualizer</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('calculator')}
                    className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-400" />
                    <span>Tile & Adhesive Calculator</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('about')}
                    className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-400" />
                    <span>About Us & Quarry Sourcing</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-teal-400" />
                    <span>Contact & Location Map</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Product Categories */}
            <div>
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                Product Categories
              </h4>
              <ul className="space-y-2 text-xs">
                {CATEGORIES.slice(0, 6).map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => onNavigate('products')}
                      className="hover:text-teal-300 transition-colors flex items-center gap-1.5 text-left"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-teal-400" />
                      <span>{cat.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact & Showroom Hours */}
            <div className="space-y-3">
              <h4 className="font-heading text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                Connect Directly
              </h4>

              <div className="space-y-2.5 text-xs">
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>{COMPANY_DETAILS.phone}</span>
                </a>

                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span className="truncate">{COMPANY_DETAILS.email}</span>
                </a>

                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span className="leading-snug text-slate-400">
                    Bassi Ka Bass, VPO-Ratau, Tehsil-Ladnun, Dist-Deedwana, Rajasthan - 341317
                  </span>
                </div>

                <div className="pt-2 text-[11px] text-slate-400">
                  Hours: {COMPANY_DETAILS.openingHours}
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=Hello%20Rathod%20Ravindra%20Singh%20ji,%20I%20am%20messaging%20via%20Rajputana%20Tiles%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-3 rounded-xl text-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="py-6 bg-[#0c1424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-200">RAJPUTANA TILES | SANITARYWARE | GRANITO</strong>. All Rights Reserved. Operated by <strong className="text-slate-200">{COMPANY_DETAILS.firmName}</strong>.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-teal-400">GST: {COMPANY_DETAILS.gstin}</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-teal-300 transition-colors flex items-center gap-1 text-slate-300"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
