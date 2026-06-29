import { useState, useEffect, useRef } from "react";

function useCountUp(target, duration = 1100) {
  const [count, setCount] = useState(0);
  const done = useRef(false);
  useEffect(() => {
    if (done.current) return;
    done.current = true;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.floor(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return count;
}

export default function StatBadge({ label, value }) {
  const count = useCountUp(value);
  return (
    <div className="flex flex-col items-center px-5 py-3">
      <span
        className="text-2xl font-bold tabular-nums bg-linear-to-br from-violet-500 to-cyan-500 bg-clip-text text-transparent"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {count}+
      </span>
      <span
        className="text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {label}
      </span>
    </div>
  );
}
