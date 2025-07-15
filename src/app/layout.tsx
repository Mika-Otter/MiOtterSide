import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gestionnaire de Favoris",
  description: "Application de gestion de favoris web avec analyse intelligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
