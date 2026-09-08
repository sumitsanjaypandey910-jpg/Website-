import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/hsiData';

interface TopBarProps {
  onOpenConsultation: (product?: string) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenConsultation }) => {
  return (
    <div className="bg-[#0b192c] text-slate-300 text-xs py-2 border-b border-slate-800/80 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
        
        {/* Left Side: Regulatory & Trust Credentials */}
        <div className="flex items-center gap-4 text-[11px] tracking-wide">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>AMFI Reg: {COMPANY_INFO.amfiRegNo}</span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-1 text-slate-300">
            <span>IRDAI No: {COMPANY_INFO.irdaiRegNo}</span>
          </div>
          <span className="text-slate-600 hidden md:inline">|</span>
          <div className="items-center gap-1 text-slate-300 hidden md:flex">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>Mon–Sat: 9:30 AM – 6:30 PM IST</span>
          </div>
        </div>

        {/* Right Side: Quick Contact & Fast Advisory Action */}
        <div className="flex items-center gap-5">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium">{COMPANY_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hidden lg:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{COMPANY_INFO.email}</span>
          </a>

          <button
            onClick={() => onOpenConsultation()}
            className="inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-2.5 py-0.5 rounded text-[11px] transition-all shadow-sm"
          >
            <Sparkles className="w-3 h-3" />
            <span>Free Portfolio Review</span>
          </button>
        </div>

      </div>
    </div>
  );
};
