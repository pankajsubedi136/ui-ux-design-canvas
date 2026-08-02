import React from "react";
import { Sidebar } from "@/components/widget/sidebar";
import { MainCanvas } from "@/components/widget/main-canvas";
import { AIPanel } from "@/components/widget/ai-panel";
import { Menu } from "lucide-react";

export default function AiCreativeWidgetPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center p-2 lg:p-4 font-sans overflow-hidden relative selection:bg-indigo-500/20 bg-slate-50">
      
      {/* Vibrant macOS-style abstract mesh background for strong glass effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#FF7170] rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[60%] bg-[#A855F7] rounded-full mix-blend-multiply filter blur-[130px] opacity-60 animate-pulse" style={{ animationDuration: "15s" }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] bg-[#3B82F6] rounded-full mix-blend-multiply filter blur-[140px] opacity-60 animate-pulse" style={{ animationDuration: "18s" }} />
        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[50%] bg-[#FBBF24] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-pulse" style={{ animationDuration: "14s" }} />
        
        {/* A subtle white wash over everything to keep the UI light mode but colorful */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[50px]" />
      </div>

      {/* Main Full-Screen Application Container */}
      <div className="w-full h-full flex flex-col lg:flex-row gap-4 relative z-10 max-w-[1920px] mx-auto overflow-y-auto lg:overflow-hidden no-scrollbar pb-8 lg:pb-0">
        
        {/* Mobile Top Header */}
        <div className="flex lg:hidden items-center justify-between w-full p-4 bg-white/70 border border-slate-200/80 rounded-2xl shadow-sm backdrop-blur-xl shrink-0 mt-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md">
              <div className="w-2.5 h-2.5 rounded-sm bg-white" />
            </div>
            <span className="text-slate-900 font-semibold tracking-wide">Studio<span className="text-slate-500 font-medium">Pro</span></span>
          </div>
          <button className="p-2 text-slate-500 hover:text-slate-900 bg-slate-100 rounded-lg border border-slate-200">
             <Menu className="w-5 h-5" />
          </button>
        </div>

        <Sidebar />
        <MainCanvas />
        <AIPanel />
      </div>
    </div>
  );
}
