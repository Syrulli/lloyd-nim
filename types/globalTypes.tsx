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
}

export type Slide = {
    text: string;
    name: string;
    role: string;
    avatar?: string;
};