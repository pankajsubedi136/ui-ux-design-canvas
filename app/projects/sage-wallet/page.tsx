"use client";

import React, { useState } from 'react';
import { 
  Scan, 
  Bell, 
  Eye, 
  EyeOff,
  Snowflake, 
  Settings, 
  ArrowUpRight, 
  Send, 
  Download, 
  Plus, 
  ChevronLeft,
  Info,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  CreditCard,
  ChevronRight,
  Wallet,
  Compass,
  User,
  Clock
} from 'lucide-react';

export default function SageWalletApp() {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [navTab, setNavTab] = useState('Wallet');

  return (
    <div className="min-h-screen bg-[#D8E6C3] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E8F2DA] via-[#D8E6C3] to-[#B0CA90] py-12 px-4 md:px-8 font-sans flex flex-col items-center justify-center selection:bg-emerald-600 selection:text-white relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/6 left-1/3 w-[500px] h-[500px] bg-white/40 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/6 right-1/3 w-[600px] h-[600px] bg-[#678B3F]/20 rounded-full blur-[160px] pointer-events-none"></div>



      {/* Screens Container */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-14 w-full max-w-[1340px] relative z-10">
        
        {/* ========================================================= */}
        {/* SCREEN 1: NATIVE iOS DASHBOARD */}
        {/* ========================================================= */}
        <div className="w-[380px] h-[820px] bg-[#F2F5ED] rounded-[54px] shadow-[0_36px_100px_rgba(28,46,14,0.25)] ring-[10px] ring-white/80 relative flex flex-col overflow-hidden border border-white/80 shrink-0 select-none">
          
          {/* iOS Status Bar + Dynamic Island */}
          <div className="h-12 w-full flex justify-between items-center px-7 pt-3 relative z-40">
            <span className="text-[14.5px] font-black text-black tracking-tight">9:41</span>
            
            {/* Dynamic Island */}
            <div className="w-[115px] h-[28px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1C2E0E]/80 border border-white/10"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse"></div>
            </div>

            <div className="flex items-center gap-1.5 text-black">
              <span className="text-[10px] font-black tracking-tighter">5G</span>
              <div className="w-5 h-2.5 border-1.5 border-black rounded-xs p-0.5 flex items-center">
                <div className="h-full bg-black rounded-2xs w-3.5"></div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pt-2 pb-28 px-5 hide-scrollbar">
            
            {/* Native iOS Top Header */}
            <div className="flex items-center justify-between mb-6 pt-1">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src="https://i.pravatar.cc/100?img=68" alt="Adam" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-gray-400 block uppercase tracking-wider leading-none mb-0.5">GOOD MORNING</span>
                  <h3 className="text-[20px] font-black text-black tracking-tight leading-none">Adam Smith</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:bg-gray-50 active:scale-90 transition-all border border-gray-100">
                  <Scan className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:bg-gray-50 active:scale-90 transition-all border border-gray-100 relative">
                  <Bell className="w-4 h-4" />
                  <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-rose-500 rounded-full"></span>
                </button>
              </div>
            </div>

            {/* 3D LEATHER WALLET HERO CARD (Generous Top Spacing) */}
            <div className="relative mt-16 mb-6 group cursor-pointer">
              
              {/* STACKED 3D CASH & COINS */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[92%] h-36 z-0 pointer-events-none transition-transform duration-500 group-hover:-translate-y-2">
                
                {/* $100 Bill */}
                <div className="absolute top-0 right-3 w-52 h-26 bg-[#E3EEDC] border border-[#9BB48C] rounded-2xl shadow-lg transform rotate-6 flex flex-col justify-between p-2.5 transition-transform duration-500 group-hover:rotate-12">
                  <div className="flex justify-between items-center text-[10px] font-black text-[#3B572A]">
                    <span>100</span>
                    <span>FEDERAL RESERVE</span>
                  </div>
                  <div className="text-center font-serif text-2xl font-black text-[#4E7238]/30 tracking-widest">$100</div>
                  <div className="text-[9px] font-extrabold text-[#3B572A] text-right">ONE HUNDRED DOLLARS</div>
                </div>

                {/* $50 Bill */}
                <div className="absolute top-2 left-3 w-48 h-26 bg-[#F1EBE0] border border-[#CAC0B2] rounded-2xl shadow-lg transform -rotate-4 flex flex-col justify-between p-2.5 transition-transform duration-500 group-hover:-rotate-8">
                  <div className="flex justify-between items-center text-[10px] font-black text-[#756651]">
                    <span>50</span>
                    <span>USA</span>
                  </div>
                  <div className="text-center font-serif text-2xl font-black text-[#85755E]/30 tracking-widest">$50</div>
                  <div className="text-[9px] font-extrabold text-[#756651] text-right">FIFTY DOLLARS</div>
                </div>

                {/* Gold Coins */}
                <div className="absolute -top-4 left-14 flex -space-x-3 drop-shadow-md">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-yellow-100 border-2 border-yellow-600 shadow-md flex items-center justify-center font-black text-amber-950 text-xs transform -rotate-12 group-hover:-translate-y-1 transition-transform">
                    $
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-yellow-100 border-2 border-yellow-600 shadow-md flex items-center justify-center font-black text-amber-950 text-xs transform rotate-12 group-hover:-translate-y-2 transition-transform">
                    $
                  </div>
                </div>
              </div>

              {/* LEATHER POCKET CARD */}
              <div className="relative z-10 bg-gradient-to-br from-[#688844] via-[#557334] to-[#405A22] rounded-[36px] p-6 shadow-[0_24px_50px_rgba(35,53,19,0.32)] border-2 border-[#8BAE63] overflow-hidden">
                
                {/* Leather Texture & Stitches */}
                <div className="absolute inset-2.5 border-2 border-dashed border-[#A5CA7E]/60 rounded-[30px] pointer-events-none"></div>

                <div className="relative z-20 pt-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[13px] font-bold text-[#DBF0C5] tracking-wide">Total Balance</span>
                    <button 
                      onClick={() => setShowBalance(!showBalance)}
                      className="text-[#DBF0C5] hover:text-white transition-colors"
                    >
                      {showBalance ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <h2 className="text-[36px] font-black text-white tracking-tight mb-6 drop-shadow-sm">
                    {showBalance ? "$34,700.00" : "••••••••"}
                  </h2>

                  {/* iOS Style Glass Buttons */}
                  <div className="grid grid-cols-3 gap-2.5">
                    <button className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl py-2.5 px-1 flex items-center justify-center gap-1.5 text-white text-[12px] font-extrabold backdrop-blur-xl transition-all active:scale-95 shadow-sm">
                      <Info className="w-3.5 h-3.5 text-[#DBF0C5]" />
                      <span>Details</span>
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl py-2.5 px-1 flex items-center justify-center gap-1.5 text-white text-[12px] font-extrabold backdrop-blur-xl transition-all active:scale-95 shadow-sm">
                      <Snowflake className="w-3.5 h-3.5 text-[#DBF0C5]" />
                      <span>Freeze</span>
                    </button>
                    <button className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-2xl py-2.5 px-1 flex items-center justify-center gap-1.5 text-white text-[12px] font-extrabold backdrop-blur-xl transition-all active:scale-95 shadow-sm">
                      <Settings className="w-3.5 h-3.5 text-[#DBF0C5]" />
                      <span>Manage</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* NATIVE iOS GROUPED INSET CARD: SPENDING SCORE */}
            <div className="bg-white rounded-[28px] p-5 mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100">
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-[11px] font-black tracking-widest text-gray-400 uppercase">SPENDING HEALTH</span>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">+4.2%</span>
              </div>
              
              <div className="flex items-baseline gap-2 mb-4">
                <h3 className="text-3xl font-black text-black tracking-tight">96.3</h3>
                <span className="text-xs font-bold text-gray-400">/ 100</span>
              </div>

              {/* iOS Segmented Progress Meter */}
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden flex gap-1 mb-4 p-0.5 shadow-inner">
                <div className="h-full bg-amber-400 rounded-full" style={{ width: '55%' }}></div>
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: '25%' }}></div>
                <div className="h-full bg-purple-600 rounded-full" style={{ width: '20%' }}></div>
              </div>

              {/* Legend */}
              <div className="flex justify-between items-center text-[11px] font-extrabold text-gray-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span>Income</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                  <span>Expense</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
                  <span>Savings</span>
                </div>
              </div>
            </div>

            {/* NATIVE iOS GROUPED INSET LIST: RECENT ACTIVITY */}
            <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100">
              <div className="px-5 pt-4 pb-2 flex justify-between items-center border-b border-gray-50">
                <span className="text-[11px] font-black tracking-widest text-gray-400 uppercase">RECENT TRANSACTIONS</span>
                <span className="text-[12px] font-bold text-[#557334] hover:underline cursor-pointer">See All</span>
              </div>

              <div className="divide-y divide-gray-100/80">
                {/* Item 1 */}
                <div className="px-5 py-3.5 flex items-center justify-between hover:bg-gray-50/80 transition-colors cursor-pointer active:bg-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-400 to-amber-400 flex items-center justify-center text-white font-black text-sm shadow-xs">
                      G
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-bold text-black leading-snug">Google One Drive</h4>
                      <p className="text-[11px] font-semibold text-gray-400">Today, 09:42 AM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[14.5px] font-black text-black">-$25.00</span>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </div>
                </div>

                {/* Item 2 */}
                <div className="px-5 py-3.5 flex items-center justify-between hover:bg-gray-50/80 transition-colors cursor-pointer active:bg-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-black flex items-center justify-center text-white font-black text-sm shadow-xs">
                      
                    </div>
                    <div>
                      <h4 className="text-[14.5px] font-bold text-black leading-snug">Apple Store</h4>
                      <p className="text-[11px] font-semibold text-gray-400">Yesterday, 04:15 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[14.5px] font-black text-black">-$99.00</span>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* NATIVE iOS FLOATING DOCK BAR */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/85 backdrop-blur-2xl border border-white/80 rounded-full py-2.5 px-6 shadow-[0_16px_40px_rgba(0,0,0,0.12)] flex items-center justify-between z-30">
            <button className="flex flex-col items-center gap-1 text-[#466624] font-black active:scale-90 transition-transform">
              <Send className="w-4 h-4" />
              <span className="text-[10px]">Send</span>
            </button>
            <div className="w-px h-5 bg-gray-200"></div>
            <button className="flex flex-col items-center gap-1 text-gray-400 font-bold hover:text-black active:scale-90 transition-transform">
              <Download className="w-4 h-4" />
              <span className="text-[10px]">Receive</span>
            </button>
            <div className="w-px h-5 bg-gray-200"></div>
            <button className="flex flex-col items-center gap-1 text-gray-400 font-bold hover:text-black active:scale-90 transition-transform">
              <Plus className="w-4 h-4" />
              <span className="text-[10px]">Add</span>
            </button>
          </div>

        </div>

        {/* ========================================================= */}
        {/* SCREEN 2: NATIVE iOS SAVINGS & CREDIT */}
        {/* ========================================================= */}
        <div className="w-[380px] h-[820px] bg-[#F2F5ED] rounded-[54px] shadow-[0_36px_100px_rgba(28,46,14,0.25)] ring-[10px] ring-white/80 relative flex flex-col overflow-hidden border border-white/80 shrink-0 select-none">
          
          {/* Status Bar + Dynamic Island */}
          <div className="h-12 w-full flex justify-between items-center px-7 pt-3 relative z-40">
            <span className="text-[14.5px] font-black text-black tracking-tight">9:41</span>
            
            {/* Dynamic Island */}
            <div className="w-[115px] h-[28px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1C2E0E]/80 border border-white/10"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse"></div>
            </div>

            <div className="flex items-center gap-1.5 text-black">
              <span className="text-[10px] font-black tracking-tighter">5G</span>
              <div className="w-5 h-2.5 border-1.5 border-black rounded-xs p-0.5 flex items-center">
                <div className="h-full bg-black rounded-2xs w-3.5"></div>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pt-2 pb-8 px-5 hide-scrollbar">
            
            {/* iOS Top Bar Navigation */}
            <div className="flex items-center justify-between mb-5 pt-1">
              <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-black shadow-xs hover:bg-gray-50 active:scale-90 transition-all border border-gray-100">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h2 className="text-[18px] font-black text-black tracking-tight">Savings Vault</h2>
              <div className="w-9"></div>
            </div>

            {/* Native iOS Segmented Control */}
            <div className="bg-gray-200/60 p-1 rounded-[18px] flex gap-1 mb-6 border border-gray-200/40">
              {['Dashboard', 'Credit', 'Debit', 'Activity'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-1.5 rounded-[14px] text-[12px] font-extrabold transition-all ${
                    activeTab === tab 
                      ? 'bg-white text-black shadow-sm' 
                      : 'text-gray-500 hover:text-black'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Native Hero Savings Display */}
            <div className="text-center mb-8">
              <span className="text-[11px] font-black tracking-widest text-gray-400 uppercase block mb-1">TOTAL SAVINGS BALANCE</span>
              <h2 className="text-[42px] font-black text-black tracking-tight leading-none mb-3">$85,400.00</h2>
              <div className="inline-flex items-center gap-1.5 text-[12px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                <span>+$3,600 last month</span>
              </div>
            </div>

            {/* NATIVE iOS GROUPED CARD: SAVINGS TREND */}
            <div className="bg-white rounded-[28px] p-5 mb-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-black tracking-widest text-gray-400 uppercase">GROWTH TREND</span>
                <span className="text-[11px] font-bold text-gray-400 bg-gray-50 px-2.5 py-0.5 rounded-full">2026</span>
              </div>

              {/* Scatter Chart */}
              <div className="h-36 w-full relative mb-3 flex items-end">
                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                  <path 
                    d="M 20 110 C 60 90, 100 80, 140 60 C 180 50, 220 40, 280 20" 
                    fill="none" 
                    stroke="#10B981" 
                    strokeWidth="2.5" 
                    strokeDasharray="4 4"
                  />
                </svg>

                <div className="w-full h-full relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 absolute left-[12%] bottom-[20%] shadow-xs"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 absolute left-[22%] bottom-[35%] shadow-xs"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 absolute left-[30%] bottom-[28%] shadow-xs"></span>
                  <span className="w-3 h-3 rounded-full bg-cyan-400 absolute left-[40%] bottom-[52%] shadow-xs"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 absolute left-[48%] bottom-[44%] shadow-xs"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 absolute left-[58%] bottom-[62%] shadow-xs"></span>
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500 absolute left-[68%] bottom-[58%] ring-4 ring-emerald-100 shadow-md"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 absolute left-[78%] bottom-[72%] shadow-xs"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-400 absolute left-[88%] bottom-[84%] shadow-xs"></span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[11px] font-bold text-gray-400 px-2 pt-2 border-t border-gray-50">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            {/* NATIVE iOS DUAL CREDIT SCORE CARDS */}
            <div className="grid grid-cols-2 gap-3">
              
              {/* TRANSUNION */}
              <div className="bg-white rounded-[26px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9.5px] font-black tracking-widest text-gray-400 uppercase">TRANSUNION</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                </div>
                <h4 className="text-2xl font-black text-black mb-3 tracking-tight">520</h4>

                <div className="relative mb-2">
                  <div className="flex gap-1 h-2 rounded-full overflow-hidden p-0.5 bg-gray-100">
                    <div className="flex-1 bg-purple-200"></div>
                    <div className="flex-1 bg-purple-300"></div>
                    <div className="flex-1 bg-purple-400"></div>
                    <div className="flex-1 bg-purple-600"></div>
                    <div className="flex-1 bg-purple-800"></div>
                  </div>
                  <div className="absolute -bottom-2 left-[65%] -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[5px] border-b-purple-800 transform rotate-180"></div>
                </div>

                <span className="text-[9px] font-black text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">VERY GOOD</span>
              </div>

              {/* EQUIFAX */}
              <div className="bg-white rounded-[26px] p-4 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-100">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[9.5px] font-black tracking-widest text-gray-400 uppercase">EQUIFAX</span>
                  <CreditCard className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <h4 className="text-2xl font-black text-black mb-3 tracking-tight">673</h4>

                <div className="relative mb-2">
                  <div className="flex gap-1 h-2 rounded-full overflow-hidden p-0.5 bg-gray-100">
                    <div className="flex-1 bg-amber-200"></div>
                    <div className="flex-1 bg-amber-300"></div>
                    <div className="flex-1 bg-amber-500"></div>
                    <div className="flex-1 bg-amber-700"></div>
                    <div className="flex-1 bg-amber-900"></div>
                  </div>
                  <div className="absolute -bottom-2 left-[45%] -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[5px] border-b-amber-700 transform rotate-180"></div>
                </div>

                <span className="text-[9px] font-black text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-wider inline-block">GOOD</span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
