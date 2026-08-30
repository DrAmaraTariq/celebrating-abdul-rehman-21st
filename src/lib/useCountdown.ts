import { useEffect, useState } from "react";

function getRemaining() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diffMs = Math.max(0, midnight.getTime() - now.getTime());

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);

  return { hours, minutes, seconds, diffMs };
}

export function useCountdown() {
  const [time, setTime] = useState(getRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getRemaining());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export function pad(n: number) {
  return n.toString().padStart(2, "0");
}
