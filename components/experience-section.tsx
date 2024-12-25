"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    date: "2024 — PRESENT",
    description:
      "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    skills: ["JavaScript", "TypeScript", "React", "Storybook"],
    link: "https://klaviyo.com",
  },
];

export function ExperienceSection() {
  const isActive = useSectionInView("experience");

  return (
    <section
      id="experience"
      className={`min-h-screen scroll-mt-16 p-8 ${
        isActive ? "opacity-100" : "opacity-80"
      }`}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="font-serif text-3xl font-bold text-slate-200">
          Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-medium text-slate-200">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-teal-300 hover:text-teal-200"
                    >
                      {experience.company}
                      <ExternalLink className="ml-1 inline h-4 w-4" />
                    </a>
                  </div>
                </div>
                <span className="font-sans text-sm text-slate-400">
                  {experience.date}
                </span>
              </div>
              <p className="font-sans text-slate-400">
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-teal-900/30 px-3 py-1 font-sans text-sm text-teal-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
