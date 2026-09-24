import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Send, 
  X, 
  RotateCcw, 
  MessageSquare, 
  Bot, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Calculator, 
  Shield 
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  time: string;
  actions?: Array<{ label: string; actionType: 'consult' | 'calc_sip' | 'calc_ins' }>;
}

interface AiChatBotProps {
  onOpenConsultation: (topic?: string) => void;
}

const INITIAL_WELCOME = `Namaste! 🙏 Welcome to **Horizon Secure Investments (HSI)**.

I am your **AI Financial Advisor**, backed by our 15+ years of AMFI & IRDAI certified wealth management expertise.

I can assist you with:
- 📈 **SIP & Mutual Funds** (Rupee-cost averaging, returns compounding)
- 🛡️ **Life & Health Insurance** (1-Cr Term cover & Mediclaim shields)
- ⚖️ **Tax Optimization** (Sections 80C, 80D & 54EC capital gains)
- 🏢 **Fractional Real Estate** (8-10% annual rental yield)
- 🥇 **Sovereign Gold & Bonds** (RBI SGB 2.5% p.a. tax-free)

What would you like to plan today?`;

export const AiChatBot: React.FC<AiChatBotProps> = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('hsi_react_chat_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // ignore fallback
      }
    }
    return [
      {
        id: 'msg-welcome',
        role: 'model',
        text: INITIAL_WELCOME,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: [
          { label: '🧮 Calculate ₹10,000/mo SIP', actionType: 'calc_sip' },
          { label: '🛡️ Family Health Coverage Guide', actionType: 'calc_ins' },
          { label: '📅 Book Free Portfolio Audit', actionType: 'consult' }
        ]
      }
    ];
  });

  const feedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('hsi_react_chat_history', JSON.stringify(messages.slice(-20)));
    if (isOpen) {
      feedRef.current?.scrollTo({ top: feedRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-6).map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      const reply = data.reply || "I've noted your question. How else may I assist your portfolio?";

      const lower = reply.toLowerCase();
      const actions: ChatMessage['actions'] = [];

      if (lower.includes('sip') || lower.includes('mutual fund')) {
        actions.push({ label: '🧮 Plan SIP Goal', actionType: 'calc_sip' });
      }
      if (lower.includes('insurance') || lower.includes('cover') || lower.includes('health')) {
        actions.push({ label: '🛡️ Check Insurance Need', actionType: 'calc_ins' });
      }
      actions.push({ label: '📅 Speak with Certified Advisor', actionType: 'consult' });

      const modelMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions,
      };

      setMessages((prev) => [...prev, modelMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        role: 'model',
        text: `We are experiencing high server traffic. For immediate assistance with **"${query}"**, our certified advisory desk in BKC Mumbai is on standby. Would you like a call back?`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: [{ label: '📅 Request Immediate Callback', actionType: 'consult' }]
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = (actionType: 'consult' | 'calc_sip' | 'calc_ins', userPrompt?: string) => {
    if (actionType === 'consult') {
      setIsOpen(false);
      onOpenConsultation(userPrompt || 'Advisory session via AI Assistant');
    } else if (actionType === 'calc_sip') {
      setIsOpen(false);
      const calcEl = document.getElementById('calculators');
      if (calcEl) {
        calcEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#calculators';
      }
    } else if (actionType === 'calc_ins') {
      setIsOpen(false);
      const insTab = document.querySelector('[data-calc="ins"]') as HTMLElement;
      insTab?.click();
      const calcEl = document.getElementById('calculators');
      if (calcEl) {
        calcEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#calculators';
      }
    }
  };

  const handleResetChat = () => {
    localStorage.removeItem('hsi_react_chat_history');
    setMessages([
      {
        id: `msg-welcome-${Date.now()}`,
        role: 'model',
        text: INITIAL_WELCOME,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: [
          { label: '🧮 Calculate ₹10,000/mo SIP', actionType: 'calc_sip' },
          { label: '🛡️ Family Health Coverage Guide', actionType: 'calc_ins' },
          { label: '📅 Book Free Portfolio Audit', actionType: 'consult' }
        ]
      }
    ]);
  };

  // Simple safe markdown formatter for bold, bullets & headings
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, i) => {
      // Headings
      if (line.startsWith('### ')) {
        return (
          <h4 key={i} className="font-black text-slate-900 text-xs mt-2 mb-1">
            {line.replace('### ', '')}
          </h4>
        );
      }
      if (line.startsWith('## ')) {
        return (
          <h3 key={i} className="font-black text-slate-900 text-xs mt-2.5 mb-1">
            {line.replace('## ', '')}
          </h3>
        );
      }

      // Bullets
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const content = line.trim().substring(2);
        return (
          <li key={i} className="flex items-start gap-1.5 my-0.5 ml-1">
            <span className="text-orange-500 font-bold shrink-0">•</span>
            <span dangerouslySetInnerHTML={{ __html: formatInline(content) }} />
          </li>
        );
      }

      // Empty line spacer
      if (!line.trim()) {
        return <div key={i} className="h-1" />;
      }

      return (
        <p key={i} className="my-0.5" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
      );
    });
  };

  const formatInline = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-black text-slate-950">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  };

  return (
    <div id="hsiChatBotContainer" className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end pointer-events-auto font-sans">
      
      {/* GREETING BUBBLE CALLOUT */}
      {!isOpen && showGreeting && (
        <div
          onClick={() => {
            setIsOpen(true);
            setShowGreeting(false);
          }}
          className="mb-3 max-w-[280px] bg-white rounded-2xl p-3.5 shadow-xl border-2 border-orange-300 text-slate-900 text-xs flex items-start gap-2.5 transform transition-all duration-300 cursor-pointer hover:border-orange-500 animate-bounce"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center font-black shrink-0 text-sm shadow-2xs">
            ✨
          </div>
          <div className="flex-1">
            <p className="font-extrabold text-slate-950 leading-tight">Need financial advice?</p>
            <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
              Ask our AI Advisor about SIPs, Term Insurance, or Tax Deductions!
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowGreeting(false);
            }}
            className="text-slate-400 hover:text-slate-800 text-xs font-black p-0.5 cursor-pointer"
            title="Dismiss"
          >
            ✕
          </button>
        </div>
      )}

      {/* CHAT WINDOW MODAL */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border-2 border-orange-500 flex flex-col overflow-hidden mb-3 animate-in fade-in duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#071220] via-[#0a192f] to-[#071220] text-white p-3.5 flex items-center justify-between border-b-2 border-orange-500">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white flex items-center justify-center font-black text-sm shadow-xs">
                ✨
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-black text-xs sm:text-sm font-heading tracking-wide">
                    Horizon AI Advisor
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-[10px] text-orange-400 font-medium">
                  AMFI ARN-284910 • 15+ Yrs Expertise
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Restart Chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer font-bold text-sm"
                title="Close Window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Feed */}
          <div ref={feedRef} className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-1 mb-1 text-[10px] text-slate-400 px-1">
                    {isUser ? (
                      <>
                        <span>You</span>
                        <span>•</span>
                        <span>{msg.time}</span>
                      </>
                    ) : (
                      <>
                        <span className="text-orange-700 font-bold">Horizon AI</span>
                        <span>•</span>
                        <span>{msg.time}</span>
                      </>
                    )}
                  </div>

                  <div
                    className={`max-w-[85%] p-3 rounded-2xl leading-relaxed shadow-2xs ${
                      isUser
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-tr-xs'
                        : 'bg-white text-slate-800 border border-slate-200 rounded-tl-xs'
                    }`}
                  >
                    {isUser ? msg.text : renderFormattedText(msg.text)}
                  </div>

                  {/* Contextual Action Chips */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                      {msg.actions.map((act, aIdx) => (
                        <button
                          key={aIdx}
                          onClick={() => handleActionClick(act.actionType, msg.text)}
                          className="px-2.5 py-1 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-900 text-[10.5px] font-bold border border-orange-200 transition-all cursor-pointer shadow-2xs hover:scale-102 flex items-center gap-1"
                        >
                          <span>{act.label}</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1 mb-1 text-[10px] text-slate-400 px-1">
                  <span className="text-orange-700 font-bold">Horizon AI</span>
                  <span>is typing...</span>
                </div>
                <div className="p-3 bg-white rounded-2xl rounded-tl-xs border border-slate-200 shadow-2xs flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" />
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Quick Starter Pills */}
          <div className="px-3 py-1.5 bg-slate-100 border-t border-slate-200 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-[10px]">
            <span className="text-slate-500 font-bold shrink-0">Ask:</span>
            {[
              "Best SIP funds for 2026",
              "Term vs Mediclaim",
              "Save tax under 80C",
              "Commercial Real Estate Yields"
            ].map((prompt, pIdx) => (
              <button
                key={pIdx}
                onClick={() => handleSendMessage(prompt)}
                className="px-2 py-0.5 rounded-md bg-white border border-slate-200 hover:border-orange-400 text-slate-700 hover:text-orange-600 font-medium shrink-0 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about SIP, Term Cover, Tax..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-100 text-slate-900 placeholder-slate-400 text-xs border border-transparent focus:border-orange-400 focus:bg-white focus:outline-none font-medium"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="p-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-2xs"
              title="Send Message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* FLOATING TRIGGER BUTTON */}
      <button
        id="chatTriggerBtn"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowGreeting(false);
        }}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#071220] via-[#0a192f] to-[#071220] hover:from-orange-500 hover:via-orange-600 hover:to-orange-500 hover:text-white text-white font-bold text-xs shadow-2xl border-2 border-orange-500 transition-all duration-300 hover:scale-105 cursor-pointer"
        aria-label="Toggle AI Advisor Chat"
      >
        <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-xs group-hover:bg-slate-950 group-hover:text-orange-400 transition-colors">
          ✨
        </div>
        <span className="font-heading tracking-wide">
          {isOpen ? 'Close Advisor' : 'AI Financial Advisor'}
        </span>
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
        </span>
      </button>

    </div>
  );
};
