# Anime Character UI Demo

## Current State
New project with no existing application files.

## Requested Changes (Diff)

### Add
- Home screen with grid of anime character cards (name, avatar, tagline)
- Character profile page (larger image, name, fictional age, personality tags, bio)
- Demo chat screen (pre-written sample messages, text input, non-functional)
- Bottom navigation bar (Home, Favorites, Profile tabs)
- Demo Like and Match buttons (no functionality)
- Hardcoded sample data for 6-8 fictional anime girl characters
- Anime-inspired romantic theme: pastel colors, rounded cards, heart icons, decorative elements
- Mobile-first responsive layout (max-width ~430px centered)

### Modify
N/A

### Remove
N/A

## Implementation Plan
1. Create hardcoded character data (name, age, tagline, bio, personality tags, avatar placeholder)
2. Build HomeScreen with character grid cards
3. Build CharacterProfile page with tags, bio, Like/Match/Chat buttons
4. Build DemoChatScreen with pre-written messages and dummy text input
5. Build BottomNavBar with Home, Favorites, Profile tabs
6. Wire React Router for navigation between screens
7. Apply pastel anime theme via Tailwind + custom CSS (gradients, shadows, rounded, hearts)
8. Minimal Motoko backend (no real data needed)
