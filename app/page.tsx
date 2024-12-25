"use client";

import dynamic from "next/dynamic";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";

const DynamicSidebar = dynamic(
  () => import("@/components/sidebar").then((mod) => mod.Sidebar),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0a192f]">
      <DynamicSidebar />
      <main className="flex-1 lg:ml-[300px]">
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
      </main>
    </div>
  );
}
