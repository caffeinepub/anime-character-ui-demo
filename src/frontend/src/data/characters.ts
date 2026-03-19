export interface ChatMessage {
  id: number;
  from: "character" | "user";
  text: string;
  time: string;
}

export interface Character {
  id: number;
  name: string;
  age: number;
  tagline: string;
  bio: string;
  personalityTags: string[];
  isOnline: boolean;
  avatarImage: string;
  avatarGradient: string;
  chatMessages: ChatMessage[];
  activityPosts: string[];
  stats: { friends: number; likes: number; topMatch: boolean };
}

export const characters: Character[] = [
  {
    id: 1,
    name: "Sakura Himeki",
    age: 18,
    tagline: "Dreamer of starlit skies ✨",
    bio: "Hi there! I'm Sakura, an art student who finds beauty in every sunset and starlit sky. I love watercolor painting, visiting flower markets, and getting lost in fantasy novels. My friends say I have my head in the clouds — but honestly, that's where all the best ideas live! Looking for someone to share quiet evenings and creative adventures with. 🌸",
    personalityTags: ["Sunny", "Cheerful", "Creative", "Dreamy"],
    isOnline: true,
    avatarImage: "/assets/generated/sakura-avatar.dim_400x400.png",
    avatarGradient: "from-pink-300 to-rose-300",
    chatMessages: [
      {
        id: 1,
        from: "character",
        text: "Good morning! ☀️ Did you see the sunrise today? The sky was painted in the most gorgeous shades of peach and gold!",
        time: "9:02 AM",
      },
      {
        id: 2,
        from: "user",
        text: "Haha, I was still asleep! Tell me about it?",
        time: "9:15 AM",
      },
      {
        id: 3,
        from: "character",
        text: "Oh, it was like a watercolor dream~ I actually sketched it in my journal. I could show you sometime! 🎨",
        time: "9:16 AM",
      },
      {
        id: 4,
        from: "character",
        text: "Also, I found this cute little café near the art museum. Want to go this weekend? They have sakura latte! 🌸☕",
        time: "9:18 AM",
      },
    ],
    activityPosts: [
      "✨ Just finished my latest watercolor piece — a field of cosmos flowers at dusk. Art therapy is real!",
      "🌅 Woke up at 5am to paint the sunrise. Worth every sleepy yawn.",
      '📚 Currently reading "The Night Circus" for the third time. Some books just never get old~',
    ],
    stats: { friends: 142, likes: 387, topMatch: true },
  },
  {
    id: 2,
    name: "Yuki Ashiragi",
    age: 17,
    tagline: "Ice queen with a warm heart 💙",
    bio: "People say I'm hard to approach — and honestly, I get it. I don't open up easily. But once I do, it's forever. I love winter mornings, black coffee, classical music, and long walks in the snow. I write poetry when I think no one's watching, and I believe every person has a story worth listening to. Are you patient enough to find mine? ❄️",
    personalityTags: ["Cool", "Mysterious", "Loyal", "Poetic"],
    isOnline: true,
    avatarImage: "/assets/generated/yuki-avatar.dim_400x400.png",
    avatarGradient: "from-blue-200 to-indigo-300",
    chatMessages: [
      { id: 1, from: "character", text: "...Hey.", time: "2:30 PM" },
      {
        id: 2,
        from: "user",
        text: "Oh, hi Yuki! How are you?",
        time: "2:31 PM",
      },
      {
        id: 3,
        from: "character",
        text: "Fine. I finished a new poem today. It's about winter stars. Don't read too much into it.",
        time: "2:33 PM",
      },
      {
        id: 4,
        from: "character",
        text: "...But you can read it if you want. I don't mind. Just you. 💙",
        time: "2:34 PM",
      },
    ],
    activityPosts: [
      "❄️ First snow of the season. I stood in it for 20 minutes. No regrets.",
      "📝 Wrote 3 poems today. Deleted 2. Kept 1. Progress.",
      "🎻 Currently looping Chopin Nocturnes. Some days call for it.",
    ],
    stats: { friends: 89, likes: 245, topMatch: false },
  },
  {
    id: 3,
    name: "Hana Mizuki",
    age: 19,
    tagline: "Where petals meet the wind 🌸",
    bio: "I spend my mornings tending to my flower garden and my evenings writing in my journal. I believe life is a poem — you just have to slow down enough to read it. I love herbal tea, rainy days, hand-written letters, and the sound of wind through cherry trees. If you're gentle with words and generous with kindness, we'll get along beautifully. 🌿",
    personalityTags: ["Gentle", "Caring", "Poetic", "Nurturing"],
    isOnline: false,
    avatarImage: "/assets/generated/hana-avatar.dim_400x400.png",
    avatarGradient: "from-rose-200 to-pink-300",
    chatMessages: [
      {
        id: 1,
        from: "character",
        text: "Hello~ 🌸 I was just making chamomile tea. Would you like a virtual cup?",
        time: "4:00 PM",
      },
      {
        id: 2,
        from: "user",
        text: "That sounds lovely, yes please!",
        time: "4:05 PM",
      },
      {
        id: 3,
        from: "character",
        text: "Here you go~ 🍵 I added a sprig of lavender, just like the season.",
        time: "4:06 PM",
      },
      {
        id: 4,
        from: "character",
        text: "The garden is blooming so beautifully today. I'd love to show you someday. 🌷",
        time: "4:08 PM",
      },
    ],
    activityPosts: [
      "🌷 The tulips are finally blooming in my garden. Spring is the most hopeful season.",
      "🍵 Made lavender shortbread today. Left some at the neighbor's door.",
      "✉️ Wrote a letter to an old friend. Physical letters feel so much more sincere.",
    ],
    stats: { friends: 167, likes: 412, topMatch: true },
  },
  {
    id: 4,
    name: "Rin Akatsuki",
    age: 16,
    tagline: "Chaos in a cute package 🎮",
    bio: "HELLO!!! I'm Rin and I'm basically running on a diet of energy drinks, instant ramen, and competitive gaming. I'm ranked Diamond in three different games, and I will absolutely destroy you in Mario Kart (lovingly). I'm loud, messy, and 100% extra — but my friends say I'm the most ride-or-die person they know. Let's play something! 🎮🔥",
    personalityTags: ["Energetic", "Playful", "Competitive", "Loyal"],
    isOnline: true,
    avatarImage: "/assets/generated/rin-avatar.dim_400x400.png",
    avatarGradient: "from-red-300 to-orange-300",
    chatMessages: [
      {
        id: 1,
        from: "character",
        text: "YO!! Are you free right now?? There's a limited time event in the game and we HAVE to do it!!",
        time: "7:22 PM",
      },
      { id: 2, from: "user", text: "Ahaha, let me log in!", time: "7:25 PM" },
      {
        id: 3,
        from: "character",
        text: "YESSS LETS GOOO 🎮🔥 I've been warming up for 2 hours. I'm in peak condition.",
        time: "7:25 PM",
      },
      {
        id: 4,
        from: "character",
        text: "Also I made us both matching player icons lol. Don't be mad it's cute 🥺",
        time: "7:26 PM",
      },
    ],
    activityPosts: [
      "🏆 RANK UP!! Diamond II to Diamond I baby!! The grind pays off!!",
      "😤 Lost 3 games in a row. Taking a 10 minute break. (I took a 2 hour break)",
      "🍜 It is 3am and I am eating instant ramen. No regrets. Living my best life.",
    ],
    stats: { friends: 203, likes: 531, topMatch: false },
  },
  {
    id: 5,
    name: "Noa Shirato",
    age: 20,
    tagline: "Stars align when she smiles 🌙",
    bio: "I'm the oldest one here, and people often come to me for advice — which I find both flattering and a little daunting. I study astronomy and philosophy, and I believe the universe is far more connected than we think. I enjoy midnight stargazing, deep conversations, and making people feel understood. If you ever need someone to just listen, I'm here. 🌙",
    personalityTags: ["Calm", "Wise", "Nurturing", "Thoughtful"],
    isOnline: true,
    avatarImage: "/assets/generated/noa-avatar.dim_400x400.png",
    avatarGradient: "from-indigo-300 to-purple-400",
    chatMessages: [
      {
        id: 1,
        from: "character",
        text: "Good evening~ 🌙 The Perseid meteor shower peaks tonight. Are you planning to watch?",
        time: "9:45 PM",
      },
      {
        id: 2,
        from: "user",
        text: "I didn't know about it! Where should I look?",
        time: "9:50 PM",
      },
      {
        id: 3,
        from: "character",
        text: "Look northeast, away from city lights if you can. The best show starts around midnight. ✨",
        time: "9:51 PM",
      },
      {
        id: 4,
        from: "character",
        text: "I'll be watching from my rooftop. We can share what we see~ It feels less lonely that way 🌠",
        time: "9:52 PM",
      },
    ],
    activityPosts: [
      "🌌 Stayed up until 3am for the lunar eclipse. Some things are worth the tired eyes.",
      '📖 Finished "Cosmos" by Carl Sagan. Every human should read this at least once.',
      "☕ Long coffee chat with a first-year student who was feeling lost. I remember that feeling.",
    ],
    stats: { friends: 198, likes: 489, topMatch: true },
  },
  {
    id: 6,
    name: "Miku Harune",
    age: 17,
    tagline: "Music is her mother tongue 🎵",
    bio: "Music is how I breathe. I play four instruments (piano, violin, guitar, and bass — yes really), produce my own tracks, and have a playlist for every emotion imaginable. I'm a bit of a dreamer, a lot of a perfectionist, and I think the right song can change your entire day. Let me make you a playlist sometime? 🎵🎹",
    personalityTags: ["Passionate", "Artistic", "Dreamy", "Perfectionist"],
    isOnline: false,
    avatarImage: "/assets/generated/miku-avatar.dim_400x400.png",
    avatarGradient: "from-teal-300 to-cyan-300",
    chatMessages: [
      {
        id: 1,
        from: "character",
        text: "I'm in the middle of recording and I can't get this bridge right 😤 It's been 3 hours",
        time: "11:30 AM",
      },
      {
        id: 2,
        from: "user",
        text: "Take a break? Maybe fresh ears will help!",
        time: "11:45 AM",
      },
      {
        id: 3,
        from: "character",
        text: "...You're right. I made tea instead. Also I made you a playlist while I was procrastinating 🎵",
        time: "11:50 AM",
      },
      {
        id: 4,
        from: "character",
        text: "It's called \"rainy afternoon energy\" — 22 songs. I think you'll like it~ 🎧",
        time: "11:51 AM",
      },
    ],
    activityPosts: [
      "🎹 New track is 80% done. The last 20% is always the hardest.",
      "🎻 Played violin in the park today. An old man stopped and clapped. Made my week.",
      "🎧 Current obsession: lo-fi jazz fusion. It just hits different at 2am.",
    ],
    stats: { friends: 156, likes: 398, topMatch: false },
  },
  {
    id: 7,
    name: "Aoi Tsukino",
    age: 18,
    tagline: "Adventure awaits every day 🗺️",
    bio: "I wake up every morning thinking: what's the most interesting thing I could do today? I love hiking, street food, spontaneous road trips, and talking to strangers who turn out to be fascinating. I'm currently learning my 4th language (Mandarin — it's going okay), and I have a map on my wall with pins in every place I've been. Let's make some memories! 🗺️",
    personalityTags: ["Bold", "Curious", "Optimistic", "Adventurous"],
    isOnline: true,
    avatarImage: "/assets/generated/aoi-avatar.dim_400x400.png",
    avatarGradient: "from-sky-300 to-blue-400",
    chatMessages: [
      {
        id: 1,
        from: "character",
        text: "Okay so hypothetically... if we left RIGHT NOW we could make it to the coast by sunset 👀",
        time: "3:15 PM",
      },
      { id: 2, from: "user", text: "Aoi, it's a Tuesday???", time: "3:17 PM" },
      {
        id: 3,
        from: "character",
        text: "And?? The sea doesn't care what day it is!! 🌊 Come ON life is short!!",
        time: "3:18 PM",
      },
      {
        id: 4,
        from: "character",
        text: "I'll drive, you pick the playlist. Deal? 🗺️🎵",
        time: "3:18 PM",
      },
    ],
    activityPosts: [
      "🏔️ Climbed a new trail today. The view from the top was absolutely worth the aching legs.",
      "🍜 Found the BEST ramen shop in a tiny alley. No signs. Just vibes. 10/10.",
      "🌏 Added 3 new pins to my map! Current count: 47 places visited.",
    ],
    stats: { friends: 231, likes: 567, topMatch: true },
  },
  {
    id: 8,
    name: "Rei Fujishiro",
    age: 19,
    tagline: "Silence speaks louder 🖤",
    bio: "I don't talk much, but I observe everything. I'm a photographer and part-time bookbinder — yes, I make books by hand. I find beauty in quiet things: morning fog, old architecture, the sound of rain on windows. I'm intensely loyal to the few people I let in, and I will absolutely back you up without asking questions. Rare, I know. 🖤",
    personalityTags: ["Quiet", "Intense", "Loyal", "Artistic"],
    isOnline: false,
    avatarImage: "/assets/generated/rei-avatar.dim_400x400.png",
    avatarGradient: "from-purple-400 to-violet-500",
    chatMessages: [
      {
        id: 1,
        from: "character",
        text: "I took a photo today that I think you'd like.",
        time: "6:00 PM",
      },
      { id: 2, from: "user", text: "Oh? What of?", time: "6:10 PM" },
      {
        id: 3,
        from: "character",
        text: "An empty park bench in the rain. The light hit it at just the right angle.",
        time: "6:11 PM",
      },
      {
        id: 4,
        from: "character",
        text: "I'll show you the print when it's developed. I think... you understand things like that. 🖤",
        time: "6:12 PM",
      },
    ],
    activityPosts: [
      "📷 Developed a new roll of film. Some shots surprised me.",
      "📚 Finished binding a leather journal. Gave it to a friend. They cried.",
      "🌧️ Rainy day. Sat by the window for an hour. Did nothing. Perfect.",
    ],
    stats: { friends: 67, likes: 289, topMatch: false },
  },
];
