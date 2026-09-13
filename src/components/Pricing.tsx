import { useState } from 'react';
import { Check, Sparkles, ArrowRight, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data/mockData';
import { PlanType } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PlanType) => void;
}

export default function Pricing({ onSelectPlan }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handlePlanClick = (planName: string) => {
    let mappedPlan: PlanType = 'General Enquiry';
    if (planName === 'Starter') mappedPlan = 'Starter';
    if (planName === 'Professional') mappedPlan = 'Professional';
    if (planName === 'Business') mappedPlan = 'Business';

    onSelectPlan(mappedPlan);

    // Smooth scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="pricing"
      className="py-20 md:py-28 bg-[#F7F8FC] text-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 text-xs font-bold tracking-wider uppercase mb-3">
            <span>TRANSPARENT VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight font-['Space_Grotesk']">
            Choose the Plan That Fits Your Team
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Start with the essentials and upgrade when your team is ready to grow.
          </p>

          {/* Monthly / Yearly Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white p-1.5 rounded-full border border-slate-200 shadow-sm">
            <button
              id="billing-monthly-btn"
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-[#0B1020] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            
            <button
              id="billing-yearly-btn"
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Yearly Billing</span>
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                billingCycle === 'yearly'
                  ? 'bg-white/20 text-white'
                  : 'bg-emerald-100 text-emerald-700'
              }`}>
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            const priceDisplay = billingCycle === 'monthly'
              ? `₹${plan.monthlyPrice.toLocaleString()}`
              : `₹${plan.yearlyPrice.toLocaleString()}`;
            const cycleText = billingCycle === 'monthly' ? '/month' : '/year';
            const savingsNote = billingCycle === 'yearly' ? 'billed annually (save 2 months)' : 'billed monthly';

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-[#0B1020] text-white shadow-2xl ring-2 ring-[#4F7CFF] lg:-translate-y-2'
                    : 'bg-white text-slate-900 border border-slate-200/90 shadow-md hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Description */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-2xl font-bold font-['Space_Grotesk'] ${
                      isPopular ? 'text-white' : 'text-[#0B1020]'
                    }`}>
                      {plan.name}
                    </h3>
                  </div>

                  <p className={`text-xs mb-6 ${
                    isPopular ? 'text-slate-300' : 'text-slate-500'
                  }`}>
                    {plan.description}
                  </p>

                  {/* Price Row */}
                  <div className="mb-6 pb-6 border-b border-slate-200/20">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
                        isPopular ? 'text-white' : 'text-[#0B1020]'
                      }`}>
                        {priceDisplay}
                      </span>
                      <span className={`text-sm font-medium ${
                        isPopular ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {cycleText}
                      </span>
                    </div>
                    <span className={`text-[11px] block mt-1 ${
                      isPopular ? 'text-emerald-400' : 'text-slate-500'
                    }`}>
                      {savingsNote}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${
                      isPopular ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      What's Included:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isPopular ? 'bg-[#4F7CFF] text-white' : 'bg-emerald-100 text-emerald-600'
                        }`}>
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={isPopular ? 'text-slate-200' : 'text-slate-700'}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  id={`cta-btn-${plan.id}`}
                  type="button"
                  onClick={() => handlePlanClick(plan.name)}
                  className={`w-full py-3.5 px-6 rounded-2xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    isPopular
                      ? 'bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3f6be8] hover:to-[#7c4ee0] text-white shadow-lg shadow-[#4F7CFF]/30 active:scale-98'
                      : 'bg-slate-100 hover:bg-slate-200 text-[#0B1020] active:scale-98'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Small Trust Guarantee Banner below Pricing */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <Zap className="w-4 h-4 text-[#4F7CFF]" />
          <span>Need custom team sizing or enterprise security? Our solutions team is ready to assist.</span>
        </div>

      </div>
    </section>
  );
}
