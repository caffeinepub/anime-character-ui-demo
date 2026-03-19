import { useState } from "react";
import { BottomNav } from "./components/BottomNav";
import type { Character } from "./data/characters";
import { ChatScreen } from "./screens/ChatScreen";
import { FavoritesScreen } from "./screens/FavoritesScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { UserProfileScreen } from "./screens/UserProfileScreen";

export type Screen = "home" | "profile" | "chat" | "favorites" | "user-profile";
export type NavTab = "home" | "discover" | "favorites" | "profile";

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [activeTab, setActiveTab] = useState<NavTab>("home");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );
  const [likedIds, setLikedIds] = useState<Set<number>>(new Set([1, 3]));

  const toggleLike = (id: number) => {
    setLikedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const openProfile = (char: Character) => {
    setSelectedCharacter(char);
    setScreen("profile");
  };

  const openChat = (char: Character) => {
    setSelectedCharacter(char);
    setScreen("chat");
  };

  const goHome = () => {
    setScreen("home");
    setActiveTab("home");
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === "home" || tab === "discover") {
      setScreen("home");
    } else if (tab === "favorites") {
      setScreen("favorites");
    } else if (tab === "profile") {
      setScreen("user-profile");
    }
  };

  return (
    <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
      {/* Phone frame wrapper */}
      <div
        className="relative w-full max-w-sm mx-auto"
        style={{ maxWidth: 430 }}
      >
        {/* App content */}
        <div
          className="relative bg-white/30 rounded-[3rem] overflow-hidden"
          style={{
            minHeight: "85vh",
            boxShadow:
              "0 32px 80px rgba(245, 167, 198, 0.35), 0 8px 24px rgba(0,0,0,0.1)",
          }}
        >
          <div className="h-full overflow-y-auto" style={{ paddingBottom: 80 }}>
            {screen === "home" && (
              <HomeScreen
                likedIds={likedIds}
                onToggleLike={toggleLike}
                onOpenProfile={openProfile}
              />
            )}
            {screen === "profile" && selectedCharacter && (
              <ProfileScreen
                character={selectedCharacter}
                isLiked={likedIds.has(selectedCharacter.id)}
                onToggleLike={() => toggleLike(selectedCharacter.id)}
                onBack={goHome}
                onOpenChat={() => openChat(selectedCharacter)}
              />
            )}
            {screen === "chat" && selectedCharacter && (
              <ChatScreen
                character={selectedCharacter}
                onBack={() => openProfile(selectedCharacter)}
              />
            )}
            {screen === "favorites" && (
              <FavoritesScreen
                likedIds={likedIds}
                onOpenProfile={openProfile}
              />
            )}
            {screen === "user-profile" && <UserProfileScreen />}
          </div>

          {/* Bottom Nav */}
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-2">
            <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
          </div>
        </div>
      </div>
    </div>
  );
}
