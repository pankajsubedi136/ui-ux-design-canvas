"use client";

import React, { useEffect, useState } from 'react';
import { 
  Home, 
  ReceiptText, 
  Target, 
  User, 
  Eye, 
  Coffee, 
  CircleDollarSign, 
  Tv, 
  Briefcase, 
  ShoppingBag,
  ArrowLeft,
  Search,
  Filter,
  Car,
  Plane,
  Home as HomeIcon,
  TrendingUp,
  Plus,
  Bell
} from 'lucide-react';

export default function FinanceAppPresentation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#D6E8DB] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#E9F3EC] via-[#D6E8DB] to-[#A8CDB4] py-16 px-4 md:px-8 font-sans flex flex-col items-center justify-center selection:bg-emerald-500 selection:text-white">
      
      {/* Title */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B3B2B] tracking-tight drop-shadow-sm mb-3">Finance UI Pro Max</h1>
        <p className="text-[#3A6B52] font-medium tracking-wide">Next-Gen Mobile Experience</p>
      </div>

      {/* Screen Wrapper */}
      <div className="flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-16 w-full max-w-[1400px]">
        
        {/* --- SCREEN 1: HOME --- */}
        <div className={`w-[375px] h-[812px] bg-[#F8FAFC] rounded-[50px] shadow-[0_32px_64px_-12px_rgba(0,40,20,0.15)] ring-[10px] ring-white/60 relative flex flex-col overflow-hidden transition-all duration-700 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          {/* Status Bar Mock */}
          <div className="h-12 w-full flex justify-between items-center px-8 pt-2 absolute top-0 z-20">
            <span className="text-[14px] font-semibold text-gray-800 tracking-tighter">9:41</span>
            <div className="flex gap-1.5">
              <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pt-14 pb-28 hide-scrollbar">
            
            {/* Header Content */}
            <div className="px-6 pt-2 pb-4 flex justify-between items-center">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 p-1 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <img src="https://i.pravatar.cc/100?img=33" alt="Profile" className="rounded-full w-full h-full object-cover" />
              </div>
              <button className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-600 hover:text-emerald-500 hover:scale-105 transition-all">
                <Bell className="w-5 h-5" />
              </button>
            </div>

            {/* Total Balance Card (Glassmorphic) */}
            <div className="mx-5 mb-6 p-6 rounded-[32px] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[14px] font-semibold text-gray-400 tracking-wide">Total Balance</span>
                <Eye className="w-5 h-5 text-gray-300 cursor-pointer hover:text-gray-600 transition-colors" />
              </div>
              <h2 className="text-[40px] font-black text-[#0F172A] tracking-tighter mb-1">$12,854<span className="text-gray-300">.67</span></h2>
              <div className="flex items-center text-[13px] font-bold text-emerald-500 mb-8 bg-emerald-50 inline-flex px-3 py-1 rounded-full">
                <TrendingUp className="w-3.5 h-3.5 mr-1.5" />
                <span>+12.5% this month</span>
              </div>
              
              {/* Premium SVG Line Chart */}
              <div className="h-28 w-full relative mb-4 -mx-2">
                 <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible drop-shadow-[0_4px_8px_rgba(16,185,129,0.3)]">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0,30 C5,30 8,20 12,20 C18,20 22,10 26,10 C32,10 36,25 40,25 C46,25 48,15 52,15 C58,15 62,22 66,22 C72,22 76,30 80,30 C86,30 90,20 94,20" 
                      fill="url(#chartGradient)" 
                    />
                    <path 
                      d="M0,30 C5,30 8,20 12,20 C18,20 22,10 26,10 C32,10 36,25 40,25 C46,25 48,15 52,15 C58,15 62,22 66,22 C72,22 76,30 80,30 C86,30 90,20 94,20" 
                      fill="none" 
                      stroke="#10B981" 
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="94" cy="20" r="3.5" fill="#10B981" className="animate-pulse" />
                 </svg>
                 <div className="absolute bottom-2 w-full border-b border-dashed border-gray-200"></div>
              </div>

              {/* Time Filters */}
              <div className="flex justify-between items-center text-[12px] font-bold mt-2">
                <span className="bg-[#0F172A] text-white px-5 py-2 rounded-full shadow-md cursor-pointer">Daily</span>
                <span className="text-gray-400 hover:text-gray-800 cursor-pointer transition-colors">Weekly</span>
                <span className="text-gray-400 hover:text-gray-800 cursor-pointer transition-colors">Monthly</span>
                <span className="text-gray-400 hover:text-gray-800 cursor-pointer transition-colors">Yearly</span>
                <span className="text-gray-400 hover:text-gray-800 cursor-pointer transition-colors">All</span>
              </div>
            </div>

            {/* Expense By Category Card */}
            <div className="mx-5 bg-white p-6 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
              <h3 className="text-[17px] font-bold text-[#0F172A] mb-8">Expense by Category</h3>
              
              {/* Premium SVG Donut Chart */}
              <div className="flex justify-center mb-10 relative">
                <svg viewBox="0 0 100 100" className="w-40 h-40 transform -rotate-90 drop-shadow-md">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#F1F5F9" strokeWidth="12" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="62.8" className="transition-all duration-1000 ease-out" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="188.4" className="transition-all duration-1000 ease-out" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="12" strokeDasharray="251.2" strokeDashoffset="213.5" className="transition-all duration-1000 ease-out" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[24px] font-black text-[#0F172A] tracking-tighter">$2,140</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#10B981] shadow-sm"></div>
                    <span className="text-[15px] font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Food & Dining</span>
                  </div>
                  <span className="text-[16px] font-bold text-[#0F172A]">$680</span>
                </div>
                <div className="flex justify-between items-center group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#3B82F6] shadow-sm"></div>
                    <span className="text-[15px] font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Transportation</span>
                  </div>
                  <span className="text-[16px] font-bold text-[#0F172A]">$420</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Glass Bottom Nav */}
          <div className="absolute bottom-0 w-full h-[90px] bg-white/80 backdrop-blur-xl border-t border-white/50 flex justify-between items-center px-10 pb-4 shadow-[0_-20px_40px_rgba(0,0,0,0.03)] z-30">
            <div className="flex flex-col items-center gap-1.5 text-emerald-500 cursor-pointer">
              <Home className="w-6 h-6 stroke-[2.5px]" />
              <span className="text-[11px] font-extrabold tracking-wide">Home</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-gray-400 cursor-pointer hover:text-emerald-500 hover:-translate-y-1 transition-all">
              <ReceiptText className="w-6 h-6 stroke-[2px]" />
              <span className="text-[11px] font-bold tracking-wide">Transact</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-gray-400 cursor-pointer hover:text-emerald-500 hover:-translate-y-1 transition-all">
              <Target className="w-6 h-6 stroke-[2px]" />
              <span className="text-[11px] font-bold tracking-wide">Goals</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-gray-400 cursor-pointer hover:text-emerald-500 hover:-translate-y-1 transition-all">
              <User className="w-6 h-6 stroke-[2px]" />
              <span className="text-[11px] font-bold tracking-wide">Profile</span>
            </div>
          </div>
        </div>

        {/* --- SCREEN 2: TRANSACTIONS --- */}
        <div className={`w-[375px] h-[812px] bg-[#F8FAFC] rounded-[50px] shadow-[0_32px_64px_-12px_rgba(0,40,20,0.15)] ring-[10px] ring-white/60 relative flex flex-col overflow-hidden transition-all duration-700 delay-150 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          <div className="h-12 w-full flex justify-between items-center px-8 pt-2 absolute top-0 z-20">
            <span className="text-[14px] font-semibold text-gray-800 tracking-tighter">9:41</span>
            <div className="flex gap-1.5">
              <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white px-6 pt-16 pb-6 rounded-b-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] z-10 border-b border-gray-50">
            <div className="flex items-center justify-between mb-8">
              <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowLeft className="w-5 h-5 text-[#0F172A]" />
              </button>
              <h2 className="text-[20px] font-extrabold text-[#0F172A] tracking-tight">Transactions</h2>
              <div className="w-10"></div>
            </div>
            
            <div className="flex gap-3">
              <div className="flex-1 bg-[#F1F5F9] rounded-[20px] flex items-center px-4 py-3.5 border border-transparent focus-within:border-emerald-500/30 focus-within:bg-white focus-within:shadow-sm transition-all">
                <Search className="w-5 h-5 text-gray-400 mr-3" />
                <input type="text" placeholder="Search transactions..." className="bg-transparent border-none outline-none w-full text-[15px] font-semibold text-[#0F172A] placeholder-gray-400" />
              </div>
              <button className="w-14 h-[52px] bg-[#F1F5F9] rounded-[20px] flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-[#0F172A] transition-all">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pt-6 pb-28 space-y-4 hide-scrollbar">
            
            {/* Transaction Items */}
            {[
              { icon: Coffee, color: 'text-orange-500', bg: 'bg-orange-50', name: 'Starbucks Coffee', cat: 'Food & Dining', date: 'Dec 10, 2024', amount: '-$5.80', isExpense: true },
              { icon: CircleDollarSign, color: 'text-emerald-500', bg: 'bg-emerald-50', name: 'Salary Deposit', cat: 'Income', date: 'Yesterday, 3:00 PM', amount: '+$5,400.00', isExpense: false },
              { icon: Tv, color: 'text-red-500', bg: 'bg-red-50', name: 'Netflix Subscription', cat: 'Entertainment', date: 'Sep 03, 2024', amount: '-$15.70', isExpense: true },
              { icon: Briefcase, color: 'text-blue-500', bg: 'bg-blue-50', name: 'Freelance Payment', cat: 'Income', date: 'Nov 13, 2024', amount: '+$450.90', isExpense: false },
              { icon: ShoppingBag, color: 'text-amber-500', bg: 'bg-amber-50', name: 'Amazon Purchase', cat: 'Shopping', date: 'Sep 19, 2024', amount: '-$678.00', isExpense: true }
            ].map((tx, i) => (
              <div key={i} className="bg-white p-4 rounded-[24px] flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-md hover:scale-[1.01] cursor-pointer transition-all border border-gray-50/50">
                <div className="flex items-center gap-4">
                  <div className={`w-[52px] h-[52px] rounded-[18px] ${tx.bg} flex items-center justify-center ${tx.color} shadow-sm`}>
                    <tx.icon className="w-6 h-6 stroke-[2px]" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#0F172A] mb-0.5">{tx.name}</h4>
                    <p className="text-[12px] font-semibold text-gray-400">{tx.cat} <span className="mx-1">•</span> {tx.date}</p>
                  </div>
                </div>
                <span className={`text-[16px] font-bold ${tx.isExpense ? 'text-[#0F172A]' : 'text-emerald-500'}`}>{tx.amount}</span>
              </div>
            ))}
          </div>

          {/* Glass Bottom Nav */}
          <div className="absolute bottom-0 w-full h-[90px] bg-white/80 backdrop-blur-xl border-t border-white/50 flex justify-between items-center px-10 pb-4 shadow-[0_-20px_40px_rgba(0,0,0,0.03)] z-30">
            <div className="flex flex-col items-center gap-1.5 text-gray-400 cursor-pointer hover:text-emerald-500 hover:-translate-y-1 transition-all">
              <Home className="w-6 h-6 stroke-[2px]" />
              <span className="text-[11px] font-bold tracking-wide">Home</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-emerald-500 cursor-pointer">
              <ReceiptText className="w-6 h-6 stroke-[2.5px]" />
              <span className="text-[11px] font-extrabold tracking-wide">Transact</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-gray-400 cursor-pointer hover:text-emerald-500 hover:-translate-y-1 transition-all">
              <Target className="w-6 h-6 stroke-[2px]" />
              <span className="text-[11px] font-bold tracking-wide">Goals</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-gray-400 cursor-pointer hover:text-emerald-500 hover:-translate-y-1 transition-all">
              <User className="w-6 h-6 stroke-[2px]" />
              <span className="text-[11px] font-bold tracking-wide">Profile</span>
            </div>
          </div>
        </div>

        {/* --- SCREEN 3: GOALS (CUSTOM PRO MAX) --- */}
        <div className={`w-[375px] h-[812px] bg-[#F8FAFC] rounded-[50px] shadow-[0_32px_64px_-12px_rgba(0,40,20,0.15)] ring-[10px] ring-white/60 relative flex flex-col overflow-hidden transition-all duration-700 delay-300 ease-out transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          <div className="h-12 w-full flex justify-between items-center px-8 pt-2 absolute top-0 z-20">
            <span className="text-[14px] font-semibold text-gray-800 tracking-tighter">9:41</span>
            <div className="flex gap-1.5">
              <div className="w-4 h-3 bg-gray-800 rounded-sm"></div>
              <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          <div className="bg-white px-6 pt-16 pb-6 rounded-b-[40px] shadow-[0_8px_30px_rgba(0,0,0,0.03)] z-10 border-b border-gray-50">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[28px] font-black text-[#0F172A] tracking-tight">Savings Goals</h2>
              <button className="w-12 h-12 bg-emerald-50 rounded-[20px] flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white hover:shadow-lg transition-all shadow-sm group">
                <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>
            <div className="flex items-center text-[14px] font-bold text-gray-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
              You have 3 active goals
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-5 pt-6 pb-28 space-y-5 hide-scrollbar">
            
            {/* Goal Card 1 */}
            <div className="bg-white p-6 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-lg transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] rounded-[18px] bg-blue-50 flex items-center justify-center text-blue-500 shadow-sm group-hover:scale-110 transition-transform">
                    <Car className="w-6 h-6 stroke-[2px]" />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-[#0F172A] mb-0.5">New Tesla</h4>
                    <p className="text-[12px] font-semibold text-gray-400">Auto & Transport</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[17px] font-black text-[#0F172A]">$24,500</span>
                  <p className="text-[12px] font-bold text-gray-400">/ $45k</p>
                </div>
              </div>
              <div className="w-full h-3.5 bg-[#F1F5F9] rounded-full overflow-hidden shadow-inner relative">
                <div className={`h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-1000 ease-out`} style={{ width: mounted ? '54%' : '0%' }}></div>
              </div>
              <p className="text-[12px] font-extrabold text-blue-500 mt-3 text-right tracking-wide">54% COMPLETED</p>
            </div>

            {/* Goal Card 2 */}
            <div className="bg-white p-6 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-lg transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] rounded-[18px] bg-amber-50 flex items-center justify-center text-amber-500 shadow-sm group-hover:scale-110 transition-transform">
                    <Plane className="w-6 h-6 stroke-[2px]" />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-[#0F172A] mb-0.5">Maldives Trip</h4>
                    <p className="text-[12px] font-semibold text-gray-400">Vacation</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[17px] font-black text-[#0F172A]">$3,200</span>
                  <p className="text-[12px] font-bold text-gray-400">/ $4k</p>
                </div>
              </div>
              <div className="w-full h-3.5 bg-[#F1F5F9] rounded-full overflow-hidden shadow-inner relative">
                <div className={`h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)] transition-all duration-1000 delay-150 ease-out`} style={{ width: mounted ? '80%' : '0%' }}></div>
              </div>
              <p className="text-[12px] font-extrabold text-amber-500 mt-3 text-right tracking-wide">80% COMPLETED</p>
            </div>

            {/* Goal Card 3 */}
            <div className="bg-white p-6 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-lg transition-all cursor-pointer group">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-[52px] h-[52px] rounded-[18px] bg-purple-50 flex items-center justify-center text-purple-500 shadow-sm group-hover:scale-110 transition-transform">
                    <HomeIcon className="w-6 h-6 stroke-[2px]" />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-[#0F172A] mb-0.5">House Deposit</h4>
                    <p className="text-[12px] font-semibold text-gray-400">Real Estate</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[17px] font-black text-[#0F172A]">$12,000</span>
                  <p className="text-[12px] font-bold text-gray-400">/ $60k</p>
                </div>
              </div>
              <div className="w-full h-3.5 bg-[#F1F5F9] rounded-full overflow-hidden shadow-inner relative">
                <div className={`h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-1000 delay-300 ease-out`} style={{ width: mounted ? '20%' : '0%' }}></div>
              </div>
              <p className="text-[12px] font-extrabold text-purple-500 mt-3 text-right tracking-wide">20% COMPLETED</p>
            </div>

          </div>

          {/* Glass Bottom Nav */}
          <div className="absolute bottom-0 w-full h-[90px] bg-white/80 backdrop-blur-xl border-t border-white/50 flex justify-between items-center px-10 pb-4 shadow-[0_-20px_40px_rgba(0,0,0,0.03)] z-30">
            <div className="flex flex-col items-center gap-1.5 text-gray-400 cursor-pointer hover:text-emerald-500 hover:-translate-y-1 transition-all">
              <Home className="w-6 h-6 stroke-[2px]" />
              <span className="text-[11px] font-bold tracking-wide">Home</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-gray-400 cursor-pointer hover:text-emerald-500 hover:-translate-y-1 transition-all">
              <ReceiptText className="w-6 h-6 stroke-[2px]" />
              <span className="text-[11px] font-bold tracking-wide">Transact</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-emerald-500 cursor-pointer">
              <Target className="w-6 h-6 stroke-[2.5px]" />
              <span className="text-[11px] font-extrabold tracking-wide">Goals</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 text-gray-400 cursor-pointer hover:text-emerald-500 hover:-translate-y-1 transition-all">
              <User className="w-6 h-6 stroke-[2px]" />
              <span className="text-[11px] font-bold tracking-wide">Profile</span>
            </div>
          </div>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}} />
    </div>
  );
}
