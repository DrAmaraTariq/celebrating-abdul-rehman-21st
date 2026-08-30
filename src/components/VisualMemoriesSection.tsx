import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen } from "lucide-react";
import SectionHeader from "./SectionHeader";
import PlaceholderImage from "./PlaceholderImage";

interface MemoryCard {
  id: string;
  image: string[];
  title: string;
  details: string;
}

const CARDS: MemoryCard[] = [
  {
    id: "sun",
    image: [
      "./assets/images/memory-sun.png",
      "./assets/images/memory-sun.jpg",
    ],
    title: "The 45°C Sun",
    details:
      "Standing in 45 degree celsius for me to help me in crossing the busy road.",
  },
  {
    id: "street",
    image: [
      "./assets/images/memory-street.jpg",
      "./assets/images/memory-street.png",
    ],
    title: "A Quiet Street Walk",
    details:
      "I'm sure you dont remember this scene , but I do . we used to go home together and sound exactly the same... yeah mamybe you have some ikhtalaf here , bcs I was shy and nervous .... ummm then maybe you sound exactly same like the kid in the picture.",
  },
  {
    id: "surgeon",
    image: [
      "./assets/images/memory-surgeon.jpg",
      "./assets/images/memory-surgeon.png",
    ],
    title: "The Future Surgeon",
    details:
      "I cant forget this part now , this is the only thing rn that made us apart , so I wish the thing which made us separated atleast we both will get it ",
  },
];

export default function VisualMemoriesSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openCard = CARDS.find((c) => c.id === openId) ?? null;

  return (
    <section className="px-5 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="03 — Illustrated Recollections"
          title="Visual Memories"
          subtitle="Three scenes, held gently. Tap one to see it in full."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card) => (
            <button
              key={card.id}
              onClick={() => setOpenId(card.id)}
              className="group overflow-hidden rounded-xl2 border border-border-subtle bg-bg-surface text-left shadow-softer transition active:scale-[0.98]"
            >
              {/* REPLACEMENT INSTRUCTION: Replace src path with your local image file in VS Code */}
              <PlaceholderImage
                src={card.image}
                alt={card.title}
                ratio="landscape"
                className="w-full"
              />
              <div className="flex items-center justify-between gap-2 p-4">
                <p className="font-serif text-lg text-ink-primary">{card.title}</p>
                <BookOpen className="h-4 w-4 shrink-0 text-accent-gold" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {openCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink-primary/40 p-4"
            onClick={() => setOpenId(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg overflow-hidden rounded-xl2 border border-border-subtle bg-bg-surface shadow-soft"
              role="dialog"
              aria-modal="true"
              aria-label={openCard.title}
            >
              {/* REPLACEMENT INSTRUCTION: Replace src path with your local image file in VS Code */}
              <PlaceholderImage
                src={openCard.image}
                alt={openCard.title}
                ratio="landscape"
                className="w-full"
              />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-serif text-xl text-accent-main">
                    {openCard.title}
                  </p>
                  <button
                    onClick={() => setOpenId(null)}
                    aria-label="Close"
                    className="rounded-full p-1.5 text-ink-secondary hover:bg-bg-card"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm leading-relaxed text-ink-secondary">
                  {openCard.details}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
