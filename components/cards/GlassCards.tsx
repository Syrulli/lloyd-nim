"use client";

import { CSSProperties } from "react";
import Image from "next/image";
import { CertItems } from "@/constant/interfaceConst";

export default function GlassCards() {
  return (
    <div className="group relative flex items-center justify-center ">
      {
        CertItems.map((item) => (
          <div key={item.title}
            style={{ "--r": item.rotate } as CSSProperties}
            className="
            relative flex h-[180px] w-[200px] -mx-[45px] mt-5 flex-col items-center
            justify-between rounded border border-line bg-panel px-6 py-7
            rotate-[calc(var(--r)*1deg)]
            hover:!scale-105 
            grain
          "
          >
            <Image src={item.icon} alt={item.subtitle} width={50} height={50} className="rounded-lg mb-5" loading="lazy" />
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="whitespace-pre-line text-xs font-semibold leading-snug text-paper">
                {item.title}
              </p>
              <p className="font-mono text-[10px] tracking-widest text-muted">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))
      }
    </div >
  );
}