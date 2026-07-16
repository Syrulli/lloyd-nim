"use client";

import { CSSProperties } from "react";
import Image from "next/image";

interface CertItem {
  title: string;
  subtitle: string;
  icon: string;
  rotate: number;
  href?: string;
}

const items: CertItem[] = [
  {
    title: "DevNet Associate",
    subtitle: "Cisco Networking Academy",
    icon: "/certificates/img-2.webp",
    rotate: -15,
    href: "#",
  },
  {
    title: "Cybersecurity Essentials",
    subtitle: "Cisco Networking Academy",
    icon: "/certificates/img-3.webp",
    rotate: 5,
    href: "#",
  },
  {
    title: "JSE2 - JavaScript 2",
    subtitle: "Cisco & JS Institute",
    icon: "/certificates/img-9.webp",
    rotate: 25,
    href: "#",
  },
];

export default function GlassCards() {
  return (
    <div className="group relative flex items-center justify-center">
      {items.map((item) => (
        <div key={item.title}
          style={{ "--r": item.rotate } as CSSProperties}
          className="
            relative flex h-[180px] w-[200px] -mx-[45px] mt-5 flex-col items-center
            justify-between rounded border border-line bg-panel px-6 py-7
            rotate-[calc(var(--r)*1deg)]
            group-hover:mx-[10px] group-hover:rotate-0
            hover:!scale-105 
            grain
          "
          // transition-all duration-900
        >
          <Image src={item.icon} alt={item.subtitle} width={50} height={50} className="rounded-lg mb-5" />
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="whitespace-pre-line text-xs font-semibold leading-snug text-paper">
              {item.title}
            </p>
            <p className="font-mono text-[10px] tracking-widest text-muted">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}