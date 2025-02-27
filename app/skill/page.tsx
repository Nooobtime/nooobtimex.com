"use client";

import { IconType } from "react-icons";
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

// SkillCard component renders an individual skill.
const SkillCard = ({
  skill,
}: {
  skill: { name: string; Icon: IconType; level: string };
}) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "text-red-500 border border-red-500 px-2 rounded-xl hover:text-white hover:bg-red-500";
      case "Intermediate":
        return "text-yellow-500 border border-yellow-500 px-2 rounded-xl hover:text-white hover:bg-yellow-500";
      case "Beginner":
        return "text-green-500 border border-green-500 px-2 rounded-xl hover:text-white hover:bg-green-500";
      default:
        return "text-gray-500";
    }
  };

  const Icon = skill.Icon;

  return (
    <div className="flex flex-col items-center justify-center p-2 border border-gray-200 rounded-xl">
      <Icon className="h-10 w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16 text-primary" />
      <p className="mt-2 text-sm font-medium">{skill.name}</p>
      <p className={getLevelColor(skill.level)}>{skill.level}</p>
    </div>
  );
};

// SkillGroup component renders a section of skills.
const SkillGroup = ({
  group,
}: {
  group: {
    groupName: string;
    skills: Array<{ name: string; Icon: IconType; level: string }>;
  };
}) => {
  return (
    <div className="mb-10">
      <h2 className="mb-4 text-2xl font-semibold">{group.groupName}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
        {group.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default function Skill() {
  const skillGroups = [
    {
      groupName: "Frontend",
      skills: [
        { name: "Next.js", Icon: SiNextdotjs, level: "Intermediate" },
        { name: "Nuxt.js", Icon: SiNuxtdotjs, level: "Intermediate" },
        { name: "React", Icon: SiReact, level: "Intermediate" },
        { name: "Vue.js", Icon: SiVuedotjs, level: "Intermediate" },
        { name: "Bootstrap", Icon: SiBootstrap, level: "Intermediate" },
        { name: "Tailwind CSS", Icon: SiTailwindcss, level: "Intermediate" },
        { name: "Daisy UI", Icon: SiDaisyui, level: "Intermediate" },
        { name: "Shad/cn UI", Icon: SiShadcnui, level: "Intermediate" },
        { name: "JavaScript", Icon: SiJavascript, level: "Intermediate" },
        { name: "TypeScript", Icon: SiTypescript, level: "Beginner" },
      ],
    },
    {
      groupName: "Backend",
      skills: [{ name: "Node.js", Icon: SiNodedotjs, level: "Intermediate" }],
    },
    {
      groupName: "Database",
      skills: [
        { name: "MySQL", Icon: SiMysql, level: "Beginner" },
        { name: "PostgreSQL", Icon: SiPostgresql, level: "Beginner" },
        { name: "SQLite", Icon: SiSqlite, level: "Beginner" },
      ],
    },
    {
      groupName: "Version Control",
      skills: [
        { name: "Github", Icon: SiGithub, level: "Beginner" },
        { name: "Gitlab", Icon: SiGitlab, level: "Beginner" },
      ],
    },
    {
      groupName: "project management tools",
      skills: [
        { name: "Monday", Icon: CgMonday, level: "Intermediate" },
        { name: "ClickUp", Icon: SiClickup, level: "Intermediate" },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center text-base-content">
      <h1 className="mb-6 text-4xl font-bold text-primary">SKILL</h1>
      <div className="w-full">
        {skillGroups.map((group, index) => (
          <SkillGroup key={index} group={group} />
        ))}
      </div>
    </div>
  );
}
