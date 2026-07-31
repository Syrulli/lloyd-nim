import { getTranslations } from "next-intl/server";
import { ExperienceMeta } from "@/constant/interfaceConst";
import SectionHeader from "@/components/header/SectionHeader";
import GlassCards from "@/components/cards/GlassCards";

export default async function ExperienceAbout() {
  const tHeaders = await getTranslations("SectionHeaders");
  const tAbout = await getTranslations("About");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_1.9fr] gap-4">
      <div className="grain order-2 sm:order-1 sm:row-span-3 rounded bg-panel-2 border border-line p-6 flex flex-col">
        {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute right-0 bottom-0 h-56 w-56 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.5) 1.8px, transparent 1.8px)",
              backgroundSize: "10px 10px",
              maskImage:
                "radial-gradient(circle at bottom right, black 10%, transparent 55%)",
              WebkitMaskImage:
                "radial-gradient(circle at bottom right, black 20%, transparent 50%)",
            }}
          />
        </div> */}
        <SectionHeader title={tHeaders("experience")} />
        <ul className="mt-4 space-y-6">
          {ExperienceMeta.map((e, i) => (
            <li key={e.org} className="relative pl-5">
              {i !== ExperienceMeta.length - 1 && (
                <span className="absolute left-[3px] top-3 bottom-[-24px] w-px bg-line" />
              )}
              <span className="absolute left-0 top-1.5 h-[7px] w-[7px] rounded-full border border-white/50 bg-panel" />
              <p className="text-sm text-paper font-medium">{e.role}</p>
              <p className="text-xs text-muted">{e.org}</p>
              <p className="text-[10px] text-signal-dim mt-0.5">{e.years}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="grain order-1 sm:order-2 rounded bg-panel-2 border border-line p-6 flex flex-col">
        <SectionHeader title={tHeaders("about")} />
        <p className="mt-4 text-sm text-paper leading-relaxed">
          {tAbout("text1")}
          <br />
          <br />
          {tAbout("text2")}
        </p>
      </div>
      <div className="grain order-3 sm:row-span-2 rounded bg-panel-2 border border-line p-6 flex flex-col min-w-0">
        <SectionHeader title={tHeaders("certificates")} href="/certificates" />
        <GlassCards />
      </div>
    </div>
  );
}