import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProviders from "./hooks/useReactQuery";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "let's start to use sd-jwt ",
  icons: {
    icon: "/Brand_B.svg",
  },
  keywords: ["sd-jwt", "jwt", "ssi", "ofw"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReactQueryProviders>
          <Header />
          {children}
        </ReactQueryProviders>
      </body>
    </html>
  );
}
