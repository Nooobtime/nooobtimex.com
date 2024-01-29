import type { Metadata } from "next"; // Import Metadata type
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio | Posts | Wongsaphat Puangsorn",
  abstract:
    "Posts Portfolio of Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
  description:
    "Posts Portfolio of Wongsaphat Puangsorn - Thammasat University Student and Software Developer from Thailand",
  keywords:
    "Wongsaphat Puangsorn, NooobtimeX, Thammasat University, Software Developer, Thailand, Posts Portfolio, Resume",
};

// Layout component for the BlogPage
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
