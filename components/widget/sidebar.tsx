import React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Home, Image as ImageIcon, Video, Layers, Settings, User, Search, Clock, FileVideo, ChevronRight } from "lucide-react";

export function Sidebar() {
  return (
    <GlassPanel className="hidden lg:flex w-[260px] h-full flex-col p-5 rounded-2xl shrink-0">
      
      {/* Workspace Branding */}
      <div className="flex items-center gap-3 px-1 py-4 mb-2">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_4px_15px_rgba(99,102,241,0.3)] border border-white/60">
          <div className="w-3.5 h-3.5 rounded-sm bg-white shadow-sm" />
        </div>
        <span className="text-slate-900 font-semibold tracking-wide text-lg drop-shadow-sm">Studio<span className="text-slate-500 font-medium">Pro</span></span>
      </div>

      {/* Global Search */}
      <div className="mb-6 relative group">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-slate-600 transition-colors">
          <Search className="w-4 h-4" />
        </div>
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full bg-white/40 backdrop-blur-md border border-white/50 rounded-xl py-2 pl-9 pr-12 text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:bg-white/60 focus:border-white/80 transition-all shadow-inner"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded-md bg-white/50 backdrop-blur-md border border-white/60 text-[10px] text-slate-500 font-medium font-mono tracking-widest shadow-sm">
          ⌘K
        </div>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-6 pb-4">
        {/* Navigation */}
        <nav className="flex flex-col gap-1.5">
          <NavItem icon={<Home className="w-4 h-4" />} label="Dashboard" active />
          <NavItem icon={<Layers className="w-4 h-4" />} label="Projects" />
          <NavItem icon={<ImageIcon className="w-4 h-4" />} label="Assets" />
          <NavItem icon={<Video className="w-4 h-4" />} label="Renders" />
        </nav>

        {/* Recent Projects */}
        <div className="flex flex-col gap-2 px-1">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium uppercase tracking-wider mb-1 px-2 drop-shadow-sm">
            <span>Recent</span>
            <Clock className="w-3.5 h-3.5" />
          </div>
          
          <RecentItem icon={<FileVideo className="w-4 h-4 text-purple-500" />} label="Social Campaign Q3" time="2h ago" active />
          <RecentItem icon={<Layers className="w-4 h-4 text-blue-500" />} label="Brand Identity" time="1d ago" />
          <RecentItem icon={<FileVideo className="w-4 h-4 text-pink-500" />} label="Cyberpunk Scene" time="3d ago" />
        </div>
      </div>

      {/* Bottom Profile/Settings */}
      <div className="mt-auto pt-6 border-t border-white/40 flex flex-col gap-2 shrink-0">
        <NavItem icon={<Settings className="w-4 h-4" />} label="Settings" />
        <button className="flex items-center gap-3 p-2.5 mt-2 rounded-xl hover:bg-white/40 hover:backdrop-blur-md border border-transparent hover:border-white/40 hover:shadow-sm transition-all text-left w-full group">
          <div className="w-9 h-9 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center overflow-hidden border border-white/60 shadow-sm relative">
             <img src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Pankaj" alt="Pankaj Subedi" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col flex-1 overflow-hidden drop-shadow-sm">
            <span className="text-sm text-slate-900 font-medium group-hover:text-slate-950 transition-colors truncate">Pankaj Subedi</span>
            <span className="text-xs text-slate-500 font-medium">Pro Plan</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
        </button>
      </div>

    </GlassPanel>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all text-[14px] font-medium w-full
      ${active 
        ? "bg-white/60 backdrop-blur-md text-slate-900 shadow-[0_2px_10px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.8)] border border-white/60" 
        : "text-slate-600 hover:bg-white/40 hover:backdrop-blur-md hover:text-slate-900 border border-transparent hover:border-white/30 hover:shadow-sm"
      }
    `}>
      {icon}
      {label}
    </button>
  );
}

function RecentItem({ icon, label, time, active = false }: { icon: React.ReactNode; label: string; time: string; active?: boolean }) {
  return (
    <button className={`flex flex-col gap-1 p-3 rounded-xl transition-all text-left w-full border
      ${active 
        ? "bg-white/50 backdrop-blur-md border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,0.6)]" 
        : "bg-transparent hover:bg-white/30 hover:backdrop-blur-md border-transparent hover:border-white/30 hover:shadow-sm"
      }
    `}>
      <div className="flex items-center gap-2.5">
        <div className="opacity-90">{icon}</div>
        <span className={`text-[13px] font-medium truncate flex-1 drop-shadow-sm ${active ? "text-slate-900" : "text-slate-600"}`}>{label}</span>
      </div>
      <span className="text-[10px] text-slate-500 font-medium pl-6 drop-shadow-sm">{time}</span>
    </button>
  );
}
