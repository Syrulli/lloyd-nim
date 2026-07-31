import { useTranslations } from "next-intl";

type StackCategory = {
    key: string;
    label: string;
    items: string[];
};

const stack: StackCategory[] = [
    {
        key: "frontend",
        label: "Frontend",
        items: [
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "next-intl",
        ],
    },
    {
        key: "mobile",
        label: "Mobile",
        items: ["Flutter", "Dart", "GetX"],
    },
    {
        key: "backendData",
        label: "Backend & Data",
        items: ["Node.js", "MongoDB", "Mongoose", "NextAuth", "Cloudinary", "REST"],
    },
    {
        key: "uiInteraction",
        label: "UI & Interaction",
        items: [
            "Embla Carousel",
            "Tiptap",
            "Lowlight",
            "OGL (WebGL)",
            "lucide-react",
            "Framer-style CSS transitions",
        ],
    },
    {
        key: "devTools",
        label: "Dev Tools",
        items: ["Git", "GitHub", "VS Code", "ESLint", "Prettier"],
    },
];

export default function TechStackPage() {
    const t = useTranslations("techStackPage");

    return (
        <main className="mx-auto max-w-4xl px-6 py-16">
            <div className="grain rounded bg-panel-2 border border-line p-8">
                <h1 className="text-2xl font-semibold text-paper">
                    {t("title", { defaultValue: "tech stack" })}
                </h1>
                <p className="mt-2 max-w-2xl text-sm text-muted">
                    {t("subtitle", {
                        defaultValue:
                            "The tools, frameworks, and platforms I reach for — across the front end, mobile, back end, and interaction layer.",
                    })}
                </p>

                <div className="mt-10 flex flex-col gap-8">
                    {stack.map((category) => (
                        <section key={category.key}>
                            <h2 className="font-mono text-xs uppercase tracking-wide text-signal-dim">
                                {category.label}
                            </h2>
                            <div className="mt-3 flex flex-wrap gap-3">
                                {category.items.map((item) => (
                                    <span
                                        key={item}
                                        className="font-mono text-[11px] border border-white/30 rounded px-3 py-1 hover:text-signal hover:border-signal-dim transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}