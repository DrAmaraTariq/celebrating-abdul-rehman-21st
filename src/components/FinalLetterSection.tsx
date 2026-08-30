import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";

const LETTER_PARAGRAPHS = [
  "I don't know whether this will reach you or not. But if you are reading this, it means it did. I hope that after reading everything here, you respect my boundary and do not try to reach out to me again.",
  "Happy 21st Birthday, Abdul Rehman. 21 is a mature milestone, and you are growing older year by year.",
  "I know you weren't expecting to hear from me today, and to be honest, I am not entirely sure why I am writing this either. But even though there is distance and hurt between us, I didn't want you to feel alone on your special day.",
  "You might be shocked to read these words. There are aspects of me you never knew, sides I chose not to show, because I didn't want to be an open book. But I hope that upon reading the very first line, you knew exactly who wrote this for you.",
  "I know I said last time that there was nothing left on my end, and I stand by those words. I am not writing this to become a puppet again or to reopen old wounds.",
  "For a long time, I thought you were the best person for me. Seeing you move on with someone else was my breaking point. I couldn't share you, and when you unfriended me simply because I said I couldn't meet—and accepted that there was nothing left between us—it hurt. But today, I can say I am okay in my life without you.",
  "You were the first person I truly felt for. I wanted to talk to you and share what I felt, but it always seemed like you were busy. You had time for your friends, your family, your siblings, and your construction site—but rarely for me. A person's interest shows in their behavior. Even if we were both busy, effort could have been made once a week if it mattered to you.",
  "When you told me I always taunted you or started fights, I genuinely tried to change. I stopped bringing up the past, stopped complaining, and tried not to be toxic. But over time, I realized the issue wasn't my behavior or your studies—it was simply a lack of effort.",
  "I am not saying this to get you back. I just want to acknowledge how it felt to be left out by the person I trusted most. I was loyal to you the entire time, even if you chose to believe otherwise or called me names like 'playgirl.' I remember every word that hurt me, and I tried to process it all in silence. I hide my emotions well, which led you to believe I was strong or didn't feel anything. The truth is, you were the person in my life I cried the most for.",
  "It sounds more like a breakup note than a birthday wish, doesn't it? But despite the pain, there were good times, too.",
  "My feelings for you started way back in nursery school. I still clearly remember us walking through the streets, laughing, talking about our classmates, and sitting together in class. Even after I left that school, whenever I passed you in the street, my heart would race.",
  "For 6 or 7 years, I convinced myself that you had forgotten I existed. Then, when I joined SPS, I had no idea it was your father's school or that you were there. Seeing you again brought back all that nervousness. Every step you took toward me made me wonder if you remembered us from play school. I was shy and pulled back because I didn't want to get hurt.",
  "When I finally asked you over chat if you loved me because of our childhood connection, and you said 'no' and that you didn't remember, I felt foolish. My softest corner for you was rooted in those childhood memories.",
  "You once said you stopped liking me because I wasn't the same person anymore. I understand. I am not writing this to change your mind—it is your decision, and I would never force anyone to stay with me. You are free to pursue your life, and I sincerely hope your wishes come true.",
  "I wanted to make you feel special today, even if sharing these thoughts brings up heavy emotions. If you are reading this, please know that I do not expect a reply, an apology, or a realization. We have ended, and I accept that. There are still many things left unsaid, but I sincerely hope you find the path to the success you sacrificed so much for.",
  "I wish you the best of luck for the years ahead.",
  "Happy Birthday, Dr. Abdul Rehman.",
];

export default function FinalLetterSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-5 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-2xl">
        <SectionHeader
          eyebrow="06 — Written, Not Rehearsed"
          title="Final Letter"
          subtitle="An unsealed envelope, and everything that was left to say."
        />

        {!open ? (
          <button
            onClick={() => setOpen(true)}
            aria-label="Open birthday note for Abdul Rehman"
            className="group mx-auto flex w-full max-w-md flex-col items-center gap-5 rounded-xl2 border border-border-subtle bg-bg-surface px-8 py-14 shadow-soft transition active:scale-[0.99]"
          >
            <div className="relative flex h-28 w-40 items-center justify-center rounded-lg bg-bg-card ring-1 ring-border-subtle">
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 48%, rgba(232,224,213,0.9) 48%, rgba(232,224,213,0.9) 52%, transparent 52%)",
                }}
              />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent-main text-bg-surface shadow-md transition-transform duration-300 group-hover:scale-105">
                <Mail className="h-4 w-4" />
              </div>
            </div>
            <p className="font-serif text-xl text-accent-main">
              Open Birthday Note for Abdul Rehman
            </p>
            <p className="text-xs uppercase tracking-[0.16em] text-ink-secondary">
              Tap the envelope
            </p>
          </button>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-xl2 border border-border-subtle bg-bg-surface p-6 shadow-soft md:p-10"
            >
              <p className="mb-6 text-center font-display text-2xl italic text-accent-main">
                For Dr. Abdul Rehman
              </p>

              <div className="flex flex-col gap-4 text-sm leading-relaxed text-ink-primary md:text-[15px]">
                {LETTER_PARAGRAPHS.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-8 rounded-xl2 bg-bg-card px-5 py-4 text-center">
                <p className="text-sm italic text-ink-secondary">
                  This page is a quiet gift with no reply needed. Enjoy your
                  day to the fullest.
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
