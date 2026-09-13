import React from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Users, 
  BarChart3, 
  BellRing, 
  ShieldCheck, 
  ArrowUpRight 
} from 'lucide-react';
import { FEATURES_DATA } from '../data/mockData';

export default function Features() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-6 h-6 text-[#4F7CFF]" />;
      case 'CheckSquare':
        return <CheckSquare className="w-6 h-6 text-[#8B5CF6]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#4F7CFF]" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6 text-[#8B5CF6]" />;
      case 'BellRing':
        return <BellRing className="w-6 h-6 text-[#4F7CFF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#8B5CF6]" />;
      default:
        return <LayoutDashboard className="w-6 h-6 text-[#4F7CFF]" />;
    }
  };

  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-[#F7F8FC] text-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] border border-[#4F7CFF]/20 text-xs font-bold tracking-wider uppercase mb-3">
            <span>CORE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight font-['Space_Grotesk']">
            Everything Your Team Needs to Move Forward
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Powerful tools designed to simplify workflows, improve collaboration, and keep every project on track.
          </p>
        </div>

        {/* 6 Core Feature Cards: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES_DATA.map((feature, index) => {
            const isPurpleTheme = index % 2 === 1;
            return (
              <div
                key={feature.id}
                id={`feature-card-${feature.id}`}
                className="group relative bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle hover accent gradient glow */}
                <div 
                  className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none ${
                    isPurpleTheme ? 'bg-[#8B5CF6]' : 'bg-[#4F7CFF]'
                  }`} 
                />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className={`w-13 h-13 rounded-xl p-3.5 transition-all duration-300 flex items-center justify-center ${
                        isPurpleTheme 
                          ? 'bg-[#8B5CF6]/10 group-hover:bg-[#8B5CF6] group-hover:text-white' 
                          : 'bg-[#4F7CFF]/10 group-hover:bg-[#4F7CFF] group-hover:text-white'
                      }`}
                    >
                      {getIcon(feature.iconName)}
                    </div>
                    {feature.badge && (
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/70">
                        {feature.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#0B1020] mb-3 group-hover:text-[#4F7CFF] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom interactive peek */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-[#4F7CFF] transition-colors">
                  <span>Explore module</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
