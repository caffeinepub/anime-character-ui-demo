import { Heart } from "lucide-react";
import type { Character } from "../data/characters";

interface CharacterCardProps {
  character: Character;
  isLiked: boolean;
  onToggleLike: () => void;
  onOpenProfile: () => void;
  index: number;
}

export function CharacterCard({
  character,
  isLiked,
  onToggleLike,
  onOpenProfile,
  index,
}: CharacterCardProps) {
  return (
    <div
      className="card-glass card-hover rounded-3xl overflow-hidden shadow-card"
      data-ocid={`character.card.${index}`}
    >
      {/* Avatar area */}
      <div
        className={`relative bg-gradient-to-br ${character.avatarGradient} h-44 flex items-end justify-center overflow-hidden`}
      >
        <img
          src={character.avatarImage}
          alt={character.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
        {/* Online indicator */}
        {character.isOnline && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/80 backdrop-blur rounded-full px-2 py-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[9px] font-semibold text-green-600">
              Online
            </span>
          </div>
        )}
        {/* Like button */}
        <button
          type="button"
          data-ocid={`character.toggle.${index}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleLike();
          }}
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-110"
        >
          <Heart
            size={16}
            className={
              isLiked ? "fill-pink-500 text-pink-500" : "text-gray-400"
            }
          />
        </button>
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-bold text-sm text-gray-800 truncate">
          {character.name}
        </h3>
        <p className="text-xs text-gray-400 mt-0.5 truncate">
          {character.tagline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {character.personalityTags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-pink-50 text-pink-500 border border-pink-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View Profile button */}
        <button
          type="button"
          data-ocid={`character.primary_button.${index}`}
          onClick={onOpenProfile}
          className="mt-3 w-full btn-primary-gradient text-white text-xs font-semibold py-2 rounded-full shadow-pink hover:opacity-90 transition-opacity"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
