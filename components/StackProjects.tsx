import Link from "next/link";
import { Techstack, Projects } from "@/constant/interfaceConst";
import SectionHeader from "@/components/header/SectionHeader";

export default function StackProjects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.7fr] gap-4">
      <div className="rounded bg-panel border border-line p-6">
        <SectionHeader title="TECH STACK" href="/tech-stack" />
        <div className="mt-4 flex flex-wrap gap-3">
          {Techstack.map((s) => (
            <span
              key={s}
              className="font-mono text-[11px] border border-white/30 rounded px-3 py-1 hover:text-signal hover:border-signal-dim transition-colors"
            >
              {s}
            </span>
          ))}

          <Link
            href="/tech-stack"
            className="font-mono text-[11px] border border-dashed border-white/30 rounded px-3 py-1 text-muted hover:text-signal hover:border-signal-dim transition-colors"
          >
            + more
          </Link>
        </div>
      </div>

      <div className="rounded bg-panel border border-line p-6">
        <SectionHeader title="PROJECTS" href="/projects" />

        <ul className="mt-4 divide-y divide-line">
          {Projects.map((p) => (
            <li key={p.name} className="py-3 first:pt-0 last:pb-0 flex gap-4">
              <span className="font-mono text-[11px] text-signal-dim pt-0.5">
                {p.tag}
              </span>
              <div>
                <p className="text-sm text-paper font-medium">{p.name}</p>
                <p className="text-xs text-muted mt-0.5">{p.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}