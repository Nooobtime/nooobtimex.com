import ClientLayout from "@/components/ClientLayout"; // Import the client layout
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import React from "react";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Wongsaphat Puangsorn",
  abstract:
    "Portfolio of Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
  description:
    "Portfolio of Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
  keywords:
    "Wongsaphat Puangsorn, NooobtimeX, Thammasat University, Software Developer, Thailand, Portfolio, Resume",
  icons: "/favicon.ico",
  robots: "index, follow",
  verification: {
    google: "KiAn5R5UAuZgmwSS_KpMOO2FIRmt-39QIKrHKXrAOL8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
