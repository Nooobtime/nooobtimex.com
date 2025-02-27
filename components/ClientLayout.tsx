"use client";
import Footer from "@/components/navigation/footer";
import Header from "@/components/navigation/Header";
import { GoogleTagManager } from "@next/third-parties/google";
import React from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-5PVXPTWP" />
      <div className="flex flex-col min-h-screen bg-base-200 text-base-content">
        <Header />
        <section className="container mx-auto py-6 grow px-2">
          {children}
        </section>
        <Footer />
      </div>
    </>
  );
}
