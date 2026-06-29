import { catStyle } from "../data/projects";

const cats = ["UI", "API", "Games", "Hooks"];

export default function Footer() {
  return (
    <footer className="mt-14 pt-6 pb-10 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p
          className="text-[11px] text-muted-foreground uppercase tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Built with React, Tailwind CSS • © 2026 Ashish Singh
        </p>
        <div className="flex flex-wrap gap-1.5">
          {cats.map((cat) => (
            <span
              key={cat}
              className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-1 rounded-full ${catStyle[cat].pill}`}
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${catStyle[cat].dot}`}
              />
              {cat}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
