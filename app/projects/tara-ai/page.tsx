"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  MessageSquare,
  Headphones,
  Zap,
  Puzzle,
  CodeXml,
  SlidersHorizontal,
  Sun,
  Moon,
  Search,
  Plus,
  Star,
  ChevronDown,
  Share2,
  Sparkles,
  Paperclip,
  Mic,
  ArrowUp,
  MoreHorizontal,
  FileText,
  Check,
  Bot,
  User,
  ArrowLeft,
  Copy,
  X,
  PanelLeftClose,
  PanelLeftOpen,
  Calendar,
  CircleDot,
  LayoutGrid,
  BarChart3,
  Layers,
  Image as ImageIcon,
  Compass
} from "lucide-react";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  agentName?: string;
}

interface ChatHistoryItem {
  id: string;
  title: string;
  timeframe: "saved" | "today" | "yesterday";
  iconType?: "chat" | "sun" | "analyst";
  color?: string;
  messages: ChatMessage[];
}

export default function TaraAIPage() {
  // Sidebar state: Collapsed by default
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("chat");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(false);
  const [isSourceMenuOpen, setIsSourceMenuOpen] = useState<boolean>(false);
  const [selectedSource, setSelectedSource] = useState<string>("Select Source");
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Active Chat Session
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  // Sections collapse state inside sidebar
  const [todayCollapsed, setTodayCollapsed] = useState<boolean>(false);
  const [yesterdayCollapsed, setYesterdayCollapsed] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (chatMessages.length > 0) {
      scrollToBottom();
    }
  }, [chatMessages, isGenerating]);

  // Keyboard shortcut: Cmd+B / Ctrl+B to toggle sidebar smoothly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setSidebarOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // History Items with clean icons, ZERO emojis
  const [historyItems, setHistoryItems] = useState<ChatHistoryItem[]>([
    {
      id: "saved-1",
      title: "ChatAI Core",
      timeframe: "saved",
      iconType: "chat",
      color: "bg-slate-100 text-[#0F172A] dark:bg-slate-800 dark:text-slate-200",
      messages: [
        { id: "m1", role: "user", content: "Tell me about the architecture of Tara AI conversational agents.", timestamp: "10:14 AM" },
        { id: "m2", role: "assistant", content: "Tara AI coordinates reasoning models with vector embeddings, dynamic tool routing, and real-time contextual grounding. This enables autonomous data workflows while preserving human verification loops.", timestamp: "10:15 AM", agentName: "Tara Assistant" }
      ]
    },
    {
      id: "saved-2",
      title: "Solar Photography Prompts",
      timeframe: "saved",
      iconType: "sun",
      color: "bg-slate-100 text-[#0F172A] dark:bg-slate-800 dark:text-slate-200",
      messages: [
        { id: "m3", role: "user", content: "Generate a prompt description for a high-res photo of the sun during a solar eclipse.", timestamp: "11:20 AM" },
        { id: "m4", role: "assistant", content: "Prompt: 'Ultra high-definition telephoto astrophotography of the sun corona during a total eclipse, diamond ring flare, vivid solar prominences, cinematic space lighting.'", timestamp: "11:21 AM" }
      ]
    },
    {
      id: "saved-3",
      title: "PostgreSQL Cohort Analytics",
      timeframe: "saved",
      iconType: "analyst",
      color: "bg-slate-100 text-[#0F172A] dark:bg-slate-800 dark:text-slate-200",
      messages: [
        { id: "m5", role: "user", content: "How do we compute customer churn rate effectively in PostgreSQL?", timestamp: "Yesterday" },
        { id: "m6", role: "assistant", content: "To compute churn in PostgreSQL, calculate the number of users who canceled subscriptions during a 30-day cohort divided by active users at the start of that window:\n\n```sql\nSELECT\n  DATE_TRUNC('month', cancel_date) AS cohort_month,\n  COUNT(DISTINCT user_id)::float / NULLIF(start_count, 0) AS churn_rate\nFROM subscriptions;\n```", timestamp: "Yesterday" }
      ]
    },
    {
      id: "today-1",
      title: "Executive Time Allocation Strategy",
      timeframe: "today",
      messages: [
        { id: "t1", role: "user", content: "How can I improve my time management when juggling multiple client projects?", timestamp: "9:05 AM" },
        { id: "t2", role: "assistant", content: "1. Timebox work with 90-minute focus sprints.\n2. Apply the Eisenhower Matrix to prioritize urgent vs essential items.\n3. Consolidate client updates into unified afternoon communication blocks.", timestamp: "9:06 AM" }
      ]
    },
    {
      id: "today-2",
      title: "Rapid Skill Acquisition Protocols",
      timeframe: "today",
      messages: [
        { id: "t3", role: "user", content: "What is the best way to learn a new skill quickly in 30 days?", timestamp: "10:30 AM" },
        { id: "t4", role: "assistant", content: "Deconstruct the core 20% that drives 80% of practical utility, establish a 45-minute daily deliberate practice loop, and receive rapid feedback.", timestamp: "10:31 AM" }
      ]
    },
    {
      id: "today-3",
      title: "Systematic Capital Allocation",
      timeframe: "today",
      messages: [
        { id: "t5", role: "user", content: "How do I start investing in stocks as a beginner?", timestamp: "11:45 AM" },
        { id: "t6", role: "assistant", content: "Begin by funding a liquid emergency reserve, research low-fee broad market index funds, and establish automated monthly dollar-cost averaging.", timestamp: "11:46 AM" }
      ]
    },
    {
      id: "yest-1",
      title: "Neurogenesis and Aerobic Exercise",
      timeframe: "yesterday",
      messages: [
        { id: "y1", role: "user", content: "What are the benefits of daily exercise for cognitive performance?", timestamp: "Yesterday" },
        { id: "y2", role: "assistant", content: "Daily aerobic activity elevates BDNF (Brain-Derived Neurotrophic Factor), promotes synaptic plasticity, and optimizes dopamine regulation.", timestamp: "Yesterday" }
      ]
    },
    {
      id: "yest-2",
      title: "Product Architecture vs UI Design",
      timeframe: "yesterday",
      messages: [
        { id: "y3", role: "user", content: "What is the difference between a UI designer and a Product designer?", timestamp: "Yesterday" },
        { id: "y4", role: "assistant", content: "UI designers specialize in visual aesthetics, typography, design systems, and micro-interactions. Product designers oversee the end-to-end strategy, business metrics, and user journey optimization.", timestamp: "Yesterday" }
      ]
    }
  ]);

  const handleStartNewChat = () => {
    setActiveChatId(null);
    setChatMessages([]);
    setInputText("");
    setIsVoiceActive(false);
  };

  const handleSelectHistory = (item: ChatHistoryItem) => {
    setActiveChatId(item.id);
    setChatMessages(item.messages);
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim() && attachedFiles.length === 0) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = [...chatMessages, userMsg];
    setChatMessages(updated);
    setInputText("");
    setIsGenerating(true);

    if (!activeChatId) {
      const newId = "chat-" + Date.now();
      setActiveChatId(newId);
      const newHistoryItem: ChatHistoryItem = {
        id: newId,
        title: query.slice(0, 32) + (query.length > 32 ? "..." : ""),
        timeframe: "today",
        messages: updated
      };
      setHistoryItems(prev => [newHistoryItem, ...prev]);
    }

    setTimeout(() => {
      let botReply = "";
      if (query.toLowerCase().includes("product 1") || query.toLowerCase().includes("benefit")) {
        botReply = `Key strategic advantages of **Product 1** for client briefings:\n\n1. **Autonomous Pipeline Qualification**: Reduces SDR overhead by 42% through continuous intent telemetry.\n2. **Low-Latency Omnichannel Sync**: Direct two-way sync with Salesforce, HubSpot, and PostgreSQL endpoints with sub-10ms delivery.\n3. **Empirical Time-to-Value**: Enterprise pilot cohorts register a 34% velocity lift across Stage 3 proposals within 14 business days.`;
      } else if (query.toLowerCase().includes("competitor") || query.toLowerCase().includes("analysis")) {
        botReply = `Comparative analysis matrix across 3 primary alternatives:\n\n• **Legacy CRM Suites**: High per-seat pricing, rigid schemas, and manual workflow dependencies.\n• **Tara AI Engine**: Zero-configuration setup, dynamic agent delegation, and sub-80ms inference response times.`;
      } else if (query.toLowerCase().includes("rfp") || query.toLowerCase().includes("documentation")) {
        botReply = `RFP response template generated. Covers SOC2 Type II compliance, ISO 27001 data residency, 99.99% uptime SLA commitments, and end-to-end encryption protocols. Ready for client review or markdown export.`;
      } else if (query.toLowerCase().includes("sam lee") || query.toLowerCase().includes("sales")) {
        botReply = `**Sam Lee (Data Assistant)** is active. Current pipeline telemetry shows 14 active contract negotiations representing $428,000 in expected value. Client response rates improved 28% following the automated cadence adjustments.`;
      } else {
        botReply = `Tara AI has evaluated your request under the **${selectedSource}** context. I am prepared to analyze data cohorts, draft documentation, or run scenario simulations.`;
      }

      setChatMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          agentName: "Tara AI Plus"
        }
      ]);
      setIsGenerating(false);
    }, 700);
  };

  const filteredHistory = historyItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      isDarkMode ? "bg-[#080D1A] text-slate-100" : "bg-[#F8FAFC] text-slate-900"
    }`}>
      
      {/* Top Banner Navigation Bar */}
      <nav className={`h-11 px-5 border-b flex items-center justify-between text-xs transition-colors shrink-0 ${
        isDarkMode ? "bg-[#0B132B] border-slate-800 text-slate-400" : "bg-white border-slate-200 text-slate-500"
      }`}>
        <div className="flex items-center gap-3">
          <Link 
            href="/" 
            className="flex items-center gap-1.5 font-medium hover:text-[#0F172A] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Canvas Gallery</span>
          </Link>
          <span className="text-slate-300 dark:text-slate-700">/</span>
          <span className="font-semibold text-[#0F172A] dark:text-slate-200">Tara AI Studio</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-slate-100 text-[#0F172A] border border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700">
            Timeless Minimal
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition text-slate-700 dark:text-slate-300"
            title="Toggle Sidebar (⌘B)"
          >
            {sidebarOpen ? (
              <>
                <PanelLeftClose className="w-3.5 h-3.5" />
                <span>Collapse</span>
              </>
            ) : (
              <>
                <PanelLeftOpen className="w-3.5 h-3.5" />
                <span>Expand</span>
              </>
            )}
            <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.2 text-[9px] font-mono text-slate-400 bg-slate-100 dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">⌘B</kbd>
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 rounded-md border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5 text-slate-300" /> : <Moon className="w-3.5 h-3.5 text-slate-600" />}
          </button>
        </div>
      </nav>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* 1. NARROW LEFTMOST RAIL (Flat, clean, dark blue accent, zero drop shadow) */}
        <aside className={`w-[64px] shrink-0 border-r flex flex-col items-center justify-between py-5 select-none z-20 transition-colors ${
          isDarkMode ? "bg-[#091024] border-slate-800/80" : "bg-white border-slate-200"
        }`}>
          {/* Top Orb + Minimal Navigation Stack */}
          <div className="flex flex-col items-center gap-6">
            
            {/* Top Monochromatic Dark Blue Orb */}
            <button 
              onClick={handleStartNewChat}
              className="relative group focus:outline-none"
              title="Tara AI"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#0F172A] via-[#1E293B] to-[#3B82F6] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105 border border-slate-300/40 dark:border-slate-700">
                <Compass className="w-4 h-4 text-white/90" />
              </div>
            </button>

            {/* Rail Navigation Icons */}
            <div className="flex flex-col items-center gap-3">
              
              {/* 1. Chat Icon (Dark Blue Primary Active State) */}
              <button 
                onClick={() => {
                  setActiveTab("chat");
                  setSidebarOpen(!sidebarOpen);
                }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "chat"
                    ? "bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]"
                    : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
                title="Chat Workspace"
              >
                <MessageSquare className="w-4 h-4" />
              </button>

              {/* 2. Audio */}
              <button 
                onClick={() => setActiveTab("voice")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "voice"
                    ? "bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]"
                    : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
                title="Audio Interface"
              >
                <Headphones className="w-4 h-4" />
              </button>

              {/* 3. Automations */}
              <button 
                onClick={() => setActiveTab("zap")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "zap"
                    ? "bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]"
                    : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
                title="Automations"
              >
                <Zap className="w-4 h-4" />
              </button>

              {/* 4. Extensions */}
              <button 
                onClick={() => setActiveTab("puzzle")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "puzzle"
                    ? "bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]"
                    : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
                title="Integrations"
              >
                <Puzzle className="w-4 h-4" />
              </button>

              {/* 5. Developer Code */}
              <button 
                onClick={() => setActiveTab("code")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "code"
                    ? "bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]"
                    : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
                title="Code Console"
              >
                <CodeXml className="w-4 h-4" />
              </button>

              {/* 6. Layers */}
              <button 
                onClick={() => setActiveTab("layers")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "layers"
                    ? "bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]"
                    : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
                title="Data Architecture"
              >
                <Layers className="w-4 h-4" />
              </button>

              {/* 7. Collaborators */}
              <div className="relative">
                <button 
                  onClick={() => setActiveTab("community")}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    activeTab === "community"
                      ? "bg-[#0F172A] text-white dark:bg-white dark:text-[#0F172A]"
                      : "text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  }`}
                  title="Team"
                >
                  <User className="w-4 h-4" />
                </button>
                <span className="absolute -top-0.5 -right-1 px-1 py-0.2 bg-[#0F172A] text-white dark:bg-blue-600 text-[8px] font-bold rounded-full tracking-tight">
                  New
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Rail Controls */}
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1.5 transition-colors"
              title="Toggle Theme"
            >
              <Sun className="w-4 h-4" />
            </button>

            {/* Profile Avatar 'S' with Subtle Online Dot */}
            <div className="relative cursor-pointer group" onClick={() => setIsConfigOpen(true)}>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 flex items-center justify-center text-xs font-semibold border border-slate-200 dark:border-slate-700">
                S
              </div>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 border border-white dark:border-slate-900 rounded-full"></span>
            </div>
          </div>
        </aside>

        {/* 2. EXPANDABLE CHAT HISTORY SIDEBAR (Flat, fluid, zero drop shadow) */}
        <div 
          className={`transition-all duration-300 ease-in-out shrink-0 overflow-hidden border-r ${
            sidebarOpen ? "w-[260px] opacity-100" : "w-0 opacity-0 border-r-0 pointer-events-none"
          } ${
            isDarkMode ? "bg-[#0B132B] border-slate-800" : "bg-[#F8FAFC] border-slate-200"
          }`}
        >
          <div className="w-[260px] h-full flex flex-col justify-between py-5 px-3.5 select-none">
            
            <div className="flex flex-col gap-4">
              {/* Header with Search and Close */}
              <div className="flex items-center justify-between px-1">
                <span className="text-sm font-semibold text-[#0F172A] dark:text-white tracking-tight">
                  Conversations
                </span>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 transition"
                    title="Search"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => setSidebarOpen(false)}
                    className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 p-1 transition"
                    title="Close Sidebar"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* + New Chat Button (Dark blue primary) */}
              <button 
                onClick={handleStartNewChat}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-medium flex items-center justify-center gap-2 transition active:scale-[0.99] border border-transparent dark:bg-white dark:text-[#0F172A] dark:hover:bg-slate-100"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Thread</span>
                <Sparkles className="w-3 h-3 text-slate-300 dark:text-slate-600 ml-0.5" />
              </button>

              {/* Chat History List */}
              <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-220px)] pr-1 scrollbar-none text-xs">
                
                {/* Saved Section */}
                <div>
                  <div className="flex items-center gap-1.5 px-1 py-1 text-slate-400 font-medium text-[11px]">
                    <Star className="w-3 h-3" />
                    <span>Saved</span>
                  </div>

                  <div className="mt-1 space-y-1">
                    {historyItems.filter(h => h.timeframe === "saved").map(item => (
                      <div 
                        key={item.id}
                        onClick={() => handleSelectHistory(item)}
                        className={`group flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors border ${
                          activeChatId === item.id 
                            ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-[#0F172A] dark:text-white font-medium" 
                            : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/60"
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <div className={`w-4 h-4 rounded-md flex items-center justify-center text-[9px] font-bold shrink-0 ${item.color}`}>
                            {item.iconType === "chat" && <MessageSquare className="w-2.5 h-2.5" />}
                            {item.iconType === "sun" && <ImageIcon className="w-2.5 h-2.5" />}
                            {item.iconType === "analyst" && <BarChart3 className="w-2.5 h-2.5" />}
                          </div>
                          <span className="truncate text-xs">{item.title}</span>
                        </div>
                        <span className="opacity-0 group-hover:opacity-100 text-slate-400 p-0.5">
                          <MoreHorizontal className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Today Section */}
                <div>
                  <div 
                    onClick={() => setTodayCollapsed(!todayCollapsed)}
                    className="flex items-center justify-between px-1 py-1 text-slate-400 font-medium text-[11px] cursor-pointer hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    <span>Today</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${todayCollapsed ? "-rotate-90" : ""}`} />
                  </div>

                  {!todayCollapsed && (
                    <div className="mt-1 space-y-1">
                      {historyItems.filter(h => h.timeframe === "today").map(item => (
                        <div 
                          key={item.id}
                          onClick={() => handleSelectHistory(item)}
                          className={`group flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors border ${
                            activeChatId === item.id 
                              ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-[#0F172A] dark:text-white font-medium" 
                              : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/60"
                          }`}
                        >
                          <span className="truncate pr-1 text-xs">{item.title}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-slate-400 p-0.5 shrink-0">
                            <MoreHorizontal className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Yesterday Section */}
                <div>
                  <div 
                    onClick={() => setYesterdayCollapsed(!yesterdayCollapsed)}
                    className="flex items-center justify-between px-1 py-1 text-slate-400 font-medium text-[11px] cursor-pointer hover:text-slate-600 dark:hover:text-slate-300"
                  >
                    <span>Yesterday</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${yesterdayCollapsed ? "-rotate-90" : ""}`} />
                  </div>

                  {!yesterdayCollapsed && (
                    <div className="mt-1 space-y-1">
                      {historyItems.filter(h => h.timeframe === "yesterday").map(item => (
                        <div 
                          key={item.id}
                          onClick={() => handleSelectHistory(item)}
                          className={`group flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-colors border ${
                            activeChatId === item.id 
                              ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-[#0F172A] dark:text-white font-medium" 
                              : "border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/60"
                          }`}
                        >
                          <span className="truncate pr-1 text-xs">{item.title}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-slate-400 p-0.5 shrink-0">
                            <MoreHorizontal className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Bottom Upgrade Button */}
            <div className="pt-2">
              <button 
                onClick={() => setIsUpgradeOpen(true)}
                className={`w-full py-2.5 px-3 rounded-xl border text-xs font-semibold text-center transition ${
                  isDarkMode 
                    ? "border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200" 
                    : "border-slate-200 bg-white hover:bg-slate-50 text-[#0F172A]"
                }`}
              >
                Upgrade to Pro
              </button>
            </div>

          </div>
        </div>

        {/* 3. MAIN WORKSPACE / CHAT VIEW (Wide, proper whitespace, zero drop shadow) */}
        <main className={`flex-1 flex flex-col justify-between overflow-y-auto relative transition-colors ${
          isDarkMode ? "bg-[#080D1A]" : "bg-white"
        }`}>
          
          {/* Header Bar */}
          <header className={`h-16 px-8 flex items-center justify-between shrink-0 sticky top-0 z-10 border-b ${
            isDarkMode ? "bg-[#080D1A]/95 border-slate-800/80" : "bg-white/95 border-slate-100"
          } backdrop-blur-xs`}>
            
            {/* Left Title & Plus Badge */}
            <div className="flex items-center gap-2.5">
              {!sidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-1.5 -ml-2 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition mr-1"
                  title="Expand Sidebar (⌘B)"
                >
                  <PanelLeftOpen className="w-4 h-4" />
                </button>
              )}
              <h1 className="text-sm font-semibold text-[#0F172A] dark:text-white tracking-tight">
                Tara AI
              </h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-medium text-slate-600 bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                Plus
              </span>
            </div>

            {/* Right Buttons: Configuration, Share, New Thread */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsConfigOpen(true)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition ${
                  isDarkMode 
                    ? "border-slate-700 bg-slate-800/40 text-slate-300 hover:bg-slate-800" 
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>Configuration</span>
                <SlidersHorizontal className="w-3 h-3 text-slate-400" />
              </button>

              <button 
                onClick={() => setIsShareOpen(true)}
                className={`px-3 py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition ${
                  isDarkMode 
                    ? "border-slate-700 bg-slate-800/40 text-slate-300 hover:bg-slate-800" 
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>Share</span>
                <Share2 className="w-3 h-3 text-slate-400" />
              </button>

              <button 
                onClick={handleStartNewChat}
                className="px-3.5 py-1.5 rounded-lg bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-medium flex items-center gap-1.5 transition dark:bg-white dark:text-[#0F172A] dark:hover:bg-slate-100"
              >
                <span>New Thread</span>
                <Sparkles className="w-3 h-3 text-slate-300 dark:text-slate-600" />
              </button>
            </div>
          </header>

          {/* Canvas Body with generous white spacing */}
          <div className="flex-1 flex flex-col px-6 sm:px-12 max-w-4xl mx-auto w-full justify-between pb-8 pt-4">
            
            {chatMessages.length === 0 ? (
              /* EMPTY WELCOME SCREEN (Timeless, Zero Drop Shadow, Clean Icons) */
              <div className="flex-1 flex flex-col items-center justify-center my-auto py-8">
                
                {/* Clean Central Glowing Dark Blue Monolith Orb */}
                <div className="mb-5 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#0F172A] via-[#1E3A8A] to-[#60A5FA] flex items-center justify-center border border-slate-200 dark:border-slate-700">
                    <Compass className="w-6 h-6 text-white/90" />
                  </div>
                </div>

                {/* Pure Typography Greeting (Zero Emojis) */}
                <h2 className="text-2xl font-bold tracking-tight text-[#0F172A] dark:text-white mb-2">
                  Welcome to Tara
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center max-w-sm mb-10 leading-relaxed">
                  Tell us what you need, and we will coordinate the rest.
                </p>

                {/* 3 Precision Interactive Cards (Flat, No Shadows) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
                  
                  {/* CARD 1: Sam Lee (Data Assistant) - Dark Navy Primary Card */}
                  <div 
                    onClick={() => handleSendMessage("Activate Sam Lee Data Assistant")}
                    className="bg-[#0F172A] text-white p-5 rounded-xl flex flex-col justify-between cursor-pointer border border-[#1E293B] hover:border-slate-600 transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-300">
                            S
                          </div>
                          <span className="text-xs font-semibold text-slate-100">
                            Sam Lee
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#1D4ED8] text-white">
                          Data Assistant
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        Designed to help manage sales processes and maximize customer engagement.
                      </p>
                    </div>
                  </div>

                  {/* CARD 2: Tasks List Card (Clean Flat White/Dark) */}
                  <div className={`p-5 rounded-xl border flex flex-col justify-between transition-colors ${
                    isDarkMode ? "bg-[#0B132B] border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
                  }`}>
                    <div className="space-y-2.5">
                      <div 
                        onClick={() => handleSendMessage("Answer RFP documentation")}
                        className="flex items-center gap-2.5 text-xs font-medium cursor-pointer hover:text-blue-600 transition"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">Answer RFP documentation</span>
                      </div>

                      <div 
                        onClick={() => handleSendMessage("Conduct a competitor analysis")}
                        className="flex items-center gap-2.5 text-xs font-medium cursor-pointer hover:text-blue-600 transition"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">Conduct a competitor analysis</span>
                      </div>

                      <div 
                        onClick={() => handleSendMessage("Provide feedback on communication")}
                        className="flex items-center gap-2.5 text-xs font-medium cursor-pointer hover:text-blue-600 transition"
                      >
                        <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">Provide feedback on communication</span>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Tasks</span>
                      <button 
                        onClick={() => handleSendMessage("View all available tasks")}
                        className="text-[#1D4ED8] dark:text-blue-400 font-medium hover:underline"
                      >
                        View All
                      </button>
                    </div>
                  </div>

                  {/* CARD 3: Suggested Prompt Card (Flat, No Shadows) */}
                  <div 
                    onClick={() => handleSendMessage("What are the key benefits of Product 1 that I should highlight to potential clients?")}
                    className={`p-5 rounded-xl border flex flex-col justify-between cursor-pointer group transition-colors ${
                      isDarkMode ? "bg-[#0B132B] border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800 hover:border-slate-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-end mb-2">
                        <MoreHorizontal className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <p className="text-xs font-medium leading-relaxed group-hover:text-blue-600 transition-colors text-slate-700 dark:text-slate-200">
                        What are the key benefits of <strong className="font-semibold text-[#0F172A] dark:text-white">Product 1</strong> that I should highlight to potential clients?
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] text-slate-400">
                        Suggested prompt
                      </span>
                    </div>
                  </div>

                </div>

                {/* Quick Action Pills (Clean minimal icons, zero shadows) */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 w-full mb-4">
                  
                  {/* Connect Calendar */}
                  <button 
                    onClick={() => handleSendMessage("Connect Calendar integration")}
                    className={`px-4 py-2 rounded-lg border text-xs font-medium flex items-center gap-2 transition hover:bg-slate-50 dark:hover:bg-slate-800 ${
                      isDarkMode ? "bg-[#0B132B] border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>Connect Calendar</span>
                  </button>

                  {/* Demo Task */}
                  <button 
                    onClick={() => handleSendMessage("Run Demo Task workflow")}
                    className={`px-4 py-2 rounded-lg border text-xs font-medium flex items-center gap-2 transition hover:bg-slate-50 dark:hover:bg-slate-800 ${
                      isDarkMode ? "bg-[#0B132B] border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    <CircleDot className="w-3.5 h-3.5 text-slate-500" />
                    <span>Demo Task</span>
                  </button>

                  {/* Browse Integrations */}
                  <button 
                    onClick={() => handleSendMessage("Browse available Integrations")}
                    className={`px-4 py-2 rounded-lg border text-xs font-medium flex items-center gap-2 transition hover:bg-slate-50 dark:hover:bg-slate-800 ${
                      isDarkMode ? "bg-[#0B132B] border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5 text-slate-500" />
                    <span>Browse Integrations</span>
                  </button>

                  {/* Shared in Notes */}
                  <button 
                    onClick={() => handleSendMessage("Summarize shared notes")}
                    className={`px-4 py-2 rounded-lg border text-xs font-medium flex items-center gap-2 transition hover:bg-slate-50 dark:hover:bg-slate-800 ${
                      isDarkMode ? "bg-[#0B132B] border-slate-800 text-slate-300" : "bg-white border-slate-200 text-slate-700"
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5 text-slate-500" />
                    <span>Shared in Notes</span>
                  </button>

                </div>

              </div>
            ) : (
              /* ACTIVE CHAT THREAD (Clean conversational layout) */
              <div className="flex-1 flex flex-col space-y-6 py-6 overflow-y-auto">
                {chatMessages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex gap-3.5 max-w-2xl ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                  >
                    <div className={`w-8 h-8 rounded-lg shrink-0 flex items-center justify-center text-xs font-semibold ${
                      msg.role === "user" 
                        ? "bg-[#0F172A] text-white" 
                        : "bg-slate-100 text-[#0F172A] dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700"
                    }`}>
                      {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-semibold text-slate-500">
                          {msg.role === "user" ? "You" : (msg.agentName || "Tara AI")}
                        </span>
                        <span className="text-[10px] text-slate-400">{msg.timestamp}</span>
                      </div>

                      <div className={`p-4 rounded-xl text-xs leading-relaxed border ${
                        msg.role === "user"
                          ? "bg-[#0F172A] text-white border-transparent"
                          : (isDarkMode ? "bg-[#0B132B] text-slate-200 border-slate-800" : "bg-white border-slate-200 text-slate-800")
                      }`}>
                        <div className="whitespace-pre-wrap">{msg.content}</div>
                      </div>

                      {msg.role === "assistant" && (
                        <div className="flex items-center gap-2 mt-1.5 text-slate-400 text-[11px] pl-1">
                          <button 
                            onClick={() => navigator.clipboard.writeText(msg.content)}
                            className="hover:text-slate-700 dark:hover:text-slate-200 flex items-center gap-1 transition"
                          >
                            <Copy className="w-3 h-3" />
                            <span>Copy response</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {isGenerating && (
                  <div className="flex items-center gap-3 mr-auto text-xs text-slate-400">
                    <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#0F172A] dark:text-white flex items-center justify-center animate-pulse border border-slate-200 dark:border-slate-700">
                      <Bot className="w-4 h-4" />
                    </div>
                    <span>Tara AI is reasoning...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* FLOATING PROMPT INPUT BAR (Flat, zero drop shadow, dark blue accents) */}
            <div className="w-full max-w-3xl mx-auto mt-auto">
              
              {/* Attachment badges */}
              {attachedFiles.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {attachedFiles.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      <FileText className="w-3 h-3 text-[#0F172A] dark:text-blue-400" />
                      <span className="truncate max-w-[140px]">{file}</span>
                      <button 
                        onClick={() => setAttachedFiles(prev => prev.filter((_, i) => i !== idx))}
                        className="text-slate-400 hover:text-rose-500 ml-1"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Input Container (Strictly border-based, zero shadow) */}
              <div className={`rounded-2xl border px-4 py-3.5 transition-colors ${
                isDarkMode ? "bg-[#0B132B] border-slate-800 focus-within:border-slate-600" : "bg-white border-slate-300 focus-within:border-[#0F172A]"
              }`}>
                
                {/* Input Text Row */}
                <div className="flex items-center gap-2.5 mb-3">
                  <Sparkles className="w-4 h-4 text-slate-400 shrink-0" />
                  <input 
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    placeholder="Ask me anything..."
                    className="w-full bg-transparent text-xs font-normal text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none"
                  />
                </div>

                {/* Bottom Controls Row */}
                <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-slate-800/80">
                  
                  {/* Select Source Dropdown */}
                  <div className="relative">
                    <button 
                      onClick={() => setIsSourceMenuOpen(!isSourceMenuOpen)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-normal flex items-center gap-1.5 transition ${
                        isDarkMode 
                          ? "border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800" 
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{selectedSource}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400" />
                    </button>

                    {isSourceMenuOpen && (
                      <div className={`absolute bottom-full left-0 mb-2 w-48 rounded-xl border py-1.5 z-30 text-xs ${
                        isDarkMode ? "bg-[#091024] border-slate-800 text-slate-200" : "bg-white border-slate-200 text-slate-800"
                      }`}>
                        {["Select Source", "Web Search", "Internal Knowledge Base", "Sales CRM", "Uploaded Docs"].map((src) => (
                          <button
                            key={src}
                            onClick={() => {
                              setSelectedSource(src);
                              setIsSourceMenuOpen(false);
                            }}
                            className={`w-full text-left px-3.5 py-1.5 flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-800 ${
                              selectedSource === src ? "font-semibold text-blue-600 dark:text-blue-400" : ""
                            }`}
                          >
                            <span>{src}</span>
                            {selectedSource === src && <Check className="w-3 h-3" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Actions: Attach, Voice, Send (Dark Blue Primary) */}
                  <div className="flex items-center gap-2">
                    
                    {/* Attach */}
                    <button 
                      onClick={() => {
                        const sampleFiles = ["Quarterly_Performance.pdf", "Competitive_Matrix.csv", "System_Architecture.docx"];
                        const nextFile = sampleFiles[Math.floor(Math.random() * sampleFiles.length)];
                        if (!attachedFiles.includes(nextFile)) {
                          setAttachedFiles(prev => [...prev, nextFile]);
                        }
                      }}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-normal flex items-center gap-1.5 transition ${
                        isDarkMode 
                          ? "border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800" 
                          : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Paperclip className="w-3.5 h-3.5 text-slate-400" />
                      <span>Attach</span>
                    </button>

                    {/* Voice */}
                    <button 
                      onClick={() => setIsVoiceActive(!isVoiceActive)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-normal flex items-center gap-1.5 transition ${
                        isVoiceActive 
                          ? "bg-rose-50 text-rose-600 border-rose-300 dark:bg-rose-950 dark:border-rose-800" 
                          : (isDarkMode 
                              ? "border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-800" 
                              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50")
                      }`}
                    >
                      <Mic className={`w-3.5 h-3.5 ${isVoiceActive ? "text-rose-600 animate-pulse" : "text-slate-400"}`} />
                      <span>{isVoiceActive ? "Listening..." : "Voice"}</span>
                    </button>

                    {/* Send Button (Dark Blue Primary) */}
                    <button 
                      onClick={() => handleSendMessage()}
                      disabled={!inputText.trim() && attachedFiles.length === 0}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                        inputText.trim() || attachedFiles.length > 0
                          ? "bg-[#0F172A] hover:bg-[#1E293B] text-white cursor-pointer dark:bg-white dark:text-[#0F172A] dark:hover:bg-slate-100"
                          : "bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                      <span>Send</span>
                    </button>

                  </div>

                </div>

              </div>

              {/* Disclaimer */}
              <p className="text-[11px] text-slate-400 text-center mt-3 select-none">
                Tara may display inaccurate information. Verify critical outputs.{" "}
                <span className="underline cursor-pointer hover:text-slate-600 dark:hover:text-slate-300 font-medium">
                  Privacy & System Ethics
                </span>
              </p>

            </div>

          </div>

        </main>

      </div>

      {/* CONFIGURATION MODAL (Flat, No Shadows) */}
      {isConfigOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-xl p-6 border ${
            isDarkMode ? "bg-[#0B132B] border-slate-800 text-white" : "bg-white border-slate-300 text-slate-900"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">Tara AI Configuration</h3>
              <button onClick={() => setIsConfigOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-medium block mb-1">Reasoning Model</label>
                <select className={`w-full p-2.5 rounded-lg border ${isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"}`}>
                  <option>Tara AI Neural Core 4.5 (Default)</option>
                  <option>Sam Lee Autonomous Sales Agent</option>
                  <option>Deep Cohort Reasoning Engine</option>
                </select>
              </div>

              <div>
                <label className="font-medium block mb-1">Temperature / Determinism (0.7)</label>
                <input type="range" min="0" max="1" step="0.1" defaultValue="0.7" className="w-full accent-[#0F172A]" />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button 
                onClick={() => setIsConfigOpen(false)}
                className="px-4 py-2 rounded-lg bg-[#0F172A] text-white text-xs font-medium hover:bg-[#1E293B] transition"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SHARE MODAL (Flat, No Shadows) */}
      {isShareOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-sm rounded-xl p-6 border ${
            isDarkMode ? "bg-[#0B132B] border-slate-800 text-white" : "bg-white border-slate-300 text-slate-900"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold">Share Workspace Session</h3>
              <button onClick={() => setIsShareOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              Generate an access link to share this session state with team members.
            </p>

            <div className={`flex items-center justify-between p-2.5 rounded-lg border mb-4 text-xs ${
              isDarkMode ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"
            }`}>
              <span className="truncate pr-2 text-slate-500">https://tara.ai/session/49210</span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText("https://tara.ai/session/49210");
                  alert("Session URL copied to clipboard.");
                }}
                className="px-3 py-1 bg-[#0F172A] text-white font-medium rounded-md hover:bg-[#1E293B]"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UPGRADE MODAL (Flat, No Shadows) */}
      {isUpgradeOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-xl p-6 border ${
            isDarkMode ? "bg-[#0B132B] border-slate-800 text-white" : "bg-white border-slate-300 text-slate-900"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">Tara AI Professional</h3>
              <button onClick={() => setIsUpgradeOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-4 h-4" />
              </button>
            </div>

            <ul className="space-y-2.5 text-xs mb-5 text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Unlimited autonomous agent routing</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Sub-50ms latency tier with priority compute</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Enterprise CRM and Postgres vector sync</span>
              </li>
            </ul>

            <div className="flex items-baseline justify-between p-3.5 bg-slate-100 dark:bg-slate-800 rounded-lg mb-5 border border-slate-200 dark:border-slate-700">
              <div>
                <span className="text-xl font-bold text-[#0F172A] dark:text-white">$20</span>
                <span className="text-xs text-slate-500"> / month</span>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400 px-2 py-0.5 rounded">
                Billed annually
              </span>
            </div>

            <button 
              onClick={() => setIsUpgradeOpen(false)}
              className="w-full py-2.5 rounded-lg bg-[#0F172A] text-white font-medium text-xs hover:bg-[#1E293B] transition"
            >
              Start 14-Day Free Evaluation
            </button>
          </div>
        </div>
      )}

      {/* SEARCH OVERLAY (Flat, No Shadows) */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-24 z-50 p-4">
          <div className={`w-full max-w-md rounded-xl p-4 border ${
            isDarkMode ? "bg-[#091024] border-slate-800 text-white" : "bg-white border-slate-300 text-slate-900"
          }`}>
            <div className="flex items-center gap-2 border-b pb-2.5 mb-2.5 border-slate-200 dark:border-slate-800">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <input 
                type="text" 
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conversations..."
                className="w-full bg-transparent text-xs outline-none text-slate-900 dark:text-white"
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="max-h-56 overflow-y-auto space-y-1 text-xs">
              {filteredHistory.length === 0 ? (
                <p className="text-slate-400 text-center py-3 text-[11px]">No matching threads found</p>
              ) : (
                filteredHistory.map(item => (
                  <div 
                    key={item.id}
                    onClick={() => {
                      handleSelectHistory(item);
                      setIsSearchOpen(false);
                    }}
                    className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer flex items-center justify-between"
                  >
                    <span className="truncate pr-2 font-medium">{item.title}</span>
                    <span className="text-[10px] text-slate-400 capitalize">{item.timeframe}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
