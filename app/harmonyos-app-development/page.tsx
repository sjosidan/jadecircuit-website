import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../_components/site-chrome";

const EMAIL = "hello@jadecircuit.com";
const URL = "https://jadecircuit.com/harmonyos-app-development/";

export const metadata: Metadata = {
  title: "HarmonyOS App Development for International Companies | JadeCircuit",
  description:
    "Need a HarmonyOS app but not sure where to start? JadeCircuit is an EU-registered studio that builds and publishes HarmonyOS NEXT apps for international companies — assessment, ArkTS/Flutter build, and Huawei AppGallery release, handled end to end.",
  alternates: { canonical: "/harmonyos-app-development/" },
  openGraph: {
    title: "HarmonyOS App Development for International Companies",
    description:
      "An EU-registered studio that builds and publishes HarmonyOS NEXT apps for international companies — end to end.",
    url: URL,
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "JadeCircuit — HarmonyOS App Development" }],
  },
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "What is HarmonyOS NEXT, and is it different from Android?",
    a: "HarmonyOS NEXT is Huawei's own operating system, and unlike earlier HarmonyOS versions it no longer runs Android apps. Your existing Android APK will not install on a HarmonyOS NEXT device — reaching those users requires a native build for the platform (ArkTS / ArkUI) or a cross-platform framework that targets it.",
  },
  {
    q: "Does my company actually need a HarmonyOS app?",
    a: "If you want to reach Huawei users — especially in China, but increasingly elsewhere — on their newer devices, then yes: those phones can no longer run your Android app. If Huawei isn't a meaningful market for you, it may not be worth it yet. We give you an honest assessment before you commit to anything.",
  },
  {
    q: "Can you reuse our existing app or backend?",
    a: "Usually, yes. Your backend, APIs and business logic carry over unchanged — we integrate against what you already have. For the app itself, a Flutter codebase can often target HarmonyOS alongside iOS and Android; otherwise we rebuild the UI natively in ArkTS over your existing services.",
  },
  {
    q: "How do we publish to Huawei AppGallery from outside China?",
    a: "We handle it: setting up the developer account, preparing the listing and assets, passing Huawei's review, and shipping updates. We have first-hand, current experience with the AppGallery process, which is where most overseas teams get stuck.",
  },
  {
    q: "How long does it take and what does it cost?",
    a: "It depends on the app's complexity and how much can be reused. We start with a short paid assessment, then give you a fixed scope and quote — no open-ended billing.",
  },
  {
    q: "Where are you based and how do we contract?",
    a: "JadeCircuit is registered in Estonia (EU), led by a Swedish developer, and works on the ground in Shanghai with direct access to the HarmonyOS ecosystem. You get a European partner for clean, straightforward international contracts and a team that's actually inside the platform.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const STEPS: { title: string; body: string }[] = [
  { title: "1 · Assess", body: "A short engagement to figure out whether HarmonyOS is worth it for you, what can be reused, and exactly what shipping will involve. You get a clear scope and fixed quote." },
  { title: "2 · Build or port", body: "We build the app — native ArkTS / ArkUI, or Flutter targeting HarmonyOS, iOS and Android together — integrated with your existing backend and APIs." },
  { title: "3 · Publish", body: "We set up your Huawei developer account, prepare the listing, and get through AppGallery review — the part most overseas teams underestimate." },
  { title: "4 · Maintain", body: "Updates, new HarmonyOS releases, and ongoing fixes, so the app keeps working as the platform evolves." },
];

export default function Page() {
  return (
    <main className="circuit-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
      />
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-jade-500/10">
        <div className="grid-lines absolute inset-0 opacity-40" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-300">
            HarmonyOS NEXT · ArkTS · Huawei AppGallery
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl">
            HarmonyOS app development for <span className="text-jade-300">international companies</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
            Huawei&apos;s newest phones run HarmonyOS NEXT — and it no longer runs Android apps. If you
            need to reach those users but have no idea where to start, JadeCircuit is the EU-registered
            studio that handles the whole thing: working out whether you need it, building or porting the
            app, and getting it live on the Huawei AppGallery.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href={`mailto:${EMAIL}`} className="rounded-md bg-jade-400 px-5 py-3 text-sm font-semibold text-ink-900 shadow-lg shadow-jade-500/20 hover:bg-jade-300">
              Talk to us about your app
            </a>
            <a href="/guides/does-your-company-need-a-harmonyos-app/" className="rounded-md border border-jade-400/40 px-5 py-3 text-sm font-semibold text-jade-200 hover:bg-jade-400/10">
              Read: do you even need one?
            </a>
          </div>
        </div>
      </section>

      {/* WHY NOW */}
      <section className="border-b border-jade-500/10 bg-ink-900/40">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Why this is suddenly on your roadmap</h2>
          <div className="mt-6 space-y-4 text-gray-200">
            <p>
              Huawei split from Android. Their current devices ship with <strong>HarmonyOS NEXT</strong>, a
              fully independent operating system that <strong>cannot run Android apps at all</strong> — no
              Google services, no APK sideloading. For the hundreds of millions of people on Huawei
              hardware, your iOS and Android apps simply don&apos;t exist.
            </p>
            <p>
              For a lot of Western companies that lands as a vague, intimidating &quot;we need a Huawei
              version&quot; — in a language most agencies outside China can&apos;t help with. That gap is
              exactly what we close: a European partner who explains it plainly and ships it for you.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-b border-jade-500/10">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">How we work</h2>
          <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.title} className="rounded-xl border border-jade-500/10 bg-ink-800/50 p-5 sm:p-6">
                <h3 className="text-sm font-semibold text-jade-300">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="border-b border-jade-500/10 bg-ink-900/40">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">We&apos;ve actually shipped on HarmonyOS</h2>
          <p className="mt-6 text-gray-200">
            This isn&apos;t theory. We design, build and publish our own apps on HarmonyOS NEXT, so we hit
            the same store reviews, tooling quirks and platform changes your project will:
          </p>
          <ul className="mt-6 space-y-3 text-gray-200">
            <li><strong className="text-white">NordicKeys</strong> — a native HarmonyOS NEXT input method (keyboard) for five Nordic languages, with on-device dictionaries.</li>
            <li><strong className="text-white">SwiftRates</strong> — a HarmonyOS currency app backed by a Go API with historical rates and live refresh.</li>
            <li><strong className="text-white">Mongi</strong> — a cross-platform puzzle game shipping on HarmonyOS, iOS and Android from one codebase.</li>
          </ul>
          <a href="/#work" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-jade-300 hover:text-jade-200">
            See the work ↗
          </a>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-jade-500/10">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Why JadeCircuit</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div><h3 className="font-semibold text-jade-300">A Western partner, in your language</h3><p className="mt-2 text-sm leading-relaxed text-gray-200">Swedish founder, English-first communication, and clear scopes — none of the friction of arranging HarmonyOS work across a language barrier.</p></div>
            <div><h3 className="font-semibold text-jade-300">Actually inside the ecosystem</h3><p className="mt-2 text-sm leading-relaxed text-gray-200">We work on the ground in Shanghai with first-hand, current experience of HarmonyOS NEXT tooling and the AppGallery — not second-hand guesses.</p></div>
            <div><h3 className="font-semibold text-jade-300">Clean EU contracting</h3><p className="mt-2 text-sm leading-relaxed text-gray-200">Registered in Estonia, so contracts and invoicing are straightforward wherever in the world you are.</p></div>
            <div><h3 className="font-semibold text-jade-300">Cross-platform too</h3><p className="mt-2 text-sm leading-relaxed text-gray-200">If it makes sense to cover HarmonyOS, iOS and Android together, we can — plus the backend and integrations behind them.</p></div>
          </div>
        </div>
      </section>

      {/* WATCH */}
      <section className="border-b border-jade-500/10 bg-ink-900/40">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">See HarmonyOS development in action</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            We share real HarmonyOS and app-development work on our channel — a look at how this actually
            gets built.
          </p>
          <a href="https://www.youtube.com/@bobjohansson" target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-md border border-jade-400/40 px-5 py-3 text-sm font-semibold text-jade-200 hover:bg-jade-400/10">
            Watch on YouTube ↗
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-jade-500/10">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Frequently asked questions</h2>
          <div className="mt-8 divide-y divide-jade-500/10">
            {FAQ.map((f) => (
              <div key={f.q} className="py-5">
                <h3 className="font-semibold text-white">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-200">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Bring your app to Huawei devices.</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-200">Tell us about your app and your market — we&apos;ll tell you honestly whether HarmonyOS is worth it and what it takes.</p>
          <a href={`mailto:${EMAIL}`} className="mt-8 inline-block break-all rounded-md bg-jade-400 px-6 py-3 text-sm font-semibold text-ink-900 shadow-lg shadow-jade-500/20 hover:bg-jade-300">
            {EMAIL}
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
