import { Inter } from "next/font/google";
import "./globals.css";
// import Script from "next/script";

import Header from "./components/clientHeader";
import Footer from "./components/footer";

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
        <Header />
        {children}
        <Footer />
      </body>
      {/* <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js" /> */}
    </html>
  );
}
