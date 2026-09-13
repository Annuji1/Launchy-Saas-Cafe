import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[#F7F8FC] text-slate-900 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 text-xs font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>ANSWERS & CLARITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight font-['Space_Grotesk']">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Have questions about how Launchly works? Find quick answers right here.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-accordion-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#4F7CFF]/50 shadow-md ring-1 ring-[#4F7CFF]/20'
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F7CFF] rounded-2xl"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0B1020] pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#4F7CFF] text-white rotate-180'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div className="pt-2 border-t border-slate-100">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold text-sm text-[#0B1020]">Have more questions?</h4>
            <p className="text-xs text-slate-500">We are happy to answer all specific questions about your workflow.</p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#0B1020] hover:bg-slate-800 transition-colors shrink-0"
          >
            Contact Support
          </a>
        </div>

      </div>
    </section>
  );
}
