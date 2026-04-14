import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JadeCircuit — HarmonyOS development from Shanghai, EU-ready from Estonia",
  description:
    "JadeCircuit is a HarmonyOS-first development studio based in Shanghai. Estonian e-Residency company serving clients worldwide — HarmonyOS NEXT, Android, iOS, and web.",
  openGraph: {
    title: "JadeCircuit",
    description:
      "HarmonyOS development from Shanghai — EU-ready from Estonia.",
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
