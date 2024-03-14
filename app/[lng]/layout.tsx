import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import ReactQueryProviders from "../hooks/useReactQuery";
import Header from "@/components/layout/Header";
import { languages } from "../i18n/settings";

import { dir } from "i18next";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Study Issuer / Holder / Verifier Concept",
  description: "let's start to use sd-jwt ",
  icons: {
    icon: "/Brand_B.svg",
  },
  keywords: ["sd-jwt", "jwt", "ssi", "ofw"],
};

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: {
    lng: string;
  };
}>) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body className={inter.className}>
        <ReactQueryProviders>
          <Header />
          {children}
        </ReactQueryProviders>
      </body>
    </html>
  );
}
