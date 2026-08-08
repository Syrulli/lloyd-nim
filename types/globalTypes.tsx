// import { Project } from "@/constant/interfaceConst";

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

export interface Project {
  id: number;
  title: string;
  image: string | string[];
  techStack: string[];
  size: 'large' | 'medium' | 'small';
}


export interface ProjectCardProps {
  title: string;
  image: string | string[];
  techStack: string[];
  size: "large" | "medium" | "small";
  onClick?: () => void;
}

export interface ProjectModalProps {
  // selectedProject: {
  //   id: number;
  //   title: string;
  //   description: string;
  //   image: string | string[];
  //   features: string[];
  //   techStack: string[];
  //   size: 'large' | 'medium' | 'small';
  // } | null;
  // onClose: () => void;
  selectedProject: Project | null;
  onClose: () => void;
}


