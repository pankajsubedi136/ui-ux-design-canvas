import React from "react";
import { Frown, Rocket, Check } from "lucide-react";

export default function VasukoSocialPost() {
  return (
    <div className="min-h-screen bg-[#E2E8F0] flex items-center justify-center overflow-hidden p-8 font-sans">
      
      {/* 1080x1080 Post Container (Scaled for viewing) */}
      <div 
        className="w-[1080px] h-[1080px] bg-[#F7F8FA] relative overflow-hidden rounded-[40px] shadow-2xl shrink-0 flex flex-col items-center"
        style={{ transform: "scale(0.7)", transformOrigin: "center" }}
      >
        
        {/* Subtle Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-[#0055FF]/[0.03] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border-[1px] border-[#0055FF]/[0.03] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border-[1px] border-[#0055FF]/[0.03] rounded-full pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/60 blur-[100px] rounded-full pointer-events-none" />

        {/* --- ROBUST FLEX LAYOUT --- */}
        
        {/* Top Badge */}
        <div className="relative z-40 bg-white/90 backdrop-blur-xl border border-black/5 px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex items-center gap-3 mt-16">
          <span className="text-2xl">👋</span>
          <span className="text-xl font-medium tracking-tight text-[#475569]">Vasuko Web Studio</span>
        </div>

        {/* Headline - Responsive Font Size & Flex Center */}
        <div className="relative z-30 w-full flex flex-col items-center mt-12 px-10">
          <h1 className="text-[92px] leading-[1.05] tracking-[-0.04em] font-bold text-center flex flex-col items-center">
            
            <div className="whitespace-nowrap">
              <span className="text-[#475569]">Looking for a</span>
            </div>
            
            <div className="flex items-center justify-center gap-6 my-2">
              <span className="text-[#0055FF]">custom</span>
              
              {/* Floating Logo Icon (Inline to prevent layout breaks) */}
              <div className="relative w-[130px] h-[130px] bg-[#0055FF] rounded-[32px] shadow-[0_30px_60px_rgba(0,85,255,0.4),inset_0_2px_4px_rgba(255,255,255,0.3)] rotate-[-8deg] flex items-center justify-center border border-white/20 transform hover:scale-110 transition-all duration-500 hover:rotate-[-5deg]">
                <img src="/vasuko.png" alt="Vasuko" className="w-[70px] h-[70px] object-contain" />
              </div>
              
              <span className="text-[#848F9F]">website?</span>
            </div>
            
            <div className="whitespace-nowrap">
              <span className="text-[#475569]">We build them</span> <span className="text-[#848F9F]">for you.</span>
            </div>
          </h1>
        </div>

        {/* Middle Cards Section */}
        <div className="relative z-20 w-full flex justify-between px-16 mt-12">
          
          {/* Dashed Connecting Line */}
          <svg className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[600px] h-[150px] -translate-y-1/2 opacity-20 pointer-events-none" viewBox="0 0 600 150" fill="none">
            <path d="M 50 50 C 300 -20 300 -20 550 50" stroke="black" strokeWidth="3" strokeDasharray="12 12" />
          </svg>

          {/* Point A Card */}
          <div className="bg-white border border-white p-5 rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] flex items-center gap-5 pr-12 w-[380px] transform -translate-y-4">
            <div className="w-[72px] h-[72px] rounded-2xl bg-[#F4F5F7] border border-black/5 flex items-center justify-center shadow-inner shrink-0">
              <Frown className="w-8 h-8 text-[#848F9F]" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[28px] font-bold text-[#1A1D24] leading-tight mb-1">Point A</h3>
              <p className="text-[17px] text-[#848F9F] font-medium tracking-tight">Generic templates</p>
            </div>
          </div>

          {/* Point B Card */}
          <div className="bg-white border border-white p-5 rounded-[28px] shadow-[0_20px_50px_rgba(0,85,255,0.1)] flex items-center gap-5 pr-12 w-[420px] transform translate-y-6">
            <div className="w-[72px] h-[72px] rounded-2xl bg-[#0055FF] border border-[#0044CC] flex items-center justify-center shadow-[0_10px_20px_rgba(0,85,255,0.2)] shrink-0">
              <Rocket className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[28px] font-bold text-[#1A1D24] leading-tight mb-1">Point B</h3>
              <p className="text-[17px] text-[#0055FF] font-semibold tracking-tight">Vasuko custom design</p>
            </div>
          </div>
        </div>

        {/* Bottom Envelope Graphic (Absolute bottom anchor) */}
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[800px] h-[450px] z-10 flex justify-center">
          
          {/* Back of Envelope */}
          <div className="absolute bottom-0 w-full h-[350px] bg-[#E8EDF2] rounded-t-[40px] shadow-inner border-t border-white/50" />
          
          {/* Sliding Card 1 (Left - Template Result) */}
          <div className="absolute bottom-[200px] left-[60px] w-[340px] h-[260px] bg-white rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-black/5 rotate-[-8deg] p-6 z-10 flex flex-col justify-between pb-10">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-[#F4F5F7] flex items-center justify-center">
                 <Frown className="w-5 h-5 text-[#848F9F]" />
               </div>
               <div className="flex flex-col">
                 <span className="text-gray-900 font-bold tracking-tight text-sm">Generic Website</span>
                 <span className="text-gray-400 font-medium text-[11px]">No conversions</span>
               </div>
             </div>
             
             <div className="flex justify-center mb-4">
               <div className="bg-[#F4F5F7] border border-black/5 rounded-2xl px-8 py-3">
                 <span className="text-4xl font-bold text-[#1A1D24]">$0</span>
               </div>
             </div>
          </div>

          {/* Sliding Card 2 (Right - Authentic Payment Stripe Notification Vibe) */}
          <div className="absolute bottom-[240px] right-[60px] w-[360px] h-[260px] bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-black/5 rotate-[4deg] p-6 z-20 flex flex-col justify-between pb-12">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-green-100 border border-green-200 flex items-center justify-center">
                 <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                   <Check className="w-4 h-4 text-white" strokeWidth={3} />
                 </div>
               </div>
               <div className="flex flex-col">
                 <span className="text-gray-900 font-bold tracking-tight text-sm">Payment Received</span>
                 <span className="text-gray-400 font-medium text-[11px]">via Vasuko Checkout</span>
               </div>
             </div>
             
             <div className="w-full text-center">
               <span className="text-[52px] font-black text-[#1A1D24] tracking-tight">+$10,450</span>
             </div>
          </div>

          {/* Front of Envelope (V shape overlap) */}
          <div className="absolute bottom-[100px] w-[800px] h-[250px] z-30 pointer-events-none drop-shadow-[0_-4px_24px_rgba(0,0,0,0.02)]">
            <svg width="800" height="250" viewBox="0 0 800 250" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 250V50L400 150L800 50V250H0Z" fill="url(#paint0_linear)" />
              <path d="M0 50L400 150L800 50" stroke="white" strokeWidth="4" />
              <defs>
                <linearGradient id="paint0_linear" x1="400" y1="50" x2="400" y2="250" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F7F8FA" stopOpacity="0.98" />
                  <stop offset="1" stopColor="#F7F8FA" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
        </div>
      </div>
    </div>
  );
}
