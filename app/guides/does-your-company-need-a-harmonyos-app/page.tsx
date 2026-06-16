import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../../_components/site-chrome";

const EMAIL = "hello@jadecircuit.com";
const URL = "https://jadecircuit.com/guides/does-your-company-need-a-harmonyos-app/";

export const metadata: Metadata = {
  title: "Does Your Company Need a HarmonyOS App? A Guide for Non-Chinese Businesses | JadeCircuit",
  description:
    "Huawei's HarmonyOS no longer runs Android apps. A plain-English guide for international companies deciding whether they need a HarmonyOS app — who it's for, who can skip it, and what building one involves.",
  alternates: { canonical: "/guides/does-your-company-need-a-harmonyos-app/" },
  openGraph: {
    title: "Does Your Company Need a HarmonyOS App?",
    description:
      "A plain-English guide for international companies deciding whether they need a HarmonyOS app.",
    url: URL,
    type: "article",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "JadeCircuit" }],
  },
};

const ARTICLE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Does Your Company Need a HarmonyOS App? A Guide for Non-Chinese Businesses",
  description:
    "A plain-English guide for international companies deciding whether they need a HarmonyOS app.",
  image: "https://jadecircuit.com/og.png",
  datePublished: "2026-06-14",
  dateModified: "2026-06-14",
  author: { "@type": "Organization", name: "JadeCircuit" },
  publisher: {
    "@type": "Organization",
    name: "JadeCircuit",
    logo: { "@type": "ImageObject", url: "https://jadecircuit.com/logo.png" },
  },
  mainEntityOfPage: URL,
};

export default function Page() {
  return (
    <main className="circuit-bg min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSONLD) }}
      />
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-jade-300">Guide</p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
          Does your company need a HarmonyOS app?
        </h1>
        <p className="mt-3 text-sm text-gray-400">A plain-English guide for non-Chinese businesses.</p>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-gray-200">
          <div className="rounded-xl border border-jade-500/15 bg-ink-800/50 p-5">
            <p className="text-sm">
              <strong className="text-jade-300">Short version:</strong> If reaching Huawei users — above
              all in China, but increasingly worldwide — matters to your business, you probably do, because
              their newest phones can no longer run your Android app. If Huawei isn&apos;t a real market for
              you, you can likely skip it for now. Here&apos;s how to tell which camp you&apos;re in.
            </p>
          </div>

          <h2 className="pt-2 text-xl font-semibold text-white">What actually changed</h2>
          <p>
            For years, Huawei phones ran Android, so your existing app just worked on them. That&apos;s
            over. Huawei&apos;s current devices ship with <strong>HarmonyOS</strong>, their own
            operating system, and it <strong>does not run Android apps</strong> — your APK won&apos;t
            install, and there are no Google services underneath. To exist on those devices at all, you
            need an app built for HarmonyOS and published on Huawei&apos;s <strong>AppGallery</strong>.
          </p>

          <h2 className="pt-2 text-xl font-semibold text-white">Four questions to decide</h2>
          <p><strong className="text-white">1. Do you have — or want — users on Huawei devices?</strong> Huawei is one of the largest phone makers on earth and dominant in China, with a growing base across the Middle East, Southeast Asia, Africa and parts of Europe. If any of those markets matter to you, a meaningful share of users is now on HarmonyOS.</p>
          <p><strong className="text-white">2. Is your app something those users reach for?</strong> Consumer apps, fintech, retail, travel, media and anything with a Chinese audience feel the gap most. A purely internal tool for a Western office, less so.</p>
          <p><strong className="text-white">3. What does being absent cost you?</strong> If a Huawei user can&apos;t download you, they use a competitor who&apos;s there. For some businesses that&apos;s a rounding error; for others it&apos;s a market.</p>
          <p><strong className="text-white">4. How much can you reuse?</strong> Good news: your backend, APIs and logic carry over. Often a Flutter codebase can target HarmonyOS alongside iOS and Android; otherwise the UI is rebuilt natively in ArkTS over your existing services. Either way you&apos;re not starting from zero.</p>

          <h2 className="pt-2 text-xl font-semibold text-white">You probably need one if…</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>China is (or could be) a market for you;</li>
            <li>you&apos;re consumer-facing and Huawei has real share in your regions;</li>
            <li>you can already see Huawei devices in your analytics being turned away.</li>
          </ul>

          <h2 className="pt-2 text-xl font-semibold text-white">You can probably wait if…</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>your users are concentrated in markets where Huawei is rare (e.g. the US);</li>
            <li>you&apos;re B2B with a known, non-Huawei device fleet;</li>
            <li>you&apos;re pre-product-market-fit and every euro counts.</li>
          </ul>

          <h2 className="pt-2 text-xl font-semibold text-white">What building one involves</h2>
          <p>
            In practice it&apos;s four steps: a short <strong>assessment</strong> (is it worth it, what
            can be reused), the <strong>build or port</strong>, getting through <strong>AppGallery
            review</strong> — the part overseas teams most underestimate — and ongoing
            <strong> maintenance</strong> as the platform evolves. We break this down on our{" "}
            <a href="/harmonyos-app-development/" className="text-jade-300 underline hover:text-jade-200">HarmonyOS app development</a>{" "}
            page.
          </p>

          <div className="mt-8 rounded-xl border border-jade-500/15 bg-ink-800/50 p-6 text-center">
            <p className="text-white">Not sure which camp you&apos;re in?</p>
            <p className="mt-2 text-sm text-gray-300">Tell us your app and your markets — we&apos;ll give you an honest read, no pressure.</p>
            <a href={`mailto:${EMAIL}`} className="mt-5 inline-block rounded-md bg-jade-400 px-6 py-3 text-sm font-semibold text-ink-900 hover:bg-jade-300">
              {EMAIL}
            </a>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
