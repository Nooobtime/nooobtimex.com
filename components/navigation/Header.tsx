"use client";

import HeaderDesktop from "@/components/navigation/HeaderDesktop";
import HeaderMobile from "@/components/navigation/HeaderMobile";

export interface MenuItem {
  title: string;
  href: string;
}

const Header = () => {
  const menuItems: MenuItem[] = [
    { title: "HOME", href: "/" },
    { title: "SKILL", href: "/skill" },
    { title: "PROJECT", href: "/project" },
  ];

  return (
    <nav className="z-50 fixed bottom-0 left-0 right-0 md:sticky md:top-0">
      <div className="hidden md:block">
        <HeaderDesktop menuItems={menuItems} />
      </div>
      <div className="md:hidden">
        <HeaderMobile />
      </div>
    </nav>
  );
};

export default Header;
