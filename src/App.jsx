import { useEffect, useState } from "react";
import Home from "./pages/Home";

export default function App() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div
      className="min-h-screen bg-background text-foreground transition-colors duration-300"
      style={{ fontFamily: "var(--font-sans)" }}
    >
      {/* Ambient glows background */}
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-48 -left-48 w-175 h-175 rounded-full bg-violet-600/10 dark:bg-violet-600/20 blur-[130px] transition-colors duration-500" />
        <div className="absolute top-1/3 -right-60 w-125 h-125 rounded-full bg-cyan-500/8 dark:bg-cyan-500/12 blur-[100px] transition-colors duration-500" />
        <div className="absolute bottom-10 left-1/4 w-100 h-100 rounded-full bg-fuchsia-600/6 dark:bg-fuchsia-600/10 blur-[90px] transition-colors duration-500" />
      </div>

      <Home dark={dark} setDark={setDark} />
    </div>
  );
}
