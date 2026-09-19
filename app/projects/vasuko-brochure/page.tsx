"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Smartphone,
  Check,
  ArrowRight,
  Printer,
  Globe,
  QrCode,
  Percent,
  Zap,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import { QRCode } from 'react-qrcode-logo';

export default function VasukoPremiumA4Brochure() {
  const [activeSpread, setActiveSpread] = useState<'both' | 'outside' | 'inside'>('both');

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-8 font-sans flex flex-col items-center selection:bg-[#018835] selection:text-white print:bg-white print:py-0">
      
      {/* ========================================================= */}
      {/* CONTROLS HEADER (Hidden during Print) */}
      {/* ========================================================= */}
      <div className="w-full max-w-[842px] mb-6 px-4 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <div>
          <h1 className="text-xl font-black text-black tracking-tight">Vasuko Print Brochure</h1>
          <p className="text-[10px] font-medium text-gray-500 mt-1">Strict A4 Landscape Layout (842x595 px)</p>
        </div>

        <div className="flex items-center gap-3 bg-white p-1.5 rounded-lg shadow-sm border border-gray-200">
          <div className="flex bg-gray-100 p-1 rounded-md">
            <button
              onClick={() => setActiveSpread('both')}
              className={`px-3 py-1.5 rounded text-[10px] font-bold transition-colors ${
                activeSpread === 'both' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveSpread('outside')}
              className={`px-3 py-1.5 rounded text-[10px] font-bold transition-colors ${
                activeSpread === 'outside' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
              }`}
            >
              Outside
            </button>
            <button
              onClick={() => setActiveSpread('inside')}
              className={`px-3 py-1.5 rounded text-[10px] font-bold transition-colors ${
                activeSpread === 'inside' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
              }`}
            >
              Inside
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-[#018835] hover:bg-[#016A29] text-white px-4 py-1.5 rounded-md text-[10px] font-bold transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print PDF</span>
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* BROCHURE WRAPPER (Handles Horizontal Scroll for Small Screens) */}
      {/* ========================================================= */}
      <div className="w-full overflow-x-auto pb-12 flex flex-col items-center space-y-8 print:space-y-0 print:pb-0">
        
        {/* --------------------------------------------------------- */}
        {/* 1. OUTSIDE SPREAD (Strict A4 Canvas) */}
        {/* --------------------------------------------------------- */}
        {(activeSpread === 'both' || activeSpread === 'outside') && (
          <div className="space-y-2 shrink-0">
            <div className="flex items-center justify-between text-[9px] font-bold text-gray-400 uppercase tracking-widest px-2 print:hidden w-[842px] mx-auto">
              <span>Outside Spread</span>
              <span>Inside Flap (Left) • Back Cover (Center) • Front Cover (Right)</span>
            </div>

            {/* STRICT A4 SHEET: 842px x 595px */}
            <div className="w-[842px] h-[595px] bg-white shadow-xl grid grid-cols-3 overflow-hidden print:shadow-none print:break-after-page mx-auto relative border border-gray-200 print:border-none">
              
              {/* PANEL 1: INSIDE FLAP (Left Fold - Opens first) */}
              <div className="p-7 flex flex-col bg-white border-r border-gray-200 relative">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(black_1px,transparent_1px)] [background-size:12px_12px]"></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <h4 className="text-[10px] font-bold text-[#018835] tracking-widest mb-6">WHY VASUKO?</h4>
                  
                  <h3 className="text-[26px] font-black text-black tracking-tight leading-[1.1] mb-5 uppercase">
                    A FAIRER<br/>PLATFORM<br/>FOR HOSTS.
                  </h3>
                  
                  <div className="w-10 h-1 bg-black mb-6"></div>

                  <p className="text-[11px] font-medium text-gray-600 leading-relaxed mb-8">
                    Traditional booking platforms take up to 20% of your hard-earned revenue. We built Vasuko to put control and profit back into the hands of local property owners.
                  </p>

                  <div className="space-y-6 mt-auto mb-8">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                        <Percent className="w-4 h-4 text-[#018835]" />
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-black uppercase tracking-wide mb-1">5% Flat Fee</h5>
                        <p className="text-[9px] text-gray-500 leading-relaxed">Keep 95% of your earnings. No hidden charges, setup fees, or subscription costs.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4 text-[#018835]" />
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-black uppercase tracking-wide mb-1">Instant Payouts</h5>
                        <p className="text-[9px] text-gray-500 leading-relaxed">Funds are automatically settled to your Bank or e-Sewa account immediately.</p>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-[#018835]" />
                      </div>
                      <div>
                        <h5 className="text-[11px] font-bold text-black uppercase tracking-wide mb-1">Host Protection</h5>
                        <p className="text-[9px] text-gray-500 leading-relaxed">Strict KYC verification for all guests ensures your property remains safe and secure.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* PANEL 2: BACK COVER (Center Fold) */}
              <div className="p-7 flex flex-col bg-gray-50 border-r border-gray-200 relative">
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-8">
                     <div className="w-6 h-6 bg-black flex items-center justify-center shrink-0">
                        <svg width="12" height="12" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 4L16 32L24 16L12 4H4Z" fill="white"/>
                          <circle cx="28" cy="12" r="8" fill="white"/>
                        </svg>
                      </div>
                      <span className="text-[11px] font-black text-black tracking-widest uppercase">VASUKO.</span>
                  </div>

                  <h3 className="text-xl font-black text-black tracking-tight leading-[1.1] mb-4 uppercase">
                    WE ARE HERE<br/>TO HELP.
                  </h3>
                  
                  <div className="w-8 h-1 bg-[#018835] mb-8"></div>

                  <div className="space-y-5 text-[10px] font-medium text-gray-700 mb-8">
                    <div className="flex items-start gap-2.5">
                      <Mail className="w-3.5 h-3.5 text-[#018835] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-bold text-black mb-0.5 uppercase tracking-wide text-[9px]">Email Support</p>
                        <p>host@vasuko.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Phone className="w-3.5 h-3.5 text-[#018835] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-bold text-black mb-0.5 uppercase tracking-wide text-[9px]">Phone / WhatsApp</p>
                        <p>+977 980-0000000</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-3.5 h-3.5 text-[#018835] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-bold text-black mb-0.5 uppercase tracking-wide text-[9px]">Corporate Office</p>
                        <p className="leading-relaxed">Ward No. 15, Ghorahi,<br/>Dang, Lumbini, Nepal</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-auto">
                    <div className="w-7 h-7 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </div>
                    <div className="w-7 h-7 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    </div>
                    <div className="w-7 h-7 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    </div>
                  </div>

                  <div className="mt-8 bg-white p-4 border border-gray-200 rounded-2xl shadow-sm text-center">
                    <p className="text-[10px] font-bold text-black uppercase tracking-wide mb-4">SCAN TO DOWNLOAD</p>
                    <div className="flex items-center justify-center gap-6">
                      
                      {/* Apple QR */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative bg-white p-1.5 rounded-xl shadow-[0_0_15px_rgba(1,136,53,0.15)] border border-[#018835]/20 group hover:scale-105 transition-transform">
                          <QRCode 
                            value="https://apps.apple.com/np/app/vasuko/id6783282252" 
                            size={70} 
                            qrStyle="dots" 
                            eyeRadius={5} 
                            fgColor="#018835"
                            ecLevel="H"
                          />
                          {/* Center Apple Logo */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <div className="bg-white p-1 rounded-full shadow-sm">
                               <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.86 3.65-.74 1.48.16 2.58.74 3.28 1.76-2.92 1.75-2.42 5.56.55 6.74-.7 1.83-1.63 3.51-2.56 4.41M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                             </div>
                          </div>
                        </div>
                        <span className="text-[7.5px] font-bold text-[#018835] uppercase tracking-widest">App Store</span>
                      </div>
                      
                      {/* Google QR */}
                      <div className="flex flex-col items-center gap-2">
                        <div className="relative bg-white p-1.5 rounded-xl shadow-[0_0_15px_rgba(1,136,53,0.15)] border border-[#018835]/20 group hover:scale-105 transition-transform">
                          <QRCode 
                            value="https://play.google.com/store/apps/details?id=com.vasuko.app" 
                            size={70} 
                            qrStyle="dots" 
                            eyeRadius={5} 
                            fgColor="#018835"
                            ecLevel="H"
                          />
                          {/* Center Google Logo */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                             <div className="bg-white p-1 rounded-full shadow-sm">
                               <svg className="w-3.5 h-3.5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                             </div>
                          </div>
                        </div>
                        <span className="text-[7.5px] font-bold text-[#018835] uppercase tracking-widest">Play Store</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              {/* PANEL 3: FRONT COVER (Right Fold - Highly Branded) */}
              <div className="p-7 flex flex-col bg-[#018835] relative overflow-hidden">
                {/* Premium Background Mesh */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_100%)] [background-size:24px_24px]"></div>
                
                {/* Gradient Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#018835] to-[#015e24] opacity-90"></div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="flex flex-col items-center justify-center mt-6 mb-8">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl mb-4">
                      <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 4L16 32L24 16L12 4H4Z" fill="#018835"/>
                        <circle cx="28" cy="12" r="8" fill="#018835"/>
                      </svg>
                    </div>
                    <span className="text-xl font-black text-white tracking-widest uppercase">VASUKO.</span>
                  </div>
                  
                  <div className="text-center mb-8">
                    <h2 className="text-[28px] font-black text-white tracking-tighter leading-[1.1] mb-4 uppercase">
                      TURN SPACE<br/>INTO REVENUE.
                    </h2>
                    <p className="text-[11px] font-medium text-emerald-100 leading-relaxed px-4">
                      The official host guide to listing your property and earning more with Nepal's fastest-growing booking platform.
                    </p>
                  </div>

                  {/* Stunning Front Cover Mockup */}
                  <div className="mt-auto relative w-full max-w-[200px] mx-auto h-[190px]">
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full h-[220px] bg-white rounded-[2rem] border-[4px] border-black shadow-2xl overflow-hidden flex flex-col">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-b-xl z-20"></div>
                      
                      {/* Mockup UI */}
                      <div className="relative w-full h-32 bg-gray-200">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                        <div className="absolute bottom-2 left-2 text-white">
                          <p className="text-[11px] font-black leading-tight">Luxury Villa<br/>Pokhara</p>
                        </div>
                      </div>
                      <div className="p-2 flex-1 bg-white">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[8px] font-bold text-gray-500 uppercase">THIS MONTH</span>
                          <span className="text-[9px] font-bold text-[#018835]">Rs. 85,000</span>
                        </div>
                        <div className="w-full h-1.5 bg-emerald-100 rounded-full overflow-hidden">
                          <div className="w-[75%] h-full bg-[#018835]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* --------------------------------------------------------- */}
        {/* 2. INSIDE SPREAD (Manual Guide Strict A4 Canvas) */}
        {/* --------------------------------------------------------- */}
        {(activeSpread === 'both' || activeSpread === 'inside') && (
          <div className="space-y-2 shrink-0">
            <div className="flex items-center justify-between text-[9px] font-bold text-gray-400 uppercase tracking-widest px-2 print:hidden w-[842px] mx-auto">
              <span>Inside Spread (Manual Guide)</span>
              <span>Step 1 • Step 2 • Step 3</span>
            </div>

            {/* STRICT A4 SHEET: 842px x 595px */}
            <div className="w-[842px] h-[595px] bg-white shadow-xl grid grid-cols-3 overflow-hidden print:shadow-none mx-auto relative border border-gray-200 print:border-none">
              
              {/* PANEL 4: STEP 1 - DOWNLOAD & SIGNUP */}
              <div className="p-7 flex flex-col bg-white border-r border-gray-200 relative">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(black_1px,transparent_1px)] [background-size:12px_12px]"></div>
                
                <div className="relative z-10 flex-1 flex flex-col">
                  <h4 className="text-[10px] font-bold text-[#018835] tracking-widest mb-4">STEP 01</h4>
                  
                  <h3 className="text-[22px] font-black text-black tracking-tight leading-[1.1] mb-3 uppercase">
                    APP & SIGNUP.
                  </h3>
                  
                  <div className="w-8 h-1 bg-black mb-5"></div>

                  <p className="text-[11px] font-medium text-gray-600 leading-relaxed mb-6">
                    Scan the QR code to download the Vasuko Host App. Create your account instantly using your preferred secure method:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#018835] shrink-0 mt-1"></div>
                      <div>
                        <p className="text-[10px] font-bold text-black uppercase tracking-wide">Continue with Google</p>
                        <p className="text-[8px] text-gray-500 mt-0.5">One-click signup with your Gmail.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#018835] shrink-0 mt-1"></div>
                      <div>
                        <p className="text-[10px] font-bold text-black uppercase tracking-wide">Continue with Apple</p>
                        <p className="text-[8px] text-gray-500 mt-0.5">Secure and private iOS login.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#018835] shrink-0 mt-1"></div>
                      <div>
                        <p className="text-[10px] font-bold text-black uppercase tracking-wide">Email & Password</p>
                        <p className="text-[8px] text-gray-500 mt-0.5">Traditional secure login method.</p>
                      </div>
                    </li>
                  </ul>

                  {/* Realistic Mockup: Signup Screen */}
                  <div className="w-full max-w-[170px] mx-auto bg-white border-[3px] border-gray-800 rounded-3xl p-2.5 h-[210px] flex flex-col shadow-xl relative overflow-hidden transform group-hover:scale-105 transition-transform mt-auto">
                    {/* iPhone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-gray-800 rounded-b-xl"></div>
                    
                    <div className="flex-1 mt-5 px-1 flex flex-col items-center justify-center">
                      <div className="w-10 h-10 bg-[#018835] rounded-xl flex items-center justify-center mb-4 shadow-sm shrink-0">
                         <svg width="18" height="18" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M4 4L16 32L24 16L12 4H4Z" fill="white"/>
                           <circle cx="28" cy="12" r="8" fill="white"/>
                         </svg>
                      </div>
                      <h5 className="text-[11px] font-black text-gray-900 mb-4">Welcome to Vasuko</h5>
                      
                      <div className="w-full space-y-2">
                        <div className="w-full h-6 bg-black rounded flex items-center justify-center gap-1.5 shadow-sm">
                          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.86 3.65-.74 1.48.16 2.58.74 3.28 1.76-2.92 1.75-2.42 5.56.55 6.74-.7 1.83-1.63 3.51-2.56 4.41M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                          <span className="text-[8px] font-bold text-white">Continue with Apple</span>
                        </div>
                        <div className="w-full h-6 bg-white border border-gray-300 rounded flex items-center justify-center gap-1.5 shadow-sm">
                          <svg className="w-3 h-3" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                          <span className="text-[8px] font-bold text-gray-700">Continue with Google</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PANEL 5: STEP 2 - VERIFY KYC */}
              <div className="p-7 flex flex-col bg-[#018835] relative">
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_100%)] [background-size:16px_16px]"></div>

                <div className="relative z-10 flex-1 flex flex-col">
                   <h4 className="text-[10px] font-bold text-[#A7F3D0] tracking-widest mb-4">STEP 02</h4>

                  <h3 className="text-[22px] font-black text-white tracking-tight leading-[1.1] mb-3 uppercase">
                    VERIFY IDENTITY.
                  </h3>
                  
                  <div className="w-8 h-1 bg-white mb-5"></div>

                  <p className="text-[11px] font-medium text-emerald-100 leading-relaxed mb-6">
                    For platform safety and guest trust, upload your government ID. We accept the following documents:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-emerald-200 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-white uppercase tracking-wide">National ID Card</p>
                        <p className="text-[8px] text-emerald-100 mt-0.5">Front and back scan required.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-emerald-200 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-white uppercase tracking-wide">Citizenship Card</p>
                        <p className="text-[8px] text-emerald-100 mt-0.5">Official Nepal Citizenship proof.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 text-emerald-200 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-white uppercase tracking-wide">Valid Passport</p>
                        <p className="text-[8px] text-emerald-100 mt-0.5">International identification.</p>
                      </div>
                    </li>
                  </ul>

                  {/* Realistic Mockup: KYC Screen */}
                  <div className="w-full max-w-[170px] mx-auto bg-gray-50 border-[3px] border-gray-900 rounded-[2rem] p-2.5 h-[210px] flex flex-col shadow-2xl relative overflow-hidden transform group-hover:scale-105 transition-transform mt-auto">
                    {/* iPhone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-gray-900 rounded-b-xl z-20"></div>
                    
                    <div className="flex-1 mt-5 px-1.5 flex flex-col">
                      <div className="flex items-center gap-1.5 mb-3">
                        <ArrowRight className="w-3.5 h-3.5 text-gray-900 rotate-180" />
                        <h5 className="text-[10px] font-black text-gray-900">Verify Identity</h5>
                      </div>
                      
                      <p className="text-[8px] font-medium text-gray-500 mb-3 leading-tight">Select the type of document you wish to scan.</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between p-1.5 bg-white border border-[#018835] rounded-md shadow-sm">
                           <div className="flex items-center gap-1.5">
                             <ShieldCheck className="w-3 h-3 text-[#018835]" />
                             <span className="text-[8px] font-bold text-gray-900">National ID</span>
                           </div>
                           <div className="w-2.5 h-2.5 rounded-full border border-[#018835] flex items-center justify-center">
                             <div className="w-1 h-1 bg-[#018835] rounded-full"></div>
                           </div>
                        </div>
                        <div className="flex items-center justify-between p-1.5 bg-white border border-gray-200 rounded-md">
                           <div className="flex items-center gap-1.5">
                             <Building2 className="w-3 h-3 text-gray-400" />
                             <span className="text-[8px] font-bold text-gray-600">Citizenship</span>
                           </div>
                           <div className="w-2.5 h-2.5 rounded-full border border-gray-300"></div>
                        </div>
                      </div>
                      
                      <div className="mt-auto pt-2">
                        <div className="w-full h-7 bg-[#018835] rounded-md flex items-center justify-center shadow-md">
                          <span className="text-[8px] font-bold text-white">Scan Document</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PANEL 6: STEP 3 - LIST PROPERTY */}
              <div className="p-7 flex flex-col bg-white border-l border-gray-200 relative">
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(black_1px,transparent_1px)] [background-size:12px_12px]"></div>

                <div className="relative z-10 flex-1 flex flex-col">
                  <h4 className="text-[10px] font-bold text-[#018835] tracking-widest mb-4">STEP 03</h4>
                  
                  <h3 className="text-[22px] font-black text-black tracking-tight leading-[1.1] mb-3 uppercase">
                    LIST & EARN.
                  </h3>
                  
                  <div className="w-8 h-1 bg-black mb-5"></div>

                  <p className="text-[11px] font-medium text-gray-600 leading-relaxed mb-6">
                    What kind of property are you listing? We support multiple property types including:
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#018835] shrink-0 mt-1"></div>
                      <div>
                        <p className="text-[10px] font-bold text-black uppercase tracking-wide">Hotels & Resorts</p>
                        <p className="text-[8px] text-gray-500 mt-0.5">List multiple rooms and facilities.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#018835] shrink-0 mt-1"></div>
                      <div>
                        <p className="text-[10px] font-bold text-black uppercase tracking-wide">Private Rooms</p>
                        <p className="text-[8px] text-gray-500 mt-0.5">Rent out individual spaces.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-[#018835] shrink-0 mt-1"></div>
                      <div>
                        <p className="text-[10px] font-bold text-black uppercase tracking-wide">Apartments</p>
                        <p className="text-[8px] text-gray-500 mt-0.5">Full homes for families and groups.</p>
                      </div>
                    </li>
                  </ul>

                  {/* Realistic Mockup: Listing Screen */}
                  <div className="w-full max-w-[170px] mx-auto bg-gray-50 border-[3px] border-gray-800 rounded-[2rem] p-2.5 h-[210px] flex flex-col shadow-xl relative overflow-hidden transform group-hover:scale-105 transition-transform mt-auto">
                    {/* iPhone Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-gray-800 rounded-b-xl z-20"></div>
                    
                    <div className="flex-1 mt-5 px-1.5 flex flex-col">
                      <div className="flex items-center gap-1.5 mb-3">
                        <ArrowRight className="w-3.5 h-3.5 text-gray-900 rotate-180" />
                        <h5 className="text-[10px] font-black text-gray-900">Add Property</h5>
                      </div>
                      
                      <p className="text-[8px] font-bold text-gray-900 mb-2">What kind of place?</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white p-2 border border-[#018835] rounded-md shadow-sm flex flex-col items-center justify-center gap-1">
                          <Building2 className="w-4 h-4 text-[#018835]" />
                          <span className="text-[8px] font-bold text-[#018835]">Hotel</span>
                        </div>
                        <div className="bg-white p-2 border border-gray-200 rounded-md flex flex-col items-center justify-center gap-1">
                          <Building2 className="w-4 h-4 text-gray-400" />
                          <span className="text-[8px] font-bold text-gray-600">Apartment</span>
                        </div>
                        <div className="bg-white p-2 border border-gray-200 rounded-md flex flex-col items-center justify-center gap-1">
                          <Smartphone className="w-4 h-4 text-gray-400" />
                          <span className="text-[8px] font-bold text-gray-600">Room</span>
                        </div>
                        <div className="bg-white p-2 border border-gray-200 rounded-md flex flex-col items-center justify-center gap-1">
                          <ShieldCheck className="w-4 h-4 text-gray-400" />
                          <span className="text-[8px] font-bold text-gray-600">Hostel</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-2">
                        <div className="w-full h-7 bg-gray-900 rounded-md flex items-center justify-center shadow-md">
                          <span className="text-[8px] font-bold text-white">Next Step</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* ========================================================= */}
      {/* EXPORTABLE ASSETS SECTION (Hidden during print) */}
      {/* ========================================================= */}
      <div className="w-full max-w-[842px] mt-16 pt-12 border-t border-gray-200 px-4 print:hidden flex flex-col items-center">
        <h2 className="text-2xl font-black text-black tracking-tight mb-2 uppercase">Downloadable QR Assets</h2>
        <p className="text-sm font-medium text-gray-500 mb-10 text-center max-w-lg">
          High-resolution, modern "Insta-style" dotted QR codes. You can right-click and save these images to use directly in Figma, social media, or other marketing materials.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-12">
          {/* Large App Store QR */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 relative">
               <QRCode 
                  value="https://apps.apple.com/np/app/vasuko/id6783282252" 
                  size={250} 
                  qrStyle="dots" 
                  eyeRadius={15} 
                  fgColor="#018835"
                  ecLevel="H"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="bg-white p-4 rounded-full shadow-lg">
                     <svg className="w-10 h-10 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.09 2.31-.86 3.65-.74 1.48.16 2.58.74 3.28 1.76-2.92 1.75-2.42 5.56.55 6.74-.7 1.83-1.63 3.51-2.56 4.41M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                   </div>
                </div>
            </div>
            <span className="text-sm font-black text-black uppercase tracking-widest">App Store HQ</span>
          </div>

          {/* Large Play Store QR */}
          <div className="flex flex-col items-center gap-4">
            <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-gray-100 relative">
               <QRCode 
                  value="https://play.google.com/store/apps/details?id=com.vasuko.app" 
                  size={250} 
                  qrStyle="dots" 
                  eyeRadius={15} 
                  fgColor="#018835"
                  ecLevel="H"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <div className="bg-white p-4 rounded-full shadow-lg">
                     <svg className="w-10 h-10" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                   </div>
                </div>
            </div>
            <span className="text-sm font-black text-black uppercase tracking-widest">Play Store HQ</span>
          </div>

        </div>
      </div>

      {/* Print Specific CSS Stylesheet: Forces A4 landscape natively without scaling */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          body {
            background: white !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}} />
    </div>
  );
}
