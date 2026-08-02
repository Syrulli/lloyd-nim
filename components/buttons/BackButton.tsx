import Link from "next/link";
import { ChevronLeft } from "@/components/icons/IconPacks";

interface BackButtonProps {
    href?: string;
    label?: string;
    className?: string;
}

export default function BackButton({
    href = "/",
    label = "Back",
    className = "",
}: BackButtonProps) {
    return (
        <Link
            href={href}
            title={label}
            className={`inline-flex items-center rounded border border-white/30 px-3 py-1 text-xs text-paper transition-colors hover:border-signal-dim hover:text-signal ${className}`}
        >
            <ChevronLeft className="h-4 w-4" />
            {label}
        </Link>
    );
}