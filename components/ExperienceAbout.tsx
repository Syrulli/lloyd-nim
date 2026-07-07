import { experience } from "@/constant/interfaceConst";
import SectionHeader from "@/components/header/SectionHeader";

export default function ExperienceAbout() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.7fr] gap-4">
      <div className="order-2 sm:order-1 rounded bg-panel border border-line p-6 flex flex-col">
        <SectionHeader
          title="EXPERIENCE"
          href="/experience"
        />
        <ul className="mt-4 space-y-6">
          {experience.map((e, i) => (
            <li key={e.org} className="relative pl-5">
              {i !== experience.length - 1 && (
                <span className="absolute left-[3px] top-3 bottom-[-24px] w-px bg-line" />
              )}
              <span className="absolute left-0 top-1.5 h-[7px] w-[7px] rounded-full border border-white/50 bg-panel" />

              <p className="text-sm text-paper font-medium">{e.role}</p>
              <p className="text-xs text-muted">{e.org}</p>
              <p className="font-mono text-[10px] text-signal-dim mt-0.5">
                {e.years}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="order-1 sm:order-2 rounded bg-panel border border-line p-6 flex flex-col">
        <p className="font-mono text-[11px] tracking-widest text-signal-dim">
          ABOUT ME
        </p>
        <p className="mt-4 text-sm sm:text-base text-paper leading-relaxed">
          I'm a Full-Stack Developer building scalable web applications with clean APIs and intuitive user experiences. I currently develop secure fintech solutions at FortunePay, creating reliable systems that balance performance, usability, and thoughtful design. I hold a Bachelor's degree in Information Technology, majoring in Web Development, from AMA University.
          <br />
          <br />
          I also freelance with Lazy Developers, delivering custom web solutions for clients such as Manuel L. Quezon University and transforming business requirements into reliable digital products.
        </p>
      </div>
    </div>
  );
}