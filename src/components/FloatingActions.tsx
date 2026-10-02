import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* WhatsApp Tooltip Bubble */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3 shadow-2xl border border-slate-200 text-xs text-slate-800 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative flex items-start gap-2">
          <div className="flex-1">
            <span className="font-bold text-teal-800 block">Need a quick quote?</span>
            <span className="text-slate-600 text-[11px]">
              Chat directly with Rathod Ravindra Singh on WhatsApp for live stock & discounts.
            </span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Mobile Quick Call Button */}
        <a
          href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
          aria-label="Call Store"
          className="sm:hidden w-12 h-12 bg-[#1B2A4A] text-white rounded-full flex items-center justify-center shadow-xl border border-white/20 active:scale-95 transition-transform"
        >
          <Phone className="w-5 h-5 text-teal-400" />
        </a>

        {/* WhatsApp Floating Pill Button */}
        <a
          href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
            'Hello Rathod Ravindra Singh ji, I am contacting you from the Rajputana Tiles website. I want to inquire about tiles and construction materials.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Pulsing ring */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-white"></span>

          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="font-bold text-xs sm:text-sm tracking-wide pr-1 hidden sm:inline">
            WhatsApp Quote
          </span>
        </a>
      </div>

    </div>
  );
};
