"use client";

import React, { useState } from 'react';
import { 
  Folder, 
  Camera, 
  Type, 
  Heart,
  LayoutGrid,
  ChevronDown,
  FolderOpen,
  Sparkles,
  Search,
  SlidersHorizontal,
  Compass,
  Star,
  MousePointer2
} from 'lucide-react';

export default function MacExplorerUI() {
  const [activeTab, setActiveTab] = useState('Framer');
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center py-10 px-4 md:px-8 font-sans flex flex-col items-center justify-center selection:bg-pink-500 selection:text-white relative overflow-hidden">
      
      {/* Ambient Bokeh Particles floating in background */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-white/40 blur-[1px] animate-float-slow" style={{ animationDelay: '0.2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-pink-300/40 blur-[2px] animate-float-medium" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 rounded-full bg-indigo-300/50 blur-[1px] animate-float-fast" style={{ animationDelay: '0.7s' }}></div>

      {/* Main Mac Window Container with Smooth Staggered Entrance & Glass Reflection */}
      <div className="w-full max-w-[1060px] h-[720px] bg-[#F7F7F7]/95 backdrop-blur-2xl rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.35)] flex overflow-hidden relative z-10 border border-white/60 group animate-window-entrance opacity-0">
        
        {/* Glass Light Sheen Sweep Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-glass-sheen pointer-events-none z-30"></div>

        {/* Simulated Demo Cursor (Glides in automatically for perfect video recordings) */}
        <div className="absolute z-50 pointer-events-none animate-demo-cursor opacity-0">
          <div className="relative">
            <MousePointer2 className="w-6 h-6 text-gray-900 fill-black drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]" />
            <div className="absolute left-5 top-4 bg-gray-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg border border-white/20 whitespace-nowrap animate-pulse">
              Interactive 3D
            </div>
          </div>
        </div>

        {/* --- SIDEBAR --- */}
        <div className="w-[260px] bg-white/30 backdrop-blur-2xl border-r border-white/40 flex flex-col pt-6 pb-6 select-none shrink-0 animate-sidebar-slide opacity-0">
          
          {/* Header Controls */}
          <div className="flex items-center justify-between px-6 mb-8">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-[0_2px_8px_rgba(255,95,86,0.4)] border border-[#E0443E]/50 hover:scale-110 transition-transform cursor-pointer"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-[0_2px_8px_rgba(255,189,46,0.4)] border border-[#DEA123]/50 hover:scale-110 transition-transform cursor-pointer"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-[0_2px_8px_rgba(39,201,63,0.4)] border border-[#1AAB29]/50 hover:scale-110 transition-transform cursor-pointer"></div>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <SlidersHorizontal className="w-4 h-4 cursor-pointer hover:text-gray-700 transition-colors" />
            </div>
          </div>

          {/* Search Box */}
          <div className="px-4 mb-6">
            <div className="bg-white/50 backdrop-blur-md rounded-2xl px-3 py-2 flex items-center gap-2.5 border border-white/60 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
              <Search className="w-4 h-4 text-gray-400" />
              <input type="text" placeholder="Search space..." className="bg-transparent text-xs font-semibold text-gray-700 placeholder-gray-400 outline-none w-full" />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="px-3 space-y-1">
            <div className="px-3 py-1.5 text-[11px] font-extrabold tracking-wider text-gray-400 uppercase">Library</div>
            
            {[
              { id: 'Designs', icon: Folder, label: 'Designs', count: '24' },
              { id: 'Framer', icon: FolderOpen, label: 'Framer', count: '4' },
              { id: 'Photography', icon: Camera, label: 'Photography', count: '88' },
              { id: 'Fonts', icon: Type, label: 'Fonts', count: '12' },
              { id: 'Inspirations', icon: Compass, label: 'Explore', count: '150' },
            ].map((item, idx) => {
              const isActive = activeTab === item.id;
              const IconComp = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{ animationDelay: `${400 + idx * 120}ms` }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-2xl cursor-pointer transition-all duration-300 relative animate-nav-item opacity-0 ${
                    isActive 
                      ? 'bg-gradient-to-r from-white via-white/90 to-white/70 text-gray-900 shadow-[0_8px_20px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.04)] border border-white font-bold scale-[1.02]' 
                      : 'text-gray-600 hover:bg-white/40 hover:text-gray-900 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <IconComp className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-gray-400'}`} />
                    <span className="text-[13.5px]">{item.label}</span>
                  </div>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full ${isActive ? 'bg-indigo-50 text-indigo-600 font-bold' : 'text-gray-400 font-medium'}`}>
                    {item.count}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Favorites Section */}
          <div className="mt-8 px-3">
            <div className="flex items-center justify-between px-3 mb-2 cursor-pointer group/fav">
              <span className="text-[11px] font-extrabold tracking-wider text-gray-400 uppercase">Favorites</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover/fav:text-gray-600" />
            </div>
            
            <div className="space-y-1">
              <div className="flex items-center justify-between px-3 py-2 rounded-2xl text-gray-600 hover:bg-white/40 hover:text-gray-900 cursor-pointer transition-colors text-[13.5px] font-medium">
                <div className="flex items-center gap-3">
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500/20" />
                  <span>Moodboard</span>
                </div>
                <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              </div>
              
              <div className="flex items-center justify-between px-3 py-2 rounded-2xl text-gray-600 hover:bg-white/40 hover:text-gray-900 cursor-pointer transition-colors text-[13.5px] font-medium">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Partnership</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 bg-white/60 backdrop-blur-xl p-10 relative overflow-y-auto pb-10">
          
          {/* Header Banner */}
          <div className="flex items-center justify-between mb-8 max-w-[660px] mx-auto animate-header-pop opacity-0">
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                {activeTab} Assets <span className="text-xs bg-indigo-500/10 text-indigo-600 border border-indigo-500/20 px-2.5 py-1 rounded-full font-bold">4 Collections</span>
              </h2>
              <p className="text-xs font-semibold text-gray-500 mt-0.5">3D Interactive workspace & resources</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/80 border border-white shadow-sm flex items-center justify-center text-gray-700 cursor-pointer hover:bg-white transition-colors">
                <LayoutGrid className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-10 gap-y-14 max-w-[660px] mx-auto">
            
            {/* ---------------- 3D FOLDER 1: Fun Shots ---------------- */}
            <div 
              onClick={() => setSelectedFolder(selectedFolder === 'Fun Shots' ? null : 'Fun Shots')}
              className={`flex flex-col items-center group cursor-pointer perspective-[1000px] animate-folder-pop opacity-0 relative ${selectedFolder === 'Fun Shots' ? 'scale-105' : ''}`}
              style={{ animationDelay: '650ms' }}
            >
              {/* Vibrant Ambient Glow Floor Behind Folder */}
              <div className="absolute inset-0 bg-rose-400/25 blur-2xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>

              <div className="relative w-52 h-44 mb-4 transition-all duration-500 ease-out transform group-hover:rotate-x-8 group-hover:-rotate-y-8 group-hover:scale-105 group-hover:-translate-y-3">
                
                {/* Back Folder Layer */}
                <div className="absolute bottom-0 w-full h-[86%] bg-gradient-to-b from-rose-200 via-pink-200 to-rose-300 rounded-[24px] rounded-tl-none shadow-[0_10px_25px_rgba(244,63,94,0.2)]">
                  <div className="absolute -top-[16%] left-0 w-[42%] h-[20%] bg-rose-200 rounded-t-[14px]"></div>
                </div>
                
                {/* Floating 3D Emojis & Cards Pop Out */}
                <div className="absolute inset-0 flex justify-center z-10 pointer-events-none">
                  <div className="text-4xl absolute -top-5 left-4 animate-bounce-float drop-shadow-[0_12px_12px_rgba(0,0,0,0.15)]" style={{ animationDuration: '3.5s', animationDelay: '1.2s' }}>😡</div>
                  <div className="text-5xl absolute -top-8 right-6 animate-bounce-float drop-shadow-[0_14px_14px_rgba(0,0,0,0.18)]" style={{ animationDuration: '4s', animationDelay: '1.4s' }}>😍</div>
                  <div className="text-4xl absolute top-3 right-16 animate-bounce-float drop-shadow-[0_10px_10px_rgba(0,0,0,0.12)] z-20" style={{ animationDuration: '3s', animationDelay: '1.6s' }}>😌</div>
                  
                  {/* Floating Pill Tag */}
                  <div className="absolute top-2 left-12 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-lg border border-white text-[10px] font-extrabold text-pink-600 transform -rotate-6 animate-pulse">
                    PRO 🚀
                  </div>
                </div>

                {/* Front Folder Layer (Claymorphism Glass) */}
                <div className="absolute bottom-0 w-full h-[72%] bg-gradient-to-br from-white/90 via-white/80 to-rose-50/70 rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,0.08),inset_0_4px_12px_rgba(255,255,255,1),inset_0_-4px_12px_rgba(244,63,94,0.1)] backdrop-blur-xl z-20 flex items-end justify-between p-4 border border-white/80">
                  <div className="w-8 h-8 rounded-xl bg-white/80 shadow-inner flex items-center justify-center text-xs font-black text-rose-500 border border-white">
                    8
                  </div>
                  <div className="bg-rose-500/10 border border-rose-500/20 rounded-full px-3 py-1 flex items-center gap-1.5 backdrop-blur-sm">
                    <span className="text-[11px] font-bold text-rose-600">Fun</span>
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                  </div>
                </div>

              </div>
              <h3 className="text-[16.5px] font-extrabold text-gray-900 tracking-tight group-hover:text-pink-600 transition-colors mb-0.5">Fun Shots</h3>
              <p className="text-[12.5px] font-bold text-gray-400">32 items</p>
            </div>

            {/* ---------------- 3D FOLDER 2: Fonts ---------------- */}
            <div 
              onClick={() => setSelectedFolder(selectedFolder === 'Fonts' ? null : 'Fonts')}
              className={`flex flex-col items-center group cursor-pointer perspective-[1000px] animate-folder-pop opacity-0 relative ${selectedFolder === 'Fonts' ? 'scale-105' : ''}`}
              style={{ animationDelay: '900ms' }}
            >
              {/* Vibrant Ambient Glow Floor Behind Folder */}
              <div className="absolute inset-0 bg-indigo-500/25 blur-2xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>

              <div className="relative w-52 h-44 mb-4 transition-all duration-500 ease-out transform group-hover:rotate-x-8 group-hover:rotate-y-8 group-hover:scale-105 group-hover:-translate-y-3">
                
                {/* Back Folder Layer */}
                <div className="absolute bottom-0 w-full h-[86%] bg-gradient-to-b from-indigo-400 via-indigo-500 to-indigo-600 rounded-[24px] rounded-tl-none shadow-[0_10px_25px_rgba(99,102,241,0.25)]">
                  <div className="absolute -top-[16%] left-0 w-[42%] h-[20%] bg-indigo-400 rounded-t-[14px]"></div>
                </div>
                
                {/* Floating 3D Typography Cards */}
                <div className="absolute inset-0 flex justify-center z-10 pointer-events-none">
                  <div className="w-14 h-18 bg-amber-400 rounded-xl shadow-2xl absolute -top-4 left-4 -rotate-12 group-hover:-rotate-18 transition-transform duration-500 border border-amber-300 flex items-center justify-center font-mono font-bold text-amber-900 text-lg animate-bounce-float" style={{ animationDuration: '4s', animationDelay: '1.4s' }}>
                    T
                  </div>
                  <div className="w-14 h-18 bg-pink-500 rounded-xl shadow-2xl absolute -top-6 right-5 rotate-12 group-hover:rotate-18 transition-transform duration-500 border border-pink-400 flex items-center justify-center font-bold text-white text-lg animate-bounce-float" style={{ animationDuration: '3.6s', animationDelay: '1.6s' }}>
                    B
                  </div>
                  <div className="w-22 h-20 bg-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.2)] absolute -top-2 left-1/2 -translate-x-1/2 flex items-center justify-center z-20 border border-white animate-bounce-float" style={{ animationDuration: '3s', animationDelay: '1.3s' }}>
                    <span className="text-3xl font-serif text-indigo-600 font-black tracking-tighter">Aa</span>
                  </div>
                </div>

                {/* Front Folder Layer */}
                <div className="absolute bottom-0 w-full h-[72%] bg-gradient-to-br from-indigo-400/90 via-indigo-500/95 to-indigo-700 rounded-[20px] shadow-[0_12px_30px_rgba(99,102,241,0.35),inset_0_4px_12px_rgba(255,255,255,0.7),inset_0_-4px_12px_rgba(0,0,0,0.2)] backdrop-blur-xl z-20 flex items-center justify-center border border-indigo-300/40">
                  <span className="text-[70px] font-black text-white/30 drop-shadow-md font-serif -mt-2">a</span>
                </div>

              </div>
              <h3 className="text-[16.5px] font-extrabold text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors mb-0.5">Fonts</h3>
              <p className="text-[12.5px] font-bold text-gray-400">136 items</p>
            </div>

            {/* ---------------- 3D FOLDER 3: Tutorials ---------------- */}
            <div 
              onClick={() => setSelectedFolder(selectedFolder === 'Tutorials' ? null : 'Tutorials')}
              className={`flex flex-col items-center group cursor-pointer perspective-[1000px] animate-folder-pop opacity-0 relative ${selectedFolder === 'Tutorials' ? 'scale-105' : ''}`}
              style={{ animationDelay: '1150ms' }}
            >
              {/* Vibrant Ambient Glow Floor Behind Folder */}
              <div className="absolute inset-0 bg-amber-400/25 blur-2xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>

              <div className="relative w-52 h-44 mb-4 transition-all duration-500 ease-out transform group-hover:rotate-x-8 group-hover:-rotate-y-8 group-hover:scale-105 group-hover:-translate-y-3">
                
                {/* Back Folder Layer */}
                <div className="absolute bottom-0 w-full h-[86%] bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 rounded-[24px] rounded-tl-none shadow-[0_10px_25px_rgba(245,158,11,0.25)]">
                  <div className="absolute -top-[16%] left-0 w-[42%] h-[20%] bg-amber-300 rounded-t-[14px]"></div>
                </div>
                
                {/* Floating 3D Code & Preview Cards */}
                <div className="absolute inset-0 flex justify-center z-10 pointer-events-none">
                  <div className="w-18 h-22 bg-gray-900 rounded-xl shadow-2xl absolute -top-5 left-4 -rotate-6 group-hover:-rotate-12 transition-transform duration-500 border border-gray-700 p-2.5 flex flex-col gap-1.5 animate-bounce-float" style={{ animationDuration: '3.8s', animationDelay: '1.6s' }}>
                    <div className="w-full h-1.5 bg-pink-500 rounded-full"></div>
                    <div className="w-3/4 h-1.5 bg-amber-400 rounded-full"></div>
                    <div className="w-1/2 h-1.5 bg-blue-400 rounded-full"></div>
                  </div>
                  <div className="text-4xl absolute -top-7 right-3 animate-bounce-float drop-shadow-xl z-20" style={{ animationDuration: '3.2s', animationDelay: '1.8s' }}>⚡</div>
                </div>

                {/* Front Folder Layer */}
                <div className="absolute bottom-0 w-full h-[72%] bg-gradient-to-br from-amber-200/90 via-amber-300/95 to-amber-500 rounded-[20px] shadow-[0_12px_30px_rgba(245,158,11,0.3),inset_0_4px_12px_rgba(255,255,255,0.9),inset_0_-4px_12px_rgba(0,0,0,0.1)] backdrop-blur-xl z-20 flex items-end justify-between p-4 border border-white/80">
                  <div className="w-7 h-7 rounded-lg bg-amber-900/10 flex items-center justify-center text-amber-900 font-black text-xs border border-amber-900/20">
                    F
                  </div>
                  <span className="text-[11px] font-extrabold text-amber-950 bg-white/60 px-2.5 py-1 rounded-full border border-white/80">
                    80 ITEMS
                  </span>
                </div>

              </div>
              <h3 className="text-[16.5px] font-extrabold text-gray-900 tracking-tight group-hover:text-amber-600 transition-colors mb-0.5">Tutorials</h3>
              <p className="text-[12.5px] font-bold text-gray-400">80 items</p>
            </div>

            {/* ---------------- 3D FOLDER 4: 3D Icons (Frosted Iridescent) ---------------- */}
            <div 
              onClick={() => setSelectedFolder(selectedFolder === '3D Icons' ? null : '3D Icons')}
              className={`flex flex-col items-center group cursor-pointer perspective-[1000px] animate-folder-pop opacity-0 relative ${selectedFolder === '3D Icons' ? 'scale-105' : ''}`}
              style={{ animationDelay: '1400ms' }}
            >
              {/* Vibrant Ambient Glow Floor Behind Folder */}
              <div className="absolute inset-0 bg-purple-500/25 blur-2xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-500 pointer-events-none"></div>

              <div className="relative w-52 h-44 mb-4 transition-all duration-500 ease-out transform group-hover:rotate-x-8 group-hover:rotate-y-8 group-hover:scale-105 group-hover:-translate-y-3">
                
                {/* Back Folder Layer */}
                <div className="absolute bottom-0 w-full h-[86%] bg-gradient-to-b from-cyan-200 via-blue-200 to-purple-300 rounded-[24px] rounded-tl-none shadow-[0_10px_25px_rgba(168,85,247,0.2)]">
                  <div className="absolute -top-[16%] left-0 w-[42%] h-[20%] bg-cyan-200 rounded-t-[14px]"></div>
                </div>
                
                {/* Floating 3D Geometries & Character */}
                <div className="absolute inset-0 flex justify-center z-10 pointer-events-none">
                  <div className="text-6xl absolute -top-8 right-4 animate-bounce-float drop-shadow-[0_16px_16px_rgba(0,0,0,0.2)] z-20" style={{ animationDuration: '4.2s', animationDelay: '1.9s' }}>
                    👾
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg shadow-xl absolute -top-3 left-6 rotate-45 animate-spin-slow"></div>
                </div>

                {/* Front Folder Layer (Iridescent Glass) */}
                <div className="absolute bottom-0 w-full h-[72%] bg-gradient-to-br from-white/95 via-purple-50/80 to-cyan-50/70 rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,0.08),inset_0_4px_12px_rgba(255,255,255,1),inset_0_-4px_12px_rgba(168,85,247,0.15)] backdrop-blur-2xl z-20 flex items-end justify-between p-4 border border-white">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center font-bold text-xs shadow-md">
                    3D
                  </div>
                  <div className="flex items-center gap-1 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                    <span className="text-[11px] font-bold text-purple-600">NEW</span>
                  </div>
                </div>

              </div>
              <h3 className="text-[16.5px] font-extrabold text-gray-900 tracking-tight group-hover:text-purple-600 transition-colors mb-0.5">3D Icons</h3>
              <p className="text-[12.5px] font-bold text-gray-400">112 items</p>
            </div>

          </div>

        </div>

      </div>

      {/* Ultra Smooth Easing & Demo Motion Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes windowEntrance {
          0% { opacity: 0; transform: scale(0.92) translateY(40px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-window-entrance {
          animation: windowEntrance 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
        }

        @keyframes glassSheen {
          0% { transform: translateX(-100%) skewX(-15deg); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: translateX(200%) skewX(-15deg); opacity: 0; }
        }
        .animate-glass-sheen {
          animation: glassSheen 2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
        }

        @keyframes demoCursor {
          0% { opacity: 0; transform: translate(150px, 450px); }
          20% { opacity: 1; transform: translate(250px, 280px); }
          40% { opacity: 1; transform: translate(460px, 240px); }
          60% { opacity: 1; transform: translate(680px, 240px) scale(0.95); }
          80% { opacity: 1; transform: translate(460px, 480px); }
          100% { opacity: 0; transform: translate(460px, 500px); }
        }
        .animate-demo-cursor {
          animation: demoCursor 7s ease-in-out 1.8s forwards;
        }

        @keyframes sidebarSlide {
          0% { opacity: 0; transform: translateX(-24px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-sidebar-slide {
          animation: sidebarSlide 1s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards;
        }

        @keyframes navItem {
          0% { opacity: 0; transform: translateX(-14px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-nav-item {
          animation: navItem 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes folderPop {
          0% { opacity: 0; transform: scale(0.85) translateY(30px); }
          75% { transform: scale(1.03) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-folder-pop {
          animation: folderPop 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes headerPop {
          0% { opacity: 0; transform: translateY(-15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-header-pop {
          animation: headerPop 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.45s forwards;
        }

        @keyframes bounceFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-bounce-float {
          animation: bounceFloat 4s ease-in-out infinite;
        }

        @keyframes spinSlow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 14s linear infinite;
        }
      `}} />
    </div>
  );
}
