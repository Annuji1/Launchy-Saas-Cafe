import { useState } from 'react';
import { 
  Layers, 
  Sparkles, 
  Sliders, 
  Activity, 
  CheckCircle2, 
  Clock, 
  Check, 
  MousePointer, 
  Zap, 
  ShieldCheck, 
  BarChart, 
  UserCheck 
} from 'lucide-react';

export default function DepthExperience() {
  const [explodedMode, setExplodedMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'analytics' | 'progress' | 'team'>('progress');
  const [completionValue, setCompletionValue] = useState(78);

  return (
    <section
      id="depth-experience"
      className="relative py-20 bg-gradient-to-b from-[#0B1020] via-[#0E1528] to-[#0B1020] text-white overflow-hidden border-t border-b border-white/[0.06]"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#4F7CFF]/15 to-[#8B5CF6]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4F7CFF]/10 border border-[#4F7CFF]/20 text-xs font-semibold tracking-wider text-[#4F7CFF] uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Multi-Layer Depth Experience</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] text-white">
            Engineered with Dimensional Clarity
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Launchly separates complex workflows into intuitive visual planes. Explore how our layered architecture delivers crystal-clear focus across every project milestone.
          </p>

          {/* Interactive Mode Control Pill */}
          <div className="mt-6 inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setExplodedMode(false)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                !explodedMode
                  ? 'bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Unified View
            </button>
            <button
              type="button"
              onClick={() => setExplodedMode(true)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                explodedMode
                  ? 'bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>3D Exploded Layer Mode</span>
            </button>
          </div>
        </div>

        {/* 3D Depth Stage Showcase */}
        <div className="relative perspective-1200 max-w-5xl mx-auto min-h-[460px] flex items-center justify-center py-6">
          
          {/* Main 3D Composition Container */}
          <div
            className="w-full transform-style-3d transition-all duration-700 ease-out"
            style={{
              transform: explodedMode
                ? 'rotateX(22deg) rotateY(-18deg) rotateZ(3deg) scale(0.92)'
                : 'rotateX(8deg) rotateY(-4deg) rotateZ(0deg)',
            }}
          >
            {/* BASE LAYER: Background Workspace Canvas (Z: 0px) */}
            <div
              className="w-full rounded-2xl bg-[#090D1A] border border-white/10 p-6 sm:p-8 shadow-2xl transition-all duration-700 transform-style-3d relative overflow-hidden"
              style={{
                transform: explodedMode ? 'translateZ(0px)' : 'translateZ(0px)',
                boxShadow: explodedMode
                  ? '0 30px 60px -15px rgba(0,0,0,0.8), 0 0 40px rgba(79,124,255,0.15)'
                  : '0 20px 40px -15px rgba(0,0,0,0.6)',
              }}
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#4F7CFF]" />
                  <span className="font-semibold text-sm sm:text-base text-white tracking-wide">
                    Workspace Canvas: Global Project Overview
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">Layer 01 — Base Ground</span>
                </div>
              </div>

              {/* Sub-grid of milestone metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Active Deliverables</span>
                    <Activity className="w-4 h-4 text-[#4F7CFF]" />
                  </div>
                  <div className="text-2xl font-bold text-white">42 Modules</div>
                  <span className="text-[11px] text-emerald-400 font-medium">+14% vs last cycle</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Execution Pace</span>
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">1.2x Target</div>
                  <span className="text-[11px] text-slate-400 font-medium">Ahead of roadmap</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Security Integrity</span>
                    <ShieldCheck className="w-4 h-4 text-[#8B5CF6]" />
                  </div>
                  <div className="text-2xl font-bold text-white">100% Passing</div>
                  <span className="text-[11px] text-slate-400 font-medium">SOC2 Compliant</span>
                </div>
              </div>
            </div>

            {/* MIDDLE LAYER: Interactive Project Progress Card (Z: 60px in exploded mode) */}
            <div
              className="mt-6 sm:mt-0 sm:absolute sm:top-12 sm:left-8 sm:right-8 bg-[#10182E]/95 backdrop-blur-xl rounded-2xl border border-white/15 p-6 shadow-2xl transition-all duration-700 transform-style-3d"
              style={{
                transform: explodedMode
                  ? 'translateZ(65px) translateY(-30px)'
                  : 'translateZ(20px)',
                boxShadow: explodedMode
                  ? '0 25px 50px -12px rgba(11,16,32,0.9), 0 0 30px rgba(139,92,246,0.2)'
                  : '0 10px 25px -5px rgba(0,0,0,0.5)',
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4F7CFF] to-[#8B5CF6] flex items-center justify-center text-white">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      Interactive Project Velocity Tracker
                    </h3>
                    <p className="text-xs text-slate-400">
                      Layer 02 — Real-time progression logic
                    </p>
                  </div>
                </div>

                {/* Tab selectors */}
                <div className="flex items-center gap-1.5 bg-white/[0.06] p-1 rounded-lg">
                  {(['progress', 'analytics', 'team'] as const).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded text-xs font-semibold capitalize transition-all ${
                        activeTab === tab
                          ? 'bg-[#4F7CFF] text-white shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Content based on selected tab */}
              {activeTab === 'progress' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-slate-300 font-medium">Sprint Milestone Completion Rate</span>
                    <span className="font-mono text-emerald-400 font-bold text-base">{completionValue}%</span>
                  </div>

                  {/* Interactive slider */}
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={completionValue}
                      onChange={(e) => setCompletionValue(Number(e.target.value))}
                      className="w-full accent-[#4F7CFF] cursor-pointer h-2 bg-slate-800 rounded-lg"
                    />
                    <div className="flex justify-between text-[11px] text-slate-500">
                      <span>Kickoff (10%)</span>
                      <span>Midway (50%)</span>
                      <span>Target Milestone (100%)</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-lg bg-white/[0.04] border border-white/5 flex items-center gap-2.5 text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-slate-300">Automated QA suite integration</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white/[0.04] border border-white/5 flex items-center gap-2.5 text-xs">
                      <Clock className="w-4 h-4 text-[#4F7CFF] shrink-0" />
                      <span className="text-slate-300">Cloud orchestration failover verify</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-3">
                  <div className="text-xs text-slate-300">Weekly Throughput Distribution</div>
                  <div className="h-20 flex items-end gap-3 pt-2">
                    {[45, 68, 92, 54, 88, 76, 95].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5">
                        <div
                          className="w-full rounded-t bg-gradient-to-t from-[#4F7CFF] to-[#8B5CF6] hover:brightness-125 transition-all"
                          style={{ height: `${val}%` }}
                        />
                        <span className="text-[10px] text-slate-500">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'team' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { name: 'Aisha Khan', role: 'Architecture Lead', active: 'Active in PR review' },
                    { name: 'Rahul Mehta', role: 'Staff Product Eng', active: 'Committing Sprint 14' },
                    { name: 'Sara Thomas', role: 'Growth Operations', active: 'Finalizing launch notes' },
                  ].map((member, i) => (
                    <div key={i} className="p-3 rounded-lg bg-white/[0.04] border border-white/5 text-xs">
                      <p className="font-semibold text-white">{member.name}</p>
                      <p className="text-slate-400 text-[11px]">{member.role}</p>
                      <span className="inline-block mt-2 text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        {member.active}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* TOP FLOATING GLASSMORPHISM NOTIFICATION LAYER (Z: 130px in exploded mode) */}
            <div
              className="mt-6 sm:mt-0 sm:absolute sm:-top-8 sm:-right-4 bg-[#0B1020]/95 backdrop-blur-2xl border border-white/20 p-4 rounded-xl shadow-2xl transition-all duration-700 transform-style-3d max-w-xs"
              style={{
                transform: explodedMode
                  ? 'translateZ(135px) translateY(-50px) translateX(20px)'
                  : 'translateZ(40px)',
                boxShadow: explodedMode
                  ? '0 30px 60px -10px rgba(0,0,0,0.9), 0 0 25px rgba(79,124,255,0.3)'
                  : '0 15px 30px -5px rgba(0,0,0,0.6)',
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">Layer 03 — Smart Alert</h4>
                  <p className="text-[10px] text-slate-400">Instant cross-team synchronization</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 bg-white/[0.04] p-2.5 rounded-lg border border-white/5">
                “Team velocity increased by <span className="text-emerald-400 font-semibold">+34%</span> after milestone automation rule triggered.”
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
