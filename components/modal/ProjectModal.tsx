'use client';

import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronRight, ChevronLeft, X, } from '@/components/icons/IconPacks';
import type { ProjectModalProps } from '@/types/globalTypes';

const ProjectModal: React.FC<ProjectModalProps> = ({ selectedProject, onClose }) => {
    const t = useTranslations("ProjectsPage");

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4500, stopOnInteraction: true }),
    ]);

    const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!selectedProject) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKeyDown);

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [selectedProject, onClose]);

    // if (!selectedProject) return null;

    // const { image, title, description, techStack, features } = selectedProject;
    // const images = Array.isArray(image) ? image : [image];

    if (!selectedProject) return null;
    const { id, image, title, techStack } = selectedProject;

    const description = t(`${id}.description`);
    const features = t.raw(`${id}.features`) as string[];
    const images = Array.isArray(image) ? image : [image];

    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 pt-10 backdrop-blur-md lg:pt-10"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
        >
            <div
                className="hide-scrollbar relative max-h-[100vh] w-full max-w-4xl overflow-y-auto rounded border border-white/45 bg-[#1D1F1D] p-5 shadow-2xl lg:p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-foreground/10 text-foreground/70 transition hover:bg-foreground/20 hover:text-foreground"
                >
                    <X />
                </button>
                <h2 id="project-modal-title" className="pr-10 text-lg font-semibold lg:text-xl">
                    {title}
                </h2>

                <div className="relative mt-4 w-full">
                    <div className="overflow-hidden rounded-md" ref={emblaRef}>
                        <div className="flex">
                            {images.map((imgSrc, index) => (
                                <div key={index} className="relative min-w-0 flex-[0_0_100%]">
                                    <img
                                        src={imgSrc}
                                        alt={`${title} screenshot ${index + 1}`}
                                        loading="lazy"
                                        className="h-50 w-full rounded-md object-cover lg:h-105"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={scrollPrev}
                                aria-label="Previous image"
                                className="absolute left-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
                            >
                                <ChevronLeft />
                            </button>
                            <button
                                onClick={scrollNext}
                                aria-label="Next image"
                                className="absolute right-2 top-1/2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
                            >
                                <ChevronRight />
                            </button>

                            <div className="absolute inset-x-0 bottom-2 flex items-center justify-center gap-1.5">
                                {scrollSnaps.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => scrollTo(index)}
                                        aria-label={`Go to image ${index + 1}`}
                                        className={`h-1.5 rounded-full transition-all ${index === selectedIndex ? 'w-4 bg-signal' : 'w-1.5 bg-signal-dim/30'
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="mt-4 space-y-4">
                    <div
                        onCopy={(e) => e.preventDefault()}
                        onPaste={(e) => e.preventDefault()}
                        onContextMenu={(e) => e.preventDefault()}
                        onTouchStart={(e) => e.preventDefault()}
                        className="select-none"
                    >
                        <p className="pb-2 text-justify text-[0.8rem] text-foreground/80">{description}</p>
                        <h3 className="flex items-center gap-1 text-[13px] tracking-widest text-signal-dim">
                            Features
                        </h3>
                        {features && features.length > 0 && (
                            <ul className="list-inside list-disc space-y-1 text-[0.8rem] text-foreground/80">
                                {features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div>
                        <h3 className="flex items-center gap-1 text-[13px] tracking-widest text-signal-dim">
                            Tech Stack
                        </h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                            {techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="rounded-md border border-foreground/10 bg-foreground/5 px-2 py-0.5 text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;