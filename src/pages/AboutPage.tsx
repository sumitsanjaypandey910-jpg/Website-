import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck2, 
  Scale, 
  Globe2, 
  Compass, 
  Quote 
} from 'lucide-react';
import { COMPANY_INFO, TRUST_PILLARS } from '../data/hsiData';
import { HsiLogo } from '../components/HsiLogo';
import { useSiteContent } from '../context/SiteContentContext';

interface AboutPageProps {
  onOpenConsultation: (product?: string) => void;
  onOpenPartnerModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenConsultation,
  onOpenPartnerModal,
}) => {
  const { about, testimonials, images } = useSiteContent();
  const milestones = [
    {
      year: "2009",
      title: "Foundation in Mumbai",
      description: "Established in Mumbai's financial center with a vision to provide conflict-free, research-backed financial planning for salaried professionals and business families."
    },
    {
      year: "2014",
      title: "AMFI Registration & ₹100 Cr AUM",
      description: "Received official AMFI ARN accreditation and crossed our inaugural landmark of ₹100 Crores in client Assets Under Management."
    },
    {
      year: "2018",
      title: "IRDAI Corporate Alliances",
      description: "Formally partnered with top 25+ Life, Health, and General Insurance companies to offer end-to-end multi-insurer claim assistance."
    },
    {
      year: "2022",
      title: "Expansion to Alternative Assets",
      description: "Integrated Grade-A Fractional Commercial Real Estate and RBI Sovereign Gold Bonds to empower retail investors with institutional yields."
    },
    {
      year: "2026",
      title: "₹650+ Crores & AI Advisory",
      description: "Serving over 18,500 families nationwide with an institutional advisory desk, 350+ channel partners, and real-time AI wealth intelligence."
    }
  ];

  const leadershipTeam = [
    {
      name: "Rajeshwar Sengupta",
      role: "Founder & Chief Investment Strategist",
      credentials: "CFP®, MBA (Finance - JBIMS), Ex-Chief Investment Advisor",
      experience: "22+ Years Market Experience",
      focus: "Macro asset allocation, equity compounding baskets & high-net-worth portfolio preservation.",
      imageBg: "from-amber-600 to-yellow-500"
    },
    {
      name: "Ananya Deshmukh",
      role: "Head of Insurance & Risk Protection",
      credentials: "Fellow of Insurance Institute of India (FIII), Actuarial Science Associate",
      experience: "16+ Years Experience",
      focus: "Comprehensive family health shields, 1-Crore term structures, and rapid corporate group claim settlement.",
      imageBg: "from-blue-600 to-indigo-700"
    },
    {
      name: "Vikramaditya Kulkarni",
      role: "Director of Alternative Assets & Real Estate",
      credentials: "CA, CFA Level III, RICS Accredited",
      experience: "14+ Years Experience",
      focus: "Pre-leased Grade-A commercial office due diligence, 8-10% rental yields, and 54EC capital gains optimization.",
      imageBg: "from-emerald-600 to-teal-700"
    },
    {
      name: "Meera Krishnan",
      role: "Head of Partner Growth & Channel Network",
      credentials: "M.Com, Certified Financial Planner (CFP)",
      experience: "12+ Years Experience",
      focus: "Mentoring 350+ financial advisors, agency leadership development, and digital client relationship systems.",
      imageBg: "from-purple-600 to-violet-700"
    }
  ];

  return (
    <div className="bg-white">
      
      {/* Page Header / Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#071325] via-[#0b1c36] to-[#0a192f] text-white py-16 md:py-24 border-b-2 border-orange-500">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-bold text-orange-300/90 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">About Us & Trust Pillars</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>{about.badge || "Certified Multi-Asset Wealth Firm"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading tracking-tight leading-tight">
              {about.mainHeading || "Preserving & Multiplying"}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">{about.highlightHeading || "Generational Wealth"}</span>
            </h1>

            <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
              {about.leadDescription || "Headquartered in Mumbai's Bandra-Kurla Complex (BKC), Horizon Secure Investments brings together over 15 years of institutional financial planning, fiduciary integrity, and multi-asset advisory under one roof."}
            </p>

            {/* Quick Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-700/60">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-orange-400 font-heading">
                  {about.experienceYears || COMPANY_INFO.experienceYears}
                </div>
                <div className="text-xs text-slate-300 font-medium">Market Leadership</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                  {about.aum || COMPANY_INFO.aum}
                </div>
                <div className="text-xs text-slate-300 font-medium">Assets Under Advisory</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-orange-400 font-heading">
                  {about.investorCount || COMPANY_INFO.investorCount}
                </div>
                <div className="text-xs text-slate-300 font-medium">Happy Families</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white font-heading">
                  {about.insurancePartnerCount || "25+"}
                </div>
                <div className="text-xs text-slate-300 font-medium">Insurance Partners</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Philosophy */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-950 text-xs font-black uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5 text-orange-600" />
                <span>Our Founding Principles</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading leading-tight">
                "Plan Today. Protect Tomorrow. Prosper Always."
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Too many families suffer from one of two financial mistakes: either chasing speculative returns without protective life and health shields, or parking hard-earned money in low-yield traditional savings that fail to beat inflation.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Horizon Secure Investments, we engineer a <strong>balanced dual-engine model</strong>: aggressive compounding through curated equity funds and alternative real assets, paired with airtight protection policies across India's top insurers.
              </p>

              <div className="p-5 rounded-2xl bg-white border-2 border-orange-300 shadow-sm space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-orange-800 font-heading">
                  Our Uncompromising Fiduciary Standard
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  We maintain zero conflict of interest. Your investment folios remain directly in your own name with SEBI-registered depositories and respective Asset Management Companies (AMCs). We act strictly as your personal financial fiduciary.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-orange-400 transition-all shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold">
                  <Scale className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">Zero Hidden Charges</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete fee transparency across all products. Every expense ratio, exit load, and tax implication is laid out in plain English.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-orange-400 transition-all shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">Claim Advocacy</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated in-house claims desk standing beside your family during medical emergencies or life settlements to guarantee rapid payouts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-orange-400 transition-all shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">Active Rebalancing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We don't sell and disappear. We conduct quarterly portfolio reviews and rebalance asset allocations based on macroeconomic shifts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-orange-400 transition-all shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                  <Globe2 className="w-5 h-5 text-purple-700" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-heading">NRI & Corporate Desk</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized solutions for Non-Resident Indians (NRIs) and MSME corporate treasuries managing surplus capital and Group Mediclaim.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Core Pillars of Excellence (Detailed) */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-950 text-xs font-bold uppercase tracking-wider mb-2">
              <Award className="w-3.5 h-3.5 text-orange-600" />
              <span>Brochure Pillars</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading">
              Our 4 Pillars of Excellence
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              The cornerstone values that have guided our firm through volatile bull runs and global corrections since 2009.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-orange-400 hover:bg-white transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black flex items-center justify-center text-lg mb-4 shadow-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-black text-slate-900 font-heading">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-bold text-orange-800 mt-1 mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center text-[11px] font-bold text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
                  <span>Institutional Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Milestones Journey */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a192f] text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span>Growth Story</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading">
              A Decade and a Half of Measured Growth
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              How a boutique advisory firm grew into one of Western India's most trusted wealth partners.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {milestones.map((m, i) => (
              <div 
                key={i}
                className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-orange-400 transition-all shadow-xs"
              >
                <div className="sm:w-28 shrink-0 flex items-center sm:flex-col sm:items-start justify-between sm:justify-center">
                  <span className="text-2xl sm:text-3xl font-black text-orange-600 font-heading">
                    {m.year}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Milestone {i + 1}
                  </span>
                </div>
                <div className="sm:border-l-2 sm:border-slate-200 sm:pl-6 flex-1 space-y-1">
                  <h3 className="text-base font-bold text-slate-900 font-heading">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Advisory Committee */}
      <section className="py-16 md:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-950 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-orange-600" />
              <span>Leadership Committee</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 font-heading">
              Certified Financial Planners & Actuaries
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base">
              Our core committee brings decades of combined capital markets, actuarial risk, and estate planning expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((leader, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-orange-400 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${leader.imageBg} text-white font-black flex items-center justify-center text-xl mb-4 shadow-sm font-heading`}>
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-base font-black text-slate-900 font-heading">
                    {leader.name}
                  </h3>
                  <div className="text-xs font-bold text-orange-800 mt-0.5">
                    {leader.role}
                  </div>
                  <div className="text-[11px] font-semibold text-slate-500 mt-2 pb-2 border-b border-slate-100">
                    {leader.credentials}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-3 font-medium">
                    {leader.focus}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-500">
                  {leader.experience}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              What Our Investors Say
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Real stories from business families, IT professionals, and senior citizens who trust HSI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div 
                key={t.id || idx}
                className="p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-orange-300 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-8 h-8 text-orange-300 mb-3" />
                  <p className="text-xs text-slate-700 leading-relaxed italic font-medium">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="font-bold text-xs text-slate-900 font-heading">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                  <div className="text-[10px] text-orange-700 font-semibold mt-0.5">{t.portfolio} • {t.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-gradient-to-r from-[#071325] via-[#0b1c36] to-[#0a192f] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black font-heading leading-tight">
            Ready to Build an Institutional Wealth Plan?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Schedule a 45-minute confidential portfolio audit with an HSI certified financial planner. In-person at our BKC Mumbai office or via secure video call.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              Book Complimentary Audit
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all"
            >
              Visit BKC Headquarters &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
