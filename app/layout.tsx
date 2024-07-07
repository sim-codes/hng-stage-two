import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/app/ui/navBar";
import Footer from "@/app/ui/footer";
import "./globals.css";

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
        <Footer />
      </body>
    </html>
  );
}
