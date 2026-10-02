import React, { useState } from 'react';
import { Eye, Sun, Moon, Sparkles, MessageCircle, Check, ArrowRight, Layers, Sliders } from 'lucide-react';
import { ROOM_PRESETS, COMPANY_DETAILS } from '../data/companyData';

export const InteractiveVisualizer: React.FC = () => {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const currentRoom = ROOM_PRESETS[selectedRoomIndex];

  const [selectedMaterialIndex, setSelectedMaterialIndex] = useState(0);
  const currentMaterial = currentRoom.materials[selectedMaterialIndex] || currentRoom.materials[0];

  const [lightingMode, setLightingMode] = useState<'warm' | 'daylight'>('warm');

  const handleRoomChange = (idx: number) => {
    setSelectedRoomIndex(idx);
    setSelectedMaterialIndex(0);
  };

  const whatsappInquiryUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
    `Hello Rathod Ravindra Singh ji, I loved the "${currentMaterial.name}" (${currentMaterial.finish}, ${currentMaterial.size}) visualized in the ${currentRoom.name} on Rajputana Tiles website. What is the current sq. ft. price and availability?`
  )}`;

  return (
    <section id="visualizer-section" className="py-20 bg-[#162544] text-white relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-500/30">
            <Eye className="w-3.5 h-3.5 text-teal-400" />
            Interactive 3D Space Simulator
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Visualize Luxury Finishes in Realistic Spaces
          </h2>
          <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
            Select an architectural room, swap through our premium vitrified slabs and polished granites, and see how textures react under warm and natural daylight.
          </p>
        </div>

        {/* Room Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {ROOM_PRESETS.map((room, idx) => (
            <button
              key={room.id}
              onClick={() => handleRoomChange(idx)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                selectedRoomIndex === idx
                  ? 'bg-gradient-to-r from-[#009688] to-[#00B4D8] text-white shadow-lg shadow-teal-500/30 scale-105'
                  : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
              }`}
            >
              <span>{room.name}</span>
            </button>
          ))}
        </div>

        {/* Visualizer Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main 3D Canvas / Render Display */}
          <div className="lg:col-span-8 bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative flex flex-col justify-end min-h-[420px] sm:min-h-[500px]">
            
            {/* Base 3D Room Render Image */}
            <img
              src={currentRoom.image}
              alt={currentRoom.name}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                lightingMode === 'warm' ? 'brightness-100 contrast-105' : 'brightness-110 contrast-100'
              }`}
            />

            {/* Dynamic Texture Tint / Surface Overlay effect */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-700"
              style={{
                background: `linear-gradient(to top, ${currentMaterial.accentColor}44 0%, transparent 60%)`,
                mixBlendMode: 'overlay',
              }}
            ></div>

            {/* Warm vs Daylight Lighting Filter */}
            {lightingMode === 'warm' ? (
              <div className="absolute inset-0 bg-amber-500/10 pointer-events-none mix-blend-color-burn"></div>
            ) : (
              <div className="absolute inset-0 bg-cyan-400/5 pointer-events-none mix-blend-overlay"></div>
            )}

            {/* Top Toolbar: Lighting & Mode Switcher */}
            <div className="absolute top-4 inset-x-4 flex items-center justify-between z-20">
              <div className="bg-slate-900/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-xl text-xs text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Scene: <strong className="text-teal-300">{currentRoom.name}</strong></span>
              </div>

              {/* Lighting controls */}
              <div className="bg-slate-900/80 backdrop-blur-md border border-white/20 p-1 rounded-xl flex items-center gap-1">
                <button
                  onClick={() => setLightingMode('warm')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    lightingMode === 'warm' ? 'bg-amber-500/30 text-amber-200' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Warm Ambient Lighting"
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Warm Evening</span>
                </button>
                <button
                  onClick={() => setLightingMode('daylight')}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${
                    lightingMode === 'daylight' ? 'bg-teal-500/30 text-teal-200' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Daylight Bright"
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Daylight</span>
                </button>
              </div>
            </div>

            {/* Bottom Overlay with Material Card preview */}
            <div className="relative z-20 m-4 sm:m-6 bg-slate-950/85 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[11px] text-teal-300 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Selected Surface Material</span>
                </div>
                <div className="text-lg font-bold text-white">
                  {currentMaterial.name}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
                  <span>Finish: <strong className="text-white">{currentMaterial.finish}</strong></span>
                  <span>·</span>
                  <span>Size: <strong className="text-white">{currentMaterial.size}</strong></span>
                </div>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Price & Availability Inquiry</span>
              </a>
            </div>

          </div>

          {/* Right Column: Material Swatches & Surface Options */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-lg font-bold text-white flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-teal-400" />
                  <span>Surface Textures</span>
                </h3>
                <span className="text-xs text-slate-400 font-medium">Click to Swap</span>
              </div>

              <div className="space-y-3">
                {currentRoom.materials.map((mat, idx) => (
                  <button
                    key={mat.id}
                    onClick={() => setSelectedMaterialIndex(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center gap-4 ${
                      selectedMaterialIndex === idx
                        ? 'bg-teal-500/20 border-teal-400 text-white shadow-lg'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Swatch Sphere/Tile */}
                    <div
                      className="w-12 h-12 rounded-xl shrink-0 border border-white/30 shadow-inner flex items-center justify-center relative overflow-hidden"
                      style={{ background: mat.texturePreview }}
                    >
                      {selectedMaterialIndex === idx && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Check className="w-5 h-5 text-teal-300 stroke-[3]" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-white truncate">
                        {mat.name}
                      </div>
                      <div className="text-xs text-slate-300 flex items-center gap-2 mt-0.5">
                        <span>{mat.finish}</span>
                        <span>·</span>
                        <span className="text-teal-300 font-mono text-[11px]">{mat.size}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Consultation Callout */}
            <div className="bg-slate-900/60 rounded-2xl p-4 border border-teal-500/30 text-xs space-y-2">
              <div className="font-semibold text-teal-300 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>Need Custom 3D Architectural Layouts?</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Bring your floor plan to our showroom at Bassi Ka Bass (Ladnun) or send it via WhatsApp. We provide tile layout planning to minimize cutting wastage.
              </p>
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-1 text-teal-400 font-semibold hover:text-teal-300 pt-1"
              >
                <span>Call Rathod Ravindra Singh</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
