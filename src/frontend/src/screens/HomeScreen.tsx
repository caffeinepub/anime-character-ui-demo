import { Bell, Heart, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { CharacterCard } from "../components/CharacterCard";
import { characters } from "../data/characters";
import type { Character } from "../data/characters";

interface HomeScreenProps {
  likedIds: Set<number>;
  onToggleLike: (id: number) => void;
  onOpenProfile: (char: Character) => void;
}

const filters = ["All", "Online", "New", "Popular"];

export function HomeScreen({
  likedIds,
  onToggleLike,
  onOpenProfile,
}: HomeScreenProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredChars =
    activeFilter === "Online"
      ? characters.filter((c) => c.isOnline)
      : characters;

  return (
    <div className="gradient-bg min-h-full">
      {/* Top Header */}
      <header className="px-5 pt-6 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Heart size={22} className="fill-pink-400 text-pink-400" />
          <span className="text-xl font-bold text-gradient-pink">Aimi</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-ocid="header.bell.button"
            className="relative w-9 h-9 rounded-full bg-white/70 backdrop-blur flex items-center justify-center shadow-sm"
          >
            <Bell size={18} className="text-gray-500" />
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-pink-500 border-2 border-white flex items-center justify-center">
              <span className="text-[7px] text-white font-bold">3</span>
            </div>
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center shadow-sm">
            <span className="text-sm font-bold text-white">M</span>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="px-5 pb-5">
        <div className="flex items-center gap-1 mb-1">
          <Sparkles size={16} className="text-pink-400" />
          <span className="text-xs text-pink-400 font-semibold">
            ✨ 142 matches today!
          </span>
        </div>
        <h1 className="text-2xl font-extrabold text-gray-800 leading-tight">
          Discover Your Perfect
          <span className="block text-gradient-pink">Anime Companion!</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1.5">
          Meet your favourite anime friends &amp; find your match ✨
        </p>
      </section>

      {/* Search bar */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-2 bg-white/70 backdrop-blur rounded-full px-4 py-2.5 shadow-sm border border-pink-100">
          <Search size={16} className="text-gray-400 flex-shrink-0" />
          <input
            data-ocid="home.search_input"
            type="text"
            placeholder="Search for your companion..."
            className="bg-transparent text-sm text-gray-600 placeholder-gray-400 outline-none flex-1 font-medium"
            readOnly
          />
        </div>
      </div>

      {/* Filter pills */}
      <div className="px-5 mb-5 flex gap-2 overflow-x-auto">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            data-ocid="home.filter.tab"
            onClick={() => setActiveFilter(filter)}
            className={`flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
              activeFilter === filter
                ? "btn-primary-gradient text-white shadow-pink"
                : "bg-white/60 text-gray-500 border border-pink-100 hover:border-pink-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Character grid */}
      <section className="px-4 pb-6">
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="font-bold text-base text-gray-800">Characters</h2>
          <span className="text-xs text-pink-400 font-semibold">
            {filteredChars.length} online
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {filteredChars.map((char, i) => (
            <CharacterCard
              key={char.id}
              character={char}
              isLiked={likedIds.has(char.id)}
              onToggleLike={() => onToggleLike(char.id)}
              onOpenProfile={() => onOpenProfile(char)}
              index={i + 1}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 py-4 text-center border-t border-pink-100/50">
        <p className="text-[10px] text-gray-400">
          © {new Date().getFullYear()}. Built with ♥ using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noreferrer"
            className="text-pink-400 hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
