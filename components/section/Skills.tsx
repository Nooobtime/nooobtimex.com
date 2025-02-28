"use client";

import { CgMonday } from "react-icons/cg";
import {
  SiBootstrap,
  SiClickup,
  SiDaisyui,
  SiGithub,
  SiGitlab,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiReact,
  SiShadcnui,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SectionTransition from "../SectionTransition";

export default function Skill() {
  const skillGroups = [
    {
      groupName: "Frontend Development",
      skills: [
        { name: "Next.js", Icon: SiNextdotjs },
        { name: "Nuxt.js", Icon: SiNuxtdotjs },
        { name: "React", Icon: SiReact },
        { name: "Vue.js", Icon: SiVuedotjs },
        { name: "Bootstrap", Icon: SiBootstrap },
        { name: "Tailwind CSS", Icon: SiTailwindcss },
        { name: "Daisy UI", Icon: SiDaisyui },
        { name: "Shad/cn UI", Icon: SiShadcnui },
        { name: "JavaScript", Icon: SiJavascript },
        { name: "TypeScript", Icon: SiTypescript },
      ],
    },
    {
      groupName: "Backend Development",
      skills: [
        { name: "Node.js", Icon: SiNodedotjs },
        { name: "MySQL", Icon: SiMysql },
        { name: "PostgreSQL", Icon: SiPostgresql },
        { name: "SQLite", Icon: SiSqlite },
      ],
    },
    {
      groupName: "Version Control",
      skills: [
        { name: "Github", Icon: SiGithub },
        { name: "Gitlab", Icon: SiGitlab },
      ],
    },
    {
      groupName: "Project Management Tools",
      skills: [
        { name: "Monday", Icon: CgMonday },
        { name: "ClickUp", Icon: SiClickup },
      ],
    },
  ];

  return (
    <section id="skill">
      <div className="flex flex-col items-center text-base-content pt-32">
        <h2 className="mb-6 text-4xl font-bold text-primary">SKILL</h2>
        <div className="gap-2 max-w-5xl mx-auto">
          {skillGroups.map((group, groupIndex) => (
            <SectionTransition key={groupIndex}>
              <div className="py-4">
                <h3 className="mb-4 text-2xl font-semibold text-center">
                  {group.groupName}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {group.skills.map((skill, skillIndex) => {
                    const Icon = skill.Icon;
                    return (
                      <TooltipProvider key={skillIndex}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="flex flex-col items-center justify-center p-2">
                              <Icon className="h-10 w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16" />
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>{skill.name}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    );
                  })}
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>
      </div>
    </section>
  );
}
