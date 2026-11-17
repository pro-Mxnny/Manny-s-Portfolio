import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://manny-portfolio-manny-s-projects1.vercel.app"),
  title: "Emmanuel Falusi — Independent Digital Studio",
  description: "Selected digital products, experiments and ideas by Emmanuel Falusi — an independent developer building useful things for the web.",
  openGraph: {
    title: "Emmanuel Falusi — Independent Digital Studio",
    description: "A collection of digital products, experiments and ideas by Emmanuel Falusi.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
