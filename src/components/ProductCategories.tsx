import React from 'react';
import { ArrowRight, Layers, Sparkles, Check } from 'lucide-react';
import { CATEGORIES } from '../data/companyData';
import { ProductCategoryType } from '../types';

interface ProductCategoriesProps {
  onSelectCategory: (categoryId: ProductCategoryType) => void;
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="products-section" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            Comprehensive Architecture Catalog
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
            Premium Building & Interior Collections
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Everything your dream home, bungalow, or commercial development needs under one roof with direct manufacturer warranty and best wholesale rates.
          </p>
        </div>

        {/* Categories Grid (Interactive 3D Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Container with 3D Render */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Subtitle / Item Count Pill */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-bold text-[#1B2A4A] shadow-sm">
                  {cat.itemCount}
                </div>

                {/* Category Title on image overlay */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-[11px] text-teal-300 font-semibold uppercase tracking-wider">
                    {cat.subtitle}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>

                {/* Features List */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {cat.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Action button */}
                <button
                  type="button"
                  className="w-full mt-2 py-2 px-3 rounded-xl bg-slate-50 group-hover:bg-[#1B2A4A] text-slate-700 group-hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-200 group-hover:border-[#1B2A4A]"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Wholesale & Contractor Note */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-600 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading text-lg font-bold text-[#1B2A4A]">
                Contractors, Builders & Architects Discount
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Bulk container orders, direct factory dispatch, and special project rate cards available for projects across Ladnun, Deedwana & Nagaur district.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919057312991?text=Hello%20Rathod%20Ravindra%20Singh%20ji,%20I%20am%20a%20builder/contractor%20and%20need%20bulk%20project%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-[#1B2A4A] hover:bg-[#121c32] text-white px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-colors shadow-sm"
          >
            Inquire Bulk Rates
          </a>
        </div>

      </div>
    </section>
  );
};
