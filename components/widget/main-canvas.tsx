import React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ActionDock } from "./action-dock";
import { Share, Download, MoreHorizontal, Play } from "lucide-react";

export function MainCanvas() {
  return (
    <GlassPanel className="flex-1 h-auto lg:h-full flex flex-col relative shrink-0">
      
      {/* Top Header */}
      <div className="w-full flex items-center justify-between px-4 lg:px-8 py-4 lg:py-5 border-b border-white/40 bg-white/30 backdrop-blur-lg relative z-10 flex-wrap gap-4 shadow-sm">
        <div className="flex items-center gap-2 text-sm tracking-wide shrink-0">
          <span className="text-slate-400 hover:text-slate-600 transition-colors cursor-pointer drop-shadow-sm">Projects</span>
          <span className="text-slate-300 drop-shadow-sm">/</span>
          <span className="text-slate-900 font-medium drop-shadow-sm">Social Campaign Q3</span>
        </div>
        
        <div className="flex items-center gap-2 lg:gap-3 shrink-0 ml-auto">
          <button className="flex items-center gap-2 text-slate-600 hover:text-slate-900 px-3 lg:px-4 py-1.5 rounded-lg hover:bg-white/40 hover:backdrop-blur-md transition-colors text-sm font-medium border border-transparent hover:border-white/50 hover:shadow-sm">
            <Share className="w-4 h-4" /> <span className="hidden sm:inline">Share</span>
          </button>
          <button className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-white px-4 lg:px-5 py-1.5 rounded-full hover:bg-slate-900 transition-all active:scale-95 text-sm font-semibold border border-slate-700 shadow-[0_2px_10px_rgba(0,0,0,0.1)]">
            <Download className="w-4 h-4" /> <span className="hidden sm:inline">Export</span>
          </button>
          <div className="hidden lg:block w-[1px] h-4 bg-slate-300/50 mx-1" />
          <button className="p-1.5 text-slate-400 hover:text-slate-900 rounded-lg hover:bg-white/40 hover:backdrop-blur-md hover:shadow-sm hover:border-white/50 border border-transparent transition-all hidden lg:block">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Center Stage / Editor Canvas */}
      <div className="flex-1 w-full flex flex-col items-center justify-center p-4 lg:p-8 pb-32 relative gap-6 lg:gap-8">
        
        {/* Rendered Video Output Mockup */}
        <div className="relative w-full max-w-4xl aspect-[16/9] bg-white/20 backdrop-blur-xl rounded-2xl border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] flex items-center justify-center overflow-hidden group cursor-pointer ring-1 ring-white/30 shrink-0">
          
          {/* Background Thumbnail Image */}
          <img src="/video_thumb.png" alt="Generated Video Thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 blur-[2px] group-hover:blur-0" />
          
          {/* Dark gradient overlay for text readability at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/20 backdrop-blur-2xl flex items-center justify-center border border-white/40 text-white group-hover:scale-110 transition-transform duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.2)] z-10">
             <Play className="w-6 h-6 lg:w-8 lg:h-8 ml-1" fill="currentColor" />
          </div>

          <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6 flex items-end justify-between z-10 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="flex flex-col gap-1 lg:gap-1.5 max-w-[60%]">
               <span className="text-white font-medium text-sm lg:text-lg tracking-tight drop-shadow-md truncate">boy_dancing_excitedly.mp4</span>
               <span className="text-white/80 text-xs lg:text-sm drop-shadow-md font-medium hidden sm:block">1920x1080 • 12s • H.264</span>
             </div>
             <div className="flex items-center gap-2">
               <div className="px-2 py-1 lg:px-3 lg:py-1.5 bg-black/40 backdrop-blur-2xl rounded-lg text-white/90 text-xs lg:text-sm font-medium border border-white/20 shadow-lg">00:00 / 00:12</div>
             </div>
          </div>
        </div>

        {/* Variations Strip */}
        <div className="flex items-center lg:justify-center gap-3 lg:gap-4 w-full max-w-4xl h-16 lg:h-24 overflow-x-auto no-scrollbar shrink-0 px-2 lg:px-0">
          <VariationThumb img="/video_thumb.png" active time="12s" />
          <VariationThumb time="10s" />
          <VariationThumb time="14s" />
          <VariationThumb time="08s" />
        </div>
      </div>

      {/* Floating Bottom Dock */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <ActionDock />
      </div>

    </GlassPanel>
  );
}

function VariationThumb({ img, active = false, time }: { img?: string; active?: boolean; time: string }) {
  return (
    <div className={`relative h-full aspect-video rounded-xl overflow-hidden cursor-pointer transition-all duration-300
      ${active 
        ? "border-[2px] border-white shadow-[0_4px_15px_rgba(99,102,241,0.2),0_0_0_2px_rgba(255,255,255,0.8)] scale-105" 
        : "border border-white/40 opacity-80 hover:opacity-100 hover:border-white/80 hover:shadow-sm"
      }
    `}>
      {img ? (
        <img src={img} alt="variation" className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center">
          <div className="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center animate-pulse border border-white/50">
            <span className="text-[10px] text-slate-500 font-medium drop-shadow-sm">...</span>
          </div>
        </div>
      )}
      <div className="absolute bottom-1.5 right-2 px-1.5 py-0.5 rounded bg-black/40 backdrop-blur-2xl text-white/90 text-[10px] font-medium border border-white/20 shadow-sm">
        {time}
      </div>
    </div>
  );
}
