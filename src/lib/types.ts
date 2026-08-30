export type SectionId =
  | "celebration"
  | "timeline"
  | "memories"
  | "reflections"
  | "secrets"
  | "letter";

export interface SectionMeta {
  id: SectionId;
  label: string;
  index: string;
}

export const SECTIONS: SectionMeta[] = [
  { id: "celebration", label: "The Celebration", index: "01" },
  { id: "timeline", label: "Where It All Began", index: "02" },
  { id: "memories", label: "Visual Memories", index: "03" },
  { id: "reflections", label: "Reflections", index: "04" },
  { id: "secrets", label: "Unspoken Secrets", index: "05" },
  { id: "letter", label: "Final Letter", index: "06" },
];
