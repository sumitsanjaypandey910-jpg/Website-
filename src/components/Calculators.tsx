import React, { useState, useMemo } from 'react';
import { Calculator, Sparkles, TrendingUp, BadgePercent, Clock, ArrowRight, ShieldAlert } from 'lucide-react';

interface CalculatorsProps {
  onPlanGoal: (details: string) => void;
}

export const Calculators: React.FC<CalculatorsProps> = ({ onPlanGoal }) => {
  const [calcType, setCalcType] = useState<'sip' | 'lumpsum' | 'loan'>('sip');

  // SIP States
  const [sipMonthly, setSipMonthly] = useState<number>(10000);
  const [sipRate, setSipRate] = useState<number>(12);
  const [sipYears, setSipYears] = useState<number>(15);

  // Lumpsum States
  const [lumpAmount, setLumpAmount] = useState<number>(200000);
  const [lumpRate, setLumpRate] = useState<number>(12);
  const [lumpYears, setLumpYears] = useState<number>(10);

  // Loan EMI States
  const [loanAmount, setLoanAmount] = useState<number>(3000000); // 30 Lakhs
  const [loanRate, setLoanRate] = useState<number>(8.75);
  const [loanYears, setLoanYears] = useState<number>(20);

  // SIP Calculation
  const sipResult = useMemo(() => {
    const monthlyRate = sipRate / 12 / 100;
    const months = sipYears * 12;
    const totalInvested = sipMonthly * months;
    
    // M = P * ((1 + i)^n - 1) / i * (1 + i)
    let totalMaturity = 0;
    if (monthlyRate > 0) {
      totalMaturity =
        sipMonthly *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);
    } else {
      totalMaturity = totalInvested;
    }
    const wealthGained = totalMaturity - totalInvested;
    return {
      totalInvested: Math.round(totalInvested),
      wealthGained: Math.round(wealthGained),
      totalMaturity: Math.round(totalMaturity),
    };
  }, [sipMonthly, sipRate, sipYears]);

  // Lumpsum Calculation
  const lumpResult = useMemo(() => {
    const totalInvested = lumpAmount;
    const totalMaturity = lumpAmount * Math.pow(1 + lumpRate / 100, lumpYears);
    const wealthGained = totalMaturity - totalInvested;
    return {
      totalInvested: Math.round(totalInvested),
      wealthGained: Math.round(wealthGained),
      totalMaturity: Math.round(totalMaturity),
    };
  }, [lumpAmount, lumpRate, lumpYears]);

  // Loan EMI Calculation
  const loanResult = useMemo(() => {
    const r = loanRate / 12 / 100;
    const n = loanYears * 12;
    let emi = 0;
    if (r > 0) {
      emi = (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    } else {
      emi = loanAmount / n;
    }
    const totalPayable = emi * n;
    const totalInterest = totalPayable - loanAmount;
    return {
      monthlyEmi: Math.round(emi),
      principal: Math.round(loanAmount),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable),
    };
  }, [loanAmount, loanRate, loanYears]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section id="calculators" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Interactive Financial Planning Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculate Your Wealth & Credit Plan
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Visualize compounding returns on your Mutual Fund SIPs or forecast monthly EMIs for Home, LAP, and Business Loans with institutional precision.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 shadow-xs">
            <button
              onClick={() => setCalcType('sip')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                calcType === 'sip'
                  ? 'bg-[#0b192c] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              SIP Wealth Calculator
            </button>
            <button
              onClick={() => setCalcType('lumpsum')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                calcType === 'lumpsum'
                  ? 'bg-[#0b192c] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Lumpsum Calculator
            </button>
            <button
              onClick={() => setCalcType('loan')}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                calcType === 'loan'
                  ? 'bg-[#0b192c] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Loan EMI Calculator
            </button>
          </div>
        </div>

        {/* Calculator Main Body */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          
          {/* SIP CALCULATOR */}
          {calcType === 'sip' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Sliders Form */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Monthly Investment (₹)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      {formatCurrency(sipMonthly)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="150000"
                    step="500"
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                    <span>₹500</span>
                    <span>₹50,000</span>
                    <span>₹1,50,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Expected Annual Return (% p.a.)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      {sipRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="22"
                    step="0.5"
                    value={sipRate}
                    onChange={(e) => setSipRate(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                    <span>6% (Conservative Debt)</span>
                    <span>12-15% (Equity)</span>
                    <span>22%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Time Horizon (Years)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      {sipYears} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={sipYears}
                    onChange={(e) => setSipYears(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                    <span>1 Year</span>
                    <span>15 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>

              {/* Output Display Card */}
              <div className="lg:col-span-5 bg-[#0b192c] text-white p-6 sm:p-7 rounded-2xl shadow-lg border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                    Maturity Wealth Projection
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                    {formatCurrency(sipResult.totalMaturity)}
                  </div>

                  {/* Proportional Growth Bar */}
                  <div className="mt-6">
                    <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
                      <div
                        style={{
                          width: `${(sipResult.totalInvested / sipResult.totalMaturity) * 100}%`,
                        }}
                        className="bg-slate-400"
                        title="Invested"
                      />
                      <div
                        style={{
                          width: `${(sipResult.wealthGained / sipResult.totalMaturity) * 100}%`,
                        }}
                        className="bg-amber-400"
                        title="Wealth Gain"
                      />
                    </div>
                    <div className="flex justify-between text-[11px] mt-2">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" />
                        Invested: {formatCurrency(sipResult.totalInvested)}
                      </span>
                      <span className="flex items-center gap-1.5 text-amber-300 font-bold">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                        Returns: {formatCurrency(sipResult.wealthGained)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Total Invested Amount</span>
                      <strong className="text-white">{formatCurrency(sipResult.totalInvested)}</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Estimated Wealth Gain</span>
                      <strong className="text-emerald-400 font-bold">+{formatCurrency(sipResult.wealthGained)}</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onPlanGoal(
                      `SIP Plan: ₹${sipMonthly}/month for ${sipYears} years at ${sipRate}% expected return`
                    )
                  }
                  className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Start This SIP with HSI Advisor</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* LUMPSUM CALCULATOR */}
          {calcType === 'lumpsum' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Total Lumpsum Investment (₹)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      {formatCurrency(lumpAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10000"
                    max="5000000"
                    step="10000"
                    value={lumpAmount}
                    onChange={(e) => setLumpAmount(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                    <span>₹10,000</span>
                    <span>₹25,00,000</span>
                    <span>₹50,00,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Expected Return Rate (% p.a.)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      {lumpRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="22"
                    step="0.5"
                    value={lumpRate}
                    onChange={(e) => setLumpRate(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Time Horizon (Years)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      {lumpYears} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="1"
                    value={lumpYears}
                    onChange={(e) => setLumpYears(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0b192c] text-white p-6 sm:p-7 rounded-2xl shadow-lg border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                    Lumpsum Wealth Forecast
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                    {formatCurrency(lumpResult.totalMaturity)}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Invested Capital</span>
                      <strong className="text-white">{formatCurrency(lumpResult.totalInvested)}</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Capital Growth / Gains</span>
                      <strong className="text-emerald-400 font-bold">+{formatCurrency(lumpResult.wealthGained)}</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Multiplier Effect</span>
                      <strong className="text-amber-300 font-bold">
                        {(lumpResult.totalMaturity / lumpResult.totalInvested).toFixed(2)}x
                      </strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onPlanGoal(
                      `Lumpsum Investment: ₹${lumpAmount} for ${lumpYears} years at ${lumpRate}% expected return`
                    )
                  }
                  className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Deploy Lumpsum Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* LOAN EMI CALCULATOR */}
          {calcType === 'loan' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Required Loan Amount (₹)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      {formatCurrency(loanAmount)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="20000000"
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                    <span>₹1 Lakh</span>
                    <span>₹1 Crore</span>
                    <span>₹2 Crores</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Interest Rate (% p.a.)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      {loanRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="7.5"
                    max="18"
                    step="0.25"
                    value={loanRate}
                    onChange={(e) => setLoanRate(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                    <span>7.5% (Home Loan)</span>
                    <span>9.5% (LAP/Business)</span>
                    <span>18%</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Loan Tenure (Years)
                    </label>
                    <span className="text-base font-extrabold text-slate-900 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      {loanYears} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0b192c] text-white p-6 sm:p-7 rounded-2xl shadow-lg border border-amber-500/30 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
                    Monthly Loan EMI
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                    {formatCurrency(loanResult.monthlyEmi)}
                    <span className="text-xs font-medium text-slate-400 ml-1">/month</span>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 space-y-2.5 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Principal Amount</span>
                      <strong className="text-white">{formatCurrency(loanResult.principal)}</strong>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Total Interest Payable</span>
                      <strong className="text-amber-400 font-bold">{formatCurrency(loanResult.totalInterest)}</strong>
                    </div>
                    <div className="flex justify-between text-slate-300 border-t border-slate-800/80 pt-2">
                      <span>Total Repayment (P + I)</span>
                      <strong className="text-white font-black">{formatCurrency(loanResult.totalPayable)}</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() =>
                    onPlanGoal(
                      `Loan Request: ₹${loanAmount} for ${loanYears} years (Est. EMI: ₹${loanResult.monthlyEmi})`
                    )
                  }
                  className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply for Fast Loan Approval</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
