import { SunIcon, MoonIcon } from "./icons";

export default function ThemeToggle({ dark, setDark }) {
  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-border bg-card text-muted-foreground hover:text-foreground hover:border-violet-500/40 transition-all duration-200 text-sm"
    >
      <span
        className="transition-transform duration-300"
        style={{ transform: dark ? "rotate(0deg)" : "rotate(180deg)" }}
      >
        {dark ? <MoonIcon /> : <SunIcon />}
      </span>
      <span
        className="text-xs font-medium"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {dark ? "Dark" : "Light"}
      </span>
      <span className="relative inline-flex w-9 h-5 rounded-full border border-border bg-muted transition-colors duration-300">
        <span
          className="absolute top-0.5 w-4 h-4 rounded-full bg-linear-to-br from-violet-500 to-cyan-400 shadow-sm transition-all duration-300"
          style={{ left: dark ? "calc(100% - 18px)" : "2px" }}
        />
      </span>
    </button>
  );
}
