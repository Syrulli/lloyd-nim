"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

type Slide = { text: string; name: string; role: string; avatar?: string };

export default function TestimonialCarousel({ slides }: { slides: Slide[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        containScroll: false,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((s, i) => {
                        const isActive = i === selectedIndex;
                        return (
                            <div
                                key={i}
                                className="flex-[0_0_78%] sm:flex-[0_0_44%] lg:flex-[0_0_38%] min-w-0 px-3"
                            >
                                <blockquote
                                    onClick={() => !isActive && emblaApi?.scrollTo(i)}
                                    className={[
                                        "relative flex flex-col justify-between rounded border border-line p-5 sm:p-6 transition-all duration-300 cursor-pointer grain",
                                        isActive
                                            ? "bg-base scale-100 opacity-100"
                                            : "scale-90 opacity-40",
                                    ].join(" ")}
                                >
                                    <span
                                        aria-hidden
                                        className={[
                                            "absolute top-4 right-4 font-mono text-signal-dim/50 select-none leading-none",
                                            isActive ? "text-5xl" : "text-3xl",
                                        ].join(" ")}
                                    >
                                        "
                                    </span>

                                    <p
                                        className={[
                                            "relative text-paper leading-relaxed",
                                            isActive ? "text-lg sm:text-xl" : "text-sm sm:text-base",
                                        ].join(" ")}
                                    >
                                        {s.text}
                                    </p>

                                    <footer className="relative mt-4 flex items-center gap-3">
                                        <div
                                            className={[
                                                "relative shrink-0 overflow-hidden rounded-full border border-line",
                                                isActive ? "h-9 w-9" : "h-7 w-7",
                                            ].join(" ")}
                                        >
                                            {s.avatar ? (
                                                <Image
                                                    src={s.avatar}
                                                    alt={s.name}
                                                    fill
                                                    sizes="40px"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center bg-signal-dim/20 font-mono text-[10px] text-muted">
                                                    {s.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-mono text-[13px] text-paper">
                                                {s.name}
                                            </span>
                                            <span className="font-mono text-[10px] text-muted">
                                                {s.role}
                                            </span>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-4 flex justify-center gap-1.5">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => emblaApi?.scrollTo(i)}
                        className={[
                            "h-1.5 rounded-full transition-all",
                            i === selectedIndex ? "w-5 bg-signal" : "w-1.5 bg-signal-dim/30",
                        ].join(" ")}
                    />
                ))}
            </div>
        </div>
    );
}