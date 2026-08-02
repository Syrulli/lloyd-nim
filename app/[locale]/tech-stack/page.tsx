import { useTranslations } from "next-intl";
import { StackItem } from "@/constant/interfaceConst";
import BackButton from "@/components/buttons/BackButton";


export default function TechStackPage() {
    const t = useTranslations("Tech-Stack");

    return (
        <section>
            <div className="grain rounded bg-panel-2 border border-line p-10">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-paper">
                        {t("title")}
                    </h3>
                    <BackButton
                        href="/"
                        label={t("back-button")}
                    />
                </div>
                <p className="mt-2 max-w-2xl text-sm text-muted">{t("subtitle")}</p>
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