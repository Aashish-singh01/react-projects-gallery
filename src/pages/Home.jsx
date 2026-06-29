import { useState } from "react";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { projects } from "../data/projects";

export default function Home({ dark, setDark }) {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(true);

  const filtered = projects.filter((p) => {
    const matchesCat = active === "All" || p.cat === active;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  function handleFilter(cat) {
    if (cat === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(cat);
      setVisible(true);
    }, 160);
  }

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Navbar dark={dark} setDark={setDark} />
      <FilterBar
        active={active}
        setActive={handleFilter}
        search={search}
        setSearch={setSearch}
      />

      <p
        className="text-[11px] text-muted-foreground mb-5 uppercase tracking-widest"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        {search ? ` · "${search}"` : ""}
      </p>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-opacity duration-150 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        {filtered.length === 0 ? (
          <div className="col-span-full py-20 text-center text-muted-foreground text-sm">
            No projects match your search.
          </div>
        ) : (
          filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}
