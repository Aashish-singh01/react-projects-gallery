import ThemeToggle from "./ThemeToggle";
import StatBadge from "./StatBadge";

export default function Navbar({ dark, setDark }) {
  return (
    <header className="pt-10 pb-8 sm:pt-14 sm:pb-10">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        {/* Left — Title */}
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            {/* <span className="inline-block w-2 h-2 rounded-full bg-violet-500 shadow-[0_0_8px_3px_rgba(139,92,246,0.55)]" />
            <span
              className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Portfolio · 2026
            </span> */}
          </div>
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            React Projects
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-br from-violet-500 via-fuchsia-500 to-cyan-400">
              Gallery
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-md leading-relaxed">
            A collection of 20+ React projects built while learning
            frontend development, covering UI components, API integration,
            custom hooks, state management, and responsive layouts.
          </p>
        </div>

        {/* Right — Toggle + Stats */}
        <div className="flex flex-col items-start sm:items-end gap-3">
          <ThemeToggle dark={dark} setDark={setDark} />
          <div className="flex divide-x divide-border rounded-xl border border-border bg-card/70 backdrop-blur-sm">
            <StatBadge label="Projects" value={20} />
            <StatBadge label="Categories" value={4} />
            <StatBadge label="Concepts" value={10} />
          </div>
        </div>
      </div>
    </header>
  );
}
