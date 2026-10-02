import React, { useState, useId } from 'react';
import { Calculator, MessageCircle, RefreshCw, CheckCircle, Package, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { TILE_SIZES, COMPANY_DETAILS } from '../data/companyData';

export const TileCalculator: React.FC = () => {
  const [unit, setUnit] = useState<'feet' | 'meters'>('feet');
  const [length, setLength] = useState<number>(15);
  const [width, setWidth] = useState<number>(12);
  const [customSqFt, setCustomSqFt] = useState<string>('');
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number>(0);
  const [wastagePercent, setWastagePercent] = useState<number>(10);

  const lengthInputId = useId();
  const widthInputId = useId();
  const directAreaInputId = useId();
  const wastageInputId = useId();

  // Selected tile
  const activeTile = TILE_SIZES[selectedSizeIndex];

  // Calculate Base Area in Sq Ft
  let baseSqFt = 0;
  if (customSqFt && parseFloat(customSqFt) > 0) {
    baseSqFt = parseFloat(customSqFt);
  } else if (unit === 'feet') {
    baseSqFt = (length || 0) * (width || 0);
  } else {
    // Meters to Sq Ft (1 sq.m = 10.7639 sq.ft)
    baseSqFt = (length || 0) * (width || 0) * 10.7639;
  }

  // With Wastage
  const totalSqFtWithWastage = baseSqFt * (1 + wastagePercent / 100);

  // Boxes
  const boxesNeeded = Math.ceil(totalSqFtWithWastage / (activeTile?.sqFtPerBox || 15.5));
  const totalTiles = boxesNeeded * (activeTile?.tilesPerBox || 2);
  const actualDeliveredSqFt = (boxesNeeded * (activeTile?.sqFtPerBox || 15.5)).toFixed(1);

  // Adhesive Bags (1 bag of 20kg covers ~50 sq.ft for standard 3-6mm bed)
  const adhesiveBagsNeeded = Math.ceil(totalSqFtWithWastage / 50);

  // Epoxy Grout (approx 1 kg per 60-80 sq.ft for standard joint)
  const epoxyGroutKgNeeded = Math.max(1, Math.ceil(totalSqFtWithWastage / 70));

  const handleReset = () => {
    setLength(15);
    setWidth(12);
    setCustomSqFt('');
    setSelectedSizeIndex(0);
    setWastagePercent(10);
  };

  const whatsappEstimateText = `Hello Rathod Ravindra Singh ji, I calculated my tile requirement on Rajputana Tiles website:
- Room Dimensions: ${length} x ${width} ${unit} (${baseSqFt.toFixed(1)} sq.ft)
- Chosen Tile Format: ${activeTile.label}
- Total Area with ${wastagePercent}% Cutting Wastage: ${totalSqFtWithWastage.toFixed(1)} sq.ft
- Boxes Required: ${boxesNeeded} boxes (~${actualDeliveredSqFt} sq.ft)
- Recommended Adhesive (20kg): ${adhesiveBagsNeeded} bags
- Recommended Epoxy Grout: ${epoxyGroutKgNeeded} kg
Please share your best wholesale rate & stock availability for delivery at our location.`;

  return (
    <section id="calculator-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-teal-600" />
            Precise Material & Box Estimator
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
            Tile & Material Quantity Calculator
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Avoid ordering shortages or excessive surplus. Calculate exact box counts, adhesive requirements, and epoxy grout in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Calculation Inputs */}
          <div className="lg:col-span-7 bg-[#F8F9FA] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-6">
            
            {/* Unit Selector */}
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800 text-sm">Measurement Unit:</span>
              <div className="inline-flex rounded-xl bg-slate-200 p-1 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setUnit('feet')}
                  className={`px-4 py-1.5 rounded-lg transition-colors ${
                    unit === 'feet' ? 'bg-[#1B2A4A] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Feet (ft)
                </button>
                <button
                  type="button"
                  onClick={() => setUnit('meters')}
                  className={`px-4 py-1.5 rounded-lg transition-colors ${
                    unit === 'meters' ? 'bg-[#1B2A4A] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  Meters (m)
                </button>
              </div>
            </div>

            {/* Room Dimensions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor={lengthInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Room Length ({unit === 'feet' ? 'ft' : 'm'})
                </label>
                <input
                  id={lengthInputId}
                  type="number"
                  min="1"
                  step="0.5"
                  value={length}
                  onChange={(e) => {
                    setLength(parseFloat(e.target.value) || 0);
                    setCustomSqFt('');
                  }}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                  placeholder="e.g. 15"
                />
              </div>

              <div>
                <label htmlFor={widthInputId} className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Room Width ({unit === 'feet' ? 'ft' : 'm'})
                </label>
                <input
                  id={widthInputId}
                  type="number"
                  min="1"
                  step="0.5"
                  value={width}
                  onChange={(e) => {
                    setWidth(parseFloat(e.target.value) || 0);
                    setCustomSqFt('');
                  }}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-semibold focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-lg"
                  placeholder="e.g. 12"
                />
              </div>
            </div>

            {/* Or Direct Total Sq Ft Input */}
            <div className="pt-2 border-t border-slate-200">
              <label htmlFor={directAreaInputId} className="block text-xs font-semibold text-slate-600 mb-1">
                Or Enter Total Area Directly (Sq. Ft.):
              </label>
              <input
                id={directAreaInputId}
                type="number"
                value={customSqFt}
                onChange={(e) => setCustomSqFt(e.target.value)}
                placeholder="e.g. 250"
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Tile Size Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Choose Tile Format & Size:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {TILE_SIZES.map((size, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`text-left p-3 rounded-xl border text-xs transition-all ${
                      selectedSizeIndex === idx
                        ? 'bg-teal-50 border-teal-500 text-teal-950 font-bold shadow-sm ring-1 ring-teal-500'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-semibold text-slate-900">{size.sizeName}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {size.sqFtPerBox} sq.ft / box ({size.tilesPerBox} pcs)
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Wastage Margin Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor={wastageInputId} className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Recommended Cutting & Wastage Margin:
                </label>
                <span className="text-sm font-bold text-teal-700 bg-teal-100 px-2.5 py-0.5 rounded-md">
                  +{wastagePercent}%
                </span>
              </div>
              <input
                id={wastageInputId}
                type="range"
                min="5"
                max="20"
                step="1"
                value={wastagePercent}
                onChange={(e) => setWastagePercent(parseInt(e.target.value, 10))}
                className="w-full accent-teal-600 cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                Standard rooms need 8-10%; diagonal layouts or staircases need 12-15% for corner cuts.
              </p>
            </div>

            {/* Reset button */}
            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
              >
                <RefreshCw className="w-3 h-3" />
                Reset Values
              </button>
            </div>

          </div>

          {/* Right Column: Calculated Results Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#1B2A4A] to-[#121c32] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-teal-500/30 flex flex-col justify-between space-y-6">
            
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div>
                  <div className="text-[11px] text-teal-300 font-bold uppercase tracking-wider">
                    Estimation Summary
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Material Breakdown
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center">
                  <Package className="w-5 h-5" />
                </div>
              </div>

              {/* Stat Highlight: Required Boxes */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10 mb-6 text-center">
                <div className="text-xs uppercase tracking-wider text-teal-300 font-semibold mb-1">
                  Total Tile Boxes Required
                </div>
                <div className="font-heading text-5xl font-black text-white tracking-tight">
                  {boxesNeeded}{' '}
                  <span className="text-lg font-bold text-teal-300">Boxes</span>
                </div>
                <div className="text-xs text-slate-300 mt-2">
                  Supplies approximately <strong className="text-white">{actualDeliveredSqFt} sq. ft.</strong> ({totalTiles} total tiles)
                </div>
              </div>

              {/* Detailed Breakdown List */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between py-2 border-b border-white/10 text-slate-300">
                  <span>Net Carpet Area:</span>
                  <span className="font-semibold text-white font-mono">{baseSqFt.toFixed(1)} sq. ft.</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/10 text-slate-300">
                  <span>Area with Wastage (+{wastagePercent}%):</span>
                  <span className="font-semibold text-teal-300 font-mono">{totalSqFtWithWastage.toFixed(1)} sq. ft.</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/10 text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-teal-400" />
                    Adhesive (20kg Bags):
                  </span>
                  <span className="font-bold text-white font-mono">{adhesiveBagsNeeded} Bags</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-white/10 text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-teal-400" />
                    Waterproof Epoxy Grout:
                  </span>
                  <span className="font-bold text-white font-mono">~{epoxyGroutKgNeeded} Kg</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(whatsappEstimateText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all text-sm"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Send Estimate to WhatsApp for Best Rate</span>
              </a>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                Connect with Rathod Ravindra Singh directly for wholesale slab pricing, delivery charges, and contractor schemes.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
