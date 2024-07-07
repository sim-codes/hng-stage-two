import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import NavBar from "@/app/ui/navBar";
import Footer from "@/app/ui/footer";
import "./globals.css";
import footTopImage from "@/public/images/footerTop.png";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className={inter.className}>
      <body>
        <NavBar />
        {children}

        <div className="w-screen bg-black h-auto">
          <Image src={footTopImage} alt="Footer Top image" className="object-conver" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
