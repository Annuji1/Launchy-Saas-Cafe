import { useEffect, useState, useRef } from 'react';
import { Users, Briefcase, Zap, Star, ShieldCheck, Award } from 'lucide-react';
import { HERO_TRUST_METRICS } from '../data/mockData';

export default function TrustStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animated counters
  const [countUsers, setCountUsers] = useState(0);
  const [countProjects, setCountProjects] = useState(0);
  const [countUptime, setCountUptime] = useState(90.0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 1600;
    const interval = 25;
    const steps = duration / interval;

    const timer = setInterval(() => {
      start++;
      const progress = Math.min(start / steps, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCountUsers(Math.floor(ease * 10));
      setCountProjects(Math.floor(ease * 25));
      setCountUptime(Number((90 + ease * 9.9).toFixed(1)));

      if (start >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      id="trust-stats"
      ref={sectionRef}
      className="py-16 md:py-20 bg-[#F7F8FC] text-slate-900 border-b border-slate-200/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow / Social Proof Line */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-[#4F7CFF]" />
            <span>Proven Reliability & Scale</span>
          </div>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Trusted by high-growth startups and visionary product engineering teams
          </p>
        </div>

        {/* 3 Main Statistics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Stat 1: 10K+ Active Users */}
          <div 
            id="stat-card-active-users"
            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200/90 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#4F7CFF]/10 text-[#4F7CFF] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#4F7CFF] group-hover:text-white transition-all duration-300 shadow-sm">
              <Users className="w-7 h-7" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0B1020] font-['Space_Grotesk'] mb-2">
              <span>{countUsers}K+</span>
            </div>
            <h3 className="text-base font-bold text-slate-800">
              Active Users
            </h3>
            <p className="mt-1 text-xs text-slate-500 font-medium">
              Collaborating daily across 40+ countries
            </p>
            <div className="w-12 h-1 bg-[#4F7CFF] rounded-full mt-4 opacity-70 group-hover:w-20 transition-all duration-300" />
          </div>

          {/* Stat 2: 25K+ Projects Managed */}
          <div 
            id="stat-card-projects-managed"
            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200/90 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#8B5CF6]/10 text-[#8B5CF6] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all duration-300 shadow-sm">
              <Briefcase className="w-7 h-7" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0B1020] font-['Space_Grotesk'] mb-2">
              <span>{countProjects}K+</span>
            </div>
            <h3 className="text-base font-bold text-slate-800">
              Projects Managed
            </h3>
            <p className="mt-1 text-xs text-slate-500 font-medium">
              Shipped on time with measurable velocity
            </p>
            <div className="w-12 h-1 bg-[#8B5CF6] rounded-full mt-4 opacity-70 group-hover:w-20 transition-all duration-300" />
          </div>

          {/* Stat 3: 99.9% Platform Uptime */}
          <div 
            id="stat-card-platform-uptime"
            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-200/90 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Zap className="w-7 h-7" />
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0B1020] font-['Space_Grotesk'] mb-2">
              <span>{countUptime.toFixed(1)}%</span>
            </div>
            <h3 className="text-base font-bold text-slate-800">
              Platform Uptime
            </h3>
            <p className="mt-1 text-xs text-slate-500 font-medium">
              Enterprise SLA availability backed by geo-redundancy
            </p>
            <div className="w-12 h-1 bg-emerald-500 rounded-full mt-4 opacity-70 group-hover:w-20 transition-all duration-300" />
          </div>

        </div>

        {/* Fictional partner/client logo strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/60 flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-slate-600 tracking-wider text-sm">NEXORA</span>
          <span className="font-bold text-slate-600 tracking-wider text-sm">HYPERFLOW</span>
          <span className="font-bold text-slate-600 tracking-wider text-sm">AURA STUDIO</span>
          <span className="font-bold text-slate-600 tracking-wider text-sm">VERTEX LABS</span>
          <span className="font-bold text-slate-600 tracking-wider text-sm">PULSE LOGIC</span>
        </div>

      </div>
    </section>
  );
}
