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
  PanelLeftOpen
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
  // Sidebar state: DEFAULT TO COLLAPSED (false) as shown in the screenshot
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

  // History Items matching reference
  const [historyItems, setHistoryItems] = useState<ChatHistoryItem[]>([
    {
      id: "saved-1",
      title: "ChatAI",
      timeframe: "saved",
      iconType: "chat",
      color: "bg-[#E0EEFF] text-[#1E70EB]",
      messages: [
        { id: "m1", role: "user", content: "Tell me about the architecture of Tara AI conversational agents.", timestamp: "10:14 AM" },
        { id: "m2", role: "assistant", content: "Tara AI coordinates reasoning models with vector embeddings, dynamic tool routing, and real-time contextual grounding. This enables autonomous data workflows while preserving human verification loops.", timestamp: "10:15 AM", agentName: "Tara Assistant" }
      ]
    },
    {
      id: "saved-2",
      title: "Image of sun",
      timeframe: "saved",
      iconType: "sun",
      color: "bg-[#FFEDD5] text-[#EA580C]",
      messages: [
        { id: "m3", role: "user", content: "Generate a prompt description for a high-res photo of the sun during a solar eclipse.", timestamp: "11:20 AM" },
        { id: "m4", role: "assistant", content: "Prompt: 'Ultra high-definition telephoto astrophotography of the sun corona during a total eclipse, diamond ring flare, vivid solar prominences, cinematic space lighting.'", timestamp: "11:21 AM" }
      ]
    },
    {
      id: "saved-3",
      title: "Data Analyst",
      timeframe: "saved",
      iconType: "analyst",
      color: "bg-[#F3E8FF] text-[#9333EA]",
      messages: [
        { id: "m5", role: "user", content: "How do we compute customer churn rate effectively in PostgreSQL?", timestamp: "Yesterday" },
        { id: "m6", role: "assistant", content: "To compute churn in PostgreSQL, calculate the number of users who canceled subscriptions during a 30-day cohort divided by active users at the start of that window:\n\n```sql\nSELECT\n  DATE_TRUNC('month', cancel_date) AS cohort_month,\n  COUNT(DISTINCT user_id)::float / NULLIF(start_count, 0) AS churn_rate\nFROM subscriptions;\n```", timestamp: "Yesterday" }
      ]
    },
    {
      id: "today-1",
      title: "How can I improve my time managemen...",
      timeframe: "today",
      messages: [
        { id: "t1", role: "user", content: "How can I improve my time management when juggling multiple client projects?", timestamp: "9:05 AM" },
        { id: "t2", role: "assistant", content: "1. Timebox work with 90-minute focus sprints.\n2. Apply the Eisenhower Matrix to prioritize urgent vs essential items.\n3. Consolidate client updates into unified afternoon communication blocks.", timestamp: "9:06 AM" }
      ]
    },
    {
      id: "today-2",
      title: "What's the best way to learn a new skill...",
      timeframe: "today",
      messages: [
        { id: "t3", role: "user", content: "What's the best way to learn a new skill quickly in 30 days?", timestamp: "10:30 AM" },
        { id: "t4", role: "assistant", content: "Deconstruct the core 20% that drives 80% of practical utility, establish a 45-minute daily deliberate practice loop, and receive rapid feedback.", timestamp: "10:31 AM" }
      ]
    },
    {
      id: "today-3",
      title: "How do I start investing in stocks as a be...",
      timeframe: "today",
      messages: [
        { id: "t5", role: "user", content: "How do I start investing in stocks as a beginner?", timestamp: "11:45 AM" },
        { id: "t6", role: "assistant", content: "Begin by funding a liquid emergency reserve, research low-fee index funds, and establish automated monthly dollar-cost averaging.", timestamp: "11:46 AM" }
      ]
    },
    {
      id: "yest-1",
      title: "What are the benefits of daily exercise fo...",
      timeframe: "yesterday",
      messages: [
        { id: "y1", role: "user", content: "What are the benefits of daily exercise for cognitive performance?", timestamp: "Yesterday" },
        { id: "y2", role: "assistant", content: "Daily aerobic activity elevates BDNF (Brain-Derived Neurotrophic Factor), promotes synaptic plasticity, and optimizes dopamine regulation.", timestamp: "Yesterday" }
      ]
    },
    {
      id: "yest-2",
      title: "What's the difference between a UI desi...",
      timeframe: "yesterday",
      messages: [
        { id: "y3", role: "user", content: "What's the difference between a UI designer and a Product designer?", timestamp: "Yesterday" },
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
        title: query.slice(0, 32) + "...",
        timeframe: "today",
        messages: updated
      };
      setHistoryItems(prev => [newHistoryItem, ...prev]);
    }

    setTimeout(() => {
      let botReply = "";
      if (query.toLowerCase().includes("product 1") || query.toLowerCase().includes("benefit")) {
        botReply = `Here are the key benefits of **Product 1** to highlight to prospective clients:\n\n1. **Autonomous Sales Pipeline Optimization**: Automatically qualifies incoming intent signals, reducing lead turnaround time by 42%.\n2. **Frictionless CRM Synchronicity**: Real-time two-way synchronization with Salesforce, HubSpot, and custom REST APIs with zero webhook latency.\n3. **Verifiable Time-to-Value**: Enterprise cohorts typically demonstrate a 34% velocity lift across Stage 3 proposals within the first 14 days.`;
      } else if (query.toLowerCase().includes("competitor") || query.toLowerCase().includes("analysis")) {
        botReply = `Conducting competitive benchmark analysis across top market alternatives:\n\n• **Legacy Platforms**: High per-seat licensing, complex multi-tier setup, and rigid manual workflows.\n• **Tara AI Advantage**: Instant zero-config setup, native multi-agent collaboration, and sub-80ms contextual inference speeds.`;
      } else if (query.toLowerCase().includes("rfp") || query.toLowerCase().includes("documentation")) {
        botReply = `I've prepared a draft response framework for your RFP documentation, including SOC2 Type II compliance credentials, SLA guarantees, and enterprise security governance. Would you like me to export this outline?`;
      } else if (query.toLowerCase().includes("sam lee") || query.toLowerCase().includes("sales")) {
        botReply = `**Sam Lee (Data Assistant)** is active. Reviewing current sales pipeline: 14 active negotiations valued at $428,000 are pending executive review. Closing probability increased 24% after the automated prospect engagement sequence.`;
      } else {
        botReply = `Tara AI has processed your prompt with **${selectedSource}** grounding. I am ready to draft documentation, analyze sales cohorts, or orchestrate custom workflows. What is the next priority?`;
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
    }, 750);
  };

  const filteredHistory = historyItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${isDarkMode ? "bg-[#0A0A0C] text-zinc-100 dark" : "bg-[#F7F7F8] text-zinc-900"}`}>
      
      {/* Top Banner Navigation bar for the gallery frame */}
      <nav className={`h-10 px-4 border-b flex items-center justify-between text-xs transition-colors shrink-0 ${isDarkMode ? "bg-zinc-900 border-zinc-800 text-zinc-400" : "bg-white border-zinc-200 text-zinc-500"}`}>
        <div className="flex items-center gap-3">
          <Link 
            href="/" 
            className="flex items-center gap-1.5 font-medium hover:text-zinc-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Canvas Gallery</span>
          </Link>
          <span className="text-zinc-300 dark:text-zinc-700">/</span>
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">Tara AI Studio</span>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-600 border border-blue-200/60 dark:bg-blue-950 dark:text-blue-400 dark:border-blue-800">
            Figma 1:1 Pixel Exact
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            title="Toggle Sidebar (⌘B)"
          >
            {sidebarOpen ? (
              <>
                <PanelLeftClose className="w-3.5 h-3.5" />
                <span>Collapse Sidebar</span>
              </>
            ) : (
              <>
                <PanelLeftOpen className="w-3.5 h-3.5" />
                <span>Expand Sidebar</span>
              </>
            )}
            <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.2 text-[9px] font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">⌘B</kbd>
          </button>
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-zinc-600" />}
          </button>
        </div>
      </nav>

      {/* Main Workspace Frame */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* 1. NARROW LEFTMOST DOCK / RAIL (Always visible, exactly as in screenshot) */}
        <aside className={`w-[60px] shrink-0 border-r flex flex-col items-center justify-between py-4 select-none z-20 transition-colors ${
          isDarkMode ? "bg-[#101113] border-zinc-800/80" : "bg-white border-[#ECECED]"
        }`}>
          {/* Top Orb + Icon Stack */}
          <div className="flex flex-col items-center gap-5">
            
            {/* Top 3D Glowing Blue-Sky Orb Logo */}
            <button 
              onClick={handleStartNewChat}
              className="relative group focus:outline-none mb-0.5"
              title="Tara AI Home"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#2563EB] via-[#60A5FA] to-[#BAE6FD] shadow-[0_4px_14px_rgba(37,99,235,0.32)] flex items-center justify-center relative overflow-hidden transition-transform group-hover:scale-105">
                <div className="absolute top-1 left-1.5 w-3 h-1.5 bg-white/70 rounded-full blur-[0.8px]"></div>
                <div className="absolute inset-0 bg-radial from-white/25 via-transparent to-black/10"></div>
              </div>
            </button>

            {/* Rail Navigation Icons */}
            <div className="flex flex-col items-center gap-2.5">
              
              {/* 1. Chat (Clicking toggles the expanded sidebar!) */}
              <button 
                onClick={() => {
                  setActiveTab("chat");
                  setSidebarOpen(!sidebarOpen);
                }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all group relative ${
                  activeTab === "chat"
                    ? "bg-[#090A0B] text-white shadow-xs"
                    : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                }`}
                title={sidebarOpen ? "Close Chat Sidebar" : "Open Chat Sidebar"}
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </button>

              {/* 2. Headphones / Voice */}
              <button 
                onClick={() => setActiveTab("voice")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "voice"
                    ? "bg-[#090A0B] text-white"
                    : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                }`}
                title="Audio"
              >
                <Headphones className="w-4 h-4" />
              </button>

              {/* 3. Lightning / Zap */}
              <button 
                onClick={() => setActiveTab("zap")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "zap"
                    ? "bg-[#090A0B] text-white"
                    : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                }`}
                title="Automations"
              >
                <Zap className="w-4 h-4" />
              </button>

              {/* 4. Puzzle / Extensions */}
              <button 
                onClick={() => setActiveTab("puzzle")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "puzzle"
                    ? "bg-[#090A0B] text-white"
                    : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                }`}
                title="Integrations"
              >
                <Puzzle className="w-4 h-4" />
              </button>

              {/* 5. Code / Window */}
              <button 
                onClick={() => setActiveTab("code")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "code"
                    ? "bg-[#090A0B] text-white"
                    : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                }`}
                title="Developer Console"
              >
                <CodeXml className="w-4 h-4" />
              </button>

              {/* 6. Database / Double Layers */}
              <button 
                onClick={() => setActiveTab("layers")}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                  activeTab === "layers"
                    ? "bg-[#090A0B] text-white"
                    : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                }`}
                title="Knowledge Layers"
              >
                <div className="w-4 h-4 flex flex-col justify-center gap-0.5">
                  <div className="w-full h-1 border border-current rounded-xs"></div>
                  <div className="w-full h-1 border border-current rounded-xs"></div>
                </div>
              </button>

              {/* 7. Community / Shared with 'New' badge */}
              <div className="relative">
                <button 
                  onClick={() => setActiveTab("community")}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    activeTab === "community"
                      ? "bg-[#090A0B] text-white"
                      : "text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                  }`}
                  title="Collaborators"
                >
                  <User className="w-4 h-4" />
                </button>
                <span className="absolute -top-0.5 -right-2 px-1 py-0.2 bg-[#2563EB] text-white text-[8px] font-bold rounded-full tracking-tight uppercase pointer-events-none">
                  New
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Dock Controls */}
          <div className="flex flex-col items-center gap-3.5">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 p-1.5 transition-colors"
              title="Toggle Appearance"
            >
              <Sun className="w-4 h-4" />
            </button>

            {/* Profile Avatar 'S' with Green Online Dot */}
            <div className="relative cursor-pointer group" onClick={() => setIsConfigOpen(true)}>
              <div className="w-8 h-8 rounded-full bg-[#E5E7EB] dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 flex items-center justify-center text-xs font-bold border border-zinc-200 dark:border-zinc-700">
                S
              </div>
              <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 border border-white dark:border-zinc-900 rounded-full"></span>
            </div>
          </div>
        </aside>

        {/* 2. EXPANDABLE CHAT HISTORY SIDEBAR (Animated drawer with fluid slide) */}
        <div 
          className={`transition-all duration-300 ease-in-out shrink-0 overflow-hidden border-r ${
            sidebarOpen ? "w-[250px] opacity-100" : "w-0 opacity-0 border-r-0 pointer-events-none"
          } ${
            isDarkMode ? "bg-[#111214] border-zinc-800/80" : "bg-[#FDFDFD] border-[#EAEAEA]"
          }`}
        >
          <div className="w-[250px] h-full flex flex-col justify-between py-4 px-3 select-none">
            
            <div className="flex flex-col gap-3.5">
              {/* Header with Search and Close */}
              <div className="flex items-center justify-between px-1">
                <span className="text-sm font-bold text-zinc-900 dark:text-white tracking-tight">
                  Chat
                </span>
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setIsSearchOpen(true)}
                    className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 p-1 transition"
                    title="Search Conversations"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => setSidebarOpen(false)}
                    className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 p-1 transition"
                    title="Collapse Sidebar"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* + New Chat Button (Pill shaped, black with sparkles) */}
              <button 
                onClick={handleStartNewChat}
                className="w-full py-2 px-4 rounded-full bg-[#090A0B] hover:bg-black text-white text-xs font-medium flex items-center justify-center gap-1.5 shadow-2xs transition active:scale-[0.99]"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Chat</span>
                <Sparkles className="w-3 h-3 text-white fill-white ml-0.5" />
              </button>

              {/* Chat History List */}
              <div className="flex flex-col gap-3.5 overflow-y-auto max-h-[calc(100vh-210px)] pr-1 scrollbar-none text-xs">
                
                {/* Saved Section */}
                <div>
                  <div className="flex items-center gap-1.5 px-1 py-1 text-zinc-400 font-medium text-[11px]">
                    <Star className="w-3 h-3" />
                    <span>Saved</span>
                  </div>

                  <div className="mt-1 space-y-0.5">
                    {historyItems.filter(h => h.timeframe === "saved").map(item => (
                      <div 
                        key={item.id}
                        onClick={() => handleSelectHistory(item)}
                        className={`group flex items-center justify-between px-2 py-1.5 rounded-xl cursor-pointer transition-colors ${
                          activeChatId === item.id 
                            ? (isDarkMode ? "bg-zinc-800 text-white font-medium" : "bg-zinc-100 text-zinc-950 font-medium")
                            : (isDarkMode ? "text-zinc-400 hover:bg-zinc-850 hover:text-zinc-200" : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900")
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${item.color}`}>
                            {item.iconType === "chat" && "C"}
                            {item.iconType === "sun" && "☀️"}
                            {item.iconType === "analyst" && "D"}
                          </div>
                          <span className="truncate text-xs">{item.title}</span>
                        </div>
                        <span className="opacity-0 group-hover:opacity-100 text-zinc-400 p-0.5">
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
                    className="flex items-center justify-between px-1 py-1 text-zinc-400 font-medium text-[11px] cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
                  >
                    <span>Today</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${todayCollapsed ? "-rotate-90" : ""}`} />
                  </div>

                  {!todayCollapsed && (
                    <div className="mt-1 space-y-0.5">
                      {historyItems.filter(h => h.timeframe === "today").map(item => (
                        <div 
                          key={item.id}
                          onClick={() => handleSelectHistory(item)}
                          className={`group flex items-center justify-between px-2 py-1.5 rounded-xl cursor-pointer transition-colors ${
                            activeChatId === item.id 
                              ? (isDarkMode ? "bg-zinc-800 text-white font-medium" : "bg-zinc-100 text-zinc-950 font-medium")
                              : (isDarkMode ? "text-zinc-400 hover:bg-zinc-850 hover:text-zinc-200" : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900")
                          }`}
                        >
                          <span className="truncate pr-1 text-xs">{item.title}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-zinc-400 p-0.5 shrink-0">
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
                    className="flex items-center justify-between px-1 py-1 text-zinc-400 font-medium text-[11px] cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300"
                  >
                    <span>Yesterday</span>
                    <ChevronDown className={`w-3 h-3 transition-transform ${yesterdayCollapsed ? "-rotate-90" : ""}`} />
                  </div>

                  {!yesterdayCollapsed && (
                    <div className="mt-1 space-y-0.5">
                      {historyItems.filter(h => h.timeframe === "yesterday").map(item => (
                        <div 
                          key={item.id}
                          onClick={() => handleSelectHistory(item)}
                          className={`group flex items-center justify-between px-2 py-1.5 rounded-xl cursor-pointer transition-colors ${
                            activeChatId === item.id 
                              ? (isDarkMode ? "bg-zinc-800 text-white font-medium" : "bg-zinc-100 text-zinc-950 font-medium")
                              : (isDarkMode ? "text-zinc-400 hover:bg-zinc-850 hover:text-zinc-200" : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900")
                          }`}
                        >
                          <span className="truncate pr-1 text-xs">{item.title}</span>
                          <span className="opacity-0 group-hover:opacity-100 text-zinc-400 p-0.5 shrink-0">
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
                className={`w-full py-2 px-3 rounded-full border text-xs font-semibold text-center transition ${
                  isDarkMode 
                    ? "border-zinc-700/80 bg-zinc-800/60 hover:bg-zinc-800 text-zinc-200" 
                    : "border-[#E5E7EB] bg-white hover:bg-zinc-50 text-zinc-800 shadow-2xs"
                }`}
              >
                Upgrade to Pro
              </button>
            </div>

          </div>
        </div>

        {/* 3. MAIN WORKSPACE / CHAT VIEW (Wide canvas matching screenshot) */}
        <main className={`flex-1 flex flex-col justify-between overflow-y-auto relative transition-colors ${
          isDarkMode ? "bg-[#0A0A0C]" : "bg-[#FCFCFD]"
        }`}>
          
          {/* Header Bar */}
          <header className={`h-14 px-8 flex items-center justify-between shrink-0 sticky top-0 z-10 ${
            isDarkMode ? "bg-[#0A0A0C]/90" : "bg-[#FCFCFD]/90"
          } backdrop-blur-md`}>
            
            {/* Left Title & Plus Badge (Renamed to Tara AI) */}
            <div className="flex items-center gap-2">
              {!sidebarOpen && (
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="p-1.5 -ml-2 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition mr-1"
                  title="Expand Sidebar (⌘B)"
                >
                  <PanelLeftOpen className="w-4 h-4" />
                </button>
              )}
              <h1 className="text-sm font-bold text-zinc-900 dark:text-white tracking-tight">
                Tara AI
              </h1>
              <span className="px-1.5 py-0.2 rounded-md text-[10px] font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                Plus
              </span>
            </div>

            {/* Right Buttons: Configuration, Share, New Chat */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsConfigOpen(true)}
                className={`px-3 py-1.5 rounded-full border text-xs font-medium flex items-center gap-1.5 transition ${
                  isDarkMode 
                    ? "border-zinc-700 bg-zinc-800/40 text-zinc-300 hover:bg-zinc-800" 
                    : "border-[#E5E7EB] bg-white text-zinc-700 hover:bg-zinc-50 shadow-2xs"
                }`}
              >
                <span>Configuration</span>
                <SlidersHorizontal className="w-3 h-3 text-zinc-400" />
              </button>

              <button 
                onClick={() => setIsShareOpen(true)}
                className={`px-3 py-1.5 rounded-full border text-xs font-medium flex items-center gap-1.5 transition ${
                  isDarkMode 
                    ? "border-zinc-700 bg-zinc-800/40 text-zinc-300 hover:bg-zinc-800" 
                    : "border-[#E5E7EB] bg-white text-zinc-700 hover:bg-zinc-50 shadow-2xs"
                }`}
              >
                <span>Share</span>
                <Share2 className="w-3 h-3 text-zinc-400" />
              </button>

              <button 
                onClick={handleStartNewChat}
                className="px-3.5 py-1.5 rounded-full bg-[#090A0B] hover:bg-black text-white text-xs font-medium flex items-center gap-1.5 shadow-2xs transition hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>New Chat</span>
                <Sparkles className="w-3 h-3 text-white fill-white" />
              </button>
            </div>
          </header>

          {/* Canvas Body (Empty Welcome State or Active Chat Stream) */}
          <div className="flex-1 flex flex-col px-4 sm:px-8 max-w-4xl mx-auto w-full justify-between pb-6">
            
            {chatMessages.length === 0 ? (
              /* EMPTY WELCOME SCREEN (Matches Screenshot Exactly) */
              <div className="flex-1 flex flex-col items-center justify-center pt-2 pb-4">
                
                {/* Floating 3D Glowing Blue-Sky Orb */}
                <div className="mb-4 relative">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#2563EB] via-[#60A5FA] to-[#BAE6FD] shadow-[0_10px_28px_rgba(37,99,235,0.35)] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute top-1.5 left-2 w-4 h-2 bg-white/70 rounded-full blur-[1px]"></div>
                    <div className="absolute inset-0 bg-radial from-white/30 via-transparent to-black/10"></div>
                  </div>
                </div>

                {/* Greeting */}
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-1.5 mb-1.5">
                  Hi, there <span className="text-2xl">👋</span>
                </h2>
                <p className="text-xs text-zinc-400 text-center max-w-sm mb-7">
                  Tell us what you need, and we&apos;ll handle the rest.
                </p>

                {/* 3 Interactive Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 w-full mb-5">
                  
                  {/* CARD 1: Sam Lee (Data Assistant) - Dark Card */}
                  <div 
                    onClick={() => handleSendMessage("Activate Sam Lee Data Assistant")}
                    className="bg-[#1A1A1E] text-white p-4 rounded-2xl flex flex-col justify-between cursor-pointer border border-[#2A2A30] hover:border-zinc-700 transition-all hover:-translate-y-0.5 shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                            S
                          </div>
                          <span className="text-xs font-semibold text-zinc-100">
                            Sam Lee
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#1E70EB] text-white">
                          Data Assistant
                        </span>
                      </div>

                      <p className="text-[11px] text-zinc-300 leading-relaxed">
                        Designed to help manage sales processes and maximize customer engagement.
                      </p>
                    </div>
                  </div>

                  {/* CARD 2: Tasks List Card */}
                  <div className={`p-4 rounded-2xl border flex flex-col justify-between transition-all hover:-translate-y-0.5 ${
                    isDarkMode ? "bg-[#141416] border-zinc-800 text-zinc-200" : "bg-white border-[#EAEAEA] text-zinc-800 shadow-2xs"
                  }`}>
                    <div className="space-y-2">
                      <div 
                        onClick={() => handleSendMessage("Answer RFP documentation")}
                        className="flex items-center gap-2 text-[11px] font-medium cursor-pointer hover:text-blue-600 transition"
                      >
                        <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span className="truncate">Answer RFP documentation</span>
                      </div>

                      <div 
                        onClick={() => handleSendMessage("Conduct a competitor analysis")}
                        className="flex items-center gap-2 text-[11px] font-medium cursor-pointer hover:text-blue-600 transition"
                      >
                        <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span className="truncate">Conduct a competitor analysis</span>
                      </div>

                      <div 
                        onClick={() => handleSendMessage("Provide feedback on communication")}
                        className="flex items-center gap-2 text-[11px] font-medium cursor-pointer hover:text-blue-600 transition"
                      >
                        <FileText className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span className="truncate">Provide feedback on communication</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-400">
                      <span>Tasks</span>
                      <button 
                        onClick={() => handleSendMessage("View all available tasks")}
                        className="text-[#1E70EB] font-medium hover:underline"
                      >
                        View All
                      </button>
                    </div>
                  </div>

                  {/* CARD 3: Suggested Prompt Card */}
                  <div 
                    onClick={() => handleSendMessage("What are the key benefits of Product 1 that I should highlight to potential clients?")}
                    className={`p-4 rounded-2xl border flex flex-col justify-between cursor-pointer group transition-all hover:-translate-y-0.5 ${
                      isDarkMode ? "bg-[#141416] border-zinc-800 text-zinc-200" : "bg-white border-[#EAEAEA] text-zinc-800 shadow-2xs"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-end mb-1">
                        <MoreHorizontal className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                      <p className="text-[11px] font-medium leading-relaxed group-hover:text-blue-600 transition-colors">
                        What are the key benefits of <strong className="font-semibold text-zinc-900 dark:text-white">Product 1</strong> that I should highlight to potential clients?
                      </p>
                    </div>

                    <div className="mt-4">
                      <span className="text-[10px] text-zinc-400">
                        Suggested prompt
                      </span>
                    </div>
                  </div>

                </div>

                {/* Quick Action Pills Row */}
                <div className="flex flex-wrap items-center justify-center gap-2 w-full mb-3">
                  
                  {/* Connect Calendar */}
                  <button 
                    onClick={() => handleSendMessage("Connect Calendar")}
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-medium flex items-center gap-2 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
                      isDarkMode ? "bg-[#141416] border-zinc-800 text-zinc-300" : "bg-white border-[#EAEAEA] text-zinc-700 shadow-2xs"
                    }`}
                  >
                    <div className="w-4 h-4 rounded-sm bg-rose-50 dark:bg-rose-950 flex items-center justify-center text-rose-500">
                      <FileText className="w-2.5 h-2.5" />
                    </div>
                    <span>Connect Calendar</span>
                  </button>

                  {/* Demo Task */}
                  <button 
                    onClick={() => handleSendMessage("Run Demo Task")}
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-medium flex items-center gap-2 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
                      isDarkMode ? "bg-[#141416] border-zinc-800 text-zinc-300" : "bg-white border-[#EAEAEA] text-zinc-700 shadow-2xs"
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-500">
                      <div className="w-2 h-0.5 bg-blue-500 rounded-full"></div>
                    </div>
                    <span>Demo Task</span>
                  </button>

                  {/* Browse Integrations */}
                  <button 
                    onClick={() => handleSendMessage("Browse Integrations")}
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-medium flex items-center gap-2 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
                      isDarkMode ? "bg-[#141416] border-zinc-800 text-zinc-300" : "bg-white border-[#EAEAEA] text-zinc-700 shadow-2xs"
                    }`}
                  >
                    <div className="w-4 h-4 rounded-sm bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-500">
                      <div className="w-2.5 h-2 border border-current rounded-xs"></div>
                    </div>
                    <span>Browse Integrations</span>
                  </button>

                  {/* Shared in Notes */}
                  <button 
                    onClick={() => handleSendMessage("Shared in Notes")}
                    className={`px-3.5 py-1.5 rounded-full border text-xs font-medium flex items-center gap-2 transition hover:bg-zinc-50 dark:hover:bg-zinc-800 ${
                      isDarkMode ? "bg-[#141416] border-zinc-800 text-zinc-300" : "bg-white border-[#EAEAEA] text-zinc-700 shadow-2xs"
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full bg-teal-50 dark:bg-teal-950 flex items-center justify-center text-teal-600">
                      <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 stroke-current fill-none stroke-[1.8] stroke-linecap-round">
                        <path d="M4 11C2.5 11 2 9 4 6C5.5 3.5 7.5 3 8 6C8.5 9 10 11 12 10C13.5 9 13.5 7 11.5 6C10 5.5 9 7 9.5 9" />
                      </svg>
                    </div>
                    <span>Shared in Notes</span>
                  </button>

                </div>

              </div>
            ) : (
              /* ACTIVE CHAT THREAD */
              <div className="flex-1 flex flex-col space-y-5 py-4 overflow-y-auto">
                {chatMessages.map((msg) => (
                  <div 
                    key={msg.id}
                    className={`flex gap-3 max-w-2xl ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                  >
                    <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-bold ${
                      msg.role === "user" 
                        ? "bg-zinc-900 text-white" 
                        : "bg-gradient-to-tr from-blue-600 to-sky-400 text-white"
                    }`}>
                      {msg.role === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-semibold text-zinc-500">
                          {msg.role === "user" ? "You" : (msg.agentName || "Tara AI")}
                        </span>
                        <span className="text-[9px] text-zinc-400">{msg.timestamp}</span>
                      </div>

                      <div className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.role === "user"
                          ? "bg-blue-600 text-white rounded-tr-xs"
                          : (isDarkMode ? "bg-zinc-900 text-zinc-200 border border-zinc-800 rounded-tl-xs" : "bg-white border border-[#EAEAEA] text-zinc-800 rounded-tl-xs shadow-2xs")
                      }`}>
                        <div className="whitespace-pre-wrap">{msg.content}</div>
                      </div>

                      {msg.role === "assistant" && (
                        <div className="flex items-center gap-2 mt-1 text-zinc-400 text-[10px] pl-1">
                          <button 
                            onClick={() => navigator.clipboard.writeText(msg.content)}
                            className="hover:text-zinc-700 dark:hover:text-zinc-200 flex items-center gap-1"
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
                  <div className="flex items-center gap-2.5 mr-auto text-xs text-zinc-400">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-white flex items-center justify-center animate-pulse">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                    <span>Tara AI is generating response...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}

            {/* FLOATING PROMPT INPUT BAR */}
            <div className="w-full max-w-3xl mx-auto mt-auto">
              
              {/* Attachment badges */}
              {attachedFiles.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {attachedFiles.map((file, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[11px] text-zinc-700 dark:text-zinc-300">
                      <FileText className="w-3 h-3 text-blue-500" />
                      <span className="truncate max-w-[140px]">{file}</span>
                      <button 
                        onClick={() => setAttachedFiles(prev => prev.filter((_, i) => i !== idx))}
                        className="text-zinc-400 hover:text-rose-500"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Capsule Container */}
              <div className={`rounded-[24px] border px-4 py-3 shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all ${
                isDarkMode ? "bg-[#141416] border-zinc-800" : "bg-white border-[#EAEAEA]"
              }`}>
                
                {/* Input Text Row with Sparkle/Wand */}
                <div className="flex items-center gap-2 mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
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
                    className="w-full bg-transparent text-xs font-normal text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 outline-none"
                  />
                </div>

                {/* Bottom Controls Row: Select Source (left) | Attach, Voice, Send (right) */}
                <div className="flex items-center justify-between">
                  
                  {/* Select Source Dropdown Button */}
                  <div className="relative">
                    <button 
                      onClick={() => setIsSourceMenuOpen(!isSourceMenuOpen)}
                      className={`px-3 py-1.5 rounded-full border text-[11px] font-normal flex items-center gap-1.5 transition ${
                        isDarkMode 
                          ? "border-zinc-700 bg-zinc-800/40 text-zinc-300 hover:bg-zinc-800" 
                          : "border-[#E5E7EB] bg-white text-zinc-700 hover:bg-zinc-50"
                      }`}
                    >
                      <span>{selectedSource}</span>
                      <ChevronDown className="w-3 h-3 text-zinc-400" />
                    </button>

                    {isSourceMenuOpen && (
                      <div className={`absolute bottom-full left-0 mb-1.5 w-44 rounded-xl border shadow-lg py-1 z-30 text-xs ${
                        isDarkMode ? "bg-zinc-900 border-zinc-800 text-zinc-200" : "bg-white border-zinc-200 text-zinc-800"
                      }`}>
                        {["Select Source", "Web Search", "Internal Docs", "Sales CRM", "Uploaded Files"].map((src) => (
                          <button
                            key={src}
                            onClick={() => {
                              setSelectedSource(src);
                              setIsSourceMenuOpen(false);
                            }}
                            className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
                              selectedSource === src ? "font-semibold text-blue-600" : ""
                            }`}
                          >
                            <span>{src}</span>
                            {selectedSource === src && <Check className="w-3 h-3" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Actions: Attach, Voice, Send */}
                  <div className="flex items-center gap-1.5">
                    
                    {/* Attach */}
                    <button 
                      onClick={() => {
                        const sampleFiles = ["Product_Spec.pdf", "Sales_Deck.key", "Data_Export.csv"];
                        const nextFile = sampleFiles[Math.floor(Math.random() * sampleFiles.length)];
                        if (!attachedFiles.includes(nextFile)) {
                          setAttachedFiles(prev => [...prev, nextFile]);
                        }
                      }}
                      className={`px-3 py-1.5 rounded-full border text-[11px] font-normal flex items-center gap-1.5 transition ${
                        isDarkMode 
                          ? "border-zinc-700 bg-zinc-800/40 text-zinc-300 hover:bg-zinc-800" 
                          : "border-[#E5E7EB] bg-white text-zinc-700 hover:bg-zinc-50"
                      }`}
                    >
                      <Paperclip className="w-3 h-3 text-zinc-400" />
                      <span>Attach</span>
                    </button>

                    {/* Voice */}
                    <button 
                      onClick={() => setIsVoiceActive(!isVoiceActive)}
                      className={`px-3 py-1.5 rounded-full border text-[11px] font-normal flex items-center gap-1.5 transition ${
                        isVoiceActive 
                          ? "bg-rose-50 text-rose-600 border-rose-300 dark:bg-rose-950 dark:border-rose-800" 
                          : (isDarkMode 
                              ? "border-zinc-700 bg-zinc-800/40 text-zinc-300 hover:bg-zinc-800" 
                              : "border-[#E5E7EB] bg-white text-zinc-700 hover:bg-zinc-50")
                      }`}
                    >
                      <Mic className={`w-3 h-3 ${isVoiceActive ? "text-rose-600 animate-pulse" : "text-zinc-400"}`} />
                      <span>{isVoiceActive ? "Listening" : "Voice"}</span>
                    </button>

                    {/* Send Button */}
                    <button 
                      onClick={() => handleSendMessage()}
                      disabled={!inputText.trim() && attachedFiles.length === 0}
                      className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium flex items-center gap-1 transition ${
                        inputText.trim() || attachedFiles.length > 0
                          ? "bg-[#090A0B] hover:bg-black text-white cursor-pointer shadow-xs"
                          : "bg-zinc-200 dark:bg-zinc-800 text-zinc-400 cursor-not-allowed"
                      }`}
                    >
                      <ArrowUp className="w-3 h-3" />
                      <span>Send</span>
                    </button>

                  </div>

                </div>

              </div>

              {/* Disclaimer */}
              <p className="text-[10px] text-zinc-400 text-center mt-2 select-none">
                Centra may display inaccurate info, so please double check the response.{" "}
                <span className="underline cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-300">
                  Your Privacy & Tara AI
                </span>
              </p>

            </div>

          </div>

        </main>

      </div>

      {/* CONFIGURATION MODAL */}
      {isConfigOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-2xl p-5 shadow-xl border ${
            isDarkMode ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold">Tara AI Configuration</h3>
              <button onClick={() => setIsConfigOpen(false)} className="text-zinc-400 hover:text-zinc-700">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-medium block mb-1">Model Selection</label>
                <select className={`w-full p-2 rounded-lg border ${isDarkMode ? "bg-zinc-800 border-zinc-700" : "bg-zinc-50 border-zinc-200"}`}>
                  <option>Tara AI Neural Engine 4.5 (Default)</option>
                  <option>Sam Lee Autonomous Sales Agent</option>
                </select>
              </div>

              <div>
                <label className="font-medium block mb-1">Temperature (0.7)</label>
                <input type="range" min="0" max="1" step="0.1" defaultValue="0.7" className="w-full accent-blue-600" />
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button 
                onClick={() => setIsConfigOpen(false)}
                className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-medium hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SHARE MODAL */}
      {isShareOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-sm rounded-2xl p-5 shadow-xl border ${
            isDarkMode ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold">Share Session</h3>
              <button onClick={() => setIsShareOpen(false)} className="text-zinc-400 hover:text-zinc-700">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-zinc-500 mb-3">
              Generate a shareable link to this conversation canvas.
            </p>

            <div className={`flex items-center justify-between p-2 rounded-lg border mb-3 text-xs ${
              isDarkMode ? "bg-zinc-800 border-zinc-700" : "bg-zinc-50 border-zinc-200"
            }`}>
              <span className="truncate pr-2 text-zinc-500">https://tara.ai/c/82910</span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText("https://tara.ai/c/82910");
                  alert("Link copied!");
                }}
                className="px-2.5 py-1 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
              >
                Copy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UPGRADE MODAL */}
      {isUpgradeOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-2xl p-5 shadow-xl border ${
            isDarkMode ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold">Tara AI Pro</h3>
              <button onClick={() => setIsUpgradeOpen(false)} className="text-zinc-400 hover:text-zinc-700">
                <X className="w-4 h-4" />
              </button>
            </div>

            <ul className="space-y-2 text-xs mb-4 text-zinc-600 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Unlimited Sam Lee & Specialized Sales Agents</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Priority inference speed under 50ms</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Live bidirectional Calendar & CRM sync</span>
              </li>
            </ul>

            <div className="flex items-baseline justify-between p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-4">
              <div>
                <span className="text-xl font-bold">$20</span>
                <span className="text-xs text-zinc-500"> / month</span>
              </div>
              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-full">
                Annual discount 20%
              </span>
            </div>

            <button 
              onClick={() => setIsUpgradeOpen(false)}
              className="w-full py-2.5 rounded-full bg-blue-600 text-white font-semibold text-xs hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {/* SEARCH OVERLAY */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-20 z-50 p-4">
          <div className={`w-full max-w-md rounded-2xl p-4 shadow-xl border ${
            isDarkMode ? "bg-zinc-900 border-zinc-800 text-white" : "bg-white border-zinc-200 text-zinc-900"
          }`}>
            <div className="flex items-center gap-2 border-b pb-2 mb-2 border-zinc-200 dark:border-zinc-800">
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              <input 
                type="text" 
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search chats..."
                className="w-full bg-transparent text-xs outline-none"
              />
              <button onClick={() => setIsSearchOpen(false)} className="text-zinc-400 hover:text-zinc-600">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="max-h-52 overflow-y-auto space-y-1 text-xs">
              {filteredHistory.length === 0 ? (
                <p className="text-zinc-400 text-center py-3 text-[11px]">No chats found</p>
              ) : (
                filteredHistory.map(item => (
                  <div 
                    key={item.id}
                    onClick={() => {
                      handleSelectHistory(item);
                      setIsSearchOpen(false);
                    }}
                    className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer flex items-center justify-between"
                  >
                    <span className="truncate pr-2">{item.title}</span>
                    <span className="text-[10px] text-zinc-400 capitalize">{item.timeframe}</span>
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
