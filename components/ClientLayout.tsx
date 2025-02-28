"use client";
import NavigationFooter from "@/components/navigation/NavigationFooter";
import NavigationHeader from "@/components/navigation/NavigationHeader";
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
        <NavigationHeader />
        <section className="container mx-auto py-6 grow px-2">
          {children}
        </section>
        <NavigationFooter />
      </div>
    </>
  );
}
