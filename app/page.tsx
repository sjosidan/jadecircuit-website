"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Platform = "hmos" | "android" | "ios" | "web";
type Kind = "product" | "client";
type Lang = "en" | "zh";

const PLATFORM_LABEL: Record<Lang, Record<Platform, string>> = {
  en: { hmos: "HarmonyOS", android: "Android", ios: "iOS", web: "Web" },
  zh: { hmos: "鸿蒙", android: "安卓", ios: "iOS", web: "网页" },
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
  img: string;
  icon: string;
  imgPad?: string;
  link?: string;
  en: ProjectCopy;
  zh: ProjectCopy;
};

const PROJECTS: Project[] = [
  {
    name: "Mongi",
    kind: "product",
    platforms: ["hmos", "android", "ios"],
    img: "/projects/mongi.png",
    icon: "/app-icons/mongi.png",
    imgPad: "p-2 sm:p-3",
    link: "https://mongi.app",
    en: {
      blurb:
        "A daily puzzle game with 18 hand-crafted word, logic and pattern puzzles — a fresh set every day, with streaks and rest days. Cross-platform across HarmonyOS, Android and iOS, fully local-first with no account required.",
    },
    zh: {
      blurb:
        "每日谜题游戏，包含 18 款手工打造的词汇、逻辑与图形谜题，每天更新一组，支持连续打卡与休息日。跨 HarmonyOS、Android、iOS 平台，完全本地优先，无需注册账号。",
    },
  },
  {
    name: "Viking Cup 2026",
    kind: "client",
    platforms: ["hmos", "android", "ios", "web"],
    img: "/projects/vikingcup.png",
    icon: "/app-icons/vikingcup.png",
    imgPad: "p-2 sm:p-3",
    en: {
      blurb:
        "Tournament platform and companion app for an international football event in Shanghai. Full-stack web with a cross-platform mobile app sharing one API.",
    },
    zh: {
      blurb:
        "为上海国际足球赛事打造的赛事平台与配套 App。全栈 Web 与跨平台移动端共享同一套 API。",
    },
  },
  {
    name: "SwiftRates",
    kind: "product",
    platforms: ["hmos"],
    img: "/projects/swiftrates.png",
    icon: "/app-icons/swiftrates.png",
    imgPad: "p-3 sm:p-4",
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
    img: "/projects/nordickeys.jpg",
    icon: "/app-icons/nordickeys.png",
    imgPad: "p-10 sm:p-14",
    en: {
      blurb:
        "A HarmonyOS NEXT input method editor for Nordic languages — Swedish, Danish, Norwegian, Finnish, Icelandic — with on-device dictionary suggestions and autocorrect.",
    },
    zh: {
      blurb:
        "面向鸿蒙 NEXT 的北欧语言输入法，支持瑞典语、丹麦语、挪威语、芬兰语与冰岛语，本地词典联想与自动纠错。",
    },
  },
];

const SERVICES: Record<Lang, { title: string; body: string }[]> = {
  en: [
    { title: "HarmonyOS NEXT apps", body: "Native ArkTS / ArkUI apps for Huawei devices — phones, tablets, foldables, wearables." },
    { title: "Cross-platform mobile", body: "Flutter apps that ship to HarmonyOS, Android, and iOS from a single codebase." },
    { title: "Full-stack web", body: "Next.js, React, TypeScript — paired with Postgres, Prisma, and modern deploys." },
    { title: "Backend & infra", body: "Go and Node APIs, SQLite / Postgres, Docker, Caddy, self-hosted on reliable cloud." },
  ],
  zh: [
    { title: "鸿蒙 NEXT 应用", body: "面向华为设备的原生 ArkTS / ArkUI 应用 — 手机、平板、折叠屏与可穿戴设备。" },
    { title: "跨平台移动端", body: "基于 Flutter 的应用，同一份代码同时发布到鸿蒙、安卓与 iOS。" },
    { title: "全栈 Web", body: "Next.js、React、TypeScript，搭配 Postgres、Prisma 与现代化部署方案。" },
    { title: "后端与基础设施", body: "Go 与 Node 接口、SQLite / Postgres、Docker、Caddy，自托管于可靠云环境。" },
  ],
};

