'use client';

import type { ProjectCardProps } from '@/types/globalTypes';

const sizeConfig: Record<ProjectCardProps['size'], string> = {
    large: 'aspect-[4/3] lg:aspect-[16/10]',
    medium: 'aspect-[4/3]',
    small: 'aspect-square lg:aspect-[4/3]',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    image,
    techStack,
    size,
    onClick,
}) => {
    const cover = Array.isArray(image) ? image[0] : image;
    const visibleTech = techStack.slice(0, 3);
    const remaining = techStack.length - visibleTech.length;

    return (
        <button
            type="button"
            onClick={onClick}
            className={`group relative h-full w-full overflow-hidden rounded border border-line bg-panel-2  text-left transition-colors duration-300 hover:border-foreground/20 ${sizeConfig[size]}`}
        >
            <img
                src={cover}
                alt={title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover scale-100 blur-0 brightness-[0.8] group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-[0.4]"
                style={{
                    transition: 'transform 2500ms ease-out, filter 2500ms ease-out',
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 transition-transform duration-300 ease-out group-hover:translate-y-0">
                <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-sm font-semibold text-white lg:text-base">{title}</h3>

                    <div className="mt-2 flex flex-wrap gap-1.5">
                        {visibleTech.map((tech, index) => (
                            <span
                                key={index}
                                className="rounded border border-white/20 bg-white/10 px-2 py-0.5 text-[0.65rem] text-white backdrop-blur-sm"
                            >
                                {tech}
                            </span>
                        ))}
                        {remaining > 0 && (
                            <span className="rounded border border-white/20 bg-white/10 px-2 py-0.5 text-[0.65rem] text-white backdrop-blur-sm">
                                +{remaining}
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/15" />
        </button>
    );
};

export default ProjectCard;