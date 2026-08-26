import { getTranslations } from "next-intl/server";
import SectionHeader from "@/components/header/SectionHeader";
import { Phone, Mail } from "@/components/icons/IconPacks";
import Image from "next/image";

export default async function Contact() {
    const tHeaders = await getTranslations("SectionHeaders");
    const t = await getTranslations("Contact");
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_1.2fr] gap-4">
                <div className="grain rounded bg-panel-2 border border-line overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-center">
                        <div className="p-8">
                            <SectionHeader title={tHeaders("contact")} />
                            <p className="mt-4 text-sm leading-relaxed text-paper max-w-md">
                                {t("sub-description")}
                            </p>
                            <a title="Schedule a call" href="https://calendly.com/lloydlanguido/30min" className="inline-flex w-fit items-center mt-5 gap-1.5 h-8 px-3 rounded border border-white/30 bg-panel-2/40 backdrop-blur text-xs hover:text-signal hover:border-signal transition-colors">
                                <Phone className="h-3 w-3" />
                                {t("schedule_call")}

                            </a>
                        </div>

                        <div className="relative h-20 min-h-[265px] flex justify-end overflow-hidden rounded">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15449.097360368622!2d121.04093402526051!3d14.526294058613376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8c8c683603d%3A0xe71e5f3cd00d6813!2sPinagsama%2C%20Taguig%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1646354666141!5m2!1sen!2sph&ui=!1"
                                className="h-full w-1/2 border-0"
                                title="Location map"
                                loading="lazy"
                                style={{
                                    filter: "grayscale(100%) invert(90%)",
                                    width: '100%'
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="grain rounded bg-panel-2 border border-line overflow-hidden">
                    <div className="relative h-28">
                        <Image
                            src="/lazy_dev.webp"
                            alt="Let's work together"
                            fill
                            className="object-cover"
                            loading="lazy"
                        />
                    </div>

                    <div className="p-4">
                        <SectionHeader title={tHeaders("available_for_work")} />
                        <p className="mt-2 text-xs text-paper leading-relaxed">
                            {t("ld_subdescription")}
                        </p>
                        <a
                            title="Send Email"
                            href="mailto:harrri.lazydevs@gmail.com"
                            className="inline-flex w-fit items-center mt-5 gap-1.5 h-8 px-3 rounded border border-white/30 bg-panel-2/40 backdrop-blur text-xs hover:text-signal hover:border-signal transition-colors"
                        >
                            <Mail className="h-3 w-3" />
                            {t("email")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
