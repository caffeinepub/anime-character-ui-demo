import {
  Bell,
  ChevronRight,
  Heart,
  HelpCircle,
  Settings,
  Shield,
  Star,
  User,
} from "lucide-react";

export function UserProfileScreen() {
  const settingsItems = [
    { icon: Bell, label: "Notifications", desc: "Manage your alerts" },
    { icon: Shield, label: "Privacy", desc: "Control your data" },
    { icon: HelpCircle, label: "Help & Support", desc: "Get assistance" },
    { icon: Settings, label: "Settings", desc: "App preferences" },
  ];

  return (
    <div className="gradient-bg min-h-full">
      <header className="px-5 pt-6 pb-4">
        <h1 className="text-xl font-extrabold text-gray-800">My Profile</h1>
        <p className="text-sm text-gray-500 mt-0.5">Manage your account ✨</p>
      </header>

      {/* Profile card */}
      <section className="px-5 mb-5">
        <div className="card-glass rounded-3xl p-5 flex flex-col items-center text-center shadow-card">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center shadow-pink mb-3">
            <User size={36} className="text-white" />
          </div>
          <h2 className="font-extrabold text-lg text-gray-800">Maya Tanaka</h2>
          <p className="text-sm text-gray-400 mt-0.5">@maya_chan</p>
          <div className="flex items-center gap-1 mt-1.5">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <Star size={12} className="text-gray-300" />
            <span className="text-xs text-gray-500 ml-1">4.2 rating</span>
          </div>
          <div className="flex gap-6 mt-4 pt-4 border-t border-pink-100 w-full justify-center">
            <div className="text-center">
              <p className="font-bold text-gray-800">12</p>
              <p className="text-[10px] text-gray-400">Matches</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800">47</p>
              <p className="text-[10px] text-gray-400">Liked</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-gray-800">138</p>
              <p className="text-[10px] text-gray-400">Chats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="px-5 mb-5">
        <h2 className="font-bold text-sm text-gray-700 mb-2">My Badges</h2>
        <div className="flex gap-2">
          {[
            { emoji: "💖", label: "Matchmaker" },
            { emoji: "⭐", label: "Top Fan" },
            { emoji: "🌸", label: "Early Bird" },
          ].map((badge) => (
            <div
              key={badge.label}
              className="card-glass rounded-xl px-3 py-2 flex flex-col items-center gap-1 flex-1 shadow-sm"
            >
              <span className="text-xl">{badge.emoji}</span>
              <span className="text-[9px] font-semibold text-gray-600">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Settings list */}
      <section className="px-5 pb-6">
        <h2 className="font-bold text-sm text-gray-700 mb-2">Settings</h2>
        <div className="card-glass rounded-2xl overflow-hidden shadow-card">
          {settingsItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                type="button"
                key={item.label}
                data-ocid={`user_profile.item.${i + 1}`}
                className={`w-full flex items-center gap-3 px-4 py-3.5 hover:bg-pink-50/50 transition-colors text-left ${
                  i < settingsItems.length - 1
                    ? "border-b border-pink-100/60"
                    : ""
                }`}
              >
                <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center">
                  <Icon size={16} className="text-pink-400" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-gray-700">
                    {item.label}
                  </p>
                  <p className="text-[10px] text-gray-400">{item.desc}</p>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            );
          })}
        </div>
      </section>

      <div className="px-5 pb-6">
        <button
          type="button"
          data-ocid="user_profile.primary_button"
          className="w-full py-3 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600 font-bold text-sm border border-pink-200 hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          <Heart size={16} className="fill-pink-400 text-pink-400" />
          Edit Profile
        </button>
      </div>
    </div>
  );
}
