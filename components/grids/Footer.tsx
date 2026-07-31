import { getTranslations } from "next-intl/server";
import { GitHub, LinkedIn } from "@/components/icons/IconPacks";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="rounded bg-panel-2 border border-line grain px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p className="text-[12px] text-paper">
        © {new Date().getFullYear()} Lloyd Nim — {t("rights")}
      </p>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Syrulli"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted hover:text-signal transition-colors"
          title="Github"
        >
          <GitHub className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/lloydnim/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted hover:text-signal transition-colors"
          title="LinkedIn"
        >
          <LinkedIn className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}