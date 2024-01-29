"use client";

import { ProjectCard } from "@/components/section/ProjectCard";
import {
  SiFirebase,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPrisma,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

export default function Projects() {
  return (
    <section id="projects" className="py-4">
      <h2 className="mb-6 text-4xl font-bold text-primary text-center">
        HighLight Project
      </h2>
      {/* Combo Maker */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center">
        <ProjectCard
          title="Combo Maker"
          projectUrl="https://combomaker.net/"
          imageUrl="/project/ComboMaker.png"
          imageAlt="Combo Maker"
          skills={[
            { name: "NEXT JS", Icon: SiNextdotjs },
            { name: "Tailwind CSS", Icon: SiTailwindcss },
            { name: "Shad/cn UI", Icon: SiShadcnui },
            { name: "Typescript", Icon: SiTypescript },
            { name: "FIREBASE", Icon: SiFirebase },
          ]}
        />
        <ProjectCard
          title="Combo Maker"
          projectUrl="https://combomaker.net/"
          imageUrl="/project/ComboMaker.png"
          imageAlt="Combo Maker"
          skills={[
            { name: "NEXT JS", Icon: SiNextdotjs },
            { name: "Tailwind CSS", Icon: SiTailwindcss },
            { name: "Shad/cn UI", Icon: SiShadcnui },
            { name: "Typescript", Icon: SiTypescript },
            { name: "FIREBASE", Icon: SiFirebase },
          ]}
        />

        {/* HoyoSmash (with reverse layout) */}
        <ProjectCard
          title="HoyoSmash"
          projectUrl="https://hoyosmash.com/"
          imageUrl="/project/HoYoSmash.png"
          imageAlt="HoyoSmash"
          skills={[
            { name: "NEXT JS", Icon: SiNextdotjs },
            { name: "Tailwind CSS", Icon: SiTailwindcss },
            { name: "Shad/cn UI", Icon: SiShadcnui },
            { name: "Typescript", Icon: SiTypescript },
            { name: "FIREBASE", Icon: SiFirebase },
          ]}
        />

        {/* QR FOOD (with reverse layout and a background color) */}
        <ProjectCard
          title="QR FOOD"
          projectUrl="https://combomaker.net/"
          imageUrl="/project/QRFOOD.png"
          imageAlt="QR FOOD"
          skills={[
            { name: "Nuxt", Icon: SiNuxtdotjs },
            { name: "Tailwind CSS", Icon: SiTailwindcss },
            { name: "PostgreSQL", Icon: SiPostgresql },
            { name: "Prisma", Icon: SiPrisma },
            { name: "Typescript", Icon: SiTypescript },
            { name: "Vercel", Icon: SiVercel },
            { name: "Supabase", Icon: SiSupabase },
          ]}
        />
      </div>
    </section>
  );
}
