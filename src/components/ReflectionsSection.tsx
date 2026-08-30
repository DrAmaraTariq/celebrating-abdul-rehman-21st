import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Feather } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { cn } from "../lib/utils";

interface ReflectionCard {
  id: string;
  teaser: string;
  full: string;
}

const CARDS: ReflectionCard[] = [
  {
    id: "smile",
    teaser: "A memory of us that still makes me smile...",
    full: "I will always remember how you waited for me in the scorching 45°C heat just to help me cross the road. When Ubaid's knee almost bumped into me, you grabbed him and said, 'Stay away!' That moment is something I won't forget.",
  },
  {
    id: "truth",
    teaser: "A quiet truth I had to accept...",
    full: "I used to think that working hard for my career and studies would all be worth it if I got to build a life with you. In the past, I thought having you by my side would make all the effort complete. I have since taught myself that not every wish comes true, and I have made peace with that.",
  },
  {
    id: "respect",
    teaser: "The quality I respect most in you...",
    full: "I admire your dedication and drive when it comes to your medical studies. I know how much success means to you, even though the pursuit of it cost us our connection. I genuinely want to see you achieve massive success.",
  },
  {
    id: "wish",
    teaser: "My biggest wish for your 21st year...",
    full: "I hope you continue to give your absolute best and go on to become a successful doctor in Pakistan—even though I won't be standing by your side when you reach that milestone.",
  },
  {
    id: "dream",
    teaser: "A dream held for you from afar...",
    full: "I always hoped to see you become a surgeon. Achieving that would be a dream come true for you, Dr. Abdul Rehman, and I truly wish you reach that point in your medical journey.",
  },
];

function ReflectionTile({ card }: { card: ReflectionCard }) {
  const [open, setOpen] = useState(false);

  return (
    <button
      onClick={() => setOpen((v) => !v)}
      aria-expanded={open}
      className={cn(
        "w-full rounded-xl2 border border-border-subtle p-6 text-left shadow-softer transition-all duration-300 active:scale-[0.99]",
        open ? "bg-accent-main" : "bg-bg-surface hover:bg-bg-card"
      )}
    >
      <div className="mb-3 flex items-center gap-2">
        <Feather
          className={cn(
            "h-4 w-4",
            open ? "text-accent-gold" : "text-accent-subtle"
          )}
        />
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.16em]",
            open ? "text-accent-gold" : "text-ink-secondary"
          )}
        >
          {open ? "Reflection" : "Tap to reveal"}
        </span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!open ? (
          <motion.p
            key="teaser"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="font-serif text-xl italic leading-snug text-ink-primary"
          >
            {card.teaser}
          </motion.p>
        ) : (
          <motion.p
            key="full"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm leading-relaxed text-bg-surface md:text-base"
          >
            {card.full}
          </motion.p>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function ReflectionsSection() {
  return (
    <section className="px-5 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          eyebrow="04 — Five Quiet Truths"
          title="Reflections"
          subtitle="Each card holds something I never quite said out loud."
        />

        <div className="flex flex-col gap-5">
          {CARDS.map((card) => (
            <ReflectionTile key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
