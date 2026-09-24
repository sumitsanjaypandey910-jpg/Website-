import React, { useState, useMemo } from 'react';
import { 
  TrendingUp, 
  Shield, 
  HeartPulse, 
  Umbrella, 
  CandlestickChart, 
  Award, 
  Building2, 
  BadgeIndianRupee, 
  Search, 
  ArrowRight, 
  Check, 
  Sparkles,
  Info
} from 'lucide-react';
import { PRODUCTS } from '../data/hsiData';
import { ProductItem } from '../types';

interface ProductCatalogProps {
  onSelectProduct: (productName: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProductDetail, setSelectedProductDetail] = useState<ProductItem | null>(null);

  const getCategoryIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'LineChart': return <TrendingUp className={className} />;
      case 'Shield': return <Shield className={className} />;
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'Umbrella': return <Umbrella className={className} />;
      case 'CandlestickChart': return <CandlestickChart className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Building2': return <Building2 className={className} />;
      case 'BadgeIndianRupee': return <BadgeIndianRupee className={className} />;
      default: return <TrendingUp className={className} />;
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Tab filter
      const matchesTab = 
        activeTab === 'all' ||
        (activeTab === 'wealth' && (item.category === 'mutual_funds' || item.category === 'stocks')) ||
        (activeTab === 'insurance' && (item.category === 'life_insurance' || item.category === 'health_insurance' || item.category === 'general_insurance')) ||
        (activeTab === 'fixed_income' && item.category === 'bonds') ||
        (activeTab === 'property' && item.category === 'fractional_property') ||
        (activeTab === 'loans' && item.category === 'loans');

      // Search query filter
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.subtypes.some(sub => sub.toLowerCase().includes(query)) ||
        item.keyBenefits.some(b => b.toLowerCase().includes(query));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="products" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>HSI Comprehensive Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Financial Products & Solutions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Curated investment instruments, comprehensive institutional insurance covers, and flexible capital facilities designed to build and defend your wealth.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white p-3.5 rounded-2xl shadow-sm border border-slate-200">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'wealth', label: 'Wealth & Stocks' },
              { id: 'insurance', label: 'Insurance Shields' },
              { id: 'fixed_income', label: 'Bonds' },
              { id: 'property', label: 'Fractional Real Estate' },
              { id: 'loans', label: 'Loans & Credit' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wide transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#0a192f] text-white shadow-sm border border-[#0a192f]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search SIP, ULIP, LAP, Bonds..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ×
              </button>
            )}
          </div>

        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="wp-card flex flex-col justify-between bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-orange-400 transition-all group"
            >
              <div>
                {/* Card Top: Icon & Category Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0a192f] text-orange-400 flex items-center justify-center shadow-md">
                    {getCategoryIcon(product.iconName, "w-6 h-6")}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${product.colorScheme.badgeBg}`}>
                    {product.categoryLabel}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-[#0a192f] tracking-wide font-heading">
                  {product.title}
                </h3>

                {/* Exact Brochure Description */}
                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed italic">
                  "{product.shortDescription}"
                </p>

                {/* Brochure Subtypes / Badges */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                    Brochure Offerings:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {product.subtypes.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-300 text-[11px] font-bold text-slate-800 transition-colors"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Benefits List */}
                <div className="mt-4 space-y-1.5 text-xs text-slate-700">
                  {product.keyBenefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedProductDetail(product)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-slate-500" />
                  <span>Learn More</span>
                </button>

                <button
                  onClick={() => onSelectProduct(product.title)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xs font-bold transition-colors shadow-sm cursor-pointer"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-200" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Empty state if search returns nothing */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <div className="text-base font-bold text-slate-800">No products matching "{searchQuery}"</div>
            <p className="text-xs text-slate-500 mt-1">Try searching for SIP, Insurance, Bonds, LAP, or Property.</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#0a192f] text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Brochure Highlight Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-[#0a192f] font-heading">
              Need Help Choosing the Right Product Mix?
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Our AMFI & IRDAI certified advisors will analyze your family's cash flow, tax liabilities, and future milestones free of cost.
            </p>
          </div>
          <button
            onClick={() => onSelectProduct('General Portfolio Advisory')}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all cursor-pointer"
          >
            Get Personalized Allocation Plan
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProductDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-[#0b192c] text-white p-6 relative">
              <button
                onClick={() => setSelectedProductDetail(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                {selectedProductDetail.categoryLabel}
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading mt-1">
                {selectedProductDetail.title}
              </h3>
              <p className="text-xs text-slate-300 mt-1 italic">
                "{selectedProductDetail.shortDescription}"
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Sub-Categories & Options Included
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedProductDetail.subtypes.map((sub, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-xs font-bold text-amber-900"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Product Overview
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedProductDetail.detailedDescription}
                </p>
              </div>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Key Strategic Benefits
                </h5>
                <div className="space-y-2">
                  {selectedProductDetail.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold">
                        ✓
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setSelectedProductDetail(null)}
                className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>

              <button
                onClick={() => {
                  const title = selectedProductDetail.title;
                  setSelectedProductDetail(null);
                  onSelectProduct(title);
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#0b192c] hover:bg-[#162e4c] text-white font-bold text-xs shadow-md transition-all"
              >
                <span>Enquire About {selectedProductDetail.title}</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
