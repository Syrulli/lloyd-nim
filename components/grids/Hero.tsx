"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/navigation";
import PixelBlast from "@/components/background/PixelBlast";
import { ChevronDown, Check, MapPin, Download, Mail } from "@/components/icons/IconPacks";
import { LANGUAGES } from "@/constant/interfaceConst";

function LanguageDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const selected = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // function switchLocale(newLocale: string) {
  //   const segments = pathname.split("/");
  //   segments[1] = newLocale;
  //   router.push(segments.join("/") || `/${newLocale}`);
  //   setOpen(false);
  // }
  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale }); // no manual segment splicing needed
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 h-6 px-3 rounded text-white border border-white/30 bg-panel-4/20 backdrop-blur text-[10px] hover:text-signal hover:border-signal transition-colors"
      >
        {selected.code.toUpperCase()}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 rounded border border-white/30 bg-panel-2/95 backdrop-blur shadow-lg overflow-hidden z-30">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className="w-full flex items-center justify-between px-3 py-2 text-[11px] text-muted hover:text-signal hover:bg-panel-2 transition-colors"
            >
              {lang.label}
              {selected.code === lang.code && <Check className="h-3 w-3 text-signal" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative rounded overflow-hidden bg-panel-2 border border-line grain">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e0555a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal" />
        <span className="ml-3 font-semibold text-xs text-muted">~/lloyd-nim — zsh</span>
        <div className="flex items-center gap-2 absolute top-2 right-7 z-10 ">
          <LanguageDropdown />
        </div>
      </div>

      <div className="relative h-40 sm:h-52 bg-ink overflow-hidden">
        {/* <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=400&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        /> */}
        <PixelBlast
          className="absolute inset-0 rounded-2xl cursor-pointer"
          variant="square"
          pixelSize={3}
          color="#7CFE9D"
          patternDensity={0.9}
          patternScale={2}
          edgeFade={0.35}
          transparent
          enableRipples={true}
          liquid={false}

        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink/40" /> */}
      </div>

      <div className="absolute left-6 sm:left-10 -mt-14 sm:-mt-19 z-20">
        <img
          src="/profile.webp"
          alt="Lloyd Nim"
          loading="eager"
          className="h-20 w-20 sm:h-24 sm:w-24 rounded-full object-cover ring-4 ring-panel-2 shadow-lg"
        />
      </div>

      <div className="px-6 sm:px-8 pb-8 pt-4">
        <div className="mt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <h1 className="font-display font-bold text-3xl leading-tight">Lloyd Nim</h1>
            <p className="mt-2 text-sm text-paper">
              <MapPin className="h-4 w-4 inline-block mr-1" />
              {t("location")}
            </p>
            <p className="mt-2 max-w-md text-sm text-paper">{t("description")}</p>
          </div>

          <div className="flex items-center gap-2 md:mt-1 shrink-0">
            <a href="/resume.pdf" title="Download CV" download className="flex items-center gap-1.5 h-8 px-3 rounded border border-white/30 bg-panel-2/40 backdrop-blur text-xs hover:text-signal hover:border-signal transition-colors">
              <Download className="h-3.5 w-3.5" />
              {t("download")}
            </a>

            <a href="mailto:lloydlanguido@gmail.com" title="Send Email" className="flex items-center gap-1.5 h-8 px-3 rounded border border-white/30 bg-panel-2/40 backdrop-blur text-xs hover:text-signal hover:border-signal transition-colors">
              <Mail className="h-3.5 w-3.5" />
              {t("email")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}