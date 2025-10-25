// src/data/organizers.ts
export type Review = {
  id: number;
  author: string;
  rating: number; // 1-5
  text: string;
  date: string;   // ISO or display
};

export type Organizer = {
  slug: string;
  name: string;
  avatar?: string;
  description: string;
  reviews: Review[];
};

export const ORGANIZERS: Record<string, Organizer> = {
  "moist-labs": {
    slug: "moist-labs",
    name: "Moist Labs",
    avatar: "/event1.webp",
    description:
      "Tech-driven launch studio focusing on premium nightlife & product activations across Jakarta.",
    reviews: [
      { id: 1, author: "Dita H.", rating: 5, text: "Well organized, on-time, great crowd!", date: "2025-07-10" },
      { id: 2, author: "Andi P.", rating: 4, text: "Sound system solid, registration smooth.", date: "2025-08-02" },
    ],
  },
  "raisa-entertainment": {
    slug: "raisa-entertainment",
    name: "Raisa Entertainment",
    avatar: "/event2.webp",
    description:
      "Concert & showcase promoter delivering intimate music experiences in West Java.",
    reviews: [
      { id: 1, author: "Sari", rating: 5, text: "Magical vibes. Would go again.", date: "2025-05-21" },
    ],
  },
  "ibl-events": {
    slug: "ibl-events",
    name: "IBL Events",
    avatar: "/event3.webp",
    description:
      "Basketball-themed parties and fan events with pro talent appearances.",
    reviews: [
      { id: 1, author: "Rifky", rating: 4, text: "Fun theme, venue a bit packed.", date: "2025-06-14" },
    ],
  },
"jakarta-sport-league": {
    slug: "jakarta-sport-league",
    name: "Jakarta Sport League",
    avatar: "/event4.webp",
    description:
      "Sports events and competitions in Jakarta.",
    reviews: [
      { id: 1, author: "Rifky", rating: 4, text: "Fun theme, venue a bit packed.", date: "2025-06-14" },
    ],
  },
  "bali-experience-group": {
    slug: "bali-experience-group",
    name: "Bali Experience Group",
    avatar: "/event5.webp",
    description:
      "Events and activities in Bali.",
    reviews: [
      { id: 1, author: "Rifky", rating: 4, text: "Fun theme, venue a bit packed.", date: "2025-06-14" },
    ],
  },
  "techconnect-indonesia": {
    slug: "techconnect-indonesia",
    name: "TechConnect Indonesia",
    avatar: "/event6.webp",
    description:
      "Events and activities in Indonesia.",
    reviews: [
      { id: 1, author: "Rifky", rating: 4, text: "Fun theme, venue a bit packed.", date: "2025-06-14" },
    ],
  },
  "cupid-events-asia": {
    slug: "cupid-events-asia",
    name: "Cupid Events Asia",
    avatar: "/event7.webp",
    description:
      "Events and activities in Asia.",
    reviews: [
      { id: 1, author: "Rifky", rating: 4, text: "Fun theme, venue a bit packed.", date: "2025-06-14" },
    ],
  },
  "kreasi-studio": {
    slug: "kreasi-studio",
    name: "Kreasi Studio",
    avatar: "/event8.webp",
    description:
      "Events and activities in Indonesia.",
    reviews: [
      { id: 1, author: "Rifky", rating: 4, text: "Fun theme, venue a bit packed.", date: "2025-06-14" },
    ],
  },
};
