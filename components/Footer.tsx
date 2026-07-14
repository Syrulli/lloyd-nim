import { getTranslations } from "next-intl/server";
import { GitHub, LinkedIn } from "@/components/icons/IconPacks";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="rounded bg-panel-2 border border-line px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p className="font-mono text-[12px] text-muted">
        © {new Date().getFullYear()} Lloyd Nim — {t("rights")}
      </p>

      <div className="flex items-center gap-3">
        <a
          href="https://github.com/Syrulli"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-muted hover:text-paper transition-colors"
        >
          <GitHub className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/lloydnim/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-muted hover:text-paper transition-colors"
        >
          <LinkedIn className="h-5 w-5" />
        </a>
      </div>
    </footer>
  );
}