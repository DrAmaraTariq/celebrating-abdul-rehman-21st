import { Menu, X, HeartPulse } from "lucide-react";
import { SECTIONS, type SectionId } from "../lib/types";
import { useCountdown, pad } from "../lib/useCountdown";
import { cn } from "../lib/utils";

interface SidebarProps {
  active: SectionId;
  onSelect: (id: SectionId) => void;
  mobileOpen: boolean;
  onToggleMobile: () => void;
}

function CountdownBlock() {
  const { hours, minutes, seconds } = useCountdown();
  return (
    <div className="rounded-xl2 border border-border-subtle bg-bg-surface px-4 py-3 shadow-softer">
      <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-secondary">
        Until midnight
      </p>
      <div className="flex items-baseline gap-2 font-display text-2xl text-accent-main">
        <span>{pad(hours)}</span>
        <span className="text-accent-gold">:</span>
        <span>{pad(minutes)}</span>
        <span className="text-accent-gold">:</span>
        <span>{pad(seconds)}</span>
      </div>
      <div className="mt-1 flex gap-2 text-[10px] uppercase tracking-wide text-ink-secondary">
        <span className="w-[2.6rem]">Hours</span>
        <span className="w-[2.6rem]">Mins</span>
        <span className="w-[2.6rem]">Secs</span>
      </div>
    </div>
  );
}

function NavList({
  active,
  onSelect,
}: {
  active: SectionId;
  onSelect: (id: SectionId) => void;
}) {
  return (
    <nav aria-label="Sections" className="flex flex-col gap-1.5">
      {SECTIONS.map((section) => {
        const isActive = section.id === active;
        return (
          <button
            key={section.id}
            onClick={() => onSelect(section.id)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "group flex items-center gap-3 rounded-xl2 px-4 py-3 text-left transition-all duration-200",
              isActive
                ? "bg-accent-main text-bg-surface shadow-soft"
                : "text-ink-primary hover:bg-bg-card active:scale-[0.98]"
            )}
          >
            <span
              className={cn(
                "font-display text-xs tracking-widest",
                isActive ? "text-accent-gold" : "text-ink-secondary"
              )}
            >
              {section.index}
            </span>
            <span
              className={cn(
                "font-serif text-lg leading-snug",
                isActive ? "text-bg-surface" : "text-ink-primary"
              )}
            >
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export default function Sidebar({
  active,
  onSelect,
  mobileOpen,
  onToggleMobile,
}: SidebarProps) {
  return (
    <>
      {/* Mobile sticky top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border-subtle bg-bg-surface/95 px-4 py-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-2">
          <HeartPulse className="h-5 w-5 text-accent-main" strokeWidth={1.75} />
          <span className="font-serif text-base text-ink-primary">
            Celebrating Dr. Abdul Rehman
          </span>
        </div>
        <button
          onClick={onToggleMobile}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="rounded-full p-2 text-ink-primary hover:bg-bg-card"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-ink-primary/30 md:hidden"
          onClick={onToggleMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar / Drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col gap-6 overflow-y-auto scroll-thin border-r border-border-subtle bg-bg-surface px-5 py-6 transition-transform duration-300 ease-out md:sticky md:top-0 md:h-screen md:w-[300px] md:translate-x-0 md:px-6 md:py-8 lg:w-[320px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="hidden items-center gap-2.5 md:flex">
          <HeartPulse className="h-6 w-6 text-accent-main" strokeWidth={1.75} />
          <div>
            <p className="font-serif text-xl leading-tight text-ink-primary">
              Celebrating
            </p>
            <p className="font-serif text-xl italic leading-tight text-accent-subtle">
              Dr. Abdul Rehman
            </p>
          </div>
        </div>

        <CountdownBlock />

        <div className="h-px w-full bg-border-subtle" />

        <NavList
          active={active}
          onSelect={(id) => {
            onSelect(id);
            if (mobileOpen) onToggleMobile();
          }}
        />

        <div className="mt-auto pt-4">
          <p className="text-center text-[11px] leading-relaxed text-ink-secondary">
            21st year · a quiet, dignified toast
          </p>
        </div>
      </aside>
    </>
  );
}
