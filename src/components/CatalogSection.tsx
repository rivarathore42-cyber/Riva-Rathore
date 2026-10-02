import React, { useState, useMemo } from 'react';
import { Search, Filter, Sparkles, Check, ArrowRight, X, Phone, MessageCircle, Layers, ShieldCheck } from 'lucide-react';
import { PRODUCTS, CATEGORIES, COMPANY_DETAILS } from '../data/companyData';
import { ProductItem, ProductCategoryType } from '../types';

interface CatalogSectionProps {
  selectedCategoryFilter?: ProductCategoryType | 'all';
  onCategoryFilterChange?: (cat: ProductCategoryType | 'all') => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  selectedCategoryFilter = 'all',
  onCategoryFilterChange,
}) => {
  const [internalCategory, setInternalCategory] = useState<ProductCategoryType | 'all'>(selectedCategoryFilter);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);

  const activeCategory = onCategoryFilterChange ? selectedCategoryFilter : internalCategory;
  const setCategory = onCategoryFilterChange || setInternalCategory;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.finish && item.finish.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.material && item.material.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="catalog-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              Verified In-Stock Inventory
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
              Featured Products & Slabs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Inspect specs, dimensions, finishes, and request direct factory rates for projects across Deedwana-Ladnun.
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tiles, granite, sinks..."
              className="w-full bg-[#F8F9FA] border border-slate-300 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
              activeCategory === 'all'
                ? 'bg-[#1B2A4A] text-white shadow-md'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            All Categories ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold shrink-0 transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#009688] to-[#00B4D8] text-white shadow-md'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#F8F9FA] rounded-2xl border border-dashed border-slate-300">
            <p className="text-slate-500 text-base">No items found matching your filter or search query.</p>
            <button
              onClick={() => {
                setCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-teal-700 font-semibold text-sm hover:underline"
            >
              Clear filters and view all products
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Container with 3D Render */}
                <div
                  className="relative h-52 bg-slate-900 cursor-pointer overflow-hidden"
                  onClick={() => setActiveModalProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {product.popular && (
                    <div className="absolute top-3 left-3 bg-[#009688] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow">
                      Best Seller
                    </div>
                  )}

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[11px] text-teal-300 font-medium block truncate">
                      {product.subCategory || product.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3
                      onClick={() => setActiveModalProduct(product)}
                      className="font-heading font-bold text-slate-900 text-base group-hover:text-teal-700 transition-colors cursor-pointer line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 mt-1">
                      {product.size && (
                        <span>Size: <strong className="text-slate-700">{product.size}</strong></span>
                      )}
                      {product.finish && (
                        <>
                          <span>·</span>
                          <span className="text-teal-700 font-medium">{product.finish}</span>
                        </>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1 pt-2 border-t border-slate-100">
                    {product.highlights.slice(0, 2).map((h, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Check className="w-3 h-3 text-teal-600 shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalProduct(product)}
                      className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors text-center"
                    >
                      Details & Specs
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
                        `Hello Rathod Ravindra Singh ji, please quote me best price for ${product.name} (${product.size || ''}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors shadow-sm"
                      title="WhatsApp Quote"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="relative h-64 sm:h-72 bg-slate-900 shrink-0">
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs text-teal-300 font-semibold uppercase tracking-wider">
                  {activeModalProduct.subCategory || activeModalProduct.category}
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-1">
                  {activeModalProduct.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Description & Application
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeModalProduct.description}
                </p>
              </div>

              {/* Technical Specs Table */}
              <div className="bg-[#F8F9FA] rounded-2xl p-4 border border-slate-200 text-xs sm:text-sm space-y-2">
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs mb-3 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-teal-600" />
                  Product Specifications
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {activeModalProduct.size && (
                    <div className="border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-500 block text-[11px]">Dimensions / Format</span>
                      <strong className="text-slate-900">{activeModalProduct.size}</strong>
                    </div>
                  )}

                  {activeModalProduct.finish && (
                    <div className="border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-500 block text-[11px]">Surface Finish</span>
                      <strong className="text-teal-700">{activeModalProduct.finish}</strong>
                    </div>
                  )}

                  {activeModalProduct.thickness && (
                    <div className="border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-500 block text-[11px]">Thickness</span>
                      <strong className="text-slate-900">{activeModalProduct.thickness}</strong>
                    </div>
                  )}

                  {activeModalProduct.material && (
                    <div className="border-b border-slate-200/60 pb-1.5">
                      <span className="text-slate-500 block text-[11px]">Material Composition</span>
                      <strong className="text-slate-900">{activeModalProduct.material}</strong>
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Quality Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProduct.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-4 h-4 text-teal-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* GST & Guarantee note */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>GST Tax Invoice supplied: GSTIN {COMPANY_DETAILS.gstin} (Ravindra and Ravindra)</span>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-800 font-semibold text-xs sm:text-sm hover:bg-white transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call Store</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(
                  `Hello Rathod Ravindra Singh ji, I want to inquire about availability and pricing for ${activeModalProduct.name} (${activeModalProduct.size || ''}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Get Instant Quote on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
