"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import CountUp from "react-countup";

export default function HeroSection() {
  const stats = [
    { value: 3, label: "CLIENT" },
    { value: 8, label: "PROJECT" },
    { value: 1, label: "YOE" },
  ];

  return (
    <section className="min-h-[90vh] bg-base-200 text-base-content flex flex-col lg:flex-row items-center justify-center lg:justify-start">
      {/* Profile Avatar using shadcn/ui */}
      <Avatar className="w-40 h-40 mx-auto lg:hidden block mb-8">
        <AvatarImage
          className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          src="/profile/NooobtimeX.webp"
          alt="Avatar"
        />
        <AvatarFallback>Wongsaphat Puansorn</AvatarFallback>
      </Avatar>

      <div className="text-start max-w-4xl">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-center lg:text-left">
          FRONTEND PORTFOLIO
        </h1>
        <h2 className="text-3xl font-bold md:text-5xl lg:text-7xl text-center lg:text-left">
          Wongsaphat Puansorn
        </h2>
        <p className="mt-4 text-lg lg:text-xl">
          Passionate software developer. Specializing in modern web development
          with frameworks like Next.js, I turn ideas into seamless digital
          experiences by building robust web applications using the latest
          technologies.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/skill">
            <Button variant="outline">VIEW SKILL</Button>
          </Link>
          <Link href="/project">
            <Button>VIEW PROJECT</Button>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center py-4">
              <CountUp start={0} end={stat.value} duration={5} />
              <p>{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Profile Avatar using shadcn/ui */}
      <Avatar className="w-40 h-40 mx-auto hidden lg:block  ">
        <AvatarImage
          className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
          src="/profile/NooobtimeX.webp"
          alt="Avatar"
        />
        <AvatarFallback>Wongsaphat Puansorn</AvatarFallback>
      </Avatar>
    </section>
  );
}
