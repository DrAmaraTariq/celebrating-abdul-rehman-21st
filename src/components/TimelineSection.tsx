import { useState } from "react";
import SectionHeader from "./SectionHeader";
import PlaceholderImage from "./PlaceholderImage";
import { cn } from "../lib/utils";

interface TimelineCard {
  id: string;
  image: string[];
  title: string;
  back: string;
}

const CARDS: TimelineCard[] = [
  {
    id: "nursery",
    image: [
      "./assets/images/timeline-nursery.png",
      "./assets/images/timeline-nursery.jpg",
    ],
    title: "Nursery Class",
    back: "Street walks & sitting together in play school.",
  },
  {
    id: "sps",
    image: [
      "./assets/images/timeline-sps.png",
      "./assets/images/timeline-sps.jpg",
    ],
    title: "SPS Years",
    back: "Reconnecting from afar—seeing you walk past in the hallways of your father's school.",
  },
  {
    id: "21st",
    image: [
      "./assets/images/timeline-21st.png",
      "./assets/images/timeline-21st.jpg",
    ],
    title: "21st Birthday",
    back: "Wishing Dr. Abdul Rehman genuine peace and massive success from a distance.",
  },
];

function HangingCard({ card }: { card: TimelineCard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* String + clothespin */}
      <div className="h-8 w-px bg-border-subtle" />
      <div className="-mt-1 mb-2 h-3 w-6 rounded-sm bg-accent-subtle/70 shadow-sm" />

      <button
        onClick={() => setFlipped((v) => !v)}
        aria-label={`Flip card: ${card.title}`}
        className="group h-64 w-48 [perspective:1200px] focus-visible:outline-none"
      >
        <div
          className={cn(
            "relative h-full w-full rounded-xl2 shadow-soft transition-transform duration-700 [transform-style:preserve-3d]",
            flipped ? "[transform:rotateY(180deg)]" : ""
          )}
        >
          {/* Front */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-xl2 border border-border-subtle bg-bg-surface [backface-visibility:hidden]">
            {/* REPLACEMENT INSTRUCTION: Replace src path with your local image file in VS Code */}
            <PlaceholderImage
              src={card.image}
              alt={card.title}
              ratio="landscape"
              className="h-2/3 w-full"
            />
            <div className="flex flex-1 items-center justify-center px-3">
              <p className="font-serif text-lg text-ink-primary">{card.title}</p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 flex items-center justify-center rounded-xl2 border border-border-subtle bg-accent-main p-5 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <p className="font-serif text-base italic leading-relaxed text-bg-surface">
              {card.back}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section className="px-5 py-10 md:px-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="02 — A String Of Memories"
          title="Where It All Began"
          subtitle="Tap a card to see what hangs on the other side."
        />

        <div className="relative rounded-xl2 border border-border-subtle bg-bg-card/50 px-6 py-10 md:px-10">
          {/* String line */}
          <div className="pointer-events-none absolute left-6 right-6 top-10 h-px bg-border-subtle md:left-10 md:right-10" />

          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-6">
            {CARDS.map((card) => (
              <HangingCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
