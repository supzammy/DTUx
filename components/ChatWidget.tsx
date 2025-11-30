import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Bot, Sparkles } from 'lucide-react';
import { generateChatResponse } from '../services/aiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am the DTU Virtual Assistant. How can I help you explore the university today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    
    // Add User Message
    const newMessages = [...messages, { role: 'user', text: userMsg } as ChatMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
        const responseText = await generateChatResponse(messages, userMsg);
        setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
        setMessages(prev => [...prev, { 
            role: 'model', 
            text: "I'm having trouble connecting to the network. Please check the Admissions page for immediate help." 
        }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {isOpen ? (
        <div className="bg-paper shadow-2xl w-[360px] md:w-[400px] rounded-t-xl overflow-hidden border border-gray-200 animate-in slide-in-from-bottom-5 duration-300 flex flex-col h-[550px]">
          
          {/* Header - Ivy Red */}
          <div className="bg-ivy-red text-white p-4 flex justify-between items-center shadow-md z-10">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <div>
                    <h3 className="font-bold text-sm leading-none">DTU Assistant</h3>
                    <span className="text-[10px] text-red-100 opacity-90">Online • AI Campus Concierge</span>
                </div>
            </div>
            <button 
                onClick={() => setIsOpen(false)} 
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-grow overflow-y-auto p-4 bg-[#F5F5F7] flex flex-col gap-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-3 max-w-[90%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
              >
                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                    msg.role === 'user' ? 'bg-gray-200' : 'bg-white'
                }`}>
                    {msg.role === 'user' ? <User className="w-4 h-4 text-gray-600" /> : <img src="/images/dtu logo.png" className="w-5 h-5 object-contain" alt="DTU" />}
                </div>

                {/* Bubble */}
                <div 
                    className={`p-3.5 text-sm leading-relaxed shadow-sm rounded-2xl ${
                        msg.role === 'user' 
                        ? 'bg-ivy-red text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                    }`}
                >
                    {msg.text}
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex gap-3 self-start max-w-[90%]">
                 <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100">
                    <Sparkles className="w-4 h-4 text-ivy-red animate-pulse" />
                 </div>
                 <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Ask about admissions, campus..."
                    disabled={isLoading}
                    className="w-full bg-gray-100 text-mit-black pl-5 pr-12 py-3.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-ivy-red/20 focus:bg-white transition-all placeholder:text-gray-400 border border-transparent focus:border-gray-200"
                />
                <button 
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="absolute right-2 p-2 bg-ivy-red text-white rounded-full hover:bg-red-800 disabled:opacity-50 disabled:hover:bg-ivy-red transition-colors shadow-sm"
                >
                    <Send className="w-4 h-4 ml-0.5" />
                </button>
            </div>
          </div>
        </div>
      ) : (
          /* Launcher Button - Pill Shape */
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-3 bg-ivy-red hover:bg-red-800 text-white pl-5 pr-2 py-2 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:scale-105 transition-all duration-300"
          >
            <span className="font-bold text-sm tracking-wide">Ask DTU AI</span>
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <MessageSquare className="w-5 h-5 fill-current" />
            </div>
          </button>
      )}
    </div>
  );
};

export default ChatWidget;