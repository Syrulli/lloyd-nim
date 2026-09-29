import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import BackButton from "@/components/buttons/BackButton";
import GlassCards from "@/components/cards/GlassCards";
import { CertItems } from "@/constant/interfaceConst";

// export default function CertificatePage() {
//     const t = useTranslations("Certificates");

export default function CertificatePage({ params }: { params: { locale: string } }) {
    setRequestLocale(params.locale);
    const t = useTranslations("Certificates");
    
    return (
        <section>
            <div className="grain rounded border border-line bg-panel-2 p-6 sm:p-10">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-paper">{t("title")}</h3>
                    <BackButton
                        href="/"
                        label={t("back-button")}
                    />
                </div>

                <p className="mt-2 max-w-2xl text-sm text-muted">
                    {t("subtitle")}
                </p>

                <div className="mt-8 flex justify-center">
                    <GlassCards
                        items={CertItems}
                        variant="grid"
                        rotated={false}
                        showDownloadButton={true}
                    />
                </div>
            </div>
        </section>
    );
}