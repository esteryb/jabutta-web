import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kedai Jabutta",
  description: "Nikmati Misop Medan ala Kedai Jabutta",
  icons: {
  icon: "/logo-utama.png",
},
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head><script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script></head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
