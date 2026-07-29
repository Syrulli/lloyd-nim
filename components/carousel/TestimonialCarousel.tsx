"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

type Slide = {
    text: string;
    name: string;
    role: string;
    avatar?: string;
};

export default function TestimonialCarousel({
    slides,
}: {
    slides: Slide[];
}) {
    const autoplay = useRef(
        Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        })
    );

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            containScroll: false,
        },
        [autoplay.current]
    );

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

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
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
                                className="flex-[0_0_88%] sm:flex-[0_0_85%] lg:flex-[0_0_65%] xl:flex-[0_0_75%] px-2 sm:px-3"
                            >
                                <div
                                    onClick={() => !isActive && emblaApi?.scrollTo(i)}
                                    className={[
                                        "h-[265px] sm:h-[220px] rounded border border-line bg-panel p-4 sm:p-7 overflow-hidden grain",
                                        "transition-all duration-300 cursor-pointer flex flex-col",
                                        isActive
                                            ? "opacity-100 scale-100"
                                            : "opacity-40 scale-95",
                                    ].join(" ")}
                                >
                                    <div className="flex items-center gap-3 sm:gap-5">
                                        <div className="pointer-events-none absolute inset-0 overflow-hidden">
                                            <div
                                                className="absolute right-0 top-0 h-56 w-56 opacity-60"
                                                style={{
                                                    backgroundImage:
                                                        "radial-gradient(rgba(255,255,255,0.5) 1.8px, transparent 1.8px)",
                                                    backgroundSize: "10px 10px",
                                                    maskImage:
                                                        "radial-gradient(circle at top right, black 10%, transparent 55%)",
                                                    WebkitMaskImage:
                                                        "radial-gradient(circle at top right, black 20%, transparent 35%)",
                                                }}
                                            />
                                        </div>
                                        <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden rounded-full border border-line bg-panel-2 shrink-0">
                                            {s.avatar ? (
                                                <Image
                                                    src={s.avatar}
                                                    alt={s.name}
                                                    fill
                                                    sizes="50px"
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center font-bold text-base sm:text-xl text-paper">
                                                    {s.name.charAt(0)}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <h3 className="text-xs sm:text-sm font-bold text-paper">
                                                {s.name}
                                            </h3>
                                            <p className="mt-1 text-xs sm:text-sm text-muted">
                                                {s.role}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="my-3 sm:my-4 border-t border-line" />
                                    <div className="flex-1 overflow-y-auto pr-2">
                                        <p className="text-xs sm:text-sm text-paper leading-relaxed">
                                            {s.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-4 sm:mt-6 flex justify-center gap-1.5 sm:gap-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => emblaApi?.scrollTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={[
                            "transition-all duration-300 rounded-full",
                            i === selectedIndex
                                ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-signal"
                                : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-signal-dim/30",
                        ].join(" ")}
                    />
                ))}
            </div>
        </div>
    );
}