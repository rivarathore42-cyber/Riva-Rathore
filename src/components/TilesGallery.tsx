import React, { useState } from 'react';
import { Sparkles, Check, MessageCircle, Maximize2, X, Layers, ArrowRight, Ruler, Eye } from 'lucide-react';
import { TILES_SHOWCASE, COMPANY_DETAILS, IMAGES } from '../data/companyData';

interface TilesGalleryProps {
  onOpenCalculator: () => void;
  onOpenVisualizer: () => void;
}

export const TilesGallery: React.FC<TilesGalleryProps> = ({
  onOpenCalculator,
  onOpenVisualizer,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'gvt' | 'decorative' | 'wood' | 'onyx'>('all');
  const [zoomTile, setZoomTile] = useState<any | null>(null);

  const allTilesList = [
    ...TILES_SHOWCASE,
    {
      id: "tile-marquina",
      title: "Nero Marquina Black Lightning Vein GVT",
      category: "Vitrified Floor & Wall Slab",
      finish: "High Gloss Diamond Mirror",
      size: "600 x 1200 mm (2 x 4 ft)",
      thickness: "9 mm",
      description: "Deep obsidian volcanic black tile accented with striking crisp white lightning marble veins. Imparts grand palatial contrast for TV backdrops and drawing rooms.",
      image: IMAGES.tiles,
      badge: "Best Seller",
      features: ["Deep black color retention", "Stain & scratch resistant", "Micro-bevelled edges"],
      sqFtPerBox: "15.5 sq.ft (2 pcs)",
    },
  ];

  const filteredTiles = allTilesList.filter((tile) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'gvt') return tile.size.includes('1600') || tile.size.includes('1200');
    if (activeFilter === 'decorative') return tile.category.includes('Decorative') || tile.title.includes('Moroccan');
    if (activeFilter === 'wood') return tile.category.includes('Wood') || tile.title.includes('Oak');
    if (activeFilter === 'onyx') return tile.category.includes('Onyx') || tile.title.includes('Onyx');
    return true;
  });

  return (
    <section id="tiles-section" className="py-20 bg-[#F8F9FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Curated Architectural Surfaces
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
            Explore Our Premium Tiles Collection
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            High-definition porcelain & vitrified slabs sourced directly for exceptional durability, zero water porosity, and royal aesthetics.
          </p>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#1B2A4A] text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              All Tiles ({allTilesList.length})
            </button>
            <button
              onClick={() => setActiveFilter('gvt')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'gvt'
                  ? 'bg-[#009688] text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Large Format GVT Slabs
            </button>
            <button
              onClick={() => setActiveFilter('decorative')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'decorative'
                  ? 'bg-[#009688] text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Moroccan & Decorative
            </button>
            <button
              onClick={() => setActiveFilter('onyx')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'onyx'
                  ? 'bg-[#009688] text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Exotic Onyx Slabs
            </button>
            <button
              onClick={() => setActiveFilter('wood')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === 'wood'
                  ? 'bg-[#009688] text-white shadow-md'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              Carving Wooden Planks
            </button>
          </div>
        </div>

        {/* Tile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTiles.map((tile) => (
            <div
              key={tile.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Preview with Zoom Trigger */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-3 left-3 bg-[#009688] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                  {tile.badge}
                </div>

                {/* Zoom icon button */}
                <button
                  type="button"
                  onClick={() => setZoomTile(tile)}
                  className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white text-slate-800 rounded-lg shadow-sm transition-transform active:scale-95"
                  title="Zoom Tile"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-medium bg-black/60 text-teal-300 backdrop-blur-xs px-2 py-0.5 rounded">
                    {tile.size}
                  </span>
                </div>
              </div>

              {/* Card Body & Specs */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] text-teal-700 font-semibold uppercase tracking-wider mb-1">
                    {tile.category}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-slate-900 group-hover:text-[#009688] transition-colors leading-snug">
                    {tile.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 mt-2">
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium">
                      Finish: {tile.finish}
                    </span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium">
                      Coverage: {tile.sqFtPerBox}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                    {tile.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-700">
                  {tile.features.map((feat: string, i: number) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Card CTA Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
                      `Hello Rathod Ravindra Singh ji, I want to inquire about availability and wholesale rate for ${tile.title} (${tile.size}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#009688] hover:bg-[#00897b] text-white py-2.5 px-3 rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Inquire Best Price</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setZoomTile(tile)}
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    Specs
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Tools Row: Calculator & 3D Visualizer buttons */}
        <div className="mt-14 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-heading text-lg font-bold text-[#1B2A4A]">
              Planning Your Tile Layout & Boxes?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Calculate exact square footage, recommended wastage, and adhesive bags in our interactive calculator.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenCalculator}
              className="bg-[#1B2A4A] hover:bg-[#121c32] text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-colors"
            >
              <Ruler className="w-4 h-4 text-teal-400" />
              <span>Launch Calculator</span>
            </button>

            <button
              onClick={onOpenVisualizer}
              className="bg-teal-50 hover:bg-teal-100 text-[#009688] border border-teal-200 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>3D Room Visualizer</span>
            </button>
          </div>
        </div>

      </div>

      {/* High-Resolution Zoom Modal */}
      {zoomTile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[92vh]">
            
            <div className="relative h-80 sm:h-96 bg-slate-900 shrink-0">
              <img
                src={zoomTile.image}
                alt={zoomTile.title}
                className="w-full h-full object-cover"
              />
              
              <button
                onClick={() => setZoomTile(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close zoom"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white bg-black/50 backdrop-blur-xs p-3 rounded-xl">
                <span className="text-xs text-teal-300 font-semibold uppercase tracking-wider block">
                  {zoomTile.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mt-0.5">
                  {zoomTile.title}
                </h3>
              </div>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                {zoomTile.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F8F9FA] p-4 rounded-2xl border border-slate-200 text-xs">
                <div>
                  <span className="text-slate-500 block text-[11px]">Size</span>
                  <strong className="text-slate-900">{zoomTile.size}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Finish</span>
                  <strong className="text-[#009688]">{zoomTile.finish}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Thickness</span>
                  <strong className="text-slate-900">{zoomTile.thickness}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px]">Box Coverage</span>
                  <strong className="text-slate-900">{zoomTile.sqFtPerBox}</strong>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs text-center"
                >
                  Call Rathod Ravindra Singh
                </a>

                <a
                  href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
                    `Hello Rathod Ravindra Singh ji, please send quotation for ${zoomTile.title} (${zoomTile.size}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-[#009688] hover:bg-[#00897b] text-white px-6 py-2.5 rounded-xl font-semibold text-xs flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Get Wholesale Rate on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
