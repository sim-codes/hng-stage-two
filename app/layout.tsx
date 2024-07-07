import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local"
import Image from "next/image";
import NavBar from "@/app/ui/navBar";
import Footer from "@/app/ui/footer";
import "./globals.css";
import footTopImage from "@/public/images/footerTop.png";

const inter = Inter({ subsets: ["latin"] });

const acumin = localFont({
  variable: "--font-acumin",
  src: [
    {
      path: "./Acumin-RPro.otf",
      weight: "400",
      style: "normal",
    }
  ]
});

export const metadata: Metadata = {
  title: "Master Chef | Simcodes",
  description: "Foods and Drinks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${acumin.variable} font-acumin`}>
      <body>
        <NavBar />
        {children}

        <div className="max-w-screen bg-black h-auto">
          <Image src={footTopImage} alt="Footer Top image" className="object-conver" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
