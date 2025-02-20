"use client";

import { ProjectCard } from "@/components/section/ProjectCard";
import {
  SiFirebase,
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGoogletagmanager,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

const projects = [
  {
    title: "RS TROPHY",
    projectUrl: "https://www.rs-trophy.com/",
    imageUrl: "/project/RSTROPHY.png",
    imageAlt: "RS TROPHY",
    skills: [
      { name: "Wordpress", Icon: SiWordpress },
      { name: "Woocommerce", Icon: SiWoocommerce },
      { name: "Google Ads", Icon: SiGoogleads },
      { name: "Search console", Icon: SiGooglesearchconsole },
      { name: "Tag Manager", Icon: SiGoogletagmanager },
      { name: "Google Analytics", Icon: SiGoogleanalytics },
    ],
  },
  {
    title: "Combo Maker",
    projectUrl: "https://combomaker.net/",
    imageUrl: "/project/ComboMaker.png",
    imageAlt: "Combo Maker",
    skills: [
      { name: "NEXT JS", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Shad/cn UI", Icon: SiShadcnui },
      { name: "Typescript", Icon: SiTypescript },
      { name: "FIREBASE", Icon: SiFirebase },
    ],
  },
  {
    title: "HoyoSmash",
    projectUrl: "https://hoyosmash.com/",
    imageUrl: "/project/HoYoSmash.png",
    imageAlt: "HoyoSmash",
    skills: [
      { name: "NEXT JS", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Shad/cn UI", Icon: SiShadcnui },
      { name: "Typescript", Icon: SiTypescript },
      { name: "FIREBASE", Icon: SiFirebase },
    ],
  },
  {
    title: "QR FOOD",
    projectUrl: "https://combomaker.net/",
    imageUrl: "/project/QRFOOD.png",
    imageAlt: "QR FOOD",
    skills: [
      { name: "Nuxt", Icon: SiNuxtdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "Prisma", Icon: SiPrisma },
      { name: "Typescript", Icon: SiTypescript },
      { name: "Vercel", Icon: SiVercel },
      { name: "Supabase", Icon: SiSupabase },
    ],
  },
  {
    title: "Portfolio",
    projectUrl: "https://portfolio.me/",
    imageUrl: "/project/Portfolio.png",
    imageAlt: "Portfolio",
    skills: [
      { name: "NEXT JS", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Shad/cn UI", Icon: SiShadcnui },
      { name: "Typescript", Icon: SiTypescript },
      { name: "FIREBASE", Icon: SiFirebase },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-4">
      <h2 className="mb-6 text-4xl font-bold text-primary text-center">
        HighLight Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
