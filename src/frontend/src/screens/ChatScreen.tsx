import { ChevronLeft, Heart, Send } from "lucide-react";
import { useState } from "react";
import type { Character } from "../data/characters";

interface ChatScreenProps {
  character: Character;
  onBack: () => void;
}

export function ChatScreen({ character, onBack }: ChatScreenProps) {
  const [inputValue, setInputValue] = useState("");
  const [showTyping, setShowTyping] = useState(true);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setInputValue("");
    setShowTyping(true);
    setTimeout(() => setShowTyping(false), 2500);
  };

  return (
    <div className="flex flex-col h-full min-h-screen gradient-bg">
      {/* Header */}
      <header className="px-4 pt-6 pb-4 flex items-center gap-3 card-glass border-b border-pink-100/50">
        <button
          type="button"
          data-ocid="chat.back.button"
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white/70 flex items-center justify-center shadow-sm flex-shrink-0"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        <div
          className={`w-10 h-10 rounded-full bg-gradient-to-br ${character.avatarGradient} overflow-hidden flex-shrink-0 avatar-ring`}
        >
          <img
            src={character.avatarImage}
            alt={character.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-1">
          <p className="font-bold text-sm text-gray-800">{character.name}</p>
          <div className="flex items-center gap-1">
            {character.isOnline ? (
              <>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-xs text-green-500 font-medium">
                  Online now
                </span>
              </>
            ) : (
              <span className="text-xs text-gray-400">Last seen recently</span>
            )}
          </div>
        </div>
        <Heart
          size={20}
          className="text-pink-300 fill-pink-200 animate-pulse-heart"
        />
      </header>

      {/* Messages area */}
      <div
        className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
        data-ocid="chat.panel"
        style={{ paddingBottom: 16 }}
      >
        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 h-px bg-pink-100" />
          <span className="text-[10px] text-gray-400 font-medium">Today</span>
          <div className="flex-1 h-px bg-pink-100" />
        </div>

        {character.chatMessages.map((msg, i) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${msg.from === "user" ? "flex-row-reverse" : ""}`}
            data-ocid={`chat.item.${i + 1}`}
          >
            {msg.from === "character" && (
              <div
                className={`w-7 h-7 rounded-full bg-gradient-to-br ${character.avatarGradient} overflow-hidden flex-shrink-0`}
              >
                <img
                  src={character.avatarImage}
                  alt={character.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}
            <div className="max-w-[75%]">
              <div
                className={`px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.from === "character"
                    ? "chat-bubble-left text-gray-700"
                    : "chat-bubble-right text-purple-700"
                }`}
              >
                {msg.text}
              </div>
              <p
                className={`text-[9px] text-gray-400 mt-1 ${msg.from === "user" ? "text-right" : ""}`}
              >
                {msg.time}
              </p>
            </div>
          </div>
        ))}

        {showTyping && (
          <div className="flex items-end gap-2">
            <div
              className={`w-7 h-7 rounded-full bg-gradient-to-br ${character.avatarGradient} overflow-hidden flex-shrink-0`}
            >
              <img
                src={character.avatarImage}
                alt={character.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="chat-bubble-left px-4 py-3 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-pink-400 typing-dot" />
              <span className="w-2 h-2 rounded-full bg-pink-400 typing-dot" />
              <span className="w-2 h-2 rounded-full bg-pink-400 typing-dot" />
            </div>
          </div>
        )}

        <div className="flex justify-center py-2">
          <Heart
            size={14}
            className="text-pink-300 fill-pink-200 animate-float"
          />
        </div>
      </div>

      {/* Input area */}
      <div className="px-4 py-3 card-glass border-t border-pink-100/50">
        <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2.5 border border-pink-100 shadow-sm">
          <input
            data-ocid="chat.input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={`Message ${character.name}...`}
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none font-medium"
          />
          <button
            type="button"
            data-ocid="chat.submit_button"
            onClick={handleSend}
            className="w-8 h-8 rounded-full btn-primary-gradient flex items-center justify-center flex-shrink-0 shadow-pink hover:opacity-90 transition-opacity"
          >
            <Send size={14} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
