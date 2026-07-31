import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { SectionHeaderProps } from "@/types/globalTypes";
import { ChevronRight } from "@/components/icons/IconPacks";

export default async function SectionHeader({
    title,
    href,
    actionText,
}: SectionHeaderProps) {
    const t = await getTranslations("Common");
    const label = actionText ?? t("viewAll");

    return (
        <div className="flex items-center justify-between">
            <p className="text-[13px] tracking-widest text-signal-dim">{title}</p>
            {href && (
                <Link href={href} className="text-[9px] tracking-widest text-paper py-1.5 hover:text-signal-dim transition-colors" title="View all">
                    {label} <ChevronRight className="inline-block h-3 w-3" />
                </Link>
            )}
        </div>
    );
}