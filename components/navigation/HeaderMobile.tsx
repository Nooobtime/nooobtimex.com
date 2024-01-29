"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { FaLaptopCode } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";
import { LuContact } from "react-icons/lu";

export interface MenuItem {
  title: string;
  href: string;
  icon?: IconType;
}

const menuItemsLeft: MenuItem[] = [
  { title: "SKILL", href: "/skill", icon: GiBrain },
  { title: "CONTACT", href: "/contact", icon: LuContact },
];

const menuItemsRight: MenuItem[] = [
  { title: "PROJECT", href: "/project", icon: FaLaptopCode },
  {
    title: "CV",
    href: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/CV_Wongsaphat_Puangsorn.pdf?alt=media&token=bc279fdc-80e4-40b1-8969-b61d3397cde2",
    icon: FiDownload,
  },
];

const HeaderMobile = () => {
  const pathname = usePathname();

  return (
    <nav className="relative flex w-full items-center justify-around bg-white pb-4 pt-2 shadow-lg xl:px-8 border-t-2 rounded-t-2xl">
      {/* Overlapping Logo */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[15%]">
        <Link href="/" className="flex flex-col items-center mb-10">
          <Image
            src="/favicon.ico"
            alt="Portfolio Logo"
            className="rounded-full p-[2px] bg-gray-200"
            width={60}
            height={60}
          />
          <p
            className={`text-center ${
              pathname === "/" ? "text-blue-500" : "text-gray-500"
            }`}
          >
            NooobtimeX
          </p>
        </Link>
      </div>
      {/* Navigation Links Left */}
      <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
        {menuItemsLeft.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center ${
                pathname === item.href ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {Icon && <Icon className="w-6 h-6 mx-auto" />}
              <p className="mt-2 -mb-2 text-center">{item.title}</p>
            </Link>
          );
        })}
      </div>
      <div className="mx-12"></div>
      {/* Navigation Links Right */}
      <div className="grid grid-cols-2 gap-4 w-full justify-items-center">
        {menuItemsRight.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center ${
                pathname === item.href ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {Icon && <Icon className="w-6 h-6 mx-auto" />}
              <p className="mt-2 -mb-2 text-center">{item.title}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default HeaderMobile;
