import React from "react";
import { 
  Search, Bell, Settings, HelpCircle, ChevronDown, 
  ThumbsDown, Heart, CheckCircle2, MapPin, Edit2, 
  ArrowRight
} from "lucide-react";

export default function UpworkDimensionalRedesign() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] font-sans text-black selection:bg-black selection:text-white pb-20">
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5 px-8 h-20 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-12">
          {/* Logo */}
          <div className="font-black text-2xl tracking-tighter text-black">upwork.</div>
          
          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-gray-500 h-full">
            <button className="text-black font-bold border-b-2 border-black h-full flex items-center gap-1.5 transition-colors">Find work <ChevronDown className="w-3 h-3" /></button>
            <button className="hover:text-black h-full flex items-center gap-1.5 transition-colors">Deliver work <ChevronDown className="w-3 h-3" /></button>
            <button className="hover:text-black h-full flex items-center gap-1.5 transition-colors">Manage finances <ChevronDown className="w-3 h-3" /></button>
            <button className="hover:text-black h-full flex items-center transition-colors">Messages</button>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative hidden md:flex items-center w-[280px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-4" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full bg-[#F4F5F7] border border-transparent focus:bg-white focus:border-black/20 focus:ring-4 focus:ring-black/5 rounded-full h-10 pl-11 pr-4 text-sm transition-all outline-none placeholder:text-gray-400"
            />
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-5 text-gray-400">
            <button className="hover:text-black transition-colors"><HelpCircle className="w-5 h-5" strokeWidth={1.5} /></button>
            <button className="hover:text-black transition-colors"><Bell className="w-5 h-5" strokeWidth={1.5} /></button>
            <button className="hover:text-black transition-colors"><Settings className="w-5 h-5" strokeWidth={1.5} /></button>
          </div>

          {/* User Avatar */}
          <div className="w-9 h-9 rounded-full bg-gray-100 overflow-hidden cursor-pointer border border-gray-200 hover:border-emerald-500 transition-colors shadow-sm">
            <img src="https://i.pravatar.cc/150?u=pankaj" alt="Avatar" className="w-full h-full object-cover transition-all" />
          </div>
        </div>
      </nav>

      {/* --- MAIN LAYOUT --- */}
      <main className="max-w-[1400px] mx-auto px-8 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT COLUMN (8 Cols) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Hero Banner (Matching Reference) */}
          <div className="bg-[#2A2B2E] rounded-[24px] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between min-h-[260px]">
            <div className="relative z-10 max-w-[500px]">
              <div className="text-white font-bold text-[15px] mb-2 tracking-wide">Get hired faster</div>
              <h1 className="text-3xl md:text-[34px] font-bold text-white leading-[1.1] tracking-tight mb-8 max-w-[420px]">
                Boosted Proposals first place winners see up to 2X increase in hires
              </h1>
              <button className="bg-white hover:bg-gray-100 text-[#1A1D24] px-5 py-2.5 rounded-full font-bold text-[14px] transition-transform hover:scale-105 active:scale-95 shadow-lg">
                Learn how
              </button>
            </div>

            {/* Stacked Paper Illustration */}
            <div className="absolute right-12 top-1/2 -translate-y-1/2 pointer-events-none hidden md:flex flex-col items-center">
              <div className="relative">
                {/* Back Paper */}
                <div className="w-[220px] h-[130px] bg-[#D8E2D9] rounded-lg absolute top-8 shadow-sm" />
                {/* Middle Paper */}
                <div className="w-[230px] h-[130px] bg-[#E3EDE4] rounded-lg absolute top-4 -left-1.5 shadow-sm" />
                {/* Front Paper */}
                <div className="w-[240px] h-[130px] bg-[#F5F8F5] rounded-lg relative -left-3 shadow-md p-4 flex flex-col gap-3">
                  <div className="absolute top-3 right-3 bg-[#1F5BE3] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">BOOSTED</div>
                  <div className="w-1/2 h-1.5 bg-[#C2D1C5] rounded-full mt-4" />
                  <div className="w-3/4 h-1.5 bg-[#C2D1C5] rounded-full" />
                  <div className="w-2/3 h-1.5 bg-[#C2D1C5] rounded-full" />
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
               <div className="w-4 h-4 rounded-full border border-white/50 flex items-center justify-center opacity-70 cursor-pointer hover:opacity-100 transition-opacity">
                 <div className="flex gap-[2px]">
                   <div className="w-[2px] h-[6px] bg-white" />
                   <div className="w-[2px] h-[6px] bg-white" />
                 </div>
               </div>
               <div className="w-10 h-1 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
               <div className="w-10 h-1 bg-white/40 rounded-full cursor-pointer hover:bg-white/60 transition-colors" />
               <div className="w-10 h-1 bg-white/40 rounded-full cursor-pointer hover:bg-white/60 transition-colors" />
               <div className="w-6 h-1 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Search & Tabs (Floating Header) */}
          <div className="flex flex-col gap-5">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search for jobs..." 
                className="w-full bg-white border border-gray-200 hover:border-gray-300 focus:border-black/20 focus:ring-4 focus:ring-black/5 rounded-[20px] h-16 pl-6 pr-6 text-xl font-medium transition-all outline-none placeholder:text-gray-300"
              />
            </div>

            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-8">
                <button className="text-[14px] font-bold text-black border-b-[3px] border-black pb-2">Best matches</button>
                <button className="text-[14px] font-medium text-gray-500 hover:text-black transition-colors border-b-[3px] border-transparent pb-2">Most recent</button>
                <button className="text-[14px] font-medium text-gray-500 hover:text-black transition-colors border-b-[3px] border-transparent pb-2">Saved jobs</button>
              </div>
              <button className="text-[13px] font-bold text-black hover:text-gray-600 transition-colors uppercase tracking-widest pb-2">
                Filters +
              </button>
            </div>
          </div>

          {/* Job Feed (Dimensional Cards) */}
          <div className="flex flex-col gap-6">
            
            {/* Job Card 1 */}
            <article className="bg-white rounded-[24px] border border-gray-200 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 p-8 group relative cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="text-[12px] font-medium text-gray-400">Posted 1h ago — Proposals: 20-50</div>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-black transition-colors"><ThumbsDown className="w-4 h-4" strokeWidth={2} /></button>
                  <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-red-500 transition-colors"><Heart className="w-4 h-4" strokeWidth={2} /></button>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-black group-hover:text-emerald-600 transition-colors mb-3 tracking-tight">
                iOS App Redesign — Finance & Lifestyle
              </h2>
              
              <div className="text-[14px] text-gray-500 mb-6">
                <span className="text-black font-semibold">Hourly: $15-$35</span> — Intermediate — Est. Time: &lt; 1 month, &lt; 30 hrs/week
              </div>
              
              <p className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-[800px]">
                I'm an indie iOS developer looking for a designer to handle UI/UX redesigns for two existing apps: Business/finance app and a Lifestyle app. Scope for each: redesign of existing screens, plus design work on new features. iOS only — no Android, no web. <span className="text-black font-bold group-hover:underline">Read more</span>
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Mobile App Design', 'UX Design', 'UI Design', 'Figma'].map(tag => (
                  <span key={tag} className="bg-[#F4F5F7] text-gray-600 font-semibold text-[13px] px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 text-[13px] font-medium text-gray-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" strokeWidth={2.5} /> <span className="text-gray-700">Payment verified</span>
                </div>
                <div className="flex text-emerald-500 gap-[2px]">
                   <Heart className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                   <Heart className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                   <Heart className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                   <Heart className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                   <Heart className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                </div>
                <div><span className="text-gray-700 font-bold">$0</span> spent</div>
                <div className="flex items-center gap-1.5 text-gray-700">
                  <MapPin className="w-4 h-4 text-gray-400" strokeWidth={1.5} /> Canada
                </div>
              </div>
            </article>

            {/* Job Card 2 */}
            <article className="bg-white rounded-[24px] border border-gray-200 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 p-8 group relative cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="text-[12px] font-medium text-gray-400">Posted 2h ago — Proposals: 20-50</div>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-black transition-colors"><ThumbsDown className="w-4 h-4" strokeWidth={2} /></button>
                  <button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-red-500 transition-colors"><Heart className="w-4 h-4" strokeWidth={2} /></button>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-black group-hover:text-emerald-600 transition-colors mb-3 tracking-tight">
                Defence Technology Website Designer
              </h2>
              
              <div className="text-[14px] text-gray-500 mb-6">
                <span className="text-black font-semibold">Hourly: $35-$50</span> — Expert — Est. Time: 1-3 months
              </div>
              
              <p className="text-[15px] text-gray-600 leading-relaxed mb-6 max-w-[800px]">
                Design a premium user interface from scratch for a defence technology website. The site should be fully responsive, with 5-8 pages, subtle animations, and optimized for all devices. Implement basic SEO practices and an easy-to-manage CMS. <span className="text-black font-bold group-hover:underline">Read more</span>
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {['Web Design', 'Next.js', 'Tailwind CSS'].map(tag => (
                  <span key={tag} className="bg-[#F4F5F7] text-gray-600 font-semibold text-[13px] px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 text-[13px] font-medium text-gray-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" strokeWidth={2.5} /> <span className="text-gray-700">Payment verified</span>
                </div>
                <div className="flex text-emerald-500 gap-[2px]">
                   <Heart className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                   <Heart className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                   <Heart className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                   <Heart className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                   <Heart className="w-3.5 h-3.5 text-gray-200 fill-current" strokeWidth={0} />
                </div>
                <div><span className="text-gray-700 font-bold">$10k+</span> spent</div>
                <div className="flex items-center gap-1.5 text-gray-700">
                  <MapPin className="w-4 h-4 text-gray-400" strokeWidth={1.5} /> ZAF
                </div>
              </div>
            </article>

          </div>
        </div>

        {/* RIGHT COLUMN (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Profile Widget Card */}
          <div className="bg-white rounded-[24px] border border-gray-200 p-8 hover:border-gray-300 transition-colors duration-300">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden shadow-sm ring-2 ring-emerald-500/20 ring-offset-2">
                <img src="https://i.pravatar.cc/150?u=pankaj" alt="Pankaj S." className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black tracking-tight mb-1 hover:text-emerald-600 transition-colors cursor-pointer">Pankaj S.</h3>
                <p className="text-[13px] font-medium text-gray-500 mb-1">Full-Stack Web Developer</p>
                <p className="text-[12px] font-semibold text-gray-400 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Kathmandu, Nepal
                </p>
              </div>
            </div>
            
            <div className="w-full">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-3">
                <span>Profile Completeness</span>
                <span className="text-emerald-600 font-bold">100%</span>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                <div className="h-full bg-emerald-500 w-full rounded-full" />
              </div>
            </div>
          </div>

          {/* Connects Widget Card */}
          <div className="bg-white rounded-[20px] border border-gray-200 p-6 flex items-center justify-between group cursor-pointer hover:border-gray-300 hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors border border-blue-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
              </div>
              <h3 className="font-bold text-[17px] text-black group-hover:text-blue-600 transition-colors">24 Connects</h3>
            </div>
            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
          </div>

          {/* Visibility Widget Card */}
          <div className="bg-white rounded-[20px] border border-gray-200 p-6 hover:border-gray-300 transition-colors duration-300">
            <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-5">Visibility</h4>
            
            <div className="flex items-center justify-between group cursor-pointer mb-5">
              <span className="font-semibold text-[14px] text-black group-hover:text-amber-500 transition-colors flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-black/5 flex items-center justify-center group-hover:bg-amber-50 group-hover:border-amber-200 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-amber-400 transition-colors" />
                </div>
                Availability Badge
              </span>
              <span className="text-[13px] font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-black/5">Off</span>
            </div>
            
            <div className="flex items-center justify-between group cursor-pointer">
              <span className="font-semibold text-[14px] text-black group-hover:text-blue-500 transition-colors flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-50 border border-black/5 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-blue-500 transition-colors" />
                </div>
                Profile Boost
              </span>
              <span className="text-[13px] font-semibold text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-black/5">Off</span>
            </div>
          </div>

          {/* Text Links Widget */}
          <div className="bg-white rounded-[20px] border border-gray-200 p-6 flex flex-col gap-4">
            {['Preferences', 'Proposals', 'Project Catalog'].map(link => (
              <a key={link} href="#" className="flex items-center justify-between font-bold text-[14px] text-gray-500 hover:text-black transition-colors group">
                {link} <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gray-400" />
              </a>
            ))}
          </div>

        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="w-full border-t border-gray-200 bg-white mt-12 py-12">
        <div className="max-w-[1400px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8 text-[14px] font-semibold text-gray-500">
            <a href="#" className="hover:text-black transition-colors">About Us</a>
            <a href="#" className="hover:text-black transition-colors">Trust, Safety & Security</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Accessibility</a>
          </div>
          <div className="text-[13px] font-medium text-gray-400">
            © 2015 - {new Date().getFullYear()} Upwork® Global Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}
