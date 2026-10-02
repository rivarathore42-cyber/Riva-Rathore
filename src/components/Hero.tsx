import React from 'react';
import { ArrowRight, Phone, MessageCircle, Sparkles, CheckCircle, Eye, ShieldCheck, Ruler } from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/companyData';

interface HeroProps {
  onExploreCatalog: () => void;
  onOpenVisualizer: () => void;
  onOpenCalculator: () => void;
  onGetQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCatalog,
  onOpenVisualizer,
  onOpenCalculator,
  onGetQuote,
}) => {
  return (
    <section className="relative bg-[#1B2A4A] text-white overflow-hidden pt-6 pb-16 lg:py-20">
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#009688]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-10 w-[500px] h-[500px] bg-[#00B4D8]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Top Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-medium">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>Rajasthan's Trusted Construction & Architectural Material Destination</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.15]">
              Transform Your Spaces with <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-white bg-clip-text text-transparent">Premium Tiles, Granite</span> & Sanitaryware
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Top Supplier of Wall & Floor Tiles, Marble, Plumbing, Electrical Fittings & Paints in Deedwana-Ladnun, Rajasthan. Direct factory-authorized dealer of leading Indian brands.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium">1000+ Slabs & Tile Formats</span>
              </div>
              <div className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium">Direct Wholesale Pricing</span>
              </div>
              <div className="flex items-start gap-2 bg-white/5 p-2.5 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-200 font-medium">Ladnun-Deedwana Fast Transit</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onExploreCatalog}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#009688] to-[#00B4D8] hover:from-[#00897b] hover:to-[#009bbd] text-white px-7 py-3.5 rounded-xl font-bold text-base shadow-lg shadow-teal-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onGetQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-base border border-white/20 backdrop-blur transition-colors"
              >
                <span>Get a Quote</span>
              </button>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=Hello%20Rathod%20Ravindra%20Singh%20ji,%20I%20am%20looking%20for%20a%20quotation%20on%20tiles%20and%20granite.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3.5 rounded-xl font-medium text-base shadow transition-colors"
                title="Direct WhatsApp Chat"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Secondary Action: Visualizer & Estimator Teasers */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-400">
              <button
                onClick={onOpenVisualizer}
                className="hover:text-teal-300 transition-colors flex items-center gap-1.5 underline decoration-teal-400/50 underline-offset-4"
              >
                <Eye className="w-3.5 h-3.5 text-teal-400" />
                Launch 3D Room Visualizer
              </button>
              <span>·</span>
              <button
                onClick={onOpenCalculator}
                className="hover:text-teal-300 transition-colors flex items-center gap-1.5 underline decoration-teal-400/50 underline-offset-4"
              >
                <Ruler className="w-3.5 h-3.5 text-teal-400" />
                Calculate Box & Square Feet Needed
              </button>
            </div>

          </div>

          {/* Right Column: 3D Realistic Interior Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group">
              
              {/* Main 3D Luxury Interior Render */}
              <img
                src={IMAGES.hero}
                alt="Rajputana Tiles Luxury Living Room and Granite 3D Render"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Shading gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A] via-transparent to-black/30 pointer-events-none"></div>

              {/* 3D Floating Feature Tag 1: High Gloss Mirror Tile */}
              <div className="absolute top-6 left-6 bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 shadow-xl flex items-center gap-2.5 animate-pulse">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping"></span>
                <div>
                  <div className="text-[10px] text-teal-300 uppercase tracking-wider font-semibold">Featured Finish</div>
                  <div className="text-xs font-bold text-white">800x1600mm Bookmatch GVT</div>
                </div>
              </div>

              {/* 3D Floating Feature Tag 2: Polished Granite Platform */}
              <div className="absolute top-28 right-6 bg-slate-900/85 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2 shadow-xl hidden sm:flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <div>
                  <div className="text-[10px] text-amber-300 uppercase tracking-wider font-semibold">Rajasthan Pride</div>
                  <div className="text-xs font-bold text-white">Jet Black & Lakha Red Granite</div>
                </div>
              </div>

              {/* Bottom Interactive Showcase Bar */}
              <div className="absolute bottom-4 inset-x-4 bg-slate-950/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-xs text-teal-300 font-semibold uppercase tracking-wider">
                    Interactive Interior Preview
                  </div>
                  <div className="text-sm font-bold text-white">
                    Premium Italian Glaze & Monolithic Floor Design
                  </div>
                </div>

                <button
                  onClick={onOpenVisualizer}
                  className="bg-teal-500 hover:bg-teal-400 text-[#1B2A4A] px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 shrink-0"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Try 3D Mode</span>
                </button>
              </div>

            </div>

            {/* Corner Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-br from-[#009688] to-[#00B4D8] rounded-2xl rotate-6 -z-10 opacity-70 blur-xs hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
