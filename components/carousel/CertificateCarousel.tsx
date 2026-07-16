"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Certificate {
  name: string;
  issuer: string;
  image: string;
}

export default function CertificateCarousel({
  certificates,
}: {
  certificates: Certificate[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { axis: "x", loop: true, align: "start", dragFree: false },
    [Autoplay({ delay: 2500, stopOnInteraction: false, stopOnMouseEnter: true })]
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
    <div className="mt-4 flex flex-col w-full min-w-0">
      <div className="overflow-hidden w-full min-w-0" ref={emblaRef}>
        <div className="flex">
          {certificates.map((c, i) => (
            <div
              key={c.name}
              className={`shrink-0 grow-0 basis-[28%] sm:basis-[72%] ${
                i !== certificates.length - 1 ? "mr-3" : ""
              }`}
            >
              <CertificateCard {...c} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex justify-center gap-1">
        {certificates.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            aria-label={`Go to certificate ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === selectedIndex
                ? "w-4 bg-paper"
                : "w-1.5 bg-line hover:bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function CertificateCard({
  name,
  issuer,
  image,
}: {
  name: string;
  issuer: string;
  image: string;
}) {
  return (
    <div className="rounded border border-line bg-bg/40 p-4 hover:border-white/20 transition-colors">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 shrink-0 rounded-md overflow-hidden border border-line relative bg-panel">
          <Image src={image} alt={issuer} fill sizes="50px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-paper font-medium truncate">{name}</p>
          <p className="text-xs text-muted truncate">{issuer}</p>
        </div>
      </div>
    </div>
  );
}