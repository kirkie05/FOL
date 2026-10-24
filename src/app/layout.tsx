import type { Metadata, Viewport } from "next";
import { Archivo, Archivo_Narrow } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceWorker } from "@/components/service-worker";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", display: "swap" });
const archivoNarrow = Archivo_Narrow({ subsets: ["latin"], variable: "--font-archivo-narrow", display: "swap" });
const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://fols.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "RCCG Fountain of Life Sanctuary", template: "%s | RCCG FOLS" },
  description: "Your family church in Ogba, Lagos — RCCG Lagos Province 27 Headquarters.",
  applicationName: "FOLS Connect",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
  openGraph: { title: "RCCG Fountain of Life Sanctuary", description: "Faith. Family. Leadership. Community.", type: "website", locale: "en_NG" },
};
export const viewport: Viewport = { themeColor: "#0733a8", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${archivo.variable} ${archivoNarrow.variable}`}><a href="#main" className="skip-link">Skip to content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /><ServiceWorker /></body></html>;
}
