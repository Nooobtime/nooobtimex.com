"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { FaLaptopCode } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { GiBrain } from "react-icons/gi";
import { LuContact } from "react-icons/lu";
import { SiGithub } from "react-icons/si";

export interface MenuItem {
  title: string;
  href: string;
  icon?: IconType;
}

const Header = () => {
  const pathname = usePathname();

  // Desktop menu items
  const menuItemsDesktop: MenuItem[] = [
    { title: "SKILL", href: "/#skill" },
    { title: "PROJECT", href: "/#project" },
  ];

  // Mobile menu items
  const menuItemsLeft: MenuItem[] = [
    { title: "SKILL", href: "/#skill", icon: GiBrain },
    { title: "CONTACT", href: "/#contact", icon: LuContact },
  ];

  const menuItemsRight: MenuItem[] = [
    { title: "PROJECT", href: "/#project", icon: FaLaptopCode },
    {
      title: "CV",
      href: "https://firebasestorage.googleapis.com/v0/b/portfolio-84dbc.firebasestorage.app/o/CV_Wongsaphat_Puangsorn.pdf?alt=media&token=bc279fdc-80e4-40b1-8969-b61d3397cde2",
      icon: FiDownload,
    },
  ];

  return (
    <nav className="z-50 fixed bottom-0 left-0 right-0 md:sticky md:top-0 max-w-full">
      {/* Desktop Header */}
      <div className="hidden md:block">
        <nav className="flex w-full items-center justify-between bg-white p-4 border-b  -2 xl:px-8 rounded    -2xl">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img
                src="/favicon.ico"
                alt="Portfolio Logo"
                className="rounded-full"
                width={40}
                height={40}
              />
            </Link>
            <Link href="/">NooobtimeX</Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {menuItemsDesktop.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-800 transition-colors duration-200 hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link href={"https://github.com/NooobtimeX"} target="_blank">
            <SiGithub className="text-2xl text-gray-800 hover:cursor-pointer" />
          </Link>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden text-xs px-4">
        <nav className="relative flex w-full items-center justify-around bg-white pb-4 pt-2 shadow-lg xl:px-8 border-t-2 rounded-t-2xl">
          {/* Overlapping Logo */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[15%]">
            <Link href="/" className="flex flex-col items-center mb-12">
              <img
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
          <div className="grid grid-cols-2 gap-2 w-full justify-items-center">
            {menuItemsLeft.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center  ${
                    pathname === item.href ? "text-blue-500" : "text-gray-500"
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5 mx-auto" />}
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
                  {Icon && <Icon className="w-5 h-5 mx-auto" />}
                  <p className="mt-2 -mb-2 text-center">{item.title}</p>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
