import React from "react";
import { ChevronDown, Mic, Search, MessageSquare, ChevronLeft, Image as ImageIcon, Sparkles, Check, ArrowRight, CornerDownRight, Box, Layers, Activity } from "lucide-react";

export default function CooperAIPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8 bg-[#FAFAFA] font-sans selection:bg-black/10 relative overflow-hidden">
      
      {/* Extremely subtle minimalist background texture */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }} />

      <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 max-w-7xl mx-auto z-10 relative">
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Reusable Mobile Frame Wrapper (Monochrome Precision)
// ----------------------------------------------------------------------
function MobileFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-[320px] h-[680px] bg-white rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.03)] relative flex flex-col shrink-0 ${className}`}>
      {children}
    </div>
  );
}

// ----------------------------------------------------------------------
// Screen 1: Dashboard
// ----------------------------------------------------------------------
function ScreenOne() {
  return (
    <MobileFrame>
      <div className="relative z-10 flex flex-col h-full p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2 border border-black/5 bg-black/[0.02] px-3 py-2 rounded-full text-xs font-semibold text-[#111]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D97757] animate-pulse" />
            Workspace
          </div>
          <div className="w-10 h-10 rounded-full border border-black/10 bg-white p-0.5 shadow-sm">
            <div className="w-full h-full rounded-full overflow-hidden bg-black/5">
              <img src="https://api.dicebear.com/9.x/pixel-art/svg?seed=James" alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Clean Premium Greeting */}
        <div className="mt-8 mb-6 px-2">
          <h1 className="text-[32px] leading-[1.1] tracking-tight flex flex-col">
            <span className="font-light text-[#888]">Hello,</span>
            <span className="font-bold text-[#111]">James</span>
          </h1>
          <p className="text-[#888] text-[13px] mt-2 font-medium leading-relaxed">System operational.<br/>Ready for input.</p>
        </div>

        {/* Structured Action Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          
          {/* Audio Input */}
          <div className="col-span-2 bg-[#111] border border-[#111] rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:bg-[#222] transition-colors group shadow-md">
            <div>
              <h3 className="text-white font-semibold text-[15px] mb-0.5">Audio Interface</h3>
              <p className="text-white/60 text-[11px] font-medium">Start voice dictation</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
              <Mic className="w-5 h-5" />
            </div>
          </div>

          {/* New Thread */}
          <div className="bg-white border border-black/10 rounded-2xl p-4 flex flex-col justify-between h-[110px] relative cursor-pointer hover:bg-black/[0.02] transition-colors shadow-sm">
            <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-[#D97757] rounded-full" />
            <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-[#111] bg-black/[0.02]">
              <MessageSquare className="w-4 h-4" />
            </div>
            <h3 className="text-[#111] font-semibold text-[13px]">New Thread</h3>
          </div>

          {/* Vision Scan */}
          <div className="bg-white border border-black/10 rounded-2xl p-4 flex flex-col justify-between h-[110px] cursor-pointer hover:bg-black/[0.02] transition-colors shadow-sm">
            <div className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center text-[#111] bg-black/[0.02]">
              <ImageIcon className="w-4 h-4" />
            </div>
            <h3 className="text-[#111] font-semibold text-[13px]">Vision Scan</h3>
          </div>
        </div>

        {/* Minimalist Data Table */}
        <div className="flex flex-col flex-1">
          <div className="flex items-center justify-between mb-4 border-b border-black/10 pb-3">
            <h2 className="text-[#111] font-semibold text-[12px] uppercase tracking-wider">Recent Activity</h2>
            <span className="text-[#D97757] font-semibold text-[11px] cursor-pointer hover:underline underline-offset-2">View All</span>
          </div>

          <div className="flex flex-col gap-2 overflow-y-auto no-scrollbar pb-4">
            <ActivityItem time="2m ago" text="Quarterly report gen" />
            <ActivityItem time="1h ago" text="Invoice data extraction" />
            <ActivityItem time="3h ago" text="Client meeting summary" />
            <ActivityItem time="Yesterday" text="Vision scan: whiteboard" />
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}

function ActivityItem({ time, text }: { time: string; text: string }) {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-black/[0.03] rounded-lg cursor-pointer transition-colors border border-transparent hover:border-black/5 group">
      <div className="flex items-center gap-3">
        <CornerDownRight className="w-4 h-4 text-[#999] group-hover:text-[#111] transition-colors" />
        <span className="text-[#111] text-[13px] font-medium">{text}</span>
      </div>
      <span className="text-[#888] text-[11px] font-semibold shrink-0">{time}</span>
    </div>
  );
}

// ----------------------------------------------------------------------
// Screen 2: Interaction View
// ----------------------------------------------------------------------
function ScreenTwo() {
  return (
    <MobileFrame>
      <div className="flex flex-col h-full relative p-6 pb-0">
        
        {/* Header */}
        <div className="flex items-center justify-between pt-2 pb-4 border-b border-black/5">
          <div className="w-8 h-8 border border-black/10 rounded-full flex items-center justify-center text-[#111] cursor-pointer hover:bg-black/[0.03] transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#D97757] rounded-full animate-pulse" />
            <span className="text-[#111] text-[11px] font-bold uppercase tracking-widest">Active Thread</span>
          </div>
          
          <div className="w-8 h-8 border border-black/10 rounded-full flex items-center justify-center text-[#111] cursor-pointer hover:bg-black/[0.03] transition-colors">
            <Search className="w-4 h-4" />
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col gap-6 pt-6 pb-24">
          
          {/* User Command */}
          <div className="flex flex-col items-end gap-2">
            <span className="text-[#888] font-bold text-[9px] uppercase tracking-wider">James</span>
            <div className="bg-[#111] text-white py-3 px-4 rounded-2xl rounded-tr-sm text-[13px] font-medium leading-relaxed max-w-[85%] shadow-md">
              Extract the revenue statistics from the latest document.
            </div>
          </div>

          {/* AI Response */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#D97757]" />
              <span className="text-[#D97757] font-bold text-[9px] uppercase tracking-wider">System</span>
            </div>
            <div className="bg-white border border-black/10 text-[#111] py-3 px-4 rounded-2xl rounded-tl-sm text-[13px] font-medium leading-relaxed max-w-[85%] shadow-sm">
              Data extracted successfully. Generating visualization.
            </div>
          </div>

          {/* Minimalist Data Chart Card */}
          <div className="bg-white p-5 rounded-2xl border border-black/10 shadow-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[#888] font-bold text-[10px] uppercase tracking-widest">Revenue (Q3)</div>
              <div className="text-[#111] font-bold text-[10px] bg-black/5 px-2 py-1 rounded-sm">+14.2%</div>
            </div>
            <div className="text-[#111] text-[28px] font-extrabold tracking-tight mb-8">
              $842.5K
            </div>
            
            {/* Perfect Minimalist Bar Chart */}
            <div className="flex items-end gap-2 h-[70px] mt-2 w-full">
              {[30, 45, 25, 60, 40, 75, 100].map((height, i, arr) => (
                <div 
                  key={i}
                  className={`flex-1 rounded-t-sm transition-all duration-300 ${
                    i === arr.length - 1 ? 'bg-[#111] shadow-md' : 'bg-[#E5E5E5] hover:bg-[#D4D4D4]'
                  }`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          
        </div>

        {/* Input Toolbar */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white via-white to-white/0 z-10">
          <div className="bg-white rounded-full p-2 pl-5 flex items-center border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <input 
              type="text" 
              placeholder="Ask anything..." 
              className="flex-1 bg-transparent border-none outline-none text-[14px] font-medium text-[#111] placeholder:text-[#888]"
            />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full hover:bg-black/5 flex items-center justify-center text-[#666] transition-colors cursor-pointer">
                <Mic className="w-4 h-4" />
              </div>
              <button className="w-10 h-10 rounded-full bg-[#111] flex items-center justify-center text-white hover:scale-105 transition-transform shrink-0 shadow-md">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </MobileFrame>
  );
}

// ----------------------------------------------------------------------
// Screen 3: Access Plans
// ----------------------------------------------------------------------
function ScreenThree() {
  return (
    <MobileFrame>
      <div className="flex flex-col h-full relative p-6">
        
        {/* Header */}
        <div className="pt-2 pb-4 z-10">
          <div className="w-8 h-8 border border-black/10 rounded-full flex items-center justify-center text-[#111] cursor-pointer hover:bg-black/[0.03] transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </div>
        </div>

        {/* Clean Premium Title */}
        <div className="flex flex-col mt-2 mb-6 z-10 px-2">
          <span className="text-[#D97757] font-semibold text-[10px] uppercase tracking-widest mb-2">Upgrade Plan</span>
          <h1 className="text-[32px] leading-[1.1] tracking-tight flex flex-col mb-1">
            <span className="font-light text-[#888]">Premium</span>
            <span className="font-bold text-[#111]">Access</span>
          </h1>
          <p className="text-[#888] text-[13px] font-medium mt-2 leading-relaxed">
            Unlock unrestricted capabilities and elevate your workflow.
          </p>
        </div>

        {/* Structured Pricing Cards */}
        <div className="flex flex-col gap-4 flex-1">
          
          {/* Base Plan */}
          <div className="bg-white border border-black/10 rounded-2xl p-4 cursor-pointer hover:border-black/30 hover:bg-black/[0.02] transition-all group shadow-sm">
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-black/10 bg-black/[0.02] flex items-center justify-center">
                  <Box className="w-4 h-4 text-[#111]" />
                </div>
                <div>
                  <h3 className="text-[#111] font-bold text-[14px]">Base Plan</h3>
                  <p className="text-[#666] font-medium text-[11px] mt-0.5">Free / 0 Cycles</p>
                </div>
              </div>
              <div className="w-4 h-4 rounded-full border-2 border-black/20 group-hover:border-black/40 transition-colors" />
            </div>
            
            <div className="h-[1px] w-full bg-black/5 mb-4" />
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[12px] font-medium text-[#666]">
                <Check className="w-4 h-4 text-[#111]" />
                Limited text queries
              </div>
            </div>
          </div>

          {/* Pro Plan (Active) */}
          <div className="bg-white border-2 border-[#111] rounded-2xl p-4 cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.08)] relative overflow-hidden">
            <div className="absolute top-4 right-4 text-[10px] font-bold bg-[#111] text-white px-2 py-0.5 rounded-sm uppercase tracking-wider">
              Selected
            </div>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#111] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-[#111] font-bold text-[14px]">Pro Plan</h3>
                  <p className="text-[#666] font-medium text-[11px] mt-0.5">$8.99 / Month</p>
                </div>
              </div>
            </div>
            
            <div className="h-[1px] w-full bg-black/5 mb-4" />
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[12px] font-medium text-[#111]">
                <Check className="w-4 h-4 text-[#D97757]" />
                Unrestricted queries
              </div>
              <div className="flex items-center gap-2 text-[12px] font-medium text-[#111]">
                <Check className="w-4 h-4 text-[#D97757]" />
                Vision and audio analysis
              </div>
              <div className="flex items-center gap-2 text-[12px] font-medium text-[#111]">
                <Check className="w-4 h-4 text-[#D97757]" />
                Priority processing
              </div>
            </div>
          </div>

        </div>

        {/* Matte Black Execute Button (Paynvo Style) */}
        <div className="mt-auto pt-4 pb-2">
          <button className="w-full bg-gradient-to-b from-[#2C2D32] to-[#131416] text-white py-4 rounded-full font-semibold text-[16px] hover:from-[#33343A] hover:to-[#1A1B1E] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(0,0,0,0.8),0_10px_20px_rgba(0,0,0,0.15)] active:scale-[0.98] transform flex items-center justify-center gap-2 border border-[#0A0A0C]">
            Confirm Upgrade <ArrowRight className="w-4 h-4 opacity-90" />
          </button>
        </div>

      </div>
    </MobileFrame>
  );
}
