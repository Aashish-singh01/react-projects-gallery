import { projects, categories } from "../data/projects";

export default function FilterBar({ active, setActive, search, setSearch }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-5">
      {/* Search */}
      <div className="relative sm:w-56">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          placeholder="Search by project name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2 rounded-lg bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-violet-500/60 transition-colors duration-200"
          style={{ fontFamily: "var(--font-sans)" }}
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-xs font-medium border transition-all duration-200 ${
              active === cat
                ? "bg-linear-to-br from-violet-600 to-cyan-500 border-transparent text-white shadow-[0_0_16px_rgba(139,92,246,0.35)]"
                : "bg-transparent border-border text-muted-foreground hover:border-violet-500/40 hover:text-foreground"
            }`}
          >
            {cat}
            {cat !== "All" && (
              <span
                className="ml-1.5 opacity-60 text-[10px] tabular-nums"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {projects.filter((p) => p.cat === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
