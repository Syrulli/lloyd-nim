const quotes = [
  {
    text: "Alex turned an ambiguous brief into a working system in a week, and it hasn't needed a rewrite since.",
    name: "Priya N.",
    role: "CTO, Nimbus Labs",
  },
  {
    text: "The rare engineer who writes docs before you ask for them.",
    name: "Marco T.",
    role: "PM, Fieldstone",
  },
];

export default function Testimonials() {
  return (
    <section className="rounded-card bg-panel border border-line p-6 sm:p-8">
      <p className="font-mono text-[11px] tracking-widest text-signal-dim">
        TESTIMONIALS
      </p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {quotes.map((q) => (
          <blockquote key={q.name}>
            <p className="text-sm sm:text-base text-paper leading-relaxed">
              “{q.text}”
            </p>
            <footer className="mt-3 font-mono text-[11px] text-muted">
              {q.name} · {q.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
