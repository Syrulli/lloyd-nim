import Link from "next/link";
import { SectionHeaderProps } from "@/types/globalTypes";
import { ArrowRight } from "@/components/icons/IconPacks";

export default function SectionHeader({
    title,
    href,
    actionText = "VIEW ALL",
}: SectionHeaderProps) {
    return (
        <div className="flex items-center justify-between">
            <p className="text-[13px] tracking-widest text-signal-dim">
                {title}
            </p>

            {href && (
                <Link
                    href={href}
                    className="text-[9px] tracking-widest text-paper py-1.5 hover:text-signal-dim transition-colors"
                >
                    {actionText} <ArrowRight className="inline-block h-3 w-3" />
                </Link>
            )}
        </div>
    );
}