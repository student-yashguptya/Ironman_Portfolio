export const CINE_FRAME_COUNT = 169;

export const cineFramePath = (n: number) =>
  `/frames2/frame_${String(n).padStart(4, "0")}.jpg`;

export type Beat = {
  id: string;
  show: number;
  hide: number;
  label: string;
  quote: string;
  speaker: string;
  film: string;
};

export const BEATS: Beat[] = [
  {
    id: "b1",
    show: 0.1,
    hide: 0.3,
    label: "01 — Foundation",
    quote: "Architecting scalable systems from the ground up.",
    speaker: "Strategy",
    film: "SYSTEM ARCHITECTURE",
  },
  {
    id: "b2",
    show: 0.35,
    hide: 0.55,
    label: "02 — Integration",
    quote: "Bridging the gap between design and robust backend infrastructure.",
    speaker: "Execution",
    film: "FULL STACK",
  },
  {
    id: "b3",
    show: 0.6,
    hide: 0.8,
    label: "03 — Delivery",
    quote: "Delivering production-ready applications with zero compromises.",
    speaker: "Impact",
    film: "PRODUCT RELEASE",
  },
];

export const CINE_INTRO_FADE_END = 0.08;
