export const FRAME_COUNT = 169;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Dialogue = {
  id: string;
  show: number;
  hide: number;
  quote: string;
  speaker: string;
  film: string;
};

export const DIALOGUES: Dialogue[] = [
  {
    id: "d1",
    show: 0.1,
    hide: 0.3,
    quote: "Building digital experiences with a focus on seamless performance.",
    speaker: "Philosophy",
    film: "CORE VALUES",
  },
  {
    id: "d2",
    show: 0.35,
    hide: 0.55,
    quote: "Transforming complex problems into elegant solutions.",
    speaker: "Approach",
    film: "METHODOLOGY",
  },
  {
    id: "d3",
    show: 0.6,
    hide: 0.8,
    quote: "Engineering the future through intelligent automation.",
    speaker: "Vision",
    film: "LONG TERM",
  },
];

export const HERO_TEXT_FADE_END = 0.08;
