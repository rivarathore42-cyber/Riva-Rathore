import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Award, Copy, Check, FileText, Building2 } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

export const GstTrustBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyGst = () => {
    navigator.clipboard.writeText(COMPANY_DETAILS.gstin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-gradient-to-r from-[#1B2A4A] via-[#162544] to-[#0d1a33] text-white py-8 border-y border-teal-500/30 relative overflow-hidden">
      {/* Decorative subtle ambient patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00B4D8_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Left: GST & Legal Authentication */}
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-teal-500/20 border border-teal-400/40 flex items-center justify-center shrink-0 text-teal-400">
                <ShieldCheck className="w-8 h-8" />
              </div>
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-wider font-bold text-teal-400">
                    Government Registered Supplier
                  </span>
                  <span className="text-white/30 hidden sm:inline">·</span>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> 100% Tax Compliant
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline gap-3">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-wide">
                    {COMPANY_DETAILS.firmName}
                  </h3>
                  <span className="text-slate-300 text-sm">
                    Proprietor: <strong className="text-white">{COMPANY_DETAILS.proprietor}</strong>
                  </span>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Official GST Invoicing with HSN code compliance for all residential, commercial & government contractors.
                </p>
              </div>
            </div>

            {/* Right: GSTIN Box with Copy Feature */}
            <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="bg-black/30 border border-teal-500/40 rounded-xl px-4 py-2.5 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-teal-300 font-semibold uppercase tracking-wider">
                    GSTIN Identification Number
                  </div>
                  <div className="font-mono text-base sm:text-lg font-bold text-white tracking-widest">
                    {COMPANY_DETAILS.gstin}
                  </div>
                </div>

                <button
                  onClick={handleCopyGst}
                  title="Copy GSTIN"
                  className="p-2 rounded-lg bg-teal-500/20 hover:bg-teal-500/40 text-teal-300 transition-colors flex items-center gap-1 text-xs"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300 sm:border-l sm:border-white/10 sm:pl-4">
                <div className="flex flex-col gap-1">
                  <span className="flex items-center gap-1.5 text-white font-medium">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    Direct Factory Pricing
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Building2 className="w-3.5 h-3.5 text-teal-400" />
                    Bassi Ka Bass, Ladnun (Rajasthan)
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
