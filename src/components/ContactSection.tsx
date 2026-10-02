import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Download,
  Navigation,
} from 'lucide-react';
import { COMPANY_DETAILS, CATEGORIES } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    city: '',
    category: 'tiles',
    approxSqFt: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Build WhatsApp message
    const msg = `*New Quote Request from Rajputana Tiles Website:*
- *Name:* ${formState.name || 'Not provided'}
- *Phone:* ${formState.phone}
- *City / Tehsil:* ${formState.city || 'Ladnun / Deedwana Area'}
- *Interested In:* ${formState.category.toUpperCase()}
- *Approx Area:* ${formState.approxSqFt || 'To be discussed'} sq.ft
- *Requirement Details:* ${formState.message || 'Looking for latest price list and catalog.'}`;

    // Open WhatsApp in new tab
    const waUrl = `https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  // Generate downloadable vCard for saving contact into smartphone
  const handleDownloadVCard = () => {
    const vCardContent = `BEGIN:VCARD
VERSION:3.0
N:Singh;Rathod;Ravindra;;
FN:Rathod Ravindra Singh
ORG:Ravindra and Ravindra - RAJPUTANA TILES
TITLE:Proprietor
TEL;TYPE=CELL,VOICE:${COMPANY_DETAILS.phone}
EMAIL;TYPE=INTERNET:${COMPANY_DETAILS.email}
ADR;TYPE=WORK:;;Bassi Ka Bass\\, VPO-Ratau;Ladnun;Rajasthan;341317;India
NOTE:GSTIN: ${COMPANY_DETAILS.gstin} - Wall & Floor Tiles, Sanitaryware, Granite & Paints Supplier
URL:https://rajputanatiles.com
END:VCARD`;

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Rathod_Ravindra_Singh_Rajputana_Tiles.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact-section" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-600" />
            Showroom & Warehouse Location
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1B2A4A] tracking-tight">
            Visit Our Showroom or Get an Instant Quote
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Conveniently situated at Bassi Ka Bass, Ratau, Tehsil-Ladnun. We welcome homeowners, engineers, and contractors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Proprietor Card */}
            <div className="bg-gradient-to-br from-[#1B2A4A] to-[#121c32] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-teal-500/30">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="text-[10px] text-teal-300 font-bold uppercase tracking-wider block">
                    Proprietor / Contact Person
                  </span>
                  <h3 className="font-heading text-xl font-bold text-white">
                    {COMPANY_DETAILS.proprietor}
                  </h3>
                  <div className="text-xs text-slate-300 mt-0.5">
                    {COMPANY_DETAILS.firmName}
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-lg border border-teal-400/30">
                  RR
                </div>
              </div>

              {/* Direct Details */}
              <div className="space-y-3.5 text-sm">
                <a
                  href={`tel:${COMPANY_DETAILS.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-3 text-slate-200 hover:text-teal-300 transition-colors group"
                >
                  <div className="p-2 rounded-xl bg-white/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Mobile & Call</div>
                    <div className="font-semibold text-white">{COMPANY_DETAILS.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-center gap-3 text-slate-200 hover:text-teal-300 transition-colors group"
                >
                  <div className="p-2 rounded-xl bg-white/10 text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Email Address</div>
                    <div className="font-semibold text-white">{COMPANY_DETAILS.email}</div>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-slate-200">
                  <div className="p-2 rounded-xl bg-white/10 text-teal-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Registered Address</div>
                    <div className="font-semibold text-white leading-snug">
                      {COMPANY_DETAILS.fullAddress}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-200">
                  <div className="p-2 rounded-xl bg-white/10 text-teal-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Store Hours</div>
                    <div className="font-semibold text-white">{COMPANY_DETAILS.openingHours}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons inside Card */}
              <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-2.5">
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.phoneRaw}?text=Hello%20Rathod%20Ravindra%20Singh%20ji,%20I%20am%20chatting%20from%20the%20Rajputana%20Tiles%20website.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleDownloadVCard}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors border border-white/20"
                  title="Save Contact to Phone"
                >
                  <Download className="w-4 h-4 text-teal-300" />
                  <span>Save Contact</span>
                </button>
              </div>
            </div>

            {/* GST Verification Box */}
            <div className="bg-[#F8F9FA] rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-teal-600" />
                <span>GST Tax Compliance Notice</span>
              </div>
              <p>
                All purchases are invoiced in accordance with Indian Central and Rajasthan State GST acts under GSTIN: <strong className="font-mono text-slate-900">{COMPANY_DETAILS.gstin}</strong>. Input Tax Credit (ITC) invoices available for eligible commercial businesses.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Location Card & Quote Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Google Map Card */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-200">
              <div className="p-4 bg-[#1B2A4A] text-white flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-teal-400" />
                    <span>Showroom Map: Bassi Ka Bass, Ratau (Ladnun)</span>
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    Dist-Deedwana, Rajasthan 341317 (Near Ladnun Highway Route)
                  </p>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    COMPANY_DETAILS.googleMapsQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal-500 hover:bg-teal-400 text-[#1B2A4A] font-bold text-xs px-3 py-1.5 rounded-lg transition-colors shrink-0"
                >
                  Open in Google Maps
                </a>
              </div>

              {/* Map Embed Frame */}
              <div className="h-64 sm:h-72 w-full bg-slate-200 relative">
                <iframe
                  title="Rajputana Tiles Ratau Ladnun Location Map"
                  src={COMPANY_DETAILS.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            {/* Instant Quote Request Form */}
            <div className="bg-[#F8F9FA] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  Instant Quote Dispatcher
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-[#1B2A4A] mb-1">
                Request Rate Card & Wholesale Quotation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Tell us about your project area and requirements. You'll receive prompt pricing with delivery estimates.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-heading text-lg font-bold text-emerald-900">
                    Quote Request Prepared!
                  </h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Your request was formatted for WhatsApp. Rathod Ravindra Singh will confirm availability and current wholesale slab prices.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-emerald-800 font-semibold underline underline-offset-2"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Surendra Sharma"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="e.g. 98290 XXXXX"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        City / Village
                      </label>
                      <input
                        type="text"
                        value={formState.city}
                        onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                        placeholder="e.g. Ladnun / Deedwana"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Material Category
                      </label>
                      <select
                        value={formState.category}
                        onChange={(e) => setFormState({ ...formState, category: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      >
                        {CATEGORIES.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Estimated Area (Sq.Ft)
                      </label>
                      <input
                        type="text"
                        value={formState.approxSqFt}
                        onChange={(e) => setFormState({ ...formState, approxSqFt: e.target.value })}
                        placeholder="e.g. 1200"
                        className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Specific Requirements or Slab Details
                    </label>
                    <textarea
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="e.g. Looking for 600x1200mm high gloss floor tiles and black granite for kitchen countertop..."
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#009688] to-[#00B4D8] hover:from-[#00897b] hover:to-[#009ebd] text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 transition-all text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Quote Request on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
