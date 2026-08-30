import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { cn } from "../lib/utils";

const WHISPERS = [
  {
    id: "corner",
    title: "The street corner near play school",
    text: "Some streets stay soft in memory long after everything else has faded.",
  },
  {
    id: "books",
    title: "Medical Books ",
    text: "How can I forget this part of our lives..",
  },
  {
    id: "distance",
    title: "The distance we never closed",
    text: "Not for lack of feeling. Just for lack of time given to it.",
  },
];

function WhisperTile({ title, text }: { title: string; text: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className={cn(
        "flex flex-col rounded-xl2 border border-accent-gold/30 bg-white/40 p-5 text-left backdrop-blur-md transition-all duration-300",
        "shadow-[0_4px_20px_rgba(212,175,55,0.08)] hover:border-accent-gold/60"
      )}
    >
      <p className="font-serif text-base text-ink-primary">{title}</p>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <p className="overflow-hidden text-sm italic leading-relaxed text-ink-secondary">
          {text}
        </p>
      </div>
    </button>
  );
}

export default function UnspokenSecretsSection() {
  return (
    <section className="px-5 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          eyebrow="05 — Held Close, Said Quietly"
          title="Unspoken Secrets"
          subtitle="A few small tiles of memory, kept gently close."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {WHISPERS.map((w) => (
            <WhisperTile key={w.id} title={w.title} text={w.text} />
          ))}
        </div>
      </div>
    </section>
  );
}
