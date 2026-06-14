"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type TouchEvent } from "react";

type Platform = "hmos" | "android" | "ios" | "web" | "led";
type Kind = "product" | "client";
type Lang = "en" | "zh";

const PLATFORM_LABEL: Record<Lang, Record<Platform, string>> = {
  en: { hmos: "HarmonyOS", android: "Android", ios: "iOS", web: "Web", led: "LED" },
  zh: { hmos: "鸿蒙", android: "安卓", ios: "iOS", web: "网页", led: "LED" },
};

function PlatformBadge({ p, lang }: { p: Platform; lang: Lang }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-jade-500/30 bg-ink-700/50 px-2.5 py-1 text-xs text-jade-100">
      <Image src={`/platforms/${p}.svg`} alt="" width={12} height={12} className="opacity-90" />
      {PLATFORM_LABEL[lang][p]}
    </span>
  );
}

function KindTag({ kind, lang }: { kind: Kind; lang: Lang }) {
  const isProduct = kind === "product";
  const label = isProduct
    ? lang === "en" ? "Own product" : "自研产品"
    : lang === "en" ? "Client project" : "客户项目";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
        isProduct
          ? "bg-jade-400/15 text-jade-300 ring-1 ring-jade-400/30"
          : "bg-amber-400/10 text-amber-200 ring-1 ring-amber-400/30"
      }`}
    >
      {label}
    </span>
  );
}

type ProjectCopy = { blurb: string };
type Project = {
  name: string;
  kind: Kind;
  platforms: Platform[];
  images: string[];
  icon?: string;
  imgPad?: string;
  frame?: "phone";
  frameAspect?: string;
  tags?: { label: string; icon: string }[];
  link?: string;
  en: ProjectCopy;
  zh: ProjectCopy;
};

function Carousel({
  images,
  alt,
  frame,
  frameAspect,
  imgPad,
  delay,
}: {
  images: string[];
  alt: string;
  frame?: "phone";
  frameAspect?: string;
  imgPad?: string;
  delay: number;
}) {
  const [i, setI] = useState(0);
  const n = images.length;
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    if (n <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const id = setInterval(() => setI((p) => (p + 1) % n), 4500 + delay);
    return () => clearInterval(id);
  }, [n, delay]);

  const go = (idx: number) => setI(((idx % n) + n) % n);

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  const layers = images.map((src, idx) => (
    <Image
      key={src}
      src={src}
      alt={`${alt} — ${idx + 1}`}
      fill
      sizes="(max-width: 768px) 90vw, 45vw"
      className={`${
        frame ? "object-cover" : `object-contain ${imgPad ?? "p-6"}`
      } transition-opacity duration-700 ${idx === i ? "opacity-100" : "opacity-0"}`}
    />
  ));

  return (
    <div
      className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {frame ? (
        <div
          className="relative h-[94%] rounded-[1.6rem] bg-black p-[3px] shadow-2xl shadow-black/60 ring-1 ring-white/15"
          style={{ aspectRatio: frameAspect ?? "9 / 19.5" }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-black">
            {layers}
          </div>
        </div>
      ) : (
        layers
      )}

      {n > 1 && (
        <div className="absolute bottom-2.5 left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Show image ${idx + 1}`}
              onClick={() => go(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-4 bg-jade-300" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const PROJECTS: Project[] = [
  {
    name: "Mongi",
    kind: "product",
    platforms: ["ios", "android", "hmos"],
    images: ["/projects/mongi-1.png", "/projects/mongi-2.png", "/projects/mongi-3.png"],
    icon: "/app-icons/mongi.png",
    imgPad: "p-3",
    link: "https://mongi.app",
    en: {
      blurb:
        "A daily puzzle game with 18 hand-crafted word, logic and pattern puzzles — a fresh set every day, with streaks and rest days. Cross-platform across iOS, Android and HarmonyOS, fully local-first with no account required.",
    },
    zh: {
      blurb:
        "每日谜题游戏，包含 18 款手工打造的词汇、逻辑与图形谜题，每天更新一组，支持连续打卡与休息日。跨 iOS、Android、HarmonyOS 平台，完全本地优先，无需注册账号。",
    },
  },
  {
    name: "Museum LED Ticker",
    kind: "client",
    platforms: ["led", "web"],
    images: ["/projects/museum-led-1.jpg", "/projects/museum-led-2.jpg", "/projects/museum-led-3.jpg"],
    imgPad: "p-0",
    tags: [
      { label: "Integrated AI", icon: "/tags/ai.svg" },
      { label: "Electron", icon: "/tags/electron.svg" },
    ],
    en: {
      blurb:
        "My contribution to a large-scale art installation in a contemporary art museum: a live LED news-ticker system. A Fastify + SQLite server polls global news feeds, with integrated AI categorizing and tagging every headline, and streams updates in real time over SSE to a browser display — wrapped in Electron on a Mac mini — that drives the gallery's LED panel. Includes a searchable archive and a fullscreen kiosk mode.",
    },
    zh: {
      blurb:
        "我为某当代艺术馆一件大型艺术装置所做的部分：一套实时 LED 新闻滚动系统。基于 Fastify + SQLite 的服务端定时抓取全球新闻源，集成 AI 对每条头条进行分类与打标签，并通过 SSE 实时推送到浏览器显示端（以 Electron 封装，运行于 Mac mini），驱动展厅的 LED 屏。含可检索的历史归档与全屏 Kiosk 模式。",
    },
  },
  {
    name: "Viking Cup 2026",
    kind: "client",
    platforms: ["ios", "android", "web", "hmos"],
    images: ["/projects/vikingcup-1.png", "/projects/vikingcup-2.png", "/projects/vikingcup-3.png"],
    icon: "/app-icons/vikingcup.png",
    imgPad: "p-3",
    en: {
      blurb:
        "Tournament platform and companion mobile app for an international football event — a full-stack web platform and a cross-platform app (iOS, Android, more) sharing one API, built to integrate cleanly and scale for event week.",
    },
    zh: {
      blurb:
        "为一项国际足球赛事打造的赛事平台与配套移动端 App — 全栈 Web 平台与跨平台 App（iOS、Android 等）共享同一套 API，可干净对接集成，并为赛事周扩展承载。",
    },
  },
  {
    name: "SwiftRates",
    kind: "product",
    platforms: ["hmos"],
    images: ["/projects/swiftrates-1.png", "/projects/swiftrates-2.png", "/projects/swiftrates-3.png"],
    icon: "/app-icons/swiftrates.png",
    imgPad: "p-3",
    en: {
      blurb:
        "A currency converter covering 170+ currencies, backed by a Go API with historical rates, geo-aware caching, and live refresh.",
    },
    zh: {
      blurb:
        "支持 170+ 币种的汇率换算工具，基于 Go 后端 API，提供历史汇率、地理位置感知缓存与实时刷新。",
    },
  },
  {
    name: "NordicKeys",
    kind: "product",
    platforms: ["hmos"],
    images: ["/projects/nordickeys-1.png", "/projects/nordickeys-2.png", "/projects/nordickeys-3.png"],
    icon: "/app-icons/nordickeys.png",
    imgPad: "p-3",
    en: {
      blurb:
        "A five-language input method editor for the Nordic languages — Swedish, Danish, Norwegian, Finnish and Icelandic — with on-device dictionary suggestions and autocorrect, built natively for HarmonyOS NEXT.",
    },
    zh: {
      blurb:
        "支持五种北欧语言的输入法 — 瑞典语、丹麦语、挪威语、芬兰语与冰岛语，提供本地词典联想与自动纠错，基于鸿蒙 NEXT 原生开发。",
    },
  },
];

const SERVICES: Record<Lang, { title: string; body: string }[]> = {
  en: [
    { title: "Cross-platform mobile", body: "iOS and Android from a single Flutter codebase — native feel, multi-language localization, and store release handled." },
    { title: "Full-stack web", body: "Next.js, React and TypeScript front-ends with Postgres / Prisma data layers and modern, reliable deploys." },
    { title: "Backend, APIs & integrations", body: "Go and Node APIs on SQLite / Postgres and Docker — including integrating with existing platforms and third-party services, with careful handling of user data." },
    { title: "HarmonyOS NEXT", body: "A specialty when you need it: native ArkTS / ArkUI apps for Huawei phones, tablets, foldables and wearables." },
  ],
  zh: [
    { title: "跨平台移动端", body: "同一份 Flutter 代码同时发布到 iOS 与 Android — 原生质感、多语言本地化，并负责上架发布。" },
    { title: "全栈 Web", body: "Next.js、React 与 TypeScript 前端，搭配 Postgres / Prisma 数据层与现代、可靠的部署。" },
    { title: "后端、API 与系统集成", body: "基于 SQLite / Postgres 与 Docker 的 Go 与 Node 接口 — 包括与既有平台及第三方服务的对接集成，并谨慎处理用户数据。" },
    { title: "鸿蒙 NEXT", body: "在你需要时的一项专长：面向华为手机、平板、折叠屏与可穿戴设备的原生 ArkTS / ArkUI 应用。" },
  ],
};

const COPY = {
  en: {
    nav: { about: "About", work: "Work", services: "Services", contact: "Contact" },
    email: "hello@jadecircuit.com",
    heroTitle1: "We build cross-platform apps and the backends behind them —",
    heroTitle2: " our own products, and select client work.",
    heroSub:
      "JadeCircuit is a small studio that designs, builds and ships mobile and web products — iOS, Android and full-stack web, with the APIs and integrations behind them. Swedish founder · Estonian-registered company · straightforward international contracts and invoicing. We also bring rare, first-hand HarmonyOS NEXT experience when a project needs it.",
    ctaPrimary: "See the work",
    ctaSecondary: "Start a project",
    aboutLabel: "About",
    aboutTitle: "A small studio that ships — end to end.",
    aboutP1:
      "JadeCircuit is led by a Swedish developer building mobile and web products end to end — design, frontend, backend and release. Most of what we make is our own: indie apps we design, build and publish ourselves, which keeps our cross-platform and backend skills sharp for the client work we take on.",
    aboutP2:
      "The company is registered in Estonia, giving clients a stable European base for clean, straightforward international contracts and invoicing — wherever in the world the project is. We currently work from Shanghai, which also gives us something rare: deep, first-hand experience inside Huawei's HarmonyOS NEXT platform, a specialty we offer on top of the usual iOS, Android and web.",
    workLabel: "Selected work",
    workTitle: "Products & projects.",
    servicesLabel: "Services",
    servicesTitle: "What we build for clients.",
    contactLabel: "Contact",
    contactTitle: "Let's build something.",
    contactSub: "Inquiries, collaborations, new projects — drop a message.",
    footerCopy: "JadeCircuit OÜ · Estonia",
    linkLinkedIn: "LinkedIn",
    linkYouTube: "YouTube",
    linkBilibili: "Bilibili",
    linkEmail: "Email",
    toggleTo: "中文",
  },
  zh: {
    nav: { about: "关于", work: "作品", services: "服务", contact: "联系" },
    email: "hello@jadecircuit.com",
    heroTitle1: "我们打造跨平台应用，以及背后的后端 —",
    heroTitle2: " 自研产品，也承接精选客户项目。",
    heroSub:
      "JadeCircuit 是一家小型工作室，专注于从设计、开发到发布完整交付移动与 Web 产品 — iOS、Android 与全栈 Web，以及背后的 API 与系统集成。瑞典创始人 · 爱沙尼亚注册公司 · 国际合同与开票简洁顺畅。在项目需要时，我们还能提供少见的鸿蒙 NEXT 一线实战经验。",
    ctaPrimary: "查看作品",
    ctaSecondary: "开启合作",
    aboutLabel: "关于我们",
    aboutTitle: "一家从头到尾完整交付的小型工作室。",
    aboutP1:
      "JadeCircuit 由一位瑞典开发者主理，从设计、前端、后端到发布，完整地打造移动与 Web 产品。我们做的大多数都是自研的独立应用 — 自己设计、开发并发布，这也让我们在跨平台与后端上的能力始终保持锋利，用于承接的客户项目。",
    aboutP2:
      "公司注册于爱沙尼亚，为客户提供一个稳定的欧洲主体 — 无论项目身处世界何地，国际合同与开票都简洁顺畅。我们目前在上海工作，这也带来一项难得的能力：深入华为鸿蒙 NEXT 平台的一线实战经验 — 在常规的 iOS、Android 与 Web 之外，我们额外提供这项专长。",
    workLabel: "精选作品",
    workTitle: "产品与项目。",
    servicesLabel: "服务",
    servicesTitle: "为客户提供的服务。",
    contactLabel: "联系我们",
    contactTitle: "一起做点东西吧。",
    contactSub: "业务咨询、合作或新项目 — 欢迎来信。",
    footerCopy: "JadeCircuit OÜ · 爱沙尼亚",
    linkLinkedIn: "领英",
    linkYouTube: "YouTube",
    linkBilibili: "哔哩哔哩",
    linkEmail: "邮箱",
    toggleTo: "EN",
  },
} as const;

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = (typeof window !== "undefined" && localStorage.getItem("jc-lang")) as Lang | null;
    if (saved === "en" || saved === "zh") setLang(saved);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("jc-lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang, mounted]);

  const t = COPY[lang];
  const services = SERVICES[lang];

  const toggle = () => setLang((l) => (l === "en" ? "zh" : "en"));

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
            <a href="#about" className="hover:text-jade-300">{t.nav.about}</a>
            <a href="#work" className="hover:text-jade-300">{t.nav.work}</a>
            <a href="#services" className="hover:text-jade-300">{t.nav.services}</a>
            <a href="#contact" className="hover:text-jade-300">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle language"
              className="rounded-full border border-jade-400/40 bg-jade-400/10 px-3 py-1.5 text-xs font-semibold text-jade-200 hover:bg-jade-400/20"
            >
              {t.toggleTo}
            </button>
            <a
              href={`mailto:${t.email}`}
              className="hidden rounded-full border border-jade-400/40 bg-jade-400/10 px-3 py-1.5 text-xs font-medium text-jade-200 hover:bg-jade-400/20 sm:inline-block"
            >
              {t.email}
            </a>
          </div>
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
            {t.heroTitle1}
            <span className="text-jade-300">{t.heroTitle2}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-gray-200 sm:text-lg">{t.heroSub}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            <a
              href="#work"
              className="rounded-md bg-jade-400 px-5 py-3 text-sm font-semibold text-ink-900 shadow-lg shadow-jade-500/20 hover:bg-jade-300"
            >
              {t.ctaPrimary}
            </a>
            <a
              href={`mailto:${t.email}`}
              className="rounded-md border border-jade-400/40 px-5 py-3 text-sm font-semibold text-jade-200 hover:bg-jade-400/10"
            >
              {t.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-jade-500/10 bg-ink-900/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-300">{t.aboutLabel}</p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{t.aboutTitle}</h2>
          </div>
          <div className="space-y-5 text-gray-200">
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="border-t border-jade-500/10">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-300">{t.workLabel}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{t.workTitle}</h2>

          <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2">
            {PROJECTS.map((p, idx) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-jade-500/10 bg-ink-800/60 transition hover:border-jade-400/40 hover:bg-ink-800/80"
              >
                <div className="flex items-center justify-between border-b border-jade-500/10 bg-ink-900/60 px-4 py-2.5">
                  <KindTag kind={p.kind} lang={lang} />
                  <div className="flex flex-wrap justify-end gap-1.5">
                    {p.platforms.map((pl) => (
                      <PlatformBadge key={pl} p={pl} lang={lang} />
                    ))}
                    {p.tags?.map((tg) => (
                      <span
                        key={tg.label}
                        className="inline-flex items-center gap-1.5 rounded-full border border-jade-500/30 bg-ink-700/50 px-2.5 py-1 text-xs text-jade-100"
                      >
                        <Image src={tg.icon} alt="" width={12} height={12} className="opacity-90" />
                        {tg.label}
                      </span>
                    ))}
                  </div>
                </div>
                <Carousel images={p.images} alt={p.name} frame={p.frame} frameAspect={p.frameAspect} imgPad={p.imgPad} delay={idx * 600} />
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    {p.icon && (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-jade-500/20 bg-ink-900">
                        <Image src={p.icon} alt={`${p.name} app icon`} width={56} height={56} className="h-14 w-14 object-cover" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-white sm:text-xl">{p.name}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-200">{p[lang].blurb}</p>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-jade-300 hover:text-jade-200"
                    >
                      {lang === "zh" ? "访问 " : "Visit "}
                      {p.link.replace(/^https?:\/\//, "")}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t border-jade-500/10 bg-ink-900/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-300">{t.servicesLabel}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{t.servicesTitle}</h2>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="rounded-xl border border-jade-500/10 bg-ink-800/50 p-5 sm:p-6">
                <h3 className="text-sm font-semibold text-jade-300">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-300">
            {lang === "zh" ? "需要把 App 带到华为设备？" : "Building for Huawei devices?"}{" "}
            <a href="/harmonyos-app-development/" className="font-medium text-jade-300 underline hover:text-jade-200">
              {lang === "zh" ? "查看面向国际公司的鸿蒙 App 开发服务 ↗" : "HarmonyOS app development for international companies ↗"}
            </a>
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-jade-500/10">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-300">{t.contactLabel}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{t.contactTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-200">{t.contactSub}</p>
          <a
            href={`mailto:${t.email}`}
            className="mt-8 inline-block break-all rounded-md bg-jade-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-lg shadow-jade-500/20 hover:bg-jade-300"
          >
            {t.email}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-jade-500/10 bg-ink-900/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center sm:flex-row sm:px-6 sm:py-10 sm:text-left">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Image src="/logo-wordmark.png" alt="JadeCircuit" width={824} height={123} className="h-5 w-auto" />
            <span>© {new Date().getFullYear()} {t.footerCopy}</span>
          </div>
          <div className="flex items-center gap-5 text-sm text-gray-300">
            <a href="https://www.linkedin.com/company/jadecircuit" target="_blank" rel="noreferrer" className="hover:text-jade-300">{t.linkLinkedIn}</a>
            <a href="https://www.youtube.com/@bobjohansson" target="_blank" rel="noreferrer" className="hover:text-jade-300">{t.linkYouTube}</a>
            <a href="https://space.bilibili.com/3492972752538368" target="_blank" rel="noreferrer" className="hover:text-jade-300">{t.linkBilibili}</a>
            <a href={`mailto:${t.email}`} className="hover:text-jade-300">{t.linkEmail}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
