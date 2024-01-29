"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MenuItem } from "./Header";

interface HeaderDesktopProps {
  menuItems: MenuItem[];
}

const HeaderDesktop = ({ menuItems }: HeaderDesktopProps) => {
  return (
    <nav className="flex w-full items-center justify-between bg-white px-4 py-5 shadow-lg xl:px-8 rounded-b-2xl">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="Portfolio Logo"
            className="rounded-full"
            width={40}
            height={40}
          />
        </Link>
        <span className="text-xl font-bold">PORTFOLIO</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="px-4 py-2 text-gray-800 transition-colors duration-200 hover:text-black"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-row gap-2">
        <Link
          href="https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/CV_Wongsaphat_Puangsorn.pdf?alt=media&token=bc279fdc-80e4-40b1-8969-b61d3397cde2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">Download CV</Button>
        </Link>
        <Link href="/contact">
          <Button variant="default">CONTACT</Button>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderDesktop;
