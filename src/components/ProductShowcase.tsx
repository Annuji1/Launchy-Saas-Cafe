import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Layers, 
  CheckSquare, 
  Users, 
  BarChart3, 
  Settings, 
  Plus, 
  Search, 
  Bell, 
  Clock, 
  ChevronRight, 
  Filter, 
  CheckCircle2, 
  AlertCircle,
  MoreVertical,
  Calendar,
  Sparkles,
  Zap,
  TrendingUp
} from 'lucide-react';
import { SAMPLE_PROJECTS, SAMPLE_TASKS } from '../data/mockData';
import { DashboardTask } from '../types';

export default function ProductShowcase() {
  const [activeNav, setActiveNav] = useState('Overview');
  const [filterTab, setFilterTab] = useState<'All' | 'Active' | 'Completed'>('All');
  const [tasks, setTasks] = useState<DashboardTask[]>(SAMPLE_TASKS);
  const [selectedTask, setSelectedTask] = useState<string | null>('task-1');
  const [notificationToast, setNotificationToast] = useState<string | null>(null);
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');

  const sidebarLinks = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'My Projects', icon: Layers, count: 3 },
    { name: 'Tasks', icon: CheckSquare, count: tasks.length },
    { name: 'Team', icon: Users },
    { name: 'Analytics', icon: BarChart3 },
    { name: 'Settings', icon: Settings },
  ];

  // Filter tasks based on selected tab
  const filteredTasks = tasks.filter((task) => {
    if (filterTab === 'All') return true;
    if (filterTab === 'Active') return task.status === 'In Progress' || task.status === 'Pending';
    if (filterTab === 'Completed') return task.status === 'Completed';
    return true;
  });

  const handleTaskStatusToggle = (taskId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === taskId) {
          const newStatus = t.status === 'Completed' ? 'In Progress' : 'Completed';
          showToast(`Task marked as ${newStatus}`);
          return { ...t, status: newStatus };
        }
        return t;
      })
    );
  };

  const showToast = (message: string) => {
    setNotificationToast(message);
    setTimeout(() => {
      setNotificationToast(null);
    }, 3200);
  };

  const handleCreateMockProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    showToast(`Project "${newProjectName}" created in prototype!`);
    setNewProjectName('');
    setShowNewProjectModal(false);
  };

  const completedCount = tasks.filter((t) => t.status === 'Completed').length;
  const overallProgress = Math.round((completedCount / tasks.length) * 100) || 78;

  return (
    <section
      id="showcase"
      className="py-20 md:py-28 bg-[#F7F8FC] text-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#4F7CFF]/10 text-[#4F7CFF] border border-[#4F7CFF]/20 text-xs font-bold tracking-wider uppercase mb-3">
            <span>LIVE INTERACTIVE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1020] tracking-tight font-['Space_Grotesk']">
            One Workspace. Complete Visibility.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            See how Launchly brings your projects, tasks, and team performance together. Click, filter, and test the interactive prototype below.
          </p>
        </div>

        {/* Prototype Container Frame */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden relative">
          
          {/* Top Window Bar */}
          <div className="bg-[#0B1020] px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-white/10 text-white">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
              <div className="ml-3 hidden sm:flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-md text-xs text-slate-300 font-mono">
                <span>launchly.app/workspace/demo-org</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs bg-[#4F7CFF]/20 text-[#4F7CFF] border border-[#4F7CFF]/30 px-2.5 py-0.5 rounded-full font-semibold">
                Interactive Sandbox
              </span>
              <button
                type="button"
                onClick={() => showToast("Prototype synced: All mock updates are live in-memory")}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
                title="Mock alerts"
              >
                <Bell className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Prototype Grid: Sidebar + Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
            
            {/* Sidebar */}
            <aside className="lg:col-span-3 bg-slate-900 text-white p-4 sm:p-5 flex flex-col justify-between border-r border-slate-800">
              <div className="space-y-6">
                
                {/* Team Org Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4F7CFF] to-[#8B5CF6] flex items-center justify-center font-bold text-white text-xs">
                      L
                    </div>
                    <div>
                      <h4 className="font-bold text-sm leading-tight text-white font-['Space_Grotesk']">Launchly Studio</h4>
                      <span className="text-[11px] text-slate-400">Pro Organization</span>
                    </div>
                  </div>
                </div>

                {/* Sidebar Nav Links */}
                <nav className="space-y-1" aria-label="Dashboard Menu">
                  {sidebarLinks.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeNav === item.name;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => {
                          setActiveNav(item.name);
                          showToast(`Switched view to "${item.name}"`);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                          isActive
                            ? 'bg-[#4F7CFF] text-white shadow-md'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        {item.count !== undefined && (
                          <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                            isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                          }`}>
                            {item.count}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Quick Storage/Sprint Widget */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                  <div className="flex items-center justify-between text-slate-300 mb-1.5">
                    <span className="font-medium">Sprint 18 Burn-down</span>
                    <span className="text-[#4F7CFF] font-bold">{overallProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] transition-all duration-500" 
                      style={{ width: `${overallProgress}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-2">
                    {completedCount} of {tasks.length} tasks closed
                  </p>
                </div>

              </div>

              {/* Sidebar Alex User Card */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-[#4F7CFF]">
                    AM
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">Alex Miller</p>
                    <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Workspace Admin
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-9 bg-[#F7F8FC] p-4 sm:p-6 lg:p-8 space-y-6">
              
              {/* Header Greeting & Action Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-2xl font-bold text-[#0B1020] font-['Space_Grotesk']">
                    Good morning, Alex 👋
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Here is what’s happening with your projects and team deliverables today.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    id="dashboard-new-project-btn"
                    type="button"
                    onClick={() => setShowNewProjectModal(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] hover:from-[#3f6be8] hover:to-[#7c4ee0] shadow-md transition-all active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    <span>New Project</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => showToast("All project archives displayed")}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all"
                  >
                    <span>View All Projects</span>
                  </button>
                </div>
              </div>

              {/* 4 Overview Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                
                <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Active Projects</span>
                    <span className="p-1 rounded bg-blue-50 text-[#4F7CFF]"><Layers className="w-3.5 h-3.5" /></span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#0B1020]">12</div>
                  <span className="text-[10px] text-emerald-600 font-medium">+2 this month</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Completed Tasks</span>
                    <span className="p-1 rounded bg-emerald-50 text-emerald-600"><CheckCircle2 className="w-3.5 h-3.5" /></span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#0B1020]">{180 + completedCount}</div>
                  <span className="text-[10px] text-emerald-600 font-medium">96% on time</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Team Members</span>
                    <span className="p-1 rounded bg-purple-50 text-[#8B5CF6]"><Users className="w-3.5 h-3.5" /></span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#0B1020]">28</div>
                  <span className="text-[10px] text-slate-500 font-medium">Across 4 squads</span>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/90 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>Overall Progress</span>
                    <span className="p-1 rounded bg-amber-50 text-amber-600"><TrendingUp className="w-3.5 h-3.5" /></span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[#0B1020]">{overallProgress}%</div>
                  <span className="text-[10px] text-emerald-600 font-medium">+5% ahead</span>
                </div>

              </div>

              {/* Middle Section: Active Projects Showcase + Mini Analytics Visual */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Projects Highlights (7 cols) */}
                <div className="lg:col-span-7 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-[#0B1020]">Active Project Portfolios</h4>
                    <span className="text-xs text-[#4F7CFF] font-medium cursor-pointer hover:underline">
                      Real-Time Status
                    </span>
                  </div>

                  <div className="space-y-3">
                    {SAMPLE_PROJECTS.map((proj) => (
                      <div
                        key={proj.id}
                        className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-300 bg-slate-50/60 hover:bg-white transition-all"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-2.5 h-2.5 rounded-full" 
                              style={{ backgroundColor: proj.color }} 
                            />
                            <span className="text-xs sm:text-sm font-bold text-[#0B1020]">{proj.name}</span>
                          </div>
                          <span className="text-xs font-mono font-bold text-slate-700">{proj.progress}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden mb-2">
                          <div
                            className="h-full transition-all duration-700"
                            style={{ width: `${proj.progress}%`, backgroundColor: proj.color }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-500">
                          <span>{proj.completedTasks}/{proj.tasksCount} tasks completed</span>
                          <div className="flex -space-x-1.5">
                            {proj.members.map((m, i) => (
                              <span
                                key={i}
                                className="w-5 h-5 rounded-full bg-slate-800 text-white text-[9px] flex items-center justify-center font-bold ring-1 ring-white"
                              >
                                {m}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Analytics Visualizer & Activity Feed (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Mini Donut / Bar Chart Analytics Visual */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-[#0B1020]">Task Velocity Distribution</h4>
                      <span className="text-[11px] text-slate-400">Past 14 Days</span>
                    </div>

                    {/* Chart visualization */}
                    <div className="h-28 flex items-end gap-2.5 pt-2">
                      {[
                        { day: 'Mon', height: '65%', count: 14 },
                        { day: 'Tue', height: '85%', count: 22 },
                        { day: 'Wed', height: '95%', count: 28 },
                        { day: 'Thu', height: '70%', count: 18 },
                        { day: 'Fri', height: '90%', count: 25 },
                        { day: 'Sat', height: '40%', count: 8 },
                      ].map((bar, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-1 group">
                          <div 
                            className="w-full bg-slate-100 group-hover:bg-[#4F7CFF] rounded-t transition-all relative flex items-center justify-center" 
                            style={{ height: bar.height }}
                          >
                            <span className="opacity-0 group-hover:opacity-100 absolute -top-5 text-[9px] font-bold bg-[#0B1020] text-white px-1 rounded transition-opacity">
                              {bar.count}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-400">{bar.day}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100 text-slate-500">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-[#4F7CFF]" /> Target: 20 tasks/day
                      </span>
                      <span className="text-emerald-600 font-bold">112% Average</span>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
                    <h4 className="font-bold text-sm text-[#0B1020]">Recent Team Activity</h4>
                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-start gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F7CFF] mt-1.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-slate-800">Aisha Khan</span> approved design tokens
                          <span className="text-[10px] text-slate-400 block">12 minutes ago</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-slate-800">Rahul Mehta</span> merged API benchmark branch
                          <span className="text-[10px] text-slate-400 block">45 minutes ago</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                        <div>
                          <span className="font-semibold text-slate-800">Sara Thomas</span> scheduled Sprint 18 demo
                          <span className="text-[10px] text-slate-400 block">2 hours ago</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Section: Interactive Task Management Cards with Tabs */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                
                {/* Task Header & Filter Tabs */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-[#4F7CFF]" />
                    <h4 className="font-bold text-sm sm:text-base text-[#0B1020]">
                      Task Tracker ({filteredTasks.length})
                    </h4>
                    <span className="text-xs text-slate-400 font-normal hidden sm:inline">
                      — Click any task to toggle status
                    </span>
                  </div>

                  {/* Filter Tabs: All, Active, Completed */}
                  <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                    {(['All', 'Active', 'Completed'] as const).map((tab) => (
                      <button
                        key={tab}
                        type="button"
                        onClick={() => setFilterTab(tab)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                          filterTab === tab
                            ? 'bg-white text-[#0B1020] shadow-sm'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Task List Cards */}
                <div className="space-y-2.5">
                  {filteredTasks.map((task) => {
                    const isCompleted = task.status === 'Completed';
                    const isSelected = selectedTask === task.id;
                    return (
                      <div
                        key={task.id}
                        id={`task-item-${task.id}`}
                        onClick={() => setSelectedTask(task.id)}
                        className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                          isSelected
                            ? 'border-[#4F7CFF] bg-[#4F7CFF]/5 shadow-sm'
                            : 'border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {/* Complete Checkbox Toggle */}
                          <button
                            type="button"
                            onClick={(e) => handleTaskStatusToggle(task.id, e)}
                            className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                              isCompleted
                                ? 'bg-emerald-500 border-emerald-500 text-white'
                                : 'border-slate-300 hover:border-[#4F7CFF] text-transparent hover:text-slate-300'
                            }`}
                            aria-label={`Toggle status for ${task.title}`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                          </button>

                          <div>
                            <p className={`text-xs sm:text-sm font-semibold transition-colors ${
                              isCompleted ? 'line-through text-slate-400' : 'text-slate-900'
                            }`}>
                              {task.title}
                            </p>
                            <span className="text-[11px] text-slate-500">
                              {task.project}
                            </span>
                          </div>
                        </div>

                        {/* Badges and metadata */}
                        <div className="flex items-center gap-3 self-end sm:self-center">
                          {/* Priority badge */}
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                            task.priority === 'High'
                              ? 'bg-rose-50 text-rose-600 border border-rose-200'
                              : task.priority === 'Medium'
                              ? 'bg-amber-50 text-amber-600 border border-amber-200'
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {task.priority} Priority
                          </span>

                          {/* Status badge */}
                          <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                            task.status === 'Completed'
                              ? 'bg-emerald-100 text-emerald-800'
                              : task.status === 'In Progress'
                              ? 'bg-blue-100 text-[#4F7CFF]'
                              : 'bg-slate-200 text-slate-700'
                          }`}>
                            {task.status}
                          </span>

                          {/* Assignee initials & due date */}
                          <div className="flex items-center gap-1.5 text-xs text-slate-500">
                            <span 
                              className="w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center"
                              style={{ backgroundColor: task.assignee.color }}
                              title={task.assignee.name}
                            >
                              {task.assignee.initials}
                            </span>
                            <span className="text-[11px] hidden md:inline">{task.dueDate}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

            </main>
          </div>

        </div>

      </div>

      {/* Floating Notification Toast */}
      {notificationToast && (
        <div 
          id="mock-notification-toast"
          className="fixed bottom-6 right-6 z-50 bg-[#0B1020] text-white px-4 py-3 rounded-xl border border-[#4F7CFF]/40 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          <div className="w-6 h-6 rounded-full bg-[#4F7CFF] text-white flex items-center justify-center shrink-0">
            <Zap className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-semibold">{notificationToast}</span>
        </div>
      )}

      {/* New Project Prototype Modal */}
      {showNewProjectModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full border border-slate-200 shadow-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-[#0B1020]">Create Prototype Project</h4>
              <button
                type="button"
                onClick={() => setShowNewProjectModal(false)}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleCreateMockProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Design Systems v4"
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F7CFF]"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewProjectModal(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#4F7CFF] hover:bg-[#3f6be8] rounded-lg shadow-sm"
                >
                  Create in Demo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
