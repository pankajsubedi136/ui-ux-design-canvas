import React from "react";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ChevronDown, Folder, ArrowRight, CornerDownRight, Maximize2, Square, Sparkles } from "lucide-react";

export function AIPanel() {
  return (
    <GlassPanel className="w-full lg:w-80 h-auto lg:h-full flex flex-col p-4 lg:p-5 pt-4 gap-6 shrink-0 rounded-2xl mb-8 lg:mb-0">
      
      {/* 1. Header (macOS style top bar) */}
      <div className="flex items-center justify-between w-full pb-2">
        <button className="flex items-center gap-1.5 bg-white/40 backdrop-blur-md hover:bg-white/60 hover:shadow-sm px-3 py-1.5 rounded-full transition-all text-slate-900 text-sm font-medium border border-white/50 shadow-sm">
          Sonnet 4.6
          <ChevronDown className="w-4 h-4 opacity-70" />
        </button>
        <div className="flex items-center gap-4 text-slate-400">
          <Square className="w-4 h-4 cursor-pointer hover:text-slate-900 transition-colors" />
          <Maximize2 className="w-4 h-4 cursor-pointer hover:text-slate-900 transition-colors" />
        </div>
      </div>

      {/* Expanded Layout Space */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-6 no-scrollbar pb-10">
        
        {/* Date/Context Divider */}
        <div className="w-full flex items-center justify-center text-xs text-slate-400 uppercase tracking-widest font-medium drop-shadow-sm">
          Today
        </div>

        {/* Generation Parameters */}
        <div className="flex items-center justify-end gap-2 w-full mt-2">
          <span className="px-2 py-1 bg-white/40 backdrop-blur-md border border-white/50 rounded-md text-[10px] text-slate-500 font-medium uppercase tracking-wider drop-shadow-sm">16:9</span>
          <span className="px-2 py-1 bg-white/40 backdrop-blur-md border border-white/50 rounded-md text-[10px] text-slate-500 font-medium uppercase tracking-wider drop-shadow-sm">Pixar Style</span>
          <span className="px-2 py-1 bg-white/40 backdrop-blur-md border border-white/50 rounded-md text-[10px] text-slate-500 font-medium uppercase tracking-wider drop-shadow-sm">12s</span>
        </div>

        {/* 2. Prompt Bubble */}
        <div className="flex justify-end w-full">
          <button className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md hover:bg-slate-900 px-4 py-2 rounded-2xl rounded-tr-sm transition-colors text-white text-[15px] font-medium border border-slate-700 shadow-[0_4px_15px_rgba(0,0,0,0.15)]">
            Make 👦🏻 dance <span className="text-yellow-400 underline decoration-yellow-400/50 underline-offset-4">excitedly</span>
            <ChevronDown className="w-4 h-4 opacity-70" />
          </button>
        </div>

        {/* 3. Generation Status Flow */}
        <div className="flex w-full mt-2 relative">
          
          {/* Timeline Line */}
          <div className="absolute left-[15px] top-[40px] bottom-[28px] w-[1px] bg-white/60 drop-shadow-sm" />
          
          <div className="flex flex-col gap-6 w-full relative z-10">
            
            {/* Top Status */}
            <div className="flex items-start gap-4">
              {/* Spinning Gradient Orb Loader */}
              <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 animate-spin blur-[2px]" />
                <div className="absolute inset-0.5 rounded-full bg-white border border-white/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse shadow-[0_0_10px_rgba(250,204,21,1)]" />
              </div>
              <div className="flex flex-col gap-1.5 pt-1">
                <div className="flex items-center gap-3">
                  <span className="text-slate-900 font-medium text-[15px] drop-shadow-sm">3D animation</span>
                  <span className="text-slate-500 text-sm drop-shadow-sm">12s</span>
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed pr-2 drop-shadow-sm">
                  Your social video package is ready; just hit Publish.
                </p>
              </div>
            </div>

            {/* Bottom Result Folder */}
            <div className="flex items-center gap-5 ml-[3.5px]">
              {/* Completion Dot mapping to timeline */}
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 z-10 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
              
              {/* Folder Visual */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-14 flex items-center justify-center bg-gradient-to-br from-white/60 to-white/20 backdrop-blur-xl rounded-xl border border-white/50 shadow-[0_4px_15px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)]">
                  {/* A stylized folder icon */}
                  <Folder className="w-8 h-8 text-slate-700 drop-shadow-sm" fill="currentColor" strokeWidth={1} />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-slate-900 font-semibold text-[15px] drop-shadow-sm">3D Renders</span>
                  <span className="text-slate-500 text-[13px] drop-shadow-sm">8 items &nbsp; 226,4 MB</span>
                </div>
              </div>
            </div>
            
            {/* Publish Button */}
            <div className="pl-9 mt-2">
              <button className="flex items-center gap-2 bg-slate-900/90 backdrop-blur-md text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-900 transition-all active:scale-95 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-slate-700">
                <Sparkles className="w-4 h-4 text-purple-400" fill="currentColor" />
                Publish to Canvas
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* 4. Bottom Input */}
      <div className="w-full mt-auto pt-4 border-t border-white/40 shrink-0">
        <div className="w-full relative flex items-center">
          <div className="absolute left-4 text-slate-400 drop-shadow-sm">
            <CornerDownRight className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Reply..."
            className="w-full bg-white/40 backdrop-blur-md hover:bg-white/50 border border-white/50 rounded-full py-3 pl-12 pr-12 text-slate-900 placeholder:text-slate-500 text-[15px] focus:outline-none focus:border-white/80 focus:bg-white/60 transition-all shadow-inner"
          />
          <button className="absolute right-1.5 w-9 h-9 flex items-center justify-center bg-slate-900/90 backdrop-blur-md text-white border border-slate-700 rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
            <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>
      </div>

    </GlassPanel>
  );
}
