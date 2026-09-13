import { useState } from 'react';
import { FolderPlus, UserCheck, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (name: string) => {
    switch (name) {
      case 'FolderPlus':
        return <FolderPlus className="w-6 h-6" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <FolderPlus className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-white text-slate-900 border-t border-b border-slate-200/70 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 text-xs font-bold tracking-wider uppercase mb-3">
            <span>SEAMLESS WORKFLOW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight font-['Space_Grotesk']">
            From Idea to Execution in Three Simple Steps
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A frictionless journey crafted to turn ambitious team goals into shipped outcomes.
          </p>
        </div>

        {/* Desktop Connected Process & Mobile Vertical Stack */}
        <div className="relative">
          
          {/* Horizontal Connecting Timeline Line (Desktop only, positioned behind cards) */}
          <div 
            className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#4F7CFF] via-[#8B5CF6] to-[#4F7CFF] -z-0 opacity-40"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {HOW_IT_WORKS_STEPS.map((step, index) => {
              const isCurrent = activeStep === index;
              return (
                <div
                  key={step.number}
                  id={`step-card-${step.number}`}
                  onClick={() => setActiveStep(index)}
                  className={`group relative bg-[#F7F8FC] rounded-2xl p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'border-[#4F7CFF] shadow-lg shadow-[#4F7CFF]/10 ring-2 ring-[#4F7CFF]/20 bg-white -translate-y-1'
                      : 'border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Step Number Circle + Icon Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-mono text-base transition-all duration-300 ${
                            isCurrent
                              ? 'bg-gradient-to-tr from-[#4F7CFF] to-[#8B5CF6] text-white shadow-md shadow-[#4F7CFF]/30 scale-105'
                              : 'bg-white border border-slate-300 text-slate-700 group-hover:border-[#4F7CFF] group-hover:text-[#4F7CFF]'
                          }`}
                        >
                          {step.number}
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                          Phase {index + 1}
                        </span>
                      </div>

                      <div
                        className={`p-2.5 rounded-xl transition-colors ${
                          isCurrent
                            ? 'bg-[#4F7CFF]/10 text-[#4F7CFF]'
                            : 'bg-slate-200/60 text-slate-600 group-hover:text-[#4F7CFF]'
                        }`}
                      >
                        {getStepIcon(step.iconName)}
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h3 className="text-2xl font-bold text-[#0B1020] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                      {step.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {step.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#4F7CFF] shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step status bar */}
                  <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold">
                    <span className={isCurrent ? 'text-[#4F7CFF]' : 'text-slate-400'}>
                      {isCurrent ? 'Active Focus Step' : 'Click to inspect'}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isCurrent ? 'text-[#4F7CFF] translate-x-1' : 'text-slate-400'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
