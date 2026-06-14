import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jadecircuit.com"),
  title: "JadeCircuit — Cross-platform app & full-stack studio · EU-registered",
  description:
    "JadeCircuit is a product studio building cross-platform mobile apps (iOS & Android) and full-stack web, plus the APIs and integrations behind them. Swedish founder, Estonian-registered, EU-ready — with rare HarmonyOS NEXT depth as a specialty.",
  keywords: [
    "HarmonyOS app developer",
    "HarmonyOS app development",
    "HarmonyOS NEXT",
    "ArkTS",
    "Huawei AppGallery",
    "cross-platform app development",
    "Flutter developer",
    "iOS Android developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "JadeCircuit — Cross-platform app & full-stack studio",
    description:
      "Cross-platform apps & full-stack engineering — EU-registered, with rare HarmonyOS NEXT depth.",
    url: "https://jadecircuit.com",
    siteName: "JadeCircuit",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "JadeCircuit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JadeCircuit — Cross-platform app & full-stack studio",
    description:
      "Cross-platform apps & full-stack engineering — EU-registered, with rare HarmonyOS NEXT depth.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "JadeCircuit",
  legalName: "JadeCircuit OÜ",
  url: "https://jadecircuit.com",
  logo: "https://jadecircuit.com/logo.png",
  image: "https://jadecircuit.com/og.png",
  description:
    "Cross-platform app and full-stack studio. HarmonyOS NEXT, iOS, Android and web — an EU-registered partner that helps international companies build and publish HarmonyOS apps.",
  email: "hello@jadecircuit.com",
  founder: { "@type": "Person", name: "Bob Johansson" },
  address: { "@type": "PostalAddress", addressCountry: "EE" },
  areaServed: "Worldwide",
  knowsAbout: [
    "HarmonyOS",
    "HarmonyOS NEXT",
    "ArkTS",
    "ArkUI",
    "Huawei AppGallery",
    "Cross-platform mobile development",
    "Flutter",
    "iOS",
    "Android",
    "Full-stack web development",
  ],
  sameAs: [
    "https://www.youtube.com/@bobjohansson",
    "https://space.bilibili.com/3492972752538368",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        {children}
      </body>
    </html>
  );
}
