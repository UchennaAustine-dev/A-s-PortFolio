import { Playfair_Display, Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Front End Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${playfair.variable} ${roboto.variable} font-sans bg-[#0a192f] text-slate-300`}
      >
        {children}
      </body>
    </html>
  );
}
