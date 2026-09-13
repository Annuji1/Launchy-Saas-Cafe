import React, { useState, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Users, 
  TrendingUp, 
  Layers, 
  Shield, 
  Bell, 
  Check, 
  BarChart3,
  Calendar,
  Flame,
  LayoutDashboard
} from 'lucide-react';

interface HeroProps {
  onStartFreeClick?: () => void;
  onExploreFeaturesClick?: () => void;
}

export default function Hero({ onStartFreeClick, onExploreFeaturesClick }: HeroProps) {
  // 3D Card mouse tilt interaction
  const [tilt, setTilt] = useState({ rotateX: 6, rotateY: -8, scale: 1 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element
    const y = e.clientY - rect.top;  // y position within the element

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation limits (-12 deg to +12 deg)
    const rotateY = ((x - centerX) / centerX) * 9;
    const rotateX = -((y - centerY) / centerY) * 9;

    setTilt({ rotateX, rotateY, scale: 1.02 });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Smooth reset to gentle aesthetic default angle
    setTilt({ rotateX: 5, rotateY: -6, scale: 1 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 bg-[#0B1020] text-white overflow-hidden flex items-center"
    >
      {/* Background Decorative Gradient Glows & Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Electric Blue Orb */}
      <div 
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] bg-[#4F7CFF]/20 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" 
      />
      {/* Purple Orb */}
      <div 
        className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[380px] sm:w-[540px] h-[380px] sm:h-[540px] bg-[#8B5CF6]/20 rounded-full blur-[130px] pointer-events-none animate-pulse-glow" 
        style={{ animationDelay: '3s' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6">
            
            {/* Eyebrow badge */}
            <div 
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/10 text-xs font-semibold tracking-wider text-[#4F7CFF] uppercase backdrop-blur-md shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6] animate-spin" style={{ animationDuration: '6s' }} />
              <span>THE SMARTER WAY TO WORK</span>
            </div>

            {/* Main Heading */}
            <h1 
              id="hero-main-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-['Space_Grotesk']"
            >
              Manage Projects.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F7CFF] via-[#8B5CF6] to-white">
                Empower Your Team.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p 
              id="hero-supporting-text"
              className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed font-normal"
            >
              Launchly helps modern teams organize projects, manage tasks, and work together from one powerful workspace.
            </p>

            {/* Primary and Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={() => {
                  if (onStartFreeClick) onStartFreeClick();
                  else scrollToSection('contact');
                }}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3f6be8] hover:to-[#7c4ee0] shadow-lg shadow-[#4F7CFF]/30 hover:shadow-xl hover:shadow-[#4F7CFF]/45 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-98"
              >
                <span>Start Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-secondary-cta"
                type="button"
                onClick={() => {
                  if (onExploreFeaturesClick) onExploreFeaturesClick();
                  else scrollToSection('features');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-medium text-slate-200 bg-white/[0.06] hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-98"
              >
                <span>Explore Features</span>
                <Layers className="w-4 h-4 text-[#8B5CF6]" />
              </button>
            </div>

            {/* Supporting Trust Message */}
            <div className="flex items-center gap-3 pt-3 text-sm text-slate-400">
              <div className="flex -space-x-2 overflow-hidden">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full ring-2 ring-[#0B1020] bg-[#4F7CFF] text-[10px] font-bold text-white">AK</span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full ring-2 ring-[#0B1020] bg-[#8B5CF6] text-[10px] font-bold text-white">RM</span>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full ring-2 ring-[#0B1020] bg-emerald-500 text-[10px] font-bold text-white">ST</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#4F7CFF]" />
                <span className="font-medium text-slate-300">Built for teams that want to move faster.</span>
              </div>
            </div>

          </div>

          {/* Right Hero Visual: 3D Perspective Fictional Dashboard Mockup */}
          <div className="lg:col-span-6 relative perspective-1200 py-6">
            
            {/* Interactive 3D Perspective Card Container */}
            <div
              id="hero-3d-dashboard-container"
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
                transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
              }}
              className="relative w-full rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-transparent p-1 shadow-2xl shadow-black/80 transform-style-3d cursor-pointer"
            >
              {/* Inner Dashboard Body */}
              <div className="w-full bg-[#0E1528] rounded-[18px] border border-white/10 overflow-hidden shadow-inner">
                
                {/* Mock Browser/Window Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0B1020] border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs text-slate-400 font-mono hidden sm:inline">app.launchly.com/workspace</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 px-2.5 py-1 rounded-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span className="font-medium text-slate-300">Live Sync</span>
                  </div>
                </div>

                {/* Mock Dashboard Content Layout */}
                <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-12 gap-4">
                  
                  {/* Mini Sidebar */}
                  <div className="hidden sm:flex sm:col-span-3 flex-col justify-between py-1 border-r border-white/5 pr-3 space-y-4">
                    <div className="space-y-1">
                      <div className="px-2 py-1.5 rounded-lg bg-[#4F7CFF]/15 text-[#4F7CFF] text-xs font-semibold flex items-center gap-2">
                        <LayoutDashboard className="w-3.5 h-3.5" />
                        <span>Overview</span>
                      </div>
                      <div className="px-2 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Projects (8)</span>
                      </div>
                      <div className="px-2 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Tasks (24)</span>
                      </div>
                      <div className="px-2 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs flex items-center gap-2">
                        <Users className="w-3.5 h-3.5" />
                        <span>Team (12)</span>
                      </div>
                      <div className="px-2 py-1.5 rounded-lg text-slate-400 hover:text-white text-xs flex items-center gap-2">
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>Analytics</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-[11px] text-slate-400">
                      <div className="flex items-center justify-between text-slate-200 mb-1">
                        <span>Sprint 14</span>
                        <span className="text-[#4F7CFF] font-semibold">82%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] h-full w-[82%]" />
                      </div>
                    </div>
                  </div>

                  {/* Main Mock Content Area */}
                  <div className="sm:col-span-9 space-y-4">
                    
                    {/* Header metrics bar */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                        <span className="text-[11px] text-slate-400 block">Active Sprints</span>
                        <span className="text-base sm:text-lg font-bold text-white">4 Sprints</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                        <span className="text-[11px] text-slate-400 block">Completed</span>
                        <span className="text-base sm:text-lg font-bold text-emerald-400">94.8%</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/5">
                        <span className="text-[11px] text-slate-400 block">Team Velocity</span>
                        <span className="text-base sm:text-lg font-bold text-[#8B5CF6]">48 pts</span>
                      </div>
                    </div>

                    {/* Active Project Highlight Card */}
                    <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#4F7CFF]" />
                          <h4 className="text-xs sm:text-sm font-semibold text-white">Launchly Web Experience v2</h4>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#4F7CFF]/20 text-[#4F7CFF] border border-[#4F7CFF]/30">
                          In Progress
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-400 line-clamp-1">
                        Cross-functional design systems, real-time board, and API integration.
                      </p>

                      <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5">
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <Clock className="w-3.5 h-3.5 text-amber-400" />
                          <span>Due in 3 days</span>
                        </div>
                        <div className="flex -space-x-1.5">
                          <div className="w-5 h-5 rounded-full bg-blue-500 text-[9px] flex items-center justify-center font-bold">AK</div>
                          <div className="w-5 h-5 rounded-full bg-purple-500 text-[9px] flex items-center justify-center font-bold">RM</div>
                          <div className="w-5 h-5 rounded-full bg-emerald-500 text-[9px] flex items-center justify-center font-bold">+3</div>
                        </div>
                      </div>
                    </div>

                    {/* Task summary rows */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 text-xs transition-colors">
                        <div className="flex items-center gap-2 text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="line-through text-slate-400">Design token export to Tailwind</span>
                        </div>
                        <span className="text-[10px] font-medium text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Done</span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs">
                        <div className="flex items-center gap-2 text-slate-200">
                          <Clock className="w-3.5 h-3.5 text-[#4F7CFF]" />
                          <span className="font-medium">Setup real-time webhook listeners</span>
                        </div>
                        <span className="text-[10px] font-medium text-[#4F7CFF] bg-[#4F7CFF]/15 px-1.5 py-0.5 rounded">Active</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* FLOATING 3D DEPTH CARD 1 (Top Right): Live Notification */}
              <div 
                id="floating-notification-card"
                className="absolute -top-5 -right-3 sm:-right-6 bg-slate-900/90 backdrop-blur-xl border border-white/15 p-3 rounded-xl shadow-2xl text-xs text-white max-w-[210px] animate-float-slow hidden sm:flex items-center gap-2.5 z-20 pointer-events-none"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-semibold text-[11px] leading-tight text-white">Sprint 14 Completed</p>
                  <p className="text-[10px] text-slate-400">2 days ahead of schedule</p>
                </div>
              </div>

              {/* FLOATING 3D DEPTH CARD 2 (Bottom Left): Productivity Stats */}
              <div 
                id="floating-productivity-card"
                className="absolute -bottom-5 -left-3 sm:-left-6 bg-slate-900/90 backdrop-blur-xl border border-white/15 p-3 rounded-xl shadow-2xl text-xs text-white min-w-[190px] animate-float-reverse hidden sm:flex items-center gap-3 z-20 pointer-events-none"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#4F7CFF] to-[#8B5CF6] flex items-center justify-center shrink-0 shadow-md">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-sm text-white">+38%</span>
                    <span className="text-[10px] text-emerald-400 font-semibold">Velocity</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Weekly team throughput</p>
                </div>
              </div>

            </div>

            {/* Depth reflection element below */}
            <div className="w-4/5 mx-auto h-5 bg-gradient-to-r from-transparent via-[#4F7CFF]/20 to-transparent blur-xl mt-3" />
          </div>

        </div>
      </div>
    </section>
  );
}
