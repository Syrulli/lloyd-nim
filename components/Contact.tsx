import { getTranslations } from "next-intl/server";
import SectionHeader from "@/components/header/SectionHeader";
import { Phone, Code  } from "@/components/icons/IconPacks";

export default async function Contact() {
    const tHeaders = await getTranslations("SectionHeaders");
    const t = await getTranslations("Contact");
    return (
        <section>
            <div className="relative overflow-hidden mx-auto max-w-5xl rounded bg-panel-2 border border-line px-10 py-9">
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="absolute right-0 top-0 h-56 w-56 opacity-60"
                        style={{
                            backgroundImage:
                                "radial-gradient(rgba(255,255,255,0.5) 1.8px, transparent 1.8px)",
                            backgroundSize: "10px 10px",
                            maskImage:
                                "radial-gradient(circle at top right, black 10%, transparent 55%)",
                            WebkitMaskImage:
                                "radial-gradient(circle at top right, black 20%, transparent 50%)",
                        }}
                    />
                </div>
                <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
                    <div className="max-w-lg">
                        <SectionHeader title={tHeaders("contact")} />

                        <p className="mt-3 text-sm leading-relaxed text-paper">
                            {t("sub-description")}
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center justify-end gap-3 lg:mt-7">
                        <a
                            href="https://calendly.com/lloydlanguido/30min"
                            className="flex items-center gap-1.5 h-8 px-3 rounded border border-white/30 bg-panel-2/40 backdrop-blur font-mono text-xs hover:text-signal hover:border-signal transition-colors"
                        >
                            <Phone className="inline-block h-3 w-3" />
                            Schedule a call
                        </a>

                        <a
                            href="/contact"
                            className="flex items-center gap-1.5 h-8 px-3 rounded border border-white/30 bg-panel-2/40 backdrop-blur font-mono text-xs hover:text-signal hover:border-signal transition-colors"
                        >
                            <Code className="inline-block h-3 w-3" />
                            Lazy Developers
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}