import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JadeCircuit — Cross-platform app & full-stack studio · EU-registered",
  description:
    "JadeCircuit is a product studio building cross-platform mobile apps (iOS & Android) and full-stack web, plus the APIs and integrations behind them. Swedish founder, Estonian-registered, EU-ready — with rare HarmonyOS NEXT depth as a specialty.",
  openGraph: {
    title: "JadeCircuit",
    description:
      "Cross-platform apps & full-stack engineering — EU-registered, EU-ready.",
    url: "https://jadecircuit.com",
    siteName: "JadeCircuit",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
