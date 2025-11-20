import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  initialScale: 1,
  userScalable: false,
  width: "device-width",
  interactiveWidget: "resizes-content",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "GetStac Demo-Test",
  description: "Hussein GETSTAC Demo-Test",
  icons: {
    icon: "/images/logo-icon.png",
  },
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased style-scrollbar`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
