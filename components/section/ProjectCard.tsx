"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

// Define the type for each skill
type Skill = {
  name: string;
  Icon: IconType;
};

// Define the props for the ProjectCard component
interface ProjectCardProps {
  title: string;
  projectUrl: string;
  imageUrl: string;
  imageAlt: string;
  skills: Skill[];
}

export function ProjectCard({
  title,
  projectUrl,
  imageUrl,
  imageAlt,
  skills,
}: ProjectCardProps) {
  return (
    <Card className="p-2 bg-base-100">
      <div className="grid grid-cols-3 md:grid-cols-1 gap-4 items-center">
        <Link href={projectUrl} target="_blank" className="col-span-1">
          <div className="relative w-full h-full">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={400}
              height={400}
              className="object-cover rounded-md aspect-square"
            />
          </div>
        </Link>
        <CardContent className="md:col-span-1 col-span-2">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <Link href={projectUrl} className="text-blue-500">
            {projectUrl}
          </Link>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className="flex items-center justify-center w-8 h-8">
                      <skill.Icon size={24} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
