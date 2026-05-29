import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maisons de Marquefave — Deux demeures, une même lumière.",
  description:
    "Le Moulin de l'Averanède et le Domaine de Latour. Deux propriétés familiales d'exception dans le sud de la France, à céder dans un cadre rare et préservé.",
  openGraph: {
    title: "Maisons de Marquefave",
    description: "Deux demeures, une même lumière.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <head>
        {/* ─── Google Fonts — chargement runtime (pas build time) ─── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Manrope:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
