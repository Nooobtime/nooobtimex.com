"use client";

import Head from "next/head";
import { useState } from "react";
import { IconType } from "react-icons";
import { IoFilterSharp } from "react-icons/io5";
import {
  SiDaisyui,
  SiFirebase,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiJavascript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWoocommerce,
  SiWordpress,
} from "react-icons/si";

import { ProjectCard } from "@/components/section/ProjectCard";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TooltipProvider } from "@/components/ui/tooltip";

// Define the Skill type
type Skill = {
  name: string;
  Icon: IconType;
};

// Single array used for both filtering and mapping skills.
const skillsArr: Skill[] = [
  { name: "NEXT JS", Icon: SiNextdotjs },
  { name: "NUXT JS", Icon: SiNuxtdotjs },
  { name: "TAILWIND CSS", Icon: SiTailwindcss },
  { name: "DAISY UI", Icon: SiDaisyui },
  { name: "Shad/cn UI", Icon: SiShadcnui },
  { name: "TYPESCRIPT", Icon: SiTypescript },
  { name: "JAVASCRIPT", Icon: SiJavascript },
  { name: "VERCEL", Icon: SiVercel },
  { name: "SUPABASE", Icon: SiSupabase },
  { name: "FIREBASE", Icon: SiFirebase },
  { name: "WORDPRESS", Icon: SiWordpress },
  { name: "WOOCOMMERCE", Icon: SiWoocommerce },
  { name: "Google Ads", Icon: SiGoogleads },
  { name: "Google Tagmanager", Icon: SiGoogletagmanager },
  { name: "Google Analytics", Icon: SiGoogleanalytics },
];

// Function to convert a skill name to its Skill object using the same array.
function getSkill(skillName: string): Skill {
  const skill = skillsArr.find((s) => s.name === skillName);
  if (!skill) throw new Error(`Skill not found: ${skillName}`);
  return skill;
}

export default function ProjectSection() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const items = [
    {
      href: "https://nooobtimex.me/",
      imgSrc: "/project/Portfolio.png",
      name: "Portfolio",
      skills: [
        "NEXT JS",
        "TAILWIND CSS",
        "Shad/cn UI",
        "TYPESCRIPT",
        "FIREBASE",
      ],
    },
    {
      href: "https://github.com/NooobtimeX/QR-Food",
      imgSrc: "/project/QRFOOD.png",
      name: "QR FOOD",
      skills: ["NUXT JS", "VERCEL", "SUPABASE", "TAILWIND CSS"],
    },
    {
      href: "https://combomaker.net/",
      imgSrc: "/project/ComboMaker.png",
      name: "Combo Maker",
      skills: [
        "NEXT JS",
        "TAILWIND CSS",
        "Shad/cn UI",
        "TYPESCRIPT",
        "FIREBASE",
      ],
    },
    {
      href: "https://hoyosmash.com/",
      imgSrc: "/project/HoYoSmash.png",
      name: "HoyoSmash",
      skills: [
        "NEXT JS",
        "TAILWIND CSS",
        "Shad/cn UI",
        "TYPESCRIPT",
        "FIREBASE",
      ],
    },
    {
      href: "https://www.rs-trophy.com",
      imgSrc: "/project/RSTROPHY.png",
      name: "rs-trophy.com",
      skills: [
        "WORDPRESS",
        "WOOCOMMERCE",
        "Google Ads",
        "Google Tagmanager",
        "Google Analytics",
      ],
    },
    {
      href: "https://www.rs-award.com",
      imgSrc: "/project/RSAWARD.png",
      name: "rs-award.com",
      skills: [
        "WORDPRESS",
        "WOOCOMMERCE",
        "Google Ads",
        "Google Tagmanager",
        "Google Analytics",
      ],
    },
    {
      href: "https://www.rs-medal.com",
      imgSrc: "/project/RSMEDAL.png",
      name: "rs-medal.com",
      skills: [
        "WORDPRESS",
        "WOOCOMMERCE",
        "Google Ads",
        "Google Tagmanager",
        "Google Analytics",
      ],
    },
    {
      href: "https://www.rs-ribbon.com",
      imgSrc: "/project/RSRIBBON.png",
      name: "rs-ribbon.com",
      skills: [
        "WORDPRESS",
        "WOOCOMMERCE",
        "Google Ads",
        "Google Tagmanager",
        "Google Analytics",
      ],
    },
  ];

  // Toggle the selected filter skill.
  const handleSkillChange = (skillName: string) => {
    setSelectedSkills((prev) =>
      prev.includes(skillName)
        ? prev.filter((s) => s !== skillName)
        : [...prev, skillName]
    );
  };

  // Filter projects based on selected skills.
  const filteredItems = items.filter(
    (item) =>
      selectedSkills.length === 0 ||
      selectedSkills.every((skill) => item.skills.includes(skill))
  );

  return (
    <>
      <TooltipProvider>
        <section>
          <Head>
            <link rel="canonical" href="https://nooobtimex.me/projects" />
          </Head>
          <div>
            <h1 className="text-center text-4xl font-bold text-primary mb-8">
              PROJECT
            </h1>

            <TooltipProvider>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 items-center">
                {filteredItems.map((item, idx) => (
                  <ProjectCard
                    key={idx}
                    title={item.name}
                    projectUrl={item.href}
                    imageUrl={item.imgSrc}
                    imageAlt={item.name}
                    // Convert string skills to Skill objects.
                    skills={item.skills.map(getSkill)}
                  />
                ))}
              </div>
            </TooltipProvider>
            <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  className="fixed bottom-20 right-4 aspect-square rounded-full p-4 shadow-lg transition-all duration-200 z-50 max-h-10 max-w-52"
                >
                  <IoFilterSharp size="1.5em" className="pointer-events-none" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-center text-2xl font-bold text-primary mb-4">
                    FILTER
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillsArr.map((skill) => (
                    <Button
                      key={skill.name}
                      variant={
                        selectedSkills.includes(skill.name)
                          ? "default"
                          : "outline"
                      }
                      onClick={() => handleSkillChange(skill.name)}
                      className="badge-lg cursor-pointer px-3"
                    >
                      <skill.Icon className="mr-2" />
                      {skill.name}
                    </Button>
                  ))}
                </div>
                <DialogFooter>
                  <Button
                    onClick={() => setIsFilterOpen(false)}
                    className="w-full"
                  >
                    Close
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>
      </TooltipProvider>
    </>
  );
}
