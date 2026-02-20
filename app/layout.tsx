import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  viewport: "width=device-width,initial-scale=1",
  title: "ネコノテ合同会社 - Web・アプリ開発 コンテンツ制作",
  description:
    "ネコノテ合同会社は、テクノロジーを道具にみなさまの思いを叶えるリーディングカンパニーです。",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="py-[76px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
