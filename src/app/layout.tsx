import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "camelAI: AI-powered Data Analysis | SQL-Free Business Intelligence"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://camelai.com/assets/images/qaml-favicon.png" type="image/png" sizes="64x64" />
        <script defer src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script defer src="https://tally.so/widgets/embed.js"></script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
} 