import { getTranslations } from "next-intl/server";
import SectionHeader from "@/components/header/SectionHeader";
import Carousel from "@/components/carousel/TestimonialCarousel";

export default async function Testimonials() {
  const t = await getTranslations("Testimonials");
  const tHeaders = await getTranslations("SectionHeaders");
  const indices = [0, 1, 2, 3];

  return (
    <section className="rounded bg-panel border border-line p-6 sm:p-8 grain">
      <SectionHeader title={tHeaders("testimonials")} href="/testimonials" />
      <div className="mt-5">
        <Carousel
          slides={indices.map((i) => ({
            text: t(`${i}.text`),
            name: t(`${i}.name`),
            role: t(`${i}.role`),
          }))}
        />
      </div>
    </section>
  );
}