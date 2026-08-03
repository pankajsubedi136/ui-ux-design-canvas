import React from "react";
import { Activity, Car, Wrench, Zap, BarChart2, Search, Bell, Settings, Calendar, ChevronDown, CheckCircle2, ChevronRight, AlertTriangle, ShieldCheck, ThermometerSnowflake, Disc, Database } from "lucide-react";

export default function AeroTrackDashboard() {
  return (
    <div className="h-screen w-full bg-[#F5F5F7] text-[#111827] font-sans selection:bg-[#0055FF]/20 flex relative overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-[72px] border-r border-black/5 bg-white flex flex-col items-center py-6 gap-8 z-20 shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        {/* Logo */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0055FF] to-[#0033AA] flex items-center justify-center shadow-[0_8px_16px_rgba(0,85,255,0.25)] shrink-0">
          <Activity className="w-5 h-5 text-white" />
        </div>
        
        {/* Nav Icons */}
        <nav className="flex flex-col gap-6 w-full items-center flex-1 mt-4">
          <NavItem icon={<BarChart2 className="w-5 h-5" />} active />
          <NavItem icon={<Car className="w-5 h-5" />} />
          <NavItem icon={<Wrench className="w-5 h-5" />} />
          <NavItem icon={<Zap className="w-5 h-5" />} />
          <NavItem icon={<Database className="w-5 h-5" />} />
        </nav>
        
        <NavItem icon={<Settings className="w-5 h-5" />} />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col z-10 relative h-screen overflow-hidden">
        
        {/* Top Header Navigation */}
        <header className="h-[72px] border-b border-black/5 flex items-center justify-between px-8 shrink-0 bg-white shadow-[0_4px_24px_rgba(0,0,0,0.02)] z-10">
          <div className="flex items-center gap-8 h-full">
            <TopNavTab label="Fleet Overview" active />
            <TopNavTab label="Active Units" />
            <TopNavTab label="Service Logs" />
            <TopNavTab label="Energy Grid" />
            <TopNavTab label="Security" />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 group-focus-within:text-[#0055FF] transition-colors" />
              <input 
                type="text" 
                placeholder="Search telemetry..." 
                className="bg-[#F9FAFB] border border-black/5 rounded-lg pl-9 pr-4 py-2 text-sm outline-none focus:border-[#0055FF]/50 focus:bg-white focus:ring-4 focus:ring-[#0055FF]/10 transition-all w-[260px] placeholder:text-gray-400 text-gray-900"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 border border-black/10 bg-white rounded px-1.5 text-[10px] text-gray-400 font-mono shadow-sm">⌘K</div>
            </div>
            
            <button className="bg-white hover:bg-gray-50 border border-black/10 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm text-gray-700">
              Export Data
            </button>
            
            <button className="relative text-gray-400 hover:text-gray-700 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#0055FF] rounded-full border-2 border-white" />
            </button>
            
            <div className="w-9 h-9 rounded-full border border-black/10 overflow-hidden shadow-sm bg-gray-100">
              <img src="https://api.dicebear.com/9.x/pixel-art/svg?seed=AeroAdmin" alt="Admin" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>

        {/* Viewport-Locked Dashboard Content */}
        <div className="flex-1 flex flex-col p-6 lg:p-8 w-full overflow-hidden">
          
          {/* Dashboard Header */}
          <div className="flex items-center justify-between mb-6 shrink-0">
            <h1 className="text-3xl font-light tracking-tight text-gray-900">Fleet Overview</h1>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-white border border-black/10 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm transition-colors shadow-sm text-gray-700 font-medium">
                <Settings className="w-4 h-4 text-gray-400" /> Custom View
              </button>
              <button className="flex items-center gap-2 bg-white border border-black/10 hover:bg-gray-50 px-4 py-2 rounded-lg text-sm transition-colors shadow-sm text-gray-700 font-medium">
                <Calendar className="w-4 h-4 text-gray-400" /> This Week <ChevronDown className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Main Grid System (Viewport locked via Grid Rows) */}
          <div className="flex-1 grid grid-rows-[auto_minmax(0,1.3fr)_minmax(0,1fr)] gap-6 min-h-0">
            
            {/* ROW 1: Top Metrics */}
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-6">
                <MetricCard title="Active Fleet Units" value="1,042" trend="+12%" subtitle="84 deployed this week" trendUp />
                <MetricCard title="Total Energy Dispensed" value="84.5M" unit="kWh" trend="+5.2%" subtitle="Across 3 global zones" trendUp />
                <MetricCard title="Critical Alerts" value="3" trend="-2" subtitle="Requires immediate action" trendUp={false} alert />
              </div>
              
              {/* Quick Action / CTA */}
              <div className="col-span-12 lg:col-span-4">
                 <div className="h-full rounded-2xl border border-black/5 bg-white p-5 flex flex-col justify-center relative overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,85,255,0.08)] transition-shadow">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0055FF]/5 rounded-bl-full pointer-events-none" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-[#0055FF]/10 rounded-full flex items-center justify-center text-[#0055FF]">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Deploy Firmware OTA</h3>
                    <p className="text-gray-500 text-sm mb-4">Initialize network-wide update v4.2.1</p>
                    <button className="bg-[#111827] text-white font-medium px-5 py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors w-max shadow-md active:scale-95 transform">
                      Initialize Sequence
                    </button>
                 </div>
              </div>
            </div>

            {/* ROW 2: Chart Area & Checklist */}
            <div className="grid grid-cols-12 gap-6 min-h-0">
              
              {/* Chart Area */}
              <div className="col-span-12 lg:col-span-8 bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-2xl p-6 flex flex-col">
                <div className="flex justify-between items-center mb-6 shrink-0">
                  <h3 className="text-sm font-semibold text-gray-700">Grid Energy Consumption (kWh)</h3>
                </div>
                
                <div className="flex-1 flex items-end gap-6 relative min-h-0 mt-4">
                  {/* Horizontal Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[0, 1, 2, 3].map(i => (
                      <div key={i} className="w-full h-px bg-gray-100" />
                    ))}
                  </div>
                  
                  {/* Bars */}
                  <Bar day="Mon" height={60} />
                  <Bar day="Tue" height={45} />
                  <Bar day="Wed" height={85} active />
                  <Bar day="Thu" height={30} />
                  <Bar day="Fri" height={50} />
                </div>
              </div>

              {/* Checklist */}
              <div className="col-span-12 lg:col-span-4 bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-2xl p-2 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
                <div className="p-4 mb-1 shrink-0">
                  <h3 className="text-sm font-semibold text-gray-900">Diagnostic Systems</h3>
                  <p className="text-gray-500 text-xs mt-1">Run routine checks on active fleet</p>
                </div>
                
                <ChecklistItem icon={<ThermometerSnowflake />} title="Thermal Management" desc="Battery cooling systems" action="Run Scan" />
                <ChecklistItem icon={<Disc />} title="Brake Calibration" desc="Regenerative friction" action="Calibrate" />
                <ChecklistItem icon={<Zap />} title="Power Delivery" desc="Inverter efficiency" action="Diagnose" status="Healthy" />
                <ChecklistItem icon={<ShieldCheck />} title="Network Security" desc="Encrypted handshake" action="Verify" />
              </div>
            </div>

            {/* ROW 3: List Section & Quotas */}
            <div className="grid grid-cols-12 gap-6 min-h-0">
              
              {/* List Section */}
              <div className="col-span-12 lg:col-span-8 bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-2xl p-5 flex flex-col overflow-hidden">
                <div className="flex gap-6 border-b border-gray-100 pb-3 mb-3 shrink-0">
                  <button className="text-sm font-semibold text-gray-900 border-b-2 border-[#0055FF] pb-3 -mb-[13px]">Active Units</button>
                  <button className="text-sm font-medium text-gray-400 hover:text-gray-900 transition-colors pb-3">Charging</button>
                </div>
                
                <div className="flex flex-col gap-1 overflow-y-auto custom-scrollbar pr-2 flex-1">
                  <ListItem id="Unit-8942" model="Aero X1" status="In Transit" range="342 mi" health="98%" />
                  <ListItem id="Unit-1093" model="Aero S" status="Charging" range="120 mi" health="100%" />
                  <ListItem id="Unit-5421" model="Aero X1" status="Idle" range="280 mi" health="94%" />
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-100 flex justify-center shrink-0">
                  <button className="bg-white hover:bg-gray-50 border border-black/10 px-6 py-1.5 rounded-lg text-sm font-medium transition-colors text-gray-700 shadow-sm">
                    View All Directory
                  </button>
                </div>
              </div>

              {/* Quotas Section */}
              <div className="col-span-12 lg:col-span-4 bg-white border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-2xl p-5 flex flex-col justify-between overflow-hidden">
                <div className="flex-1 flex flex-col justify-center gap-6">
                  <QuotaBar title="Supercharger Grid Load" current={842} max={1000} />
                  <QuotaBar title="Satellite Bandwidth" current={1.2} max={2.0} unit="TB" />
                </div>
                
                <div className="bg-[#F9FAFB] border border-black/5 rounded-xl p-3 flex items-center justify-between mt-4 shrink-0">
                  <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500 font-medium">Capacity resets in 4h</span>
                  </div>
                  <button className="text-xs font-semibold bg-white border border-black/10 text-gray-900 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                    Expand
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Global CSS for scrollbar hiding/styling */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
      `}} />
    </div>
  );
}

// --- Subcomponents ---

function NavItem({ icon, active = false }: { icon: React.ReactNode, active?: boolean }) {
  return (
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-all ${
      active ? 'bg-[#0055FF]/10 text-[#0055FF]' : 'text-gray-400 hover:text-gray-900 hover:bg-gray-50'
    }`}>
      {icon}
    </div>
  );
}

function TopNavTab({ label, active = false }: { label: string, active?: boolean }) {
  return (
    <div className={`h-full flex items-center border-b-2 px-1 cursor-pointer transition-colors text-sm font-medium ${
      active ? 'border-[#0055FF] text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900'
    }`}>
      {label}
    </div>
  );
}

function MetricCard({ title, value, unit, trend, subtitle, trendUp, alert = false }: { title: string, value: string, unit?: string, trend: string, subtitle: string, trendUp: boolean, alert?: boolean }) {
  return (
    <div className={`bg-white border shadow-[0_8px_30px_rgba(0,0,0,0.04)] ${alert ? 'border-red-200 bg-red-50/30' : 'border-black/5'} rounded-2xl p-5 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all h-full flex flex-col justify-between`}>
      <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
      <div className="flex items-end gap-3 mt-2 mb-1">
        <div className={`text-3xl lg:text-4xl font-light tracking-tight flex items-baseline gap-1 ${alert ? 'text-red-700' : 'text-gray-900'}`}>
          {value} {unit && <span className="text-lg text-gray-400">{unit}</span>}
        </div>
        <div className={`text-xs font-semibold px-2 py-1 rounded mb-1 flex items-center gap-1 ${
          alert ? 'bg-red-100 text-red-700' : (trendUp ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700')
        }`}>
          {trendUp ? '↗' : '↘'} {trend}
        </div>
      </div>
      <p className="text-xs text-gray-400 font-medium">{subtitle}</p>
    </div>
  );
}

function Bar({ day, height, active = false }: { day: string, height: number, active?: boolean }) {
  return (
    <div className="flex-1 flex flex-col items-center gap-3 group h-full justify-end z-10 cursor-pointer pt-6">
      <div className="w-full relative flex items-end justify-center h-full">
        {/* Tooltip on hover */}
        <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs font-bold py-1.5 px-3 rounded shadow-lg pointer-events-none whitespace-nowrap z-20">
          {height * 142} kWh
        </div>
        
        {/* The Bar */}
        <div 
          className={`w-[60%] rounded-t-lg transition-all duration-500 ${
            active ? 'bg-[#0055FF] shadow-[0_4px_16px_rgba(0,85,255,0.4)]' : 'bg-gray-100 group-hover:bg-gray-200'
          }`}
          style={{ height: `${height}%` }}
        />
      </div>
      <span className={`text-xs font-medium shrink-0 ${active ? 'text-[#0055FF]' : 'text-gray-400'}`}>{day}</span>
    </div>
  );
}

function ChecklistItem({ icon, title, desc, action, status }: { icon: React.ReactNode, title: string, desc: string, action: string, status?: string }) {
  return (
    <div className="flex items-center justify-between p-3 lg:p-4 rounded-xl hover:bg-gray-50 border border-transparent transition-colors group">
      <div className="flex items-center gap-3 lg:gap-4">
        <div className="w-10 h-10 rounded-lg bg-gray-100 border border-black/5 flex items-center justify-center text-gray-400 group-hover:text-gray-900 group-hover:bg-white group-hover:shadow-sm transition-all shrink-0">
          {React.cloneElement(icon as React.ReactElement<any>, { className: "w-5 h-5" })}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 leading-tight">{title}</h4>
          <p className="text-xs text-gray-500 mt-0.5 leading-tight">{desc}</p>
        </div>
      </div>
      {status ? (
        <span className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-lg border border-green-100 shrink-0">{status}</span>
      ) : (
        <button className="text-xs font-semibold bg-white hover:bg-gray-50 text-gray-700 px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg transition-colors border border-black/10 shadow-sm shrink-0">
          {action}
        </button>
      )}
    </div>
  );
}

function ListItem({ id, model, status, range, health, warning = false }: { id: string, model: string, status: string, range: string, health: string, warning?: boolean }) {
  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group border border-transparent hover:border-black/5">
      <div className="flex items-center gap-3 w-[160px]">
        <div className={`w-2.5 h-2.5 rounded-full border-2 border-white shadow-sm shrink-0 ${warning ? 'bg-orange-500' : 'bg-green-500'}`} />
        <span className="text-sm font-semibold text-gray-900">{id}</span>
      </div>
      <div className="flex-1 text-sm font-medium text-gray-500">{model}</div>
      <div className="flex-1 flex items-center gap-2">
        <span className={`text-xs font-semibold px-2 py-1 rounded-md ${warning ? 'bg-orange-50 text-orange-700 border border-orange-100' : 'bg-gray-100 text-gray-600 border border-black/5'}`}>
          {status}
        </span>
      </div>
      <div className="flex-1 text-sm font-medium text-gray-500 text-right pr-4">{range}</div>
      <div className="text-sm font-bold text-gray-900 text-right">{health}</div>
    </div>
  );
}

function QuotaBar({ title, current, max, unit = "" }: { title: string, current: number, max: number, unit?: string }) {
  const percentage = (current / max) * 100;
  return (
    <div>
      <div className="flex justify-between items-end mb-2">
        <h4 className="text-sm font-semibold text-gray-700">{title}</h4>
        <span className="text-xs font-bold text-gray-900">{current}<span className="text-gray-400 font-medium">/{max} {unit}</span></span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-full bg-[#0055FF] rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
