import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Stethoscope, Sparkles } from "lucide-react";
import EmberCanvas from "./EmberCanvas";
import PlaceholderImage from "./PlaceholderImage";
import { useCountdown, pad } from "../lib/useCountdown";

function Flame({ lit, onBlow }: { lit: boolean; onBlow: () => void }) {
  return (
    <button
      onClick={onBlow}
      disabled={!lit}
      aria-label={lit ? "Blow out the candle" : "Candle is out"}
      className="group relative flex flex-col items-center focus-visible:outline-none"
    >
      <AnimatePresence>
        {lit && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.4 }}
            transition={{ duration: 0.4 }}
            className="mb-[-2px] h-6 w-3 origin-bottom rounded-full bg-gradient-to-t from-accent-gold via-amber-300 to-yellow-100 animate-flicker"
            style={{ filter: "drop-shadow(0 0 6px rgba(212,175,55,0.7))" }}
          />
        )}
      </AnimatePresence>
      <div className="h-10 w-2.5 rounded-sm bg-gradient-to-b from-bg-surface to-bg-card ring-1 ring-border-subtle" />
    </button>
  );
}

function Cake() {
  const [lit, setLit] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [revealed, setRevealed] = useState(false);

  function handleBlow() {
    setLit(false);
    setShowToast(true);
    window.setTimeout(() => setRevealed(true), 900);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 flex items-end gap-4">
        <Flame lit={lit} onBlow={handleBlow} />
      </div>

      {/* Minimalist SVG cake */}
      <svg
        width="220"
        height="110"
        viewBox="0 0 220 110"
        className="drop-shadow-[0_10px_20px_rgba(88,24,37,0.08)]"
      >
        <rect x="30" y="60" width="160" height="40" rx="10" fill="#F3EEE7" stroke="#E8E0D5" />
        <rect x="45" y="35" width="130" height="30" rx="8" fill="#FFFDF9" stroke="#E8E0D5" />
        <rect x="30" y="60" width="160" height="8" fill="#D4AF37" opacity="0.25" />
        <rect x="45" y="35" width="130" height="6" fill="#D4AF37" opacity="0.2" />
      </svg>

      <button
        onClick={!lit ? undefined : handleBlow}
        className="mt-4 rounded-full bg-accent-main px-5 py-2.5 text-sm font-medium text-bg-surface shadow-soft transition active:scale-[0.98] disabled:opacity-40"
        disabled={!lit}
      >
        {lit ? "Tap the flame to make a wish" : "Wish made"}
      </button>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-5 rounded-xl2 border border-accent-gold/40 bg-bg-card px-5 py-3 text-center text-sm italic text-accent-subtle"
          >
            May all your wishes come true this year, Dr. Abdul Rehman.
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-6 rounded-xl2 bg-accent-main px-6 py-4 text-center shadow-soft"
          >
            <p className="font-display text-xl text-bg-surface md:text-2xl">
              Happy 21st Birthday, Abdul Rehman
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CelebrationSection() {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <section className="relative overflow-hidden px-5 py-10 md:px-12 md:py-16">
      <EmberCanvas />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-2 text-accent-subtle">
          <Stethoscope className="h-5 w-5" strokeWidth={1.75} />
          <span className="text-xs font-semibold uppercase tracking-[0.2em]">
            The Celebration
          </span>
        </div>

        <h1 className="font-display text-4xl leading-tight text-ink-primary md:text-5xl">
          Twenty-one candles, <br className="hidden md:block" />
          <span className="italic text-accent-main">one quiet toast.</span>
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-accent-main md:text-base">
          Celebrating Dr. Abdul Rehman's 21st year until midnight.
        </p>

        {/* REPLACEMENT INSTRUCTION: Replace src path with your local image file in VS Code */}
        <div className="mt-8 overflow-hidden rounded-xl2 border border-border-subtle bg-bg-card shadow-soft">
          <PlaceholderImage
            src="./assets/images/hero-celebration.jpg"
            alt="A warm portrait honoring a future in medicine"
            ratio="landscape"
            className="w-full"
          />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="rounded-xl2 border border-border-subtle bg-bg-surface p-6 shadow-softer">
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">
              <Sparkles className="h-4 w-4" /> Counting down to midnight
            </p>
            <div className="flex items-baseline gap-3 font-display text-4xl text-accent-main md:text-5xl">
              <span>{pad(hours)}</span>
              <span className="text-accent-gold">:</span>
              <span>{pad(minutes)}</span>
              <span className="text-accent-gold">:</span>
              <span>{pad(seconds)}</span>
            </div>
            <div className="mt-1 flex gap-6 text-[11px] uppercase tracking-wide text-ink-secondary">
              <span>Hours</span>
              <span>Minutes</span>
              <span>Seconds</span>
            </div>
          </div>

          <div className="flex justify-center rounded-xl2 border border-border-subtle bg-bg-surface p-6 shadow-softer">
            <Cake />
          </div>
        </div>
      </div>
    </section>
  );
}
