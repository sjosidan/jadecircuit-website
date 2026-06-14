import Image from "next/image";

const EMAIL = "hello@jadecircuit.com";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-jade-500/10 bg-ink-900/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <a href="/" className="flex items-center gap-2 sm:gap-3" aria-label="JadeCircuit home">
          <Image src="/logo-mark.png" alt="" width={772} height={408} className="h-8 w-auto sm:h-9" />
          <Image src="/logo-wordmark.png" alt="JadeCircuit" width={824} height={123} className="hidden h-5 w-auto sm:block" />
          <span className="text-sm font-semibold tracking-wide text-white sm:hidden">JadeCircuit</span>
        </a>
        <nav className="hidden gap-7 text-sm text-gray-200 md:flex">
          <a href="/" className="hover:text-jade-300">Home</a>
          <a href="/harmonyos-app-development/" className="hover:text-jade-300">HarmonyOS</a>
          <a href="/#work" className="hover:text-jade-300">Work</a>
          <a href="/#services" className="hover:text-jade-300">Services</a>
        </nav>
        <a
          href={`mailto:${EMAIL}`}
          className="rounded-full border border-jade-400/40 bg-jade-400/10 px-3 py-1.5 text-xs font-medium text-jade-200 hover:bg-jade-400/20"
        >
          {EMAIL}
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-jade-500/10 bg-ink-900/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:py-10 sm:text-left">
        <a href="/" className="flex items-center gap-2 text-sm text-gray-300">
          <Image src="/logo-wordmark.png" alt="JadeCircuit" width={824} height={123} className="h-5 w-auto" />
          <span>© {new Date().getFullYear()} JadeCircuit OÜ · Estonia</span>
        </a>
        <div className="flex items-center gap-5 text-sm text-gray-300">
          <a href="/harmonyos-app-development/" className="hover:text-jade-300">HarmonyOS</a>
          <a href="https://www.youtube.com/@bobjohansson" target="_blank" rel="noreferrer" className="hover:text-jade-300">YouTube</a>
          <a href="https://space.bilibili.com/3492972752538368" target="_blank" rel="noreferrer" className="hover:text-jade-300">Bilibili</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-jade-300">Email</a>
        </div>
      </div>
    </footer>
  );
}
