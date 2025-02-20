"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  SiBootstrap,
  SiDaisyui,
  SiFirebase,
  SiJavascript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiReact,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVuedotjs,
} from "react-icons/si";

const skills = [
  { name: "Bootstrap", Icon: SiBootstrap },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Daisy UI", Icon: SiDaisyui },
  { name: "Shad/cn UI", Icon: SiShadcnui },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "React", Icon: SiReact },
  { name: "Vue.js", Icon: SiVuedotjs },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Nuxt.js", Icon: SiNuxtdotjs },
  { name: "Vercel", Icon: SiVercel },
  { name: "Firebase", Icon: SiFirebase },
];

export default function Skill() {
  return (
    <section id="skills">
      <TooltipProvider>
        <div className="flex flex-col items-center text-base-content">
          <h2 className="mb-6 text-4xl font-bold text-primary">Skills</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
            {skills.map((skill, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="flex items-center justify-center p-2 cursor-pointer">
                    <skill.Icon className="h-10 w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-1 2xl:h-20 2xl:w-20 text-primary" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </TooltipProvider>
    </section>
  );
}