const COPY = {
  en: {
    nav: { about: "About", work: "Work", services: "Services", contact: "Contact" },
    email: "hello@jadecircuit.com",
    heroTitle1: "A HarmonyOS-first studio —",
    heroTitle2: " building products and shipping for clients.",
    heroSub:
      "JadeCircuit is a small indie studio focused on HarmonyOS NEXT. We mostly build and publish our own apps, and take on select client projects where deep HarmonyOS experience matters. Based in Shanghai · Estonian e-Residency company · EU-ready.",
    ctaPrimary: "See the apps",
    ctaSecondary: "Start a project",
    aboutLabel: "About",
    aboutTitle: "A rare bridge into the HarmonyOS ecosystem.",
    aboutP1:
      "We're among the few foreign developers working deep inside Huawei's HarmonyOS NEXT platform — from Shanghai, with first-hand experience of the tools, the store, and the ecosystem as it evolves. Most of what we make is our own: indie apps we design, build and publish end-to-end.",
    aboutP2:
      "Alongside our own products we take on select client work when the fit is right — HarmonyOS-first, but equally comfortable on Android, iOS, and the web. The company is registered in Estonia via e-Residency, so contracts, invoicing, and VAT for EU clients are handled cleanly from the European side.",
    workLabel: "Selected work",
    workTitle: "Products & projects.",
    servicesLabel: "Services",
    servicesTitle: "What we build for clients.",
    contactLabel: "Contact",
    contactTitle: "Let's build something.",
    contactSub: "Inquiries, collaborations, HarmonyOS questions — drop a message.",
    footerCopy: "JadeCircuit OÜ · Estonia",
    linkYouTube: "YouTube",
    linkBilibili: "Bilibili",
    linkEmail: "Email",
    toggleTo: "中文",
  },
  zh: {
    nav: { about: "关于", work: "作品", services: "服务", contact: "联系" },
    email: "hello@jadecircuit.com",
    heroTitle1: "鸿蒙优先的开发工作室 —",
    heroTitle2: " 自研产品，服务客户。",
    heroSub:
      "JadeCircuit 是一家专注于鸿蒙 NEXT 的小型独立工作室。我们主要自研并发布自己的应用，同时承接少量需要深度鸿蒙经验的客户项目。坐标上海，爱沙尼亚电子居民注册公司，面向欧盟合规开票。",
    ctaPrimary: "查看作品",
    ctaSecondary: "开启合作",
    aboutLabel: "关于我们",
    aboutTitle: "鸿蒙生态中难得的一座桥梁。",
    aboutP1:
      "我们是少数深入华为鸿蒙 NEXT 平台的外籍开发者 — 身处上海，直接参与工具链、应用市场与生态的演进。我们做的大多数都是自己的东西：从设计、开发到发布，一条龙完成的独立应用。",
    aboutP2:
      "在自研产品之外，我们在合适的时候也接一些客户项目 — 以鸿蒙为主，但同样可以胜任安卓、iOS 与 Web。公司通过电子居民身份在爱沙尼亚注册，因此欧盟客户的合同、开票与增值税都在欧洲侧干净地处理。",
    workLabel: "精选作品",
    workTitle: "产品与项目。",
    servicesLabel: "服务",
    servicesTitle: "为客户提供的服务。",
    contactLabel: "联系我们",
    contactTitle: "一起做点东西吧。",
    contactSub: "业务咨询、合作或任何关于鸿蒙的问题 — 欢迎来信。",
    footerCopy: "JadeCircuit OÜ · 爱沙尼亚",
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
            {PROJECTS.map((p) => (
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
            <a href="https://www.youtube.com/@bobjohansson" target="_blank" rel="noreferrer" className="hover:text-jade-300">{t.linkYouTube}</a>
            <a href="https://space.bilibili.com/3492972752538368" target="_blank" rel="noreferrer" className="hover:text-jade-300">{t.linkBilibili}</a>
            <a href={`mailto:${t.email}`} className="hover:text-jade-300">{t.linkEmail}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
