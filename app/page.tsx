import Image from "next/image";

type Platform = "hmos" | "android" | "ios" | "web";
type Kind = "product" | "client";

const PLATFORM_LABEL: Record<Platform, string> = {
  hmos: "HarmonyOS",
  android: "Android",
  ios: "iOS",
  web: "Web",
};

function PlatformBadge({ p }: { p: Platform }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-jade-500/30 bg-ink-700/50 px-2.5 py-1 text-xs text-jade-100">
      <Image src={`/platforms/${p}.svg`} alt="" width={12} height={12} className="opacity-90" />
      {PLATFORM_LABEL[p]}
    </span>
  );
}

function KindTag({ kind }: { kind: Kind }) {
  const isProduct = kind === "product";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
        isProduct
          ? "bg-jade-400/15 text-jade-300 ring-1 ring-jade-400/30"
          : "bg-amber-400/10 text-amber-200 ring-1 ring-amber-400/30"
      }`}
    >
      {isProduct ? "Own product" : "Client project"}
    </span>
  );
}

const PROJECTS: {
  name: string;
  kind: Kind;
  blurb: string;
  platforms: Platform[];
  img: string;
  icon: string;
  imgPad?: string;
  imgAspect?: string;
}[] = [
  {
    name: "Mongi",
    kind: "product",
    blurb:
      "A daily puzzle game with 50+ word, math and logic games across 8 languages. Cross-platform with a shared cloud backend and offline-first scoring.",
    platforms: ["hmos", "android", "ios"],
    img: "/projects/mongi.png",
    icon: "/app-icons/mongi.png",
    imgPad: "p-2 sm:p-3",
  },
  {
    name: "Viking Cup 2026",
    kind: "client",
    blurb:
      "Tournament platform and companion app for an international football event in Shanghai. Full-stack web with a cross-platform mobile app sharing one API.",
    platforms: ["hmos", "android", "ios", "web"],
    img: "/projects/vikingcup.png",
    icon: "/app-icons/vikingcup.png",
    imgPad: "p-2 sm:p-3",
  },
  {
    name: "SwiftRates",
    kind: "product",
    blurb:
      "A currency converter covering 170+ currencies, backed by a Go API with historical rates, geo-aware caching, and live refresh.",
    platforms: ["hmos"],
    img: "/projects/swiftrates.png",
    icon: "/app-icons/swiftrates.png",
    imgPad: "p-3 sm:p-4",
  },
  {
    name: "NordicKeys",
    kind: "product",
    blurb:
      "A HarmonyOS NEXT input method editor for Nordic languages — Swedish, Danish, Norwegian, Finnish, Icelandic — with on-device dictionary suggestions and autocorrect.",
    platforms: ["hmos"],
    img: "/projects/nordickeys.jpg",
    icon: "/app-icons/nordickeys.png",
    imgPad: "p-10 sm:p-14",
  },
];

const SERVICES = [
  { title: "HarmonyOS NEXT apps", body: "Native ArkTS / ArkUI apps for Huawei devices — phones, tablets, foldables, wearables." },
  { title: "Cross-platform mobile", body: "Flutter apps that ship to HarmonyOS, Android, and iOS from a single codebase." },
  { title: "Full-stack web", body: "Next.js, React, TypeScript — paired with Postgres, Prisma, and modern deploys." },
  { title: "Backend & infra", body: "Go and Node APIs, SQLite / Postgres, Docker, Caddy, self-hosted on reliable cloud." },
];

export default function Page() {
  return (
    <main className="circuit-bg min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-jade-500/10 bg-ink-900/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <a href="#top" className="flex items-center gap-2 sm:gap-3" aria-label="JadeCircuit home">
            <Image src="/logo-mark.png" alt="" width={772} height={408} className="h-8 w-auto sm:h-9" />
            <Image src="/logo-wordmark.png" alt="JadeCircuit" width={824} height={123} className="hidden h-5 w-auto sm:block" />
            <span className="text-sm font-semibold tracking-wide text-white sm:hidden">JadeCircuit</span>
          </a>
          <nav className="hidden gap-7 text-sm text-gray-200 md:flex">
            <a href="#about" className="hover:text-jade-300">About</a>
            <a href="#work" className="hover:text-jade-300">Work</a>
            <a href="#services" className="hover:text-jade-300">Services</a>
            <a href="#contact" className="hover:text-jade-300">Contact</a>
          </nav>
          <a
            href="mailto:hello@jadecircuit.com"
            className="hidden rounded-full border border-jade-400/40 bg-jade-400/10 px-3 py-1.5 text-xs font-medium text-jade-200 hover:bg-jade-400/20 sm:inline-block"
          >
            hello@jadecircuit.com
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 md:pt-28">
          <div className="mb-8 flex items-center sm:mb-10">
            <Image
              src="/logo.png"
              alt="JadeCircuit"
              width={824}
              height={572}
              priority
              className="h-20 w-auto drop-shadow-[0_0_40px_rgba(52,211,153,0.35)] sm:h-28 md:h-32"
            />
          </div>
          <h1 className="max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            A HarmonyOS-first studio —
            <span className="text-jade-300"> building products and shipping for clients.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-gray-200 sm:text-lg">
            JadeCircuit is a small indie studio focused on HarmonyOS NEXT. I mostly build and
            publish my own apps, and take on select client projects where deep HarmonyOS experience
            matters. Based in Shanghai · Estonian e-Residency company · EU-ready.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            <a
              href="#work"
              className="rounded-md bg-jade-400 px-5 py-3 text-sm font-semibold text-ink-900 shadow-lg shadow-jade-500/20 hover:bg-jade-300"
            >
              See the apps
            </a>
            <a
              href="mailto:hello@jadecircuit.com"
              className="rounded-md border border-jade-400/40 px-5 py-3 text-sm font-semibold text-jade-200 hover:bg-jade-400/10"
            >
              Start a project
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-jade-500/10 bg-ink-900/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-300">About</p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">A rare bridge into the HarmonyOS ecosystem.</h2>
          </div>
          <div className="space-y-5 text-gray-200">
            <p>
              I'm one of the few foreign developers working deep inside Huawei's HarmonyOS NEXT
              platform — from Shanghai, with first-hand experience of the tools, the store, and the
              ecosystem as it evolves. Most of what I make is my own: indie apps I design, build
              and publish end-to-end.
            </p>
            <p>
              Alongside my own products I take on select client work when the fit is right —
              HarmonyOS-first, but equally comfortable on Android, iOS, and the web. The company is
              registered in Estonia via e-Residency, so contracts, invoicing, and VAT for EU
              clients are handled cleanly from the European side.
            </p>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-t border-jade-500/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-300">Selected work</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Products &amp; projects.</h2>

          <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-jade-500/10 bg-ink-800/60 transition hover:border-jade-400/40 hover:bg-ink-800/80"
              >
                <div className="flex items-center justify-between border-b border-jade-500/10 bg-ink-900/60 px-4 py-2.5">
                  <KindTag kind={p.kind} />
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {p.platforms.map((pl) => (
                      <PlatformBadge key={pl} p={pl} />
                    ))}
                  </div>
                </div>
                <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900">
                  <Image
                    src={p.img}
                    alt={`${p.name} screenshot`}
                    fill
                    className={`${p.img.endsWith(".svg") ? "object-cover" : `object-contain ${p.imgPad ?? "p-6"}`}`}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-jade-500/20 bg-ink-900">
                      <Image src={p.icon} alt={`${p.name} app icon`} width={56} height={56} className="h-14 w-14 object-cover" />
                    </div>
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{p.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-200">{p.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-jade-500/10 bg-ink-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-300">Services</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">What I build for clients.</h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <div key={s.title} className="rounded-xl border border-jade-500/10 bg-ink-800/50 p-5 sm:p-6">
                <h3 className="text-sm font-semibold text-jade-300">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-jade-500/10">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-300">Contact</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Let's build something.</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-200">
            Inquiries, collaborations, HarmonyOS questions — drop a message.
          </p>
          <a
            href="mailto:hello@jadecircuit.com"
            className="mt-8 inline-block break-all rounded-md bg-jade-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-lg shadow-jade-500/20 hover:bg-jade-300"
          >
            hello@jadecircuit.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-jade-500/10 bg-ink-900/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:py-10 sm:text-left">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Image src="/logo-wordmark.png" alt="JadeCircuit" width={824} height={123} className="h-5 w-auto" />
            <span>© {new Date().getFullYear()} JadeCircuit OÜ · Estonia</span>
          </div>
          <div className="flex items-center gap-5 text-sm text-gray-300">
            <a href="https://www.youtube.com/@bobjohansson" target="_blank" rel="noreferrer" className="hover:text-jade-300">YouTube</a>
            <a href="https://space.bilibili.com/3492972752538368" target="_blank" rel="noreferrer" className="hover:text-jade-300">Bilibili</a>
            <a href="mailto:hello@jadecircuit.com" className="hover:text-jade-300">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
