import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { getSiteSettings } from "@lib/sanity";
import { Providers } from "./providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ΔΣΦ Gamma Iota",
  description:
    "Delta Sigma Phi - Gamma Iota Chapter at the University of Idaho.",
  authors: [{ name: "Michael Bivens" }],
  keywords:
    "Delta Sigma Phi, Gamma Iota, University of Idaho, fraternity, dsp, gi, greek life",
};

export default async function RootLayout({ children }) {
  const settings = await getSiteSettings();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />

          <main className="pt-20">{children}</main>

          <Footer contactEmail={settings?.contact_email} />
          <Analytics />
        </Providers>
        <GoogleAnalytics gaId="G-Y5TVLG7E11" />
      </body>
    </html>
  );
}
