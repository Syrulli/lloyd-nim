export default function Footer() {
  return (
    <footer className="rounded bg-panel-2 border border-line px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p className="font-mono text-[11px] text-muted">
        © {new Date().getFullYear()} Lloyd Nim
      </p>
      <a
        href="mailto:lloydlanguido@gmail.com"
        className="font-mono text-[11px] text-signal hover:underline"
      >
        lloydlanguido@gmail.com
      </a>
    </footer>
  );
}
