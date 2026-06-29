import { useState } from "react";
import { catStyle } from "../data/projects";

export default function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col rounded-xl border border-border bg-card overflow-hidden"
      style={{
        transition:
          "transform 280ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 280ms ease, border-color 200ms ease",
        transitionDelay: `${index * 18}ms`,
        transform: hovered
          ? "translateY(-5px) scale(1.01)"
          : "translateY(0) scale(1)",
        boxShadow: hovered
          ? "0 12px 36px rgba(139,92,246,0.18), 0 2px 8px rgba(0,0,0,0.12)"
          : "0 1px 3px rgba(0,0,0,0.06)",
        borderColor: hovered ? "rgba(139,92,246,0.4)" : undefined,
      }}
    >
      {/* Hover shimmer */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(139,92,246,0.06) 0%, rgba(34,211,238,0.04) 100%)",
        }}
      />

      {/* Image area */}
      <div className="relative w-full aspect-video bg-linear-to-br from-violet-950/60 via-fuchsia-950/40 to-cyan-950/40 dark:from-violet-950/80 dark:via-fuchsia-950/60 dark:to-cyan-950/60 flex items-center justify-center overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/60 z-10" />

        {/* Icon */}
        <span
          className="relative text-3xl text-violet-400/50 group-hover:text-violet-400/80 select-none inline-block"
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-mono)",
            transform: hovered ? "scale(1.15)" : "scale(1)",
            transition: "transform 300ms ease, color 300ms ease",
          }}
        ></span>

        {/* Category badge */}
        <div className="absolute top-2.5 right-2.5">
          <span
            className={`inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full ${catStyle[project.cat].pill}`}
            style={{ fontFamily: "var(--font-mono)" }}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${catStyle[project.cat].dot}`}
            />
            {project.cat}
          </span>
        </div>

        {/* Project number */}
        <div className="absolute bottom-2 left-3">
          <span
            className="text-[10px] text-muted-foreground/50 tabular-nums"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {/* #{String(project.id).padStart(2, "0")} */}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4">
        <h3
          className="font-semibold text-foreground text-sm mb-1 leading-snug"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2 flex-1">
          {project.desc}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex-1  py-2 rounded-lg text-xs font-medium text-center bg-linear-to-br from-violet-600/15 to-cyan-500/10 border border-violet-500/25 text-violet-500 dark:text-violet-300 hover:from-violet-600/25 hover:to-cyan-500/20 hover:border-violet-500/50 transition-all duration-200 active:scale-95"
          >
            ↗ Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2 rounded-lg text-xs font-medium text-center bg-transparent border border-border text-muted-foreground hover:border-violet-500/30 hover:text-foreground transition-all duration-200 active:scale-95"
          >
            <svg
              viewBox="0 0 16 16"
              xmlns="http://w3.org"
              fill="currentColor"
              class="w-6 h-4 mr-2 inline-block align-middle shrink-0 text-gray-700"
            >
              <path d="M13.56 4.35L10.65 1.44C10.368 1.16009 9.98734 1.00208 9.59 1H6C5.47005 1.00158 4.96227 1.2128 4.58753 1.58753C4.2128 1.96227 4.00158 2.47005 4 3V8.83C4.28129 8.9031 4.53721 9.05181 4.74 9.26C4.84688 9.3602 4.93494 9.47874 5 9.61V3C5 2.73478 5.10536 2.48043 5.29289 2.29289C5.48043 2.10536 5.73478 2 6 2H9V4.5C9 4.89782 9.15804 5.27936 9.43934 5.56066C9.72064 5.84196 10.1022 6 10.5 6H13V13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14H10.48L9.47 15H12C12.5299 14.9984 13.0377 14.7872 13.4125 14.4125C13.7872 14.0377 13.9984 13.5299 14 13V5.41C13.9979 5.01266 13.8399 4.63202 13.56 4.35ZM10.5 5C10.3674 5 10.2402 4.94732 10.1464 4.85355C10.0527 4.75979 10 4.63261 10 4.5V2.21L12.79 5H10.5Z" />
              <path d="M3.47798 14.978C3.34548 14.9777 3.21852 14.9249 3.12498 14.831L1.14598 12.854C1.09942 12.8076 1.06247 12.7524 1.03727 12.6917C1.01206 12.6309 0.999084 12.5658 0.999084 12.5 RegularC0.999084 12.4343 1.01206 12.3691 1.03727 12.3084C1.06247 12.2476 1.09942 12.1925 1.14598 12.146L3.14598 10.146C3.23986 10.0521 3.3672 9.99939 3.49998 9.99939C3.63275 9.99939 3.76009 10.0521 3.85398 10.146C3.94787 10.2399 4.00061 10.3672 4.00061 10.5C4.00061 10.6328 3.94787 10.7601 3.85398 10.854L2.20698 12.5L3.83198 14.124C3.90209 14.194 3.94985 14.2831 3.96922 14.3802C3.98858 14.4773 3.97868 14.578 3.94076 14.6695C3.90284 14.761 3.83862 14.8391 3.75623 14.894C3.67384 14.949 3.577 14.9782 3.47798 14.978Z" />
              <path d="M7.52198 14.978C7.42296 14.9782 7.32611 14.949 7.24372 14.894C7.16134 14.8391 7.09711 14.761 7.05919 14.6695C7.02128 14.578 7.01137 14.4773 7.03074 14.3802C7.05011 14.2831 7.09787 14.194 7.16798 14.124L8.79298 12.5L7.14598 10.854C7.05209 10.7601 6.99935 10.6328 6.99935 10.5C6.99935 10.3672 7.05209 10.2399 7.14598 10.146C7.23986 10.0521 7.3672 9.99939 7.49998 9.99939C7.63275 9.99939 7.76009 10.0521 7.85398 10.146L9.85398 12.146C9.90054 12.1925 9.93748 12.2476 9.96269 12.3084C9.9879 12.3691 10.0009 12.4343 10.0009 12.5C10.0009 12.5658 9.9879 12.6309 9.96269 12.6917C9.93748 12.7524 9.90054 12.8076 9.85398 12.854L7.87498 14.831C7.78144 14.9249 7.65447 14.9777 7.52198 14.978Z" />
            </svg>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
}
