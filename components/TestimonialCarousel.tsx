import { getTranslations } from "next-intl/server";
import SectionHeader from "@/components/header/SectionHeader";
import Carousel from "@/components/carousel/TestimonialCarousel";
import { TestimonialProfiles } from "@/constant/interfaceConst";

export default async function Testimonials() {
  const t = await getTranslations("Testimonials");
  const tHeaders = await getTranslations("SectionHeaders");

  return (
    <section className="rounded bg-panel-2 border border-line p-6 sm:p-8 grain">
      <SectionHeader title={tHeaders("testimonials")} href="/testimonials" />
      <p className="text-sm text-paper leading-relaxed my-2">
        {t("sub-description")}
      </p>
      <div className="mt-5">
        <Carousel
          slides={TestimonialProfiles.map((profile) => ({
            text: t(`${profile.id}.text`),
            name: t(`${profile.id}.name`),
            role: t(`${profile.id}.role`),
            avatar: profile.image,
          }))}
        />
      </div>
    </section>
  );
}