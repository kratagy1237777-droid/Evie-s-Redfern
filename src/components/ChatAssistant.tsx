import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Coffee, ArrowRight } from 'lucide-react';
import { ChatMessage } from '../types';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          role: 'assistant',
          text: "Hi there! I'm Evie, your AI Concierge at Evie's Redfern. 🍵 Sourced for pristine gut health, our menu is 100% sulfite and additive-free. Ask me about our coffee beans, dishes, dietary preferences (GF/V/Vegan), our Sunday morning Run Club, or bookings!",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [messages.length]);

  // Handle auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Math.random().toString(),
      role: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Map history to simple objects for request
      const history = messages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        text: msg.text
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: text,
          history: history
        })
      });

      if (!res.ok) {
        throw new Error("Unable to connect to Evie's Concierge");
      }

      const data = await res.json();
      
      const replyMsg: ChatMessage = {
        id: Math.random().toString(),
        role: 'assistant',
        text: data.reply || "I'm having a small moment to myself. How else can I guide you?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, replyMsg]);
    } catch (err: any) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: Math.random().toString(),
        role: 'assistant',
        text: "Apologies, my link to the central espresso machine is currently hazy. Please write me back soon, or feel free to check out our static sections below!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const presetQuestions = [
    "What is your signature dish?",
    "Any gluten-free or vegan options?",
    "Tell me about the gut-health focus",
    "Where is the Redfern location?"
  ];

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-olive-700 hover:bg-olive-800 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-[1.04]"
        id="chat-toggle"
      >
        {isOpen ? <X className="w-6 h-6 animate-spin-once" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Floating Panel dialog */}
      {isOpen && (
        <div
          id="chat-window"
          className="fixed bottom-24 right-6 z-40 w-[345px] sm:w-[380px] h-[500px] bg-white border border-olive-150 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 transform animate-fade-in"
        >
          {/* Header */}
          <div className="bg-olive-800 text-white px-5 py-4 flex justify-between items-center relative">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center border border-white/10">
                <Coffee className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-playfair font-bold text-sm leading-tight">Evie's Concierge</h4>
                <p className="text-[10px] text-olive-200 font-mono flex items-center gap-1 leading-none mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AI Host • Online</span>
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors focus:outline-none"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages body section */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-olive-50/20">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[85%] ${
                  msg.role === 'user' ? 'ml-auto items-end' : 'mr-auto items-start'
                }`}
              >
                <div
                  className={`px-3.5 py-2.5 rounded-xl text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-olive-700 text-white rounded-tr-none shadow-sm'
                      : 'bg-white text-olive-950 border border-olive-150 rounded-tl-none shadow-sm font-light'
                  }`}
                >
                  {/* Handle line breaks simple */}
                  {msg.text.split('\n').map((line, idx) => (
                    <p key={idx} className={idx > 0 ? 'mt-1.5' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
                <span className="text-[9px] text-olive-400 font-mono mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Simulated loader */}
            {isLoading && (
              <div className="flex flex-col mr-auto items-start max-w-[85%]">
                <div className="px-4 py-3 bg-white text-olive-400 border border-olive-150 rounded-xl rounded-tl-none shadow-sm text-xs flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-olive-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-olive-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-olive-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Bottom input segment with presets */}
          <div className="bg-white border-t border-olive-150 p-3 space-y-2 shrink-0">
            {/* Quick questions list limit representation */}
            {messages.length < 3 && (
              <div className="flex flex-col gap-1.5 overflow-x-auto py-1 scrollbar-none [mask-image:linear-gradient(to_right,white_85%,transparent)]">
                <p className="text-[10px] font-mono uppercase tracking-wider text-olive-500 font-bold mb-0.5 px-1">
                  Tap to ask:
                </p>
                <div className="flex flex-wrap gap-1">
                  {presetQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSendMessage(q)}
                      className="px-2.5 py-1 text-[10px] text-olive-700 hover:text-olive-900 bg-olive-50 hover:bg-olive-100 border border-olive-150 rounded transition-all cursor-pointer leading-tight text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Raw input text area */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputMessage);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask about ingredients, run club, menu..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 bg-olive-50 border border-olive-200 focus:border-olive-500 focus:outline-none rounded-md px-3 py-2 text-xs text-olive-950 font-sans"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isLoading}
                className="w-8 h-8 rounded-md bg-olive-700 hover:bg-olive-800 disabled:bg-olive-200 text-white flex items-center justify-center transition-colors shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
