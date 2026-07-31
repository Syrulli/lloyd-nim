import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Techstack } from "@/constant/interfaceConst";
import SectionHeader from "@/components/header/SectionHeader";
import Link from "next/link";

export default async function StackProjects() {
  const t = await getTranslations("Projects");
  const tHeaders = await getTranslations("SectionHeaders");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[4fr_1.7fr] gap-4">
      <div className="grain rounded bg-panel-2 border border-line p-8 pb-0 flex flex-col overflow-hidden">
        <SectionHeader title={tHeaders("projects")} href="/projects" />
        <p className="mt-1 max-w-xl text-sm text-paper leading-relaxed">
          {t("sub-description")}
        </p>
        <div className="relative w-full aspect-[21/9] mt-4 -mb-8 overflow-hidden">
          <Image
            src="/projects/dummy_img_1.webp"
            alt="Project Image"
            fill
            className="object-cover object-top"
            loading="lazy"
          />
        </div>
      </div>

      <div className="grain rounded bg-panel-2 border border-line p-6">
        <SectionHeader title={tHeaders("techStack")} href="/tech-stack" />
        <div className="mt-4 flex flex-wrap gap-3">
          {Techstack.map((s) => (
            <span key={s} className=" text-[11px] border border-white/30 rounded px-3 py-1 hover:text-signal hover:border-signal-dim transition-colors">
              {s}
            </span>
          ))}
          <Link href="/tech-stack" className="text-[11px] border border-dashed border-white/30 rounded px-3 py-1 text-muted hover:text-signal hover:border-signal-dim transition-colors">
            {tHeaders("more")}
          </Link>
        </div>
      </div>
    </div>
  );
}