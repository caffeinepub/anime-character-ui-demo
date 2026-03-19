import {
  ChevronLeft,
  Heart,
  MessageCircle,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import type { Character } from "../data/characters";

interface ProfileScreenProps {
  character: Character;
  isLiked: boolean;
  onToggleLike: () => void;
  onBack: () => void;
  onOpenChat: () => void;
}

export function ProfileScreen({
  character,
  isLiked,
  onToggleLike,
  onBack,
  onOpenChat,
}: ProfileScreenProps) {
  return (
    <div className="gradient-bg min-h-full">
      {/* Header */}
      <header className="px-4 pt-6 pb-3 flex items-center justify-between">
        <button
          type="button"
          data-ocid="profile.back.button"
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white/70 backdrop-blur flex items-center justify-center shadow-sm"
        >
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        <span className="font-bold text-gray-700">Profile</span>
        <button
          type="button"
          data-ocid="profile.toggle"
          onClick={onToggleLike}
          className="w-9 h-9 rounded-full bg-white/70 backdrop-blur flex items-center justify-center shadow-sm"
        >
          <Heart
            size={18}
            className={
              isLiked ? "fill-pink-500 text-pink-500" : "text-gray-400"
            }
          />
        </button>
      </header>

      {/* Avatar + name section */}
      <section className="px-5 pb-5 flex flex-col items-center text-center">
        <div className="relative">
          <div
            className={`w-32 h-32 rounded-full bg-gradient-to-br ${character.avatarGradient} overflow-hidden avatar-ring`}
          >
            <img
              src={character.avatarImage}
              alt={character.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          {character.isOnline && (
            <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-green-400 border-2 border-white shadow" />
          )}
        </div>
        <h1 className="text-2xl font-extrabold text-gray-800 mt-3">
          {character.name}
        </h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs font-semibold bg-pink-100 text-pink-600 px-2.5 py-0.5 rounded-full">
            Age {character.age}
          </span>
          {character.isOnline && (
            <span className="text-xs font-semibold bg-green-50 text-green-600 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Online
            </span>
          )}
        </div>
        <p className="text-sm text-pink-400 font-medium mt-1.5 italic">
          {character.tagline}
        </p>
      </section>

      {/* Stats row */}
      <div className="mx-5 card-glass rounded-2xl p-4 flex justify-around mb-4">
        <div className="text-center">
          <div className="flex items-center gap-1 justify-center">
            <Users size={14} className="text-pink-400" />
            <span className="font-bold text-gray-800 text-sm">
              {character.stats.friends}
            </span>
          </div>
          <p className="text-[10px] text-gray-400 mt-0.5">Friends</p>
        </div>
        <div className="w-px bg-pink-100" />
        <div className="text-center">
          <div className="flex items-center gap-1 justify-center">
            <Heart size={14} className="text-pink-400" />
            <span className="font-bold text-gray-800 text-sm">
              {character.stats.likes}
            </span>
          </div>
          <p className="text-[10px] text-gray-400 mt-0.5">Likes</p>
        </div>
        <div className="w-px bg-pink-100" />
        <div className="text-center">
          <div className="flex items-center gap-1 justify-center">
            <Sparkles size={14} className="text-purple-400" />
            <span className="font-bold text-gray-800 text-sm">
              {character.stats.topMatch ? "✓" : "–"}
            </span>
          </div>
          <p className="text-[10px] text-gray-400 mt-0.5">Top Match</p>
        </div>
      </div>

      {/* Bio */}
      <section className="px-5 mb-4">
        <h2 className="font-bold text-sm text-gray-700 mb-2">About Me</h2>
        <div className="card-glass rounded-2xl p-4">
          <p className="text-sm text-gray-600 leading-relaxed">
            {character.bio}
          </p>
        </div>
      </section>

      {/* Tags */}
      <section className="px-5 mb-5">
        <h2 className="font-bold text-sm text-gray-700 mb-2">Personality</h2>
        <div className="flex flex-wrap gap-2">
          {character.personalityTags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-600 border border-pink-200"
            >
              ✨ {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Activity */}
      <section className="px-5 mb-5">
        <h2 className="font-bold text-sm text-gray-700 mb-2">
          Recent Activity
        </h2>
        <div className="space-y-2">
          {character.activityPosts.map((post) => (
            <div key={post} className="card-glass rounded-2xl p-3">
              <p className="text-xs text-gray-600 leading-relaxed">{post}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Action buttons */}
      <section className="px-5 pb-6">
        <div className="flex gap-3 mb-3">
          <button
            type="button"
            data-ocid="profile.primary_button"
            onClick={onToggleLike}
            className={`flex-1 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-pink transition-all duration-200 hover:opacity-90 ${
              isLiked
                ? "bg-pink-500 text-white"
                : "btn-primary-gradient text-white"
            }`}
          >
            <Heart size={16} className={isLiked ? "fill-white" : ""} />
            {isLiked ? "Liked! 💕" : "💖 Like"}
          </button>
          <button
            type="button"
            data-ocid="profile.chat.button"
            onClick={onOpenChat}
            className="flex-1 py-3 rounded-full font-bold text-sm flex items-center justify-center gap-2 btn-secondary-gradient text-purple-700 shadow-lavender hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={16} />💬 Chat
          </button>
        </div>
        <button
          type="button"
          data-ocid="profile.match.button"
          className="w-full py-3 rounded-full font-bold text-sm bg-gradient-to-r from-purple-400 to-pink-400 text-white flex items-center justify-center gap-2 shadow-lavender hover:opacity-90 transition-opacity"
        >
          <Star size={16} className="fill-white" />✨ Match!
        </button>
      </section>
    </div>
  );
}
