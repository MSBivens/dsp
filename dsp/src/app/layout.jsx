import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ΔΣΦ Gamma Iota",
  description:
    "Delta Sigma Phi - Gamma Iota Chapter at the University of Idaho.",
  author: "Michael Bivens",
  keywords:
    "Delta Sigma Phi, Gamma Iota, University of Idaho, fraternity, dsp, gi, greek life",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />

          <main className="pt-20">{children}</main>

          <Footer />
          <Analytics />
        </Providers>
        <GoogleAnalytics gaId="G-Y5TVLG7E11" />
      </body>
    </html>
  );
}
