import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Sparkles, 
  Building2, 
  HelpCircle, 
  Users, 
  ExternalLink 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/hsiData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Mutual Funds (SIP / Lumpsum)',
    city: 'Mumbai',
    horizon: '5-10 Years',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      
      {/* Page Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#081220] via-[#0d1e34] to-[#0a182b] text-white py-16 md:py-24 border-b-2 border-amber-400">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300/90 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Contact & BKC Headquarters</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Advisory Desk & Client Services</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              Let's Discuss Your <span className="text-gold-gradient">Financial Future</span>
            </h1>

            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              Visit our headquarters in Mumbai's Bandra-Kurla Complex (BKC), speak directly with our certified advisors, or send an enquiry for a rapid callback within 30 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Office Details & Direct Channels */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Headquarters Card */}
              <div className="p-6 rounded-3xl bg-[#0b192c] text-white space-y-5 shadow-lg border-2 border-amber-400">
                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-400 font-heading">
                    Registered Headquarters
                  </span>
                  <h2 className="text-xl font-bold font-heading">
                    Horizon Financial Tower
                  </h2>
                  <p className="text-xs text-slate-300">
                    Bandra-Kurla Complex (BKC), Mumbai
                  </p>
                </div>

                <div className="space-y-4 text-xs text-slate-300 border-t border-slate-700/80 pt-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">
                      {COMPANY_INFO.address}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{COMPANY_INFO.operatingHours} IST</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                    <div>
                      <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-white hover:text-amber-300 transition-colors">
                        {COMPANY_INFO.phone}
                      </a>
                      <span className="text-[11px] text-slate-400 block">Toll-Free: {COMPANY_INFO.tollFree}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:text-amber-300 transition-colors truncate">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Direct WhatsApp Action */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/919820012345?text=Hello%20Horizon%20Secure%20Investments%2C%20I%20would%20like%20to%20schedule%20a%20wealth%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <span>💬 Direct WhatsApp Advisor Chat</span>
                  </a>
                </div>
              </div>

              {/* Department Directory */}
              <div className="p-6 rounded-3xl bg-white border-2 border-slate-200 shadow-xs space-y-4">
                <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 font-heading">
                  Dedicated Desks
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">Wealth & Mutual Funds</div>
                      <div className="text-[11px] text-slate-500">{COMPANY_INFO.advisoryEmail}</div>
                    </div>
                    <span className="text-amber-700 font-bold text-[11px]">Direct Folio Support</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">Emergency Insurance Claims</div>
                      <div className="text-[11px] text-slate-500">+91 98200 99999</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 font-bold text-[10px]">24/7 Emergency</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-slate-900">Partner & Channel Network</div>
                      <div className="text-[11px] text-slate-500">{COMPANY_INFO.careersEmail}</div>
                    </div>
                    <span className="text-amber-700 font-bold text-[11px]">Agency Track</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Consultation & Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-3xl bg-white border-2 border-amber-300 shadow-md">
                
                <div className="mb-6">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    Priority Booking
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 font-heading mt-1">
                    Book a Fiduciary Consultation
                  </h2>
                  <p className="text-xs text-slate-600 mt-1">
                    Fill out the form below. A senior certified financial planner will prepare a personalized audit before contacting you.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-amber-50 border-2 border-amber-400 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-black text-slate-900 font-heading">
                      Consultation Request Received!
                    </h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. An advisor specializing in <strong>{formData.product}</strong> will reach you at <strong>{formData.phone}</strong> within 30 business minutes.
                    </p>
                    <div className="text-xs font-mono bg-white px-3 py-1.5 rounded-lg border border-amber-200 inline-block text-slate-700">
                      Reference ID: HSI-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            product: 'Mutual Funds (SIP / Lumpsum)',
                            city: 'Mumbai',
                            horizon: '5-10 Years',
                            message: ''
                          });
                        }}
                        className="px-4 py-2 rounded-xl bg-slate-900 text-amber-300 text-xs font-bold hover:bg-slate-800 transition-colors"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Mobile Number (WhatsApp Preferred) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98200 12345"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ramesh@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                        />
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          City / Current Location *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Mumbai, Pune, Delhi, NRI"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Primary Financial Goal / Service *
                        </label>
                        <select
                          value={formData.product}
                          onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium bg-white"
                        >
                          <option>Mutual Funds (SIP / Lumpsum)</option>
                          <option>Term Life Insurance (High Cover)</option>
                          <option>Health & Mediclaim (1-Crore Shield)</option>
                          <option>Fractional Commercial Real Estate (CRE)</option>
                          <option>Sovereign Gold Bonds & 54EC Bonds</option>
                          <option>Home Loan & Institutional Credit</option>
                          <option>Comprehensive Portfolio Second Opinion</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          Target Horizon
                        </label>
                        <select
                          value={formData.horizon}
                          onChange={(e) => setFormData({ ...formData, horizon: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium bg-white"
                        >
                          <option>Immediate / Under 1 Year</option>
                          <option>1 to 3 Years</option>
                          <option>3 to 5 Years</option>
                          <option>5 to 10 Years</option>
                          <option>10+ Years (Generational)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Specific Questions or Current Portfolio Notes (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Looking to start a ₹15,000/mo SIP for my daughter's education and review my existing term policy..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 font-medium"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-600 hover:to-yellow-500 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Confirm & Schedule Free Consultation</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-slate-500 text-center pt-1">
                      🔒 Zero spam guarantee. We respect your privacy. All details are kept confidential under AMFI & IRDAI compliance guidelines.
                    </p>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Transit & BKC Directions Section */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-amber-50/50 border-2 border-amber-200 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-amber-900 font-heading">
                By Mumbai Metro
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Line 3 (Aqua Line) & Line 2B: Bandra-Kurla Complex station exit, 300 meters walking distance to Horizon Financial Tower.
              </p>
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-amber-900 font-heading">
                Valet & Visitor Parking
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Dedicated basement visitor parking with complimentary valet service for all registered advisory appointments.
              </p>
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-amber-900 font-heading">
                Virtual / Zoom Meetings
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Prefer not to travel? We host daily encrypted Google Meet & Zoom advisory sessions for pan-India and overseas NRI clients.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
