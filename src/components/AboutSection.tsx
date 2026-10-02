import React from 'react';
import { Building2, ShieldCheck, Truck, Users, Award, MapPin, Sparkles, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS, IMAGES } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-section" className="py-20 bg-[#F8F9FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            Our Heritage & Commitment
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
            Building Stronger Spaces Across Rajasthan
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Founded with a vision to bring ultra-luxurious, durable tiles, mirror-polished granites, and modern sanitary solutions to the heart of Deedwana-Ladnun.
          </p>
        </div>

        {/* Two Column Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
              <img
                src={IMAGES.granite}
                alt="Rajputana Tiles Granite Warehouse"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A4A]/90 via-transparent to-transparent"></div>
              
              {/* Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs text-teal-300 font-semibold uppercase tracking-wider">
                  Firm Name: {COMPANY_DETAILS.firmName}
                </div>
                <div className="font-heading text-xl font-bold mt-1">
                  Prop. Rathod Ravindra Singh
                </div>
                <div className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-teal-400" />
                  Bassi Ka Bass, VPO-Ratau, Ladnun (Rajasthan)
                </div>
              </div>
            </div>

            {/* Float Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 hidden sm:flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-[#1B2A4A]">GST Registered</div>
                <div className="text-slate-500 font-mono">{COMPANY_DETAILS.gstin}</div>
              </div>
            </div>
          </div>

          {/* Text Story & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
              <p>
                At <strong className="text-[#1B2A4A]">RAJPUTANA TILES | SANITARYWARE | GRANITO</strong> (operated under the registered enterprise <strong className="text-[#1B2A4A]">RAVINDRA AND RAVINDRA</strong>), we believe every home, commercial showroom, and residential project deserves royal durability paired with modern luxury.
              </p>
              <p>
                Spearheaded by <strong className="text-slate-900">Rathod Ravindra Singh</strong>, our firm sources directly from leading ceramic hubs and Rajasthan’s premier granite quarries. We eliminate unnecessary middlemen so our customers in Ladnun, Deedwana, Sujangarh, and nearby tehsils get wholesale rates with 100% tax transparency.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-teal-50 text-teal-600 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Direct Factory Rates</h4>
                  <p className="text-xs text-slate-600 mt-1">Direct relationships with manufacturers allow us to provide genuine savings.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-teal-50 text-teal-600 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Fast Regional Transit</h4>
                  <p className="text-xs text-slate-600 mt-1">Prompt doorstep loading & vehicle dispatch across Ladnun & Deedwana districts.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-teal-50 text-teal-600 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">100% GST Invoiced</h4>
                  <p className="text-xs text-slate-600 mt-1">Full legal billing with GSTIN: 08ALXPR1955P2ZU for residential and ITC claims.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex items-start gap-3">
                <div className="p-2 rounded-xl bg-teal-50 text-teal-600 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Architect & Mistri Support</h4>
                  <p className="text-xs text-slate-600 mt-1">We assist local contractors and homeowners with precision cutting and layouts.</p>
                </div>
              </div>
            </div>

            {/* Direct Connect CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 bg-[#1B2A4A] hover:bg-[#121c32] text-white px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>Call Rathod Ravindra Singh: {COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm border border-slate-300 transition-colors"
              >
                <span>Email Business Inquiry</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
