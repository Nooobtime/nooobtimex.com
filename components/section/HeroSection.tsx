"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[90vh] bg-base-200 text-base-content flex flex-col lg:flex-row items-center justify-center -pt-20">
      <div className="text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          FRONTEND PORTFOLIO
        </h1>
        <h2 className="text-3xl font-bold md:text-5xl lg:text-7xl ">
          WONGSAPHAT PUANGSORN
        </h2>
        <p className="mt-4 text-lg lg:text-xl max-w-3xl mx-auto ">
          Specializing in{" "}
          <span className="text-red-500">modern web development</span>, I turn
          ideas into seamless digital experiences by building robust web
          applications using the latest technologies.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/#skill">
            <Button variant="outline">VIEW SKILL</Button>
          </Link>
          <Link href="/#project">
            <Button>VIEW PROJECT</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
