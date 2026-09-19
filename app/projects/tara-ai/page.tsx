"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  Headphones,
  Workflow,
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
  Paperclip,
  Mic,
  ArrowUp,
  MoreHorizontal,
  FileText,
  Check,
  User,
  Copy,
  X,
  Calendar,
  CircleDot,
  LayoutGrid,
  BarChart3,
  Layers,
  Sparkles,
  Pencil,
  Pin,
  Archive,
  Trash2,
  Image as ImageIcon
} from "lucide-react";

/* =========================================================================
   1. DATA CONTRACTS & INTERFACES (UI/UX PRO MAX STANDARD)
   ========================================================================= */

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  agentName?: string;
}

export interface ChatHistoryItem {
  id: string;
  title: string;
  timeframe: "saved" | "today" | "yesterday";
  iconType?: "chat" | "sun" | "analyst";
  color?: string;
  messages: ChatMessage[];
}

/* =========================================================================
   2. BRAND ASSETS: TARA AI MATHEMATICAL STELLAR KNOT LOGO
   ========================================================================= */

function TaraLogo({ 
  className = "w-6 h-6", 
  size 
}: { 
  className?: string; 
  size?: number 
}) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      {/* North Petal Loop */}
      <path
        d="M18 3C20.8 3 23 5.4 23 9.2C23 14.5 18 18 18 18C18 18 13 14.5 13 9.2C13 5.4 15.2 3 18 3Z"
        className="fill-neutral-900 dark:fill-white transition-colors"
      />
      {/* East Petal Loop */}
      <path
        d="M33 18C33 20.8 30.6 23 26.8 23C21.5 23 18 18 18 18C18 18 21.5 13 26.8 13C30.6 13 33 15.2 33 18Z"
        className="fill-neutral-600 dark:fill-neutral-400 transition-colors"
      />
      {/* South Petal Loop */}
      <path
        d="M18 33C15.2 33 13 30.6 13 26.8C13 21.5 18 18 18 18C18 18 23 21.5 23 26.8C23 30.6 20.8 33 18 33Z"
        className="fill-neutral-900 dark:fill-white transition-colors"
      />
      {/* West Petal Loop */}
      <path
        d="M3 18C3 15.2 5.4 13 9.2 13C14.5 13 18 18 18 18C18 18 14.5 23 9.2 23C5.4 23 3 20.8 3 18Z"
        className="fill-neutral-600 dark:fill-neutral-400 transition-colors"
      />
      {/* Central Diamond Aperture */}
      <path
        d="M18 14.5L21.5 18L18 21.5L14.5 18L18 14.5Z"
        className="fill-[#F7F7F8] dark:fill-[#121214] transition-colors"
      />
      {/* Central Precision Pinpoint */}
      <circle 
        cx="18" 
        cy="18" 
        r="1.5" 
        className="fill-neutral-900 dark:fill-white transition-colors" 
      />
    </svg>
  );
}

/* =========================================================================
   3. ATOMIC BUTTON COMPONENT
   ========================================================================= */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "dark" | "blue" | "secondary" | "icon";
  className?: string;
}

function AppButton({ 
  children, 
  variant = "dark", 
  className = "", 
  ...props 
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center select-none font-semibold transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.97]";

  const variants = {
    // "Create New Invoice" capsule style: dark gradient, subtle rim, soft shadow (NO lightning icon)
    dark: "bg-gradient-to-b from-[#2A2A2E] to-[#141416] hover:from-[#343439] hover:to-[#1B1B1E] text-white border border-[#3A3A40] rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_14px_rgba(0,0,0,0.18)] px-5 py-2.5 text-sm",
    
    // Vibrant blue capsule button variant
    blue: "bg-gradient-to-b from-[#1E75FF] to-[#0A5BE0] hover:from-[#2980FF] hover:to-[#1264E8] text-white border border-[#3885FF]/50 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_4px_14px_rgba(10,91,224,0.25)] px-5 py-2.5 text-sm",
    
    // Clean outlined capsule button (light/dark mode)
    secondary: "bg-white dark:bg-[#1E1E22] hover:bg-neutral-50 dark:hover:bg-[#27272C] text-neutral-800 dark:text-neutral-100 border border-neutral-200 dark:border-neutral-700/80 rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.04)] px-4.5 py-2 text-xs font-medium",
    
    // Circular icon-only button (strictly matching user's attached search & close buttons)
    icon: "w-9 h-9 rounded-full bg-white dark:bg-[#1E1E22] hover:bg-neutral-50 dark:hover:bg-[#27272C] text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700/80 shadow-[0_2px_8px_rgba(0,0,0,0.06)] p-0 flex items-center justify-center shrink-0"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}

/* =========================================================================
   4. MOCK DATA INITIALIZATION
   ========================================================================= */

const INITIAL_HISTORY: ChatHistoryItem[] = [
  {
    id: "saved-1",
    title: "ChatAI Core Architecture",
    timeframe: "saved",
    iconType: "chat",
    color: "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200",
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
    color: "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200",
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
    color: "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200",
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
];

/* =========================================================================
   5. MAIN COMPONENT: TARA AI STUDIO
   ========================================================================= */

export default function TaraAIPage() {
  // Navigation & Theme state (LIGHT MODE BY DEFAULT per user specification)
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("chat");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Input & Generation state
  const [inputText, setInputText] = useState<string>("");
  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(false);
  const [isSourceMenuOpen, setIsSourceMenuOpen] = useState<boolean>(false);
  const [selectedSource, setSelectedSource] = useState<string>("Select Source");
  const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Active Chat Session
  const [activeChatId, setActiveChatId] = useState<string | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  // Context Menu & Inline Renaming for Chat items
  const [activeMenuChatId, setActiveMenuChatId] = useState<string | null>(null);
  const [renamingChatId, setRenamingChatId] = useState<string | null>(null);
  const [renameTitle, setRenameTitle] = useState<string>("");

  // Modals & Overlays
  const [isConfigOpen, setIsConfigOpen] = useState<boolean>(false);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // History lists & Collapses
  const [historyItems, setHistoryItems] = useState<ChatHistoryItem[]>(INITIAL_HISTORY);
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

  // Close context menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = () => {
      setActiveMenuChatId(null);
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  // Keyboard shortcut: Cmd+B / Ctrl+B to toggle sidebar, Escape to dismiss menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setSidebarOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setActiveMenuChatId(null);
        setRenamingChatId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

  // Context Menu Actions
  const handleShareChat = (item: ChatHistoryItem) => {
    navigator.clipboard.writeText(`https://tara.ai/chat/${item.id}`);
    setActiveMenuChatId(null);
    setIsShareOpen(true);
  };

  const handleStartRename = (item: ChatHistoryItem) => {
    setRenamingChatId(item.id);
    setRenameTitle(item.title);
    setActiveMenuChatId(null);
  };

  const handleSaveRename = (id: string) => {
    if (renameTitle.trim()) {
      setHistoryItems(prev => prev.map(h => h.id === id ? { ...h, title: renameTitle.trim() } : h));
    }
    setRenamingChatId(null);
  };

  const handleTogglePin = (item: ChatHistoryItem) => {
    setHistoryItems(prev => prev.map(h => {
      if (h.id === item.id) {
        const isCurrentlySaved = h.timeframe === "saved";
        return {
          ...h,
          timeframe: isCurrentlySaved ? "today" : "saved",
          iconType: isCurrentlySaved ? undefined : "chat",
          color: isCurrentlySaved ? undefined : "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200"
        };
      }
      return h;
    }));
    setActiveMenuChatId(null);
  };

  const handleArchiveChat = (id: string) => {
    setHistoryItems(prev => prev.filter(h => h.id !== id));
    if (activeChatId === id) {
      handleStartNewChat();
    }
    setActiveMenuChatId(null);
  };

  const handleDeleteChat = (id: string) => {
    setHistoryItems(prev => prev.filter(h => h.id !== id));
    if (activeChatId === id) {
      handleStartNewChat();
    }
    setActiveMenuChatId(null);
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
    }, 650);
  };

  const filteredHistory = historyItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper to render chat history items with attached 3-dots popup
  const renderHistoryItem = (item: ChatHistoryItem, isBottomSection = false) => {
    const isMenuOpen = activeMenuChatId === item.id;
    const isRenaming = renamingChatId === item.id;
    const isSelected = activeChatId === item.id;

    return (
      <div 
        key={item.id}
        onClick={() => {
          if (!isRenaming) {
            handleSelectHistory(item);
          }
        }}
        className={`group relative flex items-center justify-between px-3 py-2 rounded-full cursor-pointer transition-colors border ${
          isSelected 
            ? "bg-white dark:bg-[#18181B] border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium shadow-[0_2px_6px_rgba(0,0,0,0.03)]" 
            : "border-transparent text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60"
        }`}
      >
        <div className="flex items-center gap-2.5 truncate flex-1 min-w-0 pr-1">
          {item.timeframe === "saved" && (
            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${item.color || "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-200"}`}>
              {item.iconType === "chat" && <MessageSquare className="w-2.5 h-2.5" />}
              {item.iconType === "sun" && <ImageIcon className="w-2.5 h-2.5" />}
              {item.iconType === "analyst" && <BarChart3 className="w-2.5 h-2.5" />}
              {!item.iconType && <Pin className="w-2.5 h-2.5 text-neutral-600 dark:text-neutral-300" />}
            </div>
          )}

          {isRenaming ? (
            <input 
              type="text" 
              autoFocus
              value={renameTitle}
              onChange={(e) => setRenameTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSaveRename(item.id);
                else if (e.key === "Escape") setRenamingChatId(null);
              }}
              onBlur={() => handleSaveRename(item.id)}
              onClick={(e) => e.stopPropagation()}
              className="w-full bg-transparent border-b border-[#0066FF] outline-none text-xs font-medium text-neutral-900 dark:text-white px-0.5 py-0"
            />
          ) : (
            <span className="truncate text-xs">{item.title}</span>
          )}
        </div>

        {/* Three Dots Button */}
        <div className="relative shrink-0">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setActiveMenuChatId(isMenuOpen ? null : item.id);
            }}
            className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
              isMenuOpen 
                ? "opacity-100 bg-neutral-200/80 dark:bg-neutral-700 text-neutral-800 dark:text-white" 
                : "opacity-0 group-hover:opacity-100 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 hover:bg-neutral-200/60 dark:hover:bg-neutral-700/60"
            }`}
            title="Chat options"
          >
            <MoreHorizontal className="w-3.5 h-3.5" />
          </button>

          {/* Context Pop-up Menu matching user's attached screenshot */}
          {isMenuOpen && (
            <div 
              onClick={(e) => e.stopPropagation()}
              className={`absolute right-0 ${isBottomSection ? "bottom-full mb-2" : "top-full mt-2"} w-44 rounded-[18px] p-1.5 z-50 border shadow-[0_12px_32px_rgba(0,0,0,0.14),0_2px_8px_rgba(0,0,0,0.06)] animate-in fade-in zoom-in-95 duration-100 select-none ${
                isDarkMode 
                  ? "bg-[#222226] border-neutral-700 text-neutral-100 shadow-[0_12px_32px_rgba(0,0,0,0.5)]" 
                  : "bg-white border-neutral-200 text-neutral-800"
              }`}
            >
              {/* 1. Share */}
              <button
                onClick={() => handleShareChat(item)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-[12px] text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700/60 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <Share2 className="w-4 h-4 text-neutral-500 dark:text-neutral-400 stroke-[1.75]" />
                <span>Share</span>
              </button>

              {/* 2. Rename */}
              <button
                onClick={() => handleStartRename(item)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-[12px] text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700/60 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <Pencil className="w-4 h-4 text-neutral-500 dark:text-neutral-400 stroke-[1.75]" />
                <span>Rename</span>
              </button>

              {/* Divider line matching reference */}
              <div className="my-1 border-t border-neutral-200/80 dark:border-neutral-700/60" />

              {/* 3. Pin chat / Unpin chat */}
              <button
                onClick={() => handleTogglePin(item)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-[12px] text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700/60 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <Pin className="w-4 h-4 text-neutral-500 dark:text-neutral-400 stroke-[1.75]" />
                <span>{item.timeframe === "saved" ? "Unpin chat" : "Pin chat"}</span>
              </button>

              {/* 4. Archive */}
              <button
                onClick={() => handleArchiveChat(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-[12px] text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-700/60 text-neutral-800 dark:text-neutral-200 transition-colors"
              >
                <Archive className="w-4 h-4 text-neutral-500 dark:text-neutral-400 stroke-[1.75]" />
                <span>Archive</span>
              </button>

              {/* 5. Delete (Red / Destructive) */}
              <button
                onClick={() => handleDeleteChat(item.id)}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-[12px] text-xs font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
              >
                <Trash2 className="w-4 h-4 text-rose-500 stroke-[1.75]" />
                <span>Delete</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    // Default Light Mode (#F7F7F8), toggleable to obsidian dark tone (#09090B)
    <div className={`h-screen w-screen flex overflow-hidden font-sans select-none transition-colors duration-200 ${
      isDarkMode ? "bg-[#09090B] text-neutral-100" : "bg-[#F7F7F8] text-neutral-900"
    }`}>
      
      {/* -------------------------------------------------------------
          1. NARROW LEFT DOCK RAIL
          ------------------------------------------------------------- */}
      <aside className={`w-[64px] shrink-0 border-r flex flex-col items-center justify-between py-4 z-20 transition-colors ${
        isDarkMode ? "bg-[#0C0C0E] border-neutral-800" : "bg-white border-neutral-200"
      }`}>
        {/* Top Brand Mark + Navigation Stack */}
        <div className="flex flex-col items-center gap-5">
          
          {/* Logo Button (Circular capsule style) */}
          <button 
            onClick={handleStartNewChat}
            className="w-10 h-10 rounded-full bg-white dark:bg-[#1E1E22] border border-neutral-200 dark:border-neutral-800 flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-[0_2px_6px_rgba(0,0,0,0.04)]"
            title="Tara AI Home"
          >
            <TaraLogo className="w-5 h-5" />
          </button>

          {/* Navigation Stack */}
          <div className="flex flex-col items-center gap-2.5">
            
            {/* 1. Chat */}
            <button 
              onClick={() => {
                setActiveTab("chat");
                setSidebarOpen(!sidebarOpen);
              }}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                activeTab === "chat"
                  ? "bg-[#1C1C1F] text-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] dark:bg-white dark:text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
              title={sidebarOpen ? "Close Sidebar (⌘B)" : "Open Sidebar (⌘B)"}
            >
              <MessageSquare className="w-4 h-4" />
            </button>

            {/* 2. Audio */}
            <button 
              onClick={() => setActiveTab("voice")}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                activeTab === "voice"
                  ? "bg-[#1C1C1F] text-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] dark:bg-white dark:text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
              title="Audio Interface"
            >
              <Headphones className="w-4 h-4" />
            </button>

            {/* 3. Workflows (Clean minimal workflow icon) */}
            <button 
              onClick={() => setActiveTab("workflows")}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                activeTab === "workflows"
                  ? "bg-[#1C1C1F] text-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] dark:bg-white dark:text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
              title="Automated Workflows"
            >
              <Workflow className="w-4 h-4" />
            </button>

            {/* 4. Extensions */}
            <button 
              onClick={() => setActiveTab("puzzle")}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                activeTab === "puzzle"
                  ? "bg-[#1C1C1F] text-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] dark:bg-white dark:text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
              title="Integrations"
            >
              <Puzzle className="w-4 h-4" />
            </button>

            {/* 5. Developer Console */}
            <button 
              onClick={() => setActiveTab("code")}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                activeTab === "code"
                  ? "bg-[#1C1C1F] text-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] dark:bg-white dark:text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
              title="Code Console"
            >
              <CodeXml className="w-4 h-4" />
            </button>

            {/* 6. Layers */}
            <button 
              onClick={() => setActiveTab("layers")}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                activeTab === "layers"
                  ? "bg-[#1C1C1F] text-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] dark:bg-white dark:text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
              }`}
              title="Data Architecture"
            >
              <Layers className="w-4 h-4" />
            </button>

            {/* 7. Collaborators */}
            <div className="relative">
              <button 
                onClick={() => setActiveTab("community")}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  activeTab === "community"
                    ? "bg-[#1C1C1F] text-white shadow-[0_3px_10px_rgba(0,0,0,0.2)] dark:bg-white dark:text-neutral-900"
                    : "text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                }`}
                title="Team"
              >
                <User className="w-4 h-4" />
              </button>
              <span className="absolute -top-0.5 -right-1 px-1.5 py-0.2 bg-[#0066FF] text-white text-[8px] font-bold rounded-full tracking-tight">
                New
              </span>
            </div>

          </div>
        </div>

        {/* Bottom Rail Controls */}
        <div className="flex flex-col items-center gap-3">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="w-10 h-10 rounded-full text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 flex items-center justify-center transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
          </button>

          {/* Profile Avatar 'S' */}
          <div className="relative cursor-pointer group" onClick={() => setIsConfigOpen(true)}>
            <div className="w-9 h-9 rounded-full bg-white dark:bg-[#1E1E22] text-neutral-800 dark:text-neutral-200 flex items-center justify-center text-xs font-semibold border border-neutral-200 dark:border-neutral-800 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
              S
            </div>
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 border-2 border-white dark:border-[#0C0C0E] rounded-full"></span>
          </div>
        </div>
      </aside>

      {/* -------------------------------------------------------------
          2. EXPANDABLE CHAT HISTORY SIDEBAR
          ------------------------------------------------------------- */}
      <div 
        className={`transition-all duration-300 ease-in-out shrink-0 overflow-hidden border-r ${
          sidebarOpen ? "w-[270px] opacity-100" : "w-0 opacity-0 border-r-0 pointer-events-none"
        } ${
          isDarkMode ? "bg-[#0E0E11] border-neutral-800" : "bg-[#F7F7F8] border-neutral-200"
        }`}
      >
        <div className="w-[270px] h-full flex flex-col justify-between py-5 px-4 select-none">
          
          <div className="flex flex-col gap-4">
            {/* Header with Search and Close (Circular icon-only buttons matching user reference) */}
            <div className="flex items-center justify-between px-1">
              <span className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                Conversations
              </span>
              
              {/* Circular Icon-Only Buttons (Search & Close) */}
              <div className="flex items-center gap-2">
                <AppButton 
                  variant="icon" 
                  onClick={() => setIsSearchOpen(true)}
                  title="Search"
                >
                  <Search className="w-4 h-4 text-neutral-600 dark:text-neutral-300 stroke-[1.5]" />
                </AppButton>
                <AppButton 
                  variant="icon" 
                  onClick={() => setSidebarOpen(false)}
                  title="Close Sidebar (⌘B)"
                >
                  <X className="w-4 h-4 text-neutral-600 dark:text-neutral-300 stroke-[1.5]" />
                </AppButton>
              </div>
            </div>

            {/* + New Thread Button (Capsule style, NO lightning icon) */}
            <AppButton 
              variant="dark"
              onClick={handleStartNewChat}
              className="w-full py-2.5 px-4 text-xs gap-2 font-semibold"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Thread</span>
            </AppButton>

            {/* Chat History List */}
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[calc(100vh-210px)] pr-1 scrollbar-none text-xs">
              
              {/* Saved Section */}
              <div>
                <div className="flex items-center gap-1.5 px-1 py-1 text-neutral-400 font-medium text-[11px]">
                  <Star className="w-3 h-3" />
                  <span>Saved</span>
                </div>

                <div className="mt-1 space-y-1">
                  {historyItems.filter(h => h.timeframe === "saved").map(item => renderHistoryItem(item, false))}
                </div>
              </div>

              {/* Today Section */}
              <div>
                <div 
                  onClick={() => setTodayCollapsed(!todayCollapsed)}
                  className="flex items-center justify-between px-1 py-1 text-neutral-400 font-medium text-[11px] cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300"
                >
                  <span>Today</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${todayCollapsed ? "-rotate-90" : ""}`} />
                </div>

                {!todayCollapsed && (
                  <div className="mt-1 space-y-1">
                    {historyItems.filter(h => h.timeframe === "today").map(item => renderHistoryItem(item, false))}
                  </div>
                )}
              </div>

              {/* Yesterday Section */}
              <div>
                <div 
                  onClick={() => setYesterdayCollapsed(!yesterdayCollapsed)}
                  className="flex items-center justify-between px-1 py-1 text-neutral-400 font-medium text-[11px] cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300"
                >
                  <span>Yesterday</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${yesterdayCollapsed ? "-rotate-90" : ""}`} />
                </div>

                {!yesterdayCollapsed && (
                  <div className="mt-1 space-y-1">
                    {historyItems.filter(h => h.timeframe === "yesterday").map(item => renderHistoryItem(item, true))}
                  </div>
                )}
              </div>

            </div>
          </div>

          {/* Bottom Upgrade Button */}
          <div className="pt-2">
            <AppButton 
              variant="secondary"
              onClick={() => setIsUpgradeOpen(true)}
              className="w-full py-2.5 text-xs font-semibold"
            >
              Upgrade to Pro
            </AppButton>
          </div>

        </div>
      </div>

      {/* -------------------------------------------------------------
          3. MAIN WORKSPACE
          ------------------------------------------------------------- */}
      <main className={`flex-1 flex flex-col justify-between overflow-y-auto relative transition-colors ${
        isDarkMode ? "bg-[#09090B]" : "bg-[#F7F7F8]"
      }`}>
        
        {/* Header Bar */}
        <header className={`h-16 px-8 flex items-center justify-between shrink-0 sticky top-0 z-10 border-b ${
          isDarkMode ? "bg-[#09090B]/95 border-neutral-800" : "bg-[#F7F7F8]/95 border-neutral-200"
        } backdrop-blur-xs`}>
          
          {/* Left: Brand Identity */}
          <div className="flex items-center gap-2.5">
            <TaraLogo className="w-5 h-5" />
            <h1 className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
              Tara AI
            </h1>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold text-neutral-600 bg-white dark:bg-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              Plus
            </span>
          </div>

          {/* Right Header Buttons: Icons only for secondary actions + New Thread capsule (NO lightning icon) */}
          <div className="flex items-center gap-2.5">
            
            {/* Configuration: Circular Icon-Only Button */}
            <AppButton 
              variant="icon" 
              onClick={() => setIsConfigOpen(true)}
              title="Configuration"
            >
              <SlidersHorizontal className="w-4 h-4 text-neutral-600 dark:text-neutral-300 stroke-[1.5]" />
            </AppButton>

            {/* Share: Circular Icon-Only Button */}
            <AppButton 
              variant="icon" 
              onClick={() => setIsShareOpen(true)}
              title="Share"
            >
              <Share2 className="w-4 h-4 text-neutral-600 dark:text-neutral-300 stroke-[1.5]" />
            </AppButton>

            {/* Primary Action Button: "Create New Invoice" capsule style (NO lightning icon) */}
            <AppButton 
              variant="dark" 
              onClick={handleStartNewChat}
              className="px-5 py-2 text-xs font-semibold gap-2"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Thread</span>
            </AppButton>

          </div>
        </header>

        {/* Canvas Body */}
        <div className="flex-1 flex flex-col px-6 sm:px-12 max-w-4xl mx-auto w-full justify-between pb-8 pt-4">
          
          {chatMessages.length === 0 ? (
            /* EMPTY HERO SCREEN */
            <div className="flex-1 flex flex-col items-center justify-center my-auto py-8">
              
              {/* Central Iconic Tara Logo Container (Soft capsule container) */}
              <div className="mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-[#1E1E22] border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
                  <TaraLogo className="w-8 h-8" />
                </div>
              </div>

              {/* Typography Greeting */}
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-2">
                Welcome to Tara
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center max-w-sm mb-10 leading-relaxed">
                Tell us what you need, and we will coordinate the rest.
              </p>

              {/* 3 Precision Interactive Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-8">
                
                {/* CARD 1: Sam Lee (Data Assistant) in dark button tone */}
                <div 
                  onClick={() => handleSendMessage("Activate Sam Lee Data Assistant")}
                  className="bg-gradient-to-b from-[#2A2A2E] to-[#141416] text-white p-5 rounded-[22px] flex flex-col justify-between cursor-pointer border border-[#3A3A40] shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_4px_16px_rgba(0,0,0,0.16)] hover:border-neutral-500 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-300">
                          S
                        </div>
                        <span className="text-xs font-semibold text-neutral-100">
                          Sam Lee
                        </span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#0066FF] text-white">
                        Data Assistant
                      </span>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                      Designed to help manage sales processes and maximize customer engagement.
                    </p>
                  </div>
                </div>

                {/* CARD 2: Tasks List Card */}
                <div className={`p-5 rounded-[22px] border flex flex-col justify-between transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${
                  isDarkMode ? "bg-[#131316] border-neutral-800 text-neutral-200 hover:border-neutral-700" : "bg-white border-neutral-200 text-neutral-800 hover:border-neutral-300"
                }`}>
                  <div className="space-y-2.5">
                    <div 
                      onClick={() => handleSendMessage("Answer RFP documentation")}
                      className="flex items-center gap-2.5 text-xs font-medium cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <FileText className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span className="truncate">Answer RFP documentation</span>
                    </div>

                    <div 
                      onClick={() => handleSendMessage("Conduct a competitor analysis")}
                      className="flex items-center gap-2.5 text-xs font-medium cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <FileText className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span className="truncate">Conduct a competitor analysis</span>
                    </div>

                    <div 
                      onClick={() => handleSendMessage("Provide feedback on communication")}
                      className="flex items-center gap-2.5 text-xs font-medium cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <FileText className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span className="truncate">Provide feedback on communication</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                    <span>Tasks</span>
                    <button 
                      onClick={() => handleSendMessage("View all available tasks")}
                      className="text-[#0066FF] dark:text-blue-400 font-semibold hover:underline"
                    >
                      View All
                    </button>
                  </div>
                </div>

                {/* CARD 3: Suggested Prompt Card */}
                <div 
                  onClick={() => handleSendMessage("What are the key benefits of Product 1 that I should highlight to potential clients?")}
                  className={`p-5 rounded-[22px] border flex flex-col justify-between cursor-pointer group transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)] ${
                    isDarkMode ? "bg-[#131316] border-neutral-800 text-neutral-200 hover:border-neutral-700" : "bg-white border-neutral-200 text-neutral-800 hover:border-neutral-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-end mb-2">
                      <MoreHorizontal className="w-3.5 h-3.5 text-neutral-400" />
                    </div>
                    <p className="text-xs font-medium leading-relaxed group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-neutral-700 dark:text-neutral-200">
                      What are the key benefits of <strong className="font-semibold text-neutral-900 dark:text-white">Product 1</strong> that I should highlight to potential clients?
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                    <span className="text-[11px] text-neutral-400">
                      Suggested prompt
                    </span>
                  </div>
                </div>

              </div>

              {/* Quick Action Pill Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 w-full mb-4">
                
                {/* Connect Calendar */}
                <AppButton 
                  variant="secondary"
                  onClick={() => handleSendMessage("Connect Calendar integration")}
                  className="px-4 py-2 text-xs gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Connect Calendar</span>
                </AppButton>

                {/* Demo Task */}
                <AppButton 
                  variant="secondary"
                  onClick={() => handleSendMessage("Run Demo Task workflow")}
                  className="px-4 py-2 text-xs gap-2"
                >
                  <CircleDot className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Demo Task</span>
                </AppButton>

                {/* Browse Integrations */}
                <AppButton 
                  variant="secondary"
                  onClick={() => handleSendMessage("Browse available Integrations")}
                  className="px-4 py-2 text-xs gap-2"
                >
                  <LayoutGrid className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Browse Integrations</span>
                </AppButton>

                {/* Shared in Notes */}
                <AppButton 
                  variant="secondary"
                  onClick={() => handleSendMessage("Summarize shared notes")}
                  className="px-4 py-2 text-xs gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Shared in Notes</span>
                </AppButton>

              </div>

            </div>
          ) : (
            /* ACTIVE CHAT THREAD */
            <div className="flex-1 flex flex-col space-y-6 py-6 overflow-y-auto">
              {chatMessages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex gap-3.5 max-w-2xl ${msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"}`}
                >
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold ${
                    msg.role === "user" 
                      ? "bg-[#1C1C1F] text-white shadow-[0_2px_8px_rgba(0,0,0,0.2)]" 
                      : "bg-white text-neutral-900 dark:bg-[#1E1E22] dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-[0_2px_6px_rgba(0,0,0,0.04)]"
                  }`}>
                    {msg.role === "user" ? <User className="w-4 h-4" /> : <TaraLogo className="w-4 h-4" />}
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-semibold text-neutral-400">
                        {msg.role === "user" ? "You" : (msg.agentName || "Tara AI")}
                      </span>
                      <span className="text-[10px] text-neutral-500">{msg.timestamp}</span>
                    </div>

                    <div className={`p-4 rounded-[20px] text-xs leading-relaxed border ${
                      msg.role === "user"
                        ? "bg-gradient-to-b from-[#2A2A2E] to-[#141416] text-white border-[#3A3A40] shadow-[0_4px_14px_rgba(0,0,0,0.15)]"
                        : (isDarkMode ? "bg-[#131316] text-neutral-200 border-neutral-800" : "bg-white border-neutral-200 text-neutral-800 shadow-[0_2px_8px_rgba(0,0,0,0.03)]")
                    }`}>
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                    </div>

                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-2 mt-1.5 text-neutral-400 text-[11px] pl-1">
                        <button 
                          onClick={() => navigator.clipboard.writeText(msg.content)}
                          className="hover:text-neutral-700 dark:hover:text-neutral-200 flex items-center gap-1 transition"
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
                <div className="flex items-center gap-3 mr-auto text-xs text-neutral-400">
                  <div className="w-8 h-8 rounded-full bg-white dark:bg-[#1E1E22] text-neutral-900 dark:text-white flex items-center justify-center animate-pulse border border-neutral-200 dark:border-neutral-800 shadow-[0_2px_6px_rgba(0,0,0,0.04)]">
                    <TaraLogo className="w-4 h-4" />
                  </div>
                  <span>Tara AI is reasoning...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* ---------------------------------------------------------
              FLOATING PROMPT INPUT BAR (Smooth capsule pill design)
              --------------------------------------------------------- */}
          <div className="w-full max-w-3xl mx-auto mt-auto">
            
            {/* Attachment badges */}
            {attachedFiles.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-2.5">
                {attachedFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 px-3 py-1 bg-white dark:bg-neutral-800 rounded-full text-xs text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                    <FileText className="w-3 h-3 text-[#0066FF]" />
                    <span className="truncate max-w-[140px]">{file}</span>
                    <button 
                      onClick={() => setAttachedFiles(prev => prev.filter((_, i) => i !== idx))}
                      className="text-neutral-400 hover:text-rose-500 ml-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Input Container (Smooth capsule styling with subtle shadow) */}
            <div className={`rounded-[26px] border px-4 py-3.5 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
              isDarkMode ? "bg-[#131316] border-neutral-800 focus-within:border-neutral-600" : "bg-white border-neutral-200 focus-within:border-neutral-400"
            }`}>
              
              {/* Input Text Row */}
              <div className="flex items-center gap-2.5 mb-3">
                <Sparkles className="w-4 h-4 text-neutral-400 shrink-0" />
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
                  className="w-full bg-transparent text-xs font-normal text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 outline-none"
                />
              </div>

              {/* Bottom Controls Row with Capsule Pill Buttons */}
              <div className="flex items-center justify-between pt-1 border-t border-neutral-100 dark:border-neutral-800">
                
                {/* Select Source Dropdown */}
                <div className="relative">
                  <AppButton 
                    variant="secondary"
                    onClick={() => setIsSourceMenuOpen(!isSourceMenuOpen)}
                    className="px-3.5 py-1.5 text-xs gap-1.5 font-normal"
                  >
                    <span>{selectedSource}</span>
                    <ChevronDown className="w-3 h-3 text-neutral-400" />
                  </AppButton>

                  {isSourceMenuOpen && (
                    <div className={`absolute bottom-full left-0 mb-2 w-48 rounded-[18px] border py-1.5 z-30 text-xs shadow-[0_6px_20px_rgba(0,0,0,0.1)] ${
                      isDarkMode ? "bg-[#18181B] border-neutral-700 text-neutral-200" : "bg-white border-neutral-200 text-neutral-800"
                    }`}>
                      {["Select Source", "Web Search", "Internal Knowledge Base", "Sales CRM", "Uploaded Docs"].map((src) => (
                        <button
                          key={src}
                          onClick={() => {
                            setSelectedSource(src);
                            setIsSourceMenuOpen(false);
                          }}
                          className={`w-full text-left px-3.5 py-1.5 flex items-center justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 ${
                            selectedSource === src ? "font-semibold text-[#0066FF] dark:text-blue-400" : ""
                          }`}
                        >
                          <span>{src}</span>
                          {selectedSource === src && <Check className="w-3 h-3" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Actions: Attach, Voice, Send (NO lightning icon) */}
                <div className="flex items-center gap-2">
                  
                  {/* Attach Button */}
                  <AppButton 
                    variant="secondary"
                    onClick={() => {
                      const sampleFiles = ["Quarterly_Performance.pdf", "Competitive_Matrix.csv", "System_Architecture.docx"];
                      const nextFile = sampleFiles[Math.floor(Math.random() * sampleFiles.length)];
                      if (!attachedFiles.includes(nextFile)) {
                        setAttachedFiles(prev => [...prev, nextFile]);
                      }
                    }}
                    className="px-3.5 py-1.5 text-xs gap-1.5 font-normal"
                  >
                    <Paperclip className="w-3.5 h-3.5 text-neutral-400" />
                    <span>Attach</span>
                  </AppButton>

                  {/* Voice Button */}
                  <AppButton 
                    variant="secondary"
                    onClick={() => setIsVoiceActive(!isVoiceActive)}
                    className={`px-3.5 py-1.5 text-xs gap-1.5 font-normal ${
                      isVoiceActive ? "border-rose-300 text-rose-600 dark:border-rose-800 dark:text-rose-400" : ""
                    }`}
                  >
                    <Mic className={`w-3.5 h-3.5 ${isVoiceActive ? "text-rose-600 animate-pulse" : "text-neutral-400"}`} />
                    <span>{isVoiceActive ? "Listening..." : "Voice"}</span>
                  </AppButton>

                  {/* Send Button: Capsule dark button (NO lightning icon) */}
                  <AppButton 
                    variant="dark"
                    onClick={() => handleSendMessage()}
                    disabled={!inputText.trim() && attachedFiles.length === 0}
                    className="px-4.5 py-1.5 text-xs gap-1.5 font-semibold"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </AppButton>

                </div>

              </div>

            </div>

            {/* Disclaimer */}
            <p className="text-[11px] text-neutral-400 text-center mt-3 select-none">
              Tara may display inaccurate information. Verify critical outputs.{" "}
              <span className="underline cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300 font-medium">
                Privacy & System Ethics
              </span>
            </p>

          </div>

        </div>

      </main>

      {/* -------------------------------------------------------------
          MODALS & OVERLAYS (Capsule buttons & clean borders)
          ------------------------------------------------------------- */}

      {/* CONFIGURATION MODAL */}
      {isConfigOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-[24px] p-6 border shadow-[0_8px_30px_rgba(0,0,0,0.15)] ${
            isDarkMode ? "bg-[#131316] border-neutral-800 text-white" : "bg-white border-neutral-200 text-neutral-900"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TaraLogo className="w-4 h-4" />
                <h3 className="text-sm font-semibold">Tara AI Configuration</h3>
              </div>
              <AppButton variant="icon" onClick={() => setIsConfigOpen(false)} title="Close">
                <X className="w-4 h-4 text-neutral-500 dark:text-neutral-400 stroke-[1.5]" />
              </AppButton>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="font-medium block mb-1">Reasoning Model</label>
                <select className={`w-full p-2.5 rounded-full border px-4 ${isDarkMode ? "bg-[#18181B] border-neutral-700 text-white" : "bg-neutral-50 border-neutral-200"}`}>
                  <option>Tara AI Neural Core 4.5 (Default)</option>
                  <option>Sam Lee Autonomous Sales Agent</option>
                  <option>Deep Cohort Reasoning Engine</option>
                </select>
              </div>

              <div>
                <label className="font-medium block mb-1">Temperature / Determinism (0.7)</label>
                <input type="range" min="0" max="1" step="0.1" defaultValue="0.7" className="w-full accent-[#0066FF]" />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <AppButton variant="secondary" onClick={() => setIsConfigOpen(false)} className="py-2 text-xs">
                Cancel
              </AppButton>
              <AppButton variant="dark" onClick={() => setIsConfigOpen(false)} className="py-2 text-xs">
                Save Preferences
              </AppButton>
            </div>
          </div>
        </div>
      )}

      {/* SHARE MODAL */}
      {isShareOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-sm rounded-[24px] p-6 border shadow-[0_8px_30px_rgba(0,0,0,0.15)] ${
            isDarkMode ? "bg-[#131316] border-neutral-800 text-white" : "bg-white border-neutral-200 text-neutral-900"
          }`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold">Share Workspace Session</h3>
              <AppButton variant="icon" onClick={() => setIsShareOpen(false)} title="Close">
                <X className="w-4 h-4 text-neutral-500 dark:text-neutral-400 stroke-[1.5]" />
              </AppButton>
            </div>
            <p className="text-xs text-neutral-400 mb-4 leading-relaxed">
              Generate an access link to share this session state with team members.
            </p>

            <div className={`flex items-center justify-between p-2.5 pl-4 rounded-full border mb-4 text-xs ${
              isDarkMode ? "bg-[#18181B] border-neutral-700" : "bg-neutral-50 border-neutral-200"
            }`}>
              <span className="truncate pr-2 text-neutral-400">https://tara.ai/session/49210</span>
              <AppButton 
                variant="dark"
                onClick={() => {
                  navigator.clipboard.writeText("https://tara.ai/session/49210");
                  alert("Session URL copied to clipboard.");
                }}
                className="px-4 py-1 text-xs"
              >
                Copy
              </AppButton>
            </div>
          </div>
        </div>
      )}

      {/* UPGRADE MODAL */}
      {isUpgradeOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4">
          <div className={`w-full max-w-md rounded-[24px] p-6 border shadow-[0_8px_30px_rgba(0,0,0,0.15)] ${
            isDarkMode ? "bg-[#131316] border-neutral-800 text-white" : "bg-white border-neutral-200 text-neutral-900"
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">Tara AI Professional</h3>
              <AppButton variant="icon" onClick={() => setIsUpgradeOpen(false)} title="Close">
                <X className="w-4 h-4 text-neutral-500 dark:text-neutral-400 stroke-[1.5]" />
              </AppButton>
            </div>

            <ul className="space-y-2.5 text-xs mb-5 text-neutral-600 dark:text-neutral-300">
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

            <div className="flex items-baseline justify-between p-3.5 px-5 bg-neutral-100 dark:bg-[#18181B] rounded-full mb-5 border border-neutral-200 dark:border-neutral-700">
              <div>
                <span className="text-xl font-bold text-neutral-900 dark:text-white">$20</span>
                <span className="text-xs text-neutral-500"> / month</span>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400 px-2.5 py-0.5 rounded-full">
                Billed annually
              </span>
            </div>

            <AppButton 
              variant="dark"
              onClick={() => setIsUpgradeOpen(false)}
              className="w-full py-2.5 text-xs font-semibold"
            >
              Start 14-Day Free Evaluation
            </AppButton>
          </div>
        </div>
      )}

      {/* SEARCH OVERLAY */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-24 z-50 p-4">
          <div className={`w-full max-w-md rounded-[24px] p-4 border shadow-[0_8px_30px_rgba(0,0,0,0.15)] ${
            isDarkMode ? "bg-[#131316] border-neutral-800 text-white" : "bg-white border-neutral-200 text-neutral-900"
          }`}>
            <div className="flex items-center gap-2 border-b pb-2.5 mb-2.5 border-neutral-200 dark:border-neutral-800">
              <Search className="w-3.5 h-3.5 text-neutral-400" />
              <input 
                type="text" 
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search conversations..."
                className="w-full bg-transparent text-xs outline-none text-neutral-900 dark:text-white"
              />
              <AppButton variant="icon" onClick={() => setIsSearchOpen(false)} className="w-7 h-7" title="Close">
                <X className="w-3.5 h-3.5 text-neutral-400 stroke-[1.5]" />
              </AppButton>
            </div>

            <div className="max-h-56 overflow-y-auto space-y-1 text-xs">
              {filteredHistory.length === 0 ? (
                <p className="text-neutral-400 text-center py-3 text-[11px]">No matching threads found</p>
              ) : (
                filteredHistory.map(item => (
                  <div 
                    key={item.id}
                    onClick={() => {
                      handleSelectHistory(item);
                      setIsSearchOpen(false);
                    }}
                    className="p-2.5 px-3.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer flex items-center justify-between"
                  >
                    <span className="truncate pr-2 font-medium">{item.title}</span>
                    <span className="text-[10px] text-neutral-400 capitalize">{item.timeframe}</span>
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
