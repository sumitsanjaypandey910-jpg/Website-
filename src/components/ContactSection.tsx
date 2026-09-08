import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  MessageSquare,
  Sparkles,
  Award
} from 'lucide-react';
import { COMPANY_INFO, TESTIMONIALS } from '../data/hsiData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: 'Mutual Funds (SIP / Lumpsum)',
    city: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
            <span>Advisory & Client Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Connect With Our Wealth Advisors
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Reach out for bespoke portfolio allocation, group insurance covers, or partner leadership queries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-2xl bg-[#0b192c] text-white space-y-5 shadow-lg border border-amber-500/30">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
                  Headquarters
                </span>
                <h3 className="text-xl font-bold font-heading">
                  Horizon Secure Investments
                </h3>
                <p className="text-xs text-amber-200/90 font-medium">
                  {COMPANY_INFO.motto}
                </p>
              </div>

              <div className="space-y-3.5 text-xs text-slate-200 pt-2 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>{COMPANY_INFO.address}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div>Direct: <a href={`tel:${COMPANY_INFO.phone}`} className="text-white font-bold hover:underline">{COMPANY_INFO.phone}</a></div>
                    <div>Toll-Free: <a href={`tel:${COMPANY_INFO.tollFree}`} className="text-white font-bold hover:underline">{COMPANY_INFO.tollFree}</a></div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div><a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:underline">{COMPANY_INFO.email}</a></div>
                    <div><a href={`mailto:${COMPANY_INFO.careersEmail}`} className="text-amber-300 hover:underline">{COMPANY_INFO.careersEmail}</a> (Partnership)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{COMPANY_INFO.operatingHours}</span>
                </div>
              </div>

              {/* Regulatory Seal */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>AMFI ARN: {COMPANY_INFO.amfiRegNo}</span>
                </span>
                <span>IRDAI: {COMPANY_INFO.irdaiRegNo}</span>
              </div>
            </div>

            {/* Testimonial snippet */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 mb-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Verified Client Feedback</span>
              </div>
              <p className="text-xs text-slate-600 italic leading-relaxed">
                "{TESTIMONIALS[0].quote}"
              </p>
              <div className="mt-3 text-xs font-bold text-slate-900">
                {TESTIMONIALS[0].name}
              </div>
              <div className="text-[11px] text-slate-500">
                {TESTIMONIALS[0].role}, {TESTIMONIALS[0].city}
              </div>
            </div>

          </div>

          {/* Right Column: WordPress-Style Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <div className="mb-6">
                <h3 className="text-xl font-black text-slate-900 font-heading">
                  Direct Enquiry & Portfolio Audit Form
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill out your details to receive customized policy comparisons and investment schedules.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 font-heading">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your request for <strong>{formData.product}</strong> has been logged. An HSI advisor will reach out to you shortly at {formData.phone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Singhania"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:outline-none shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        Phone Number (with WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98200 12345"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:outline-none shadow-xs"
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
                        placeholder="vikram@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:outline-none shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">
                        City / State *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mumbai, Maharashtra"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 focus:outline-none shadow-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Choose Service / Product Category
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none shadow-xs"
                    >
                      <option value="Mutual Funds (SIP / LUMPSUM / SWP / STP)">Mutual Funds (SIP / LUMPSUM / SWP / STP)</option>
                      <option value="Life Insurance (SAVINGS / ULIP / TULIP / PENSION / CHILDREN)">Life Insurance (SAVINGS / ULIP / TULIP / PENSION / CHILDREN)</option>
                      <option value="Health Insurance (GMC / GPA / SENIOR CITIZEN / CANCER)">Health Insurance (GMC / GPA / SENIOR CITIZEN / CANCER)</option>
                      <option value="General Insurance (MOTOR / FIRE / MARINE / WC / D&O)">General Insurance (MOTOR / FIRE / MARINE / WC / D&O)</option>
                      <option value="Stocks & Trading (NSE / BSE / FOREX / INTRADAY / F&O)">Stocks & Trading (NSE / BSE / FOREX / INTRADAY / F&O)</option>
                      <option value="Bonds (GOVERNMENT / SECURED / TAX SAVING / SOVEREIGN)">Bonds (GOVERNMENT / SECURED / TAX SAVING / SOVEREIGN)</option>
                      <option value="Fraction of Property (Commercial Real Estate)">Fraction of Property (Commercial Real Estate)</option>
                      <option value="Loans (HOME / PERSONAL / BUSINESS / LAP / WORKING CAPITAL / LAS)">Loans (HOME / PERSONAL / BUSINESS / LAP / WORKING CAPITAL / LAS)</option>
                      <option value="Partner / Leadership Opportunities">Partner / Leadership Opportunities</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">
                      Message / Requirement Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please mention your approximate investment budget or preferred coverage amount..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-[#0b192c] hover:bg-[#122a4a] text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Send Advisory Inquiry Now</span>
                  </button>

                  <div className="text-center text-[10px] text-slate-400 pt-1">
                    🔒 We respect your privacy. No unsolicited promotional spam.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
