import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "../lib/utils";

interface PlaceholderImageProps {
  src: string | string[];
  alt: string;
  className?: string;
  ratio?: "square" | "portrait" | "landscape";
}

/**
 * Renders an image that falls back to a soft skeleton card if the
 * source file has not been placed on disk yet (or fails to load).
 * This keeps every section's layout intact whether or not the
 * real photos have been dropped into /assets in VS Code.
 */
export default function PlaceholderImage({
  src,
  alt,
  className,
  ratio = "landscape",
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);

  const sources = Array.isArray(src) ? src : [src];
  const activeSrc = sources[sourceIndex] ?? sources[0];

  const ratioClass =
    ratio === "square"
      ? "aspect-square"
      : ratio === "portrait"
      ? "aspect-[3/4]"
      : "aspect-[4/3]";

  if (failed) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center gap-2 rounded-xl2 border border-dashed border-border-subtle bg-bg-card text-ink-secondary",
          ratioClass,
          className
        )}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="h-6 w-6 opacity-50" strokeWidth={1.5} />
        <span className="px-4 text-center text-xs font-medium tracking-wide">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={activeSrc}
      alt={alt}
      onError={() => {
        if (sourceIndex < sources.length - 1) {
          setSourceIndex((current) => current + 1);
          return;
        }
        setFailed(true);
      }}
      className={cn(ratioClass, "object-cover", className)}
      loading="lazy"
    />
  );
}
