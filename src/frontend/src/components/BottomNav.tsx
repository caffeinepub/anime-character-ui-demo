import { Compass, Heart, Home, User } from "lucide-react";
import type { NavTab } from "../App";

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

const tabs: { id: NavTab; label: string; icon: React.ElementType }[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "discover", label: "Discover", icon: Compass },
  { id: "favorites", label: "Favorites", icon: Heart },
  { id: "profile", label: "Profile", icon: User },
];

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <nav
      className="nav-pill rounded-full px-2 py-2 flex items-center justify-around"
      data-ocid="bottom_nav"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            type="button"
            key={tab.id}
            data-ocid={`nav.${tab.id}.tab`}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-0.5 px-4 py-2 rounded-full transition-all duration-200 ${
              isActive
                ? "btn-primary-gradient text-white shadow-pink"
                : "text-gray-400 hover:text-pink-400"
            }`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            <span
              className={`text-[10px] font-semibold ${isActive ? "text-white" : "text-gray-400"}`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
