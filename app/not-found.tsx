import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowRight } from "@/components/icons/IconPacks";


export default async function NotFound() {
    const t = await getTranslations("NotFound");

    return (
        <main className="min-h-screen bg-ink py-8 sm:py-14 px-4 flex items-center justify-center">
            <div className="mx-auto max-w-md w-full rounded bg-panel-2 border border-line grain overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#e0555a]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber" />
                    <span className="h-2.5 w-2.5 rounded-full bg-signal" />
                    <span className="ml-3 font-mono text-xs text-muted">~/lloyd-nim — zsh</span>
                </div>

                <div className="px-6 sm:px-8 py-10 text-center">
                    <p className="font-display font-bold text-6xl text-signal">{t("title")}</p>
                    <h1 className="mt-4 font-display font-bold text-2xl">{t("heading")}</h1>
                    <p className="mt-2 text-sm text-muted">{t("description")}</p>

                    <Link
                        href="/"
                        className="mt-6 inline-flex items-center gap-1.5 h-9 px-4 rounded border border-white/30 bg-panel-2/70 backdrop-blur font-mono text-xs hover:text-signal hover:border-signal transition-colors"
                    >
                        {t("backHome")}
                        <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                </div>
            </div>
        </main>
    );
}