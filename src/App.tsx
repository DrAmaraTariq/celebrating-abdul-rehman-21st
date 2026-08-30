import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import CelebrationSection from "./components/CelebrationSection";
import TimelineSection from "./components/TimelineSection";
import VisualMemoriesSection from "./components/VisualMemoriesSection";
import ReflectionsSection from "./components/ReflectionsSection";
import UnspokenSecretsSection from "./components/UnspokenSecretsSection";
import FinalLetterSection from "./components/FinalLetterSection";
import type { SectionId } from "./lib/types";

function renderSection(id: SectionId) {
  switch (id) {
    case "celebration":
      return <CelebrationSection />;
    case "timeline":
      return <TimelineSection />;
    case "memories":
      return <VisualMemoriesSection />;
    case "reflections":
      return <ReflectionsSection />;
    case "secrets":
      return <UnspokenSecretsSection />;
    case "letter":
      return <FinalLetterSection />;
  }
}

export default function App() {
  const [active, setActive] = useState<SectionId>("celebration");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary text-ink-primary md:flex">
      <Sidebar
        active={active}
        onSelect={setActive}
        mobileOpen={mobileOpen}
        onToggleMobile={() => setMobileOpen((v) => !v)}
      />

      <main
        id="main-content"
        className="relative flex-1 overflow-y-auto scroll-thin md:h-screen"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="min-h-full"
          >
            {renderSection(active)}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
