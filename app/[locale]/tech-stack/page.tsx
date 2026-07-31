import { useTranslations } from "next-intl";
import Link from "next/link";

import { StackItem } from "@/constant/interfaceConst";
import { ChevronLeft } from "@deemlol/next-icons";

export default function TechStackPage() {
    const t = useTranslations("Tech-Stack");

    return (
        <section className="mx-auto max-w-4xl px-6 py-16">
            <div className="grain rounded bg-panel-2 border border-line p-10">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-paper">
                        {t("title")}
                    </h3>

                    <Link
                        href="/"
                        title="Back"
                        className="inline-flex items-center rounded border border-white/30 px-3 py-1 text-xs text-paper transition-colors hover:border-signal-dim hover:text-signal"
                    >
                        <ChevronLeft className="h-4 w-4 inline-block" />
                        Back
                    </Link>
                </div>

                <p className="mt-2 max-w-2xl text-sm text-muted">
                    {t("subtitle")}
                </p>

                <div className="mt-10 flex flex-col gap-8">
                    {StackItem.map((category) => (
                        <section key={category.key}>
                            <h2 className=" text-xs uppercase tracking-wide text-signal-dim">
                                {category.label}
                            </h2>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="text-[11px] border border-white/30 rounded px-3 py-1 hover:text-signal hover:border-signal-dim transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
}