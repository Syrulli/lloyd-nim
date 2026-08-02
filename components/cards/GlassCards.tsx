"use client";

import { CSSProperties } from "react";
import Image from "next/image";
import { GlassCardsProps } from "@/types/globalTypes";
import { Award } from "@/components/icons/IconPacks";

export default function GlassCards({
  items,
  limit,
  variant = "stack",
  showDownloadButton = false,

}: GlassCardsProps) {
  const certificates = limit ? items.slice(0, limit) : items;

  return (
    <div
      className={
        variant === "stack"
          ? "group relative flex items-center justify-center"
          : "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
      }
    >
      {certificates.map((item) => (
        <div
          key={item.title}
          style={
            variant === "stack"
              ? ({ "--r": item.rotate } as CSSProperties)
              : undefined
          }
          className={`
          grain
          relative flex ${variant === "stack" ? "h-[180px]" : "min-h-[120px]"} w-[200px]
          flex-col items-center justify-between
          rounded border border-line bg-panel
          px-6 py-7
          ${variant === "stack"
              ? "-mx-[45px] mt-5 rotate-[calc(var(--r)*1deg)]"
              : ""
            }
        `}
        >
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.title}
          >
            {item.icon ? (
              <Image
                src={item.icon}
                alt={item.subtitle}
                width={50}
                height={50}
                className="mb-5 rounded-lg"
                loading="lazy"
              />
            ) : (
              <div className="mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-lg border border-line bg-panel-2">
                <Award className="h-8 w-8 text-signal" />
              </div>
            )}
          </a>

          <div className="flex flex-col items-center gap-3 text-center">
            <p className="whitespace-pre-line text-xs font-semibold leading-snug text-paper">
              {item.title}
            </p>

            <p className="text-[10px] tracking-widest text-muted">
              {item.subtitle}
            </p>
            <div className="mt-2 h-[26px]">
              {showDownloadButton &&
                (item.certificate ? (
                  <a
                    href={item.certificate}
                    download
                    className="inline-flex rounded border border-white/30 px-3 py-1 text-[11px] font-medium text-paper transition-colors hover:border-signal hover:text-signal"
                  >
                    Download Certificate
                  </a>
                ) : (
                  <span className="text-[11px] text-muted">
                    Certificate unavailable
                  </span>
                ))}
            </div>
          </div>
        </div>
      ))
      }
    </div >
  );
}