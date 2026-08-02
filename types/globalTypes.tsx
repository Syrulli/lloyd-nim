export interface SectionHeaderProps {
    title: string;
    href?: string;
    actionText?: string;
}
export interface CertItem {
    title: string;
    subtitle: string;
    icon: string;
    rotate: number;
    href?: string;
    certificate?: string;
}

export type Slide = {
    text: string;
    name: string;
    role: string;
    avatar?: string;
};

export type StackCategory = {
    key: string;
    label: string;
    items: string[];
};

export interface GlassCardsProps {
    items: CertItem[];
    limit?: number;
    variant?: "stack" | "grid";
    rotated?: boolean;
    showDownloadButton?: boolean;
}