import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/companyData';

interface HeroSectionProps {
  onExploreCollections: () => void;
  onSelectFeatureCard: (category: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreCollections,
  onSelectFeatureCard,
}) => {
  const [activeHoverCard, setActiveHoverCard] = useState<number>(2); // Default to Granite Countertop active like the screenshot

  const featureCards = [
    {
      id: "tiles",
      title: "Wall & Floor Tile",
      subtitle: "Premium-quality hover effect",
      image: IMAGES.tileMoroccan,
      targetSection: "tiles",
    },
    {
      id: "sanitaryware",
      title: "Water Closet",
      subtitle: "Comfort flush & silent soft-close",
      image: IMAGES.sanitaryware,
      targetSection: "sanitaryware",
    },
    {
      id: "granite",
      title: "Polished Granite Countertop",
      subtitle: "Polished granite hover effect",
      image: IMAGES.granite,
      targetSection: "granito",
    },
    {
      id: "plumbing",
      title: "Plumbing Granite",
      subtitle: "Exemplary quality hover effect",
      image: IMAGES.plumbing,
      targetSection: "plumbing",
    },
  ];

  return (
    <div className="relative bg-white">
      {/* 1. Main Hero Banner with Ultra-Panoramic Luxury Interior Background */}
      <div className="relative h-[480px] sm:h-[540px] md:h-[600px] w-full overflow-hidden bg-slate-900">
        
        {/* Background Panoramic 3D Render Image */}
        <img
          src={IMAGES.heroPanoramic}
          alt="Rajputana Luxury Architectural Interior"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />

        {/* Ambient Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

        {/* Hero Center Overlay Content matching reference image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10 max-w-4xl mx-auto -mt-10 sm:-mt-8">
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-white tracking-wider uppercase leading-tight drop-shadow-md">
            ELEVATE YOUR SPACE WITH<br />
            ENDURING ELEGANCE
          </h1>

          <p className="text-slate-200 text-sm sm:text-lg font-medium mt-3 sm:mt-4 max-w-2xl drop-shadow">
            Rajputana: Curated Collections of Tiles, Sanitaryware, and Granite
          </p>

          {/* Cyan/Teal CTA Button */}
          <button
            onClick={onExploreCollections}
            className="mt-6 sm:mt-8 bg-[#009688] hover:bg-[#00897b] text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-3 rounded-lg shadow-lg hover:shadow-teal-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            EXPLORE COLLECTIONS
          </button>
        </div>
      </div>

      {/* 2. Floating Overlapping 4 Cards Row (Overlapping the hero into white section) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-20 sm:-mt-24 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {featureCards.map((card, idx) => {
            const isHovered = activeHoverCard === idx;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveHoverCard(idx)}
                onClick={() => onSelectFeatureCard(card.targetSection)}
                className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 flex flex-col ${
                  isHovered
                    ? 'bg-teal-50/80 border-2 border-[#009688] shadow-xl ring-2 ring-teal-400/20'
                    : 'bg-white border border-slate-200/90 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Image Area */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100 flex items-center justify-center p-2">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Card Text Info */}
                <div className="p-4 text-center">
                  <h3 className="font-heading font-bold text-slate-900 text-sm sm:text-base">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Contact Details Section matching the exact reference UI */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Centered Heading with Cyan Divider Lines */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[1.5px] bg-[#009688]/40 w-16 sm:w-32"></div>
          <h2 className="font-heading text-xl sm:text-2xl font-bold text-slate-800 tracking-wide">
            Contact Details
          </h2>
          <div className="h-[1.5px] bg-[#009688]/40 w-16 sm:w-32"></div>
        </div>

        {/* 3 Clean Horizontal Contact Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Block 1: Phone / Contact Card */}
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-[#009688] text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <Phone className="w-6 h-6 fill-current" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Contact card</div>
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                className="font-heading text-lg font-bold text-slate-900 hover:text-[#009688] transition-colors block"
              >
                {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>

          {/* Block 2: Email */}
          <div className="flex items-center gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-[#009688] text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs text-slate-500 font-medium">Email</div>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="font-heading text-base sm:text-lg font-bold text-slate-900 hover:text-[#009688] transition-colors block break-all"
              >
                {COMPANY_DETAILS.email}
              </a>
            </div>
          </div>

          {/* Block 3: Location / Address / GST */}
          <div className="flex items-start gap-4 group">
            <div className="w-14 h-14 rounded-2xl bg-[#009688] text-white flex items-center justify-center shrink-0 shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform mt-0.5">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="font-heading font-bold text-slate-900 text-sm">
                {COMPANY_DETAILS.firmName}
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Bassi Ka Bass, VPO-Ratau, Tehsil Ladnun, Dist-Deedwana, Rajasthan 341317, India
              </p>
              <div className="text-xs text-slate-500 font-medium pt-0.5">
                GST No. <span className="font-mono font-bold text-slate-800">{COMPANY_DETAILS.gstin}</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 4. Bottom Signature Bar matching reference */}
      <div className="bg-[#1B2A4A] text-white py-4 px-4 sm:px-8 border-t border-teal-500/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <div className="font-heading font-bold tracking-widest text-sm sm:text-base text-white uppercase">
            {COMPANY_DETAILS.proprietor.toUpperCase()}
          </div>
          <div className="text-xs text-slate-300 font-light">
            Supplier of: Wall & Floor Tiles, Tiles Adhesive, Kitchen Sink, Marble & Granite, Plumbing Fittings, Electrical Fittings, Paints & Colours
          </div>
        </div>
      </div>

    </div>
  );
};
