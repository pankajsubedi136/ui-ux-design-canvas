import React from "react";
import { MousePointer2, Box, LayoutGrid, Grip, Plus } from "lucide-react";

export function ActionDock() {
  return (
    <div className="rounded-full p-2 flex items-center justify-center gap-1.5 w-max mx-auto shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.9)] border border-white/70 bg-white/40 backdrop-blur-[40px]">
      <IconButton icon={<MousePointer2 className="w-5 h-5" />} />
      <IconButton icon={<Box className="w-5 h-5" />} />
      <IconButton icon={<LayoutGrid className="w-5 h-5" />} />
      
      {/* Separator / Grip */}
      <div className="px-2 flex items-center justify-center text-slate-400">
        <Grip className="w-4 h-4" />
      </div>
      
      <IconButton icon={<Plus className="w-5 h-5 text-white" />} highlight />
    </div>
  );
}

function IconButton({ icon, highlight = false }: { icon: React.ReactNode; highlight?: boolean }) {
  return (
    <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 border
      ${highlight 
        ? "bg-black/60 backdrop-blur-2xl border-white/30 shadow-[0_4px_15px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.3)] text-white hover:bg-black/70" 
        : "bg-transparent border-transparent hover:bg-white/50 hover:backdrop-blur-xl hover:border-white/60 hover:shadow-[0_2px_10px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] text-slate-600 hover:text-slate-900"
      }
    `}>
      {icon}
    </button>
  );
}
