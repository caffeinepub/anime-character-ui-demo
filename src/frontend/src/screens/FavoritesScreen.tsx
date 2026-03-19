import { Heart, Sparkles } from "lucide-react";
import { characters } from "../data/characters";
import type { Character } from "../data/characters";

interface FavoritesScreenProps {
  likedIds: Set<number>;
  onOpenProfile: (char: Character) => void;
}

export function FavoritesScreen({
  likedIds,
  onOpenProfile,
}: FavoritesScreenProps) {
  const liked = characters.filter((c) => likedIds.has(c.id));

  return (
    <div className="gradient-bg min-h-full">
      <header className="px-5 pt-6 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Heart size={22} className="fill-pink-400 text-pink-400" />
          <h1 className="text-xl font-extrabold text-gray-800">Favorites</h1>
        </div>
        <p className="text-sm text-gray-500">Your favourite companions 💕</p>
      </header>

      {liked.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center px-8 py-16 text-center"
          data-ocid="favorites.empty_state"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center mb-4 shadow-pink">
            <Heart size={36} className="text-pink-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-700 mb-2">
            No favorites yet!
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Your matches will appear here 💕 Start liking characters to see them
            here!
          </p>
          <div className="mt-4 flex items-center gap-1 text-pink-400">
            <Sparkles size={14} />
            <span className="text-xs font-semibold">
              Tap the ♥ on any character card
            </span>
          </div>
        </div>
      ) : (
        <div className="px-5 pb-6 space-y-3">
          {liked.map((char, i) => (
            <button
              type="button"
              key={char.id}
              data-ocid={`favorites.item.${i + 1}`}
              onClick={() => onOpenProfile(char)}
              className="w-full card-glass rounded-2xl p-3 flex items-center gap-3 shadow-card hover:shadow-card-hover transition-shadow text-left"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${char.avatarGradient} overflow-hidden flex-shrink-0 avatar-ring`}
              >
                <img
                  src={char.avatarImage}
                  alt={char.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="font-bold text-sm text-gray-800">{char.name}</p>
                  {char.isOnline && (
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                  )}
                </div>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {char.tagline}
                </p>
                <div className="flex gap-1 mt-1">
                  {char.personalityTags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-pink-50 text-pink-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Heart
                size={18}
                className="fill-pink-400 text-pink-400 flex-shrink-0"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
