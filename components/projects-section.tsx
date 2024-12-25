"use client";

import Image from "next/image";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { ExternalLink, Star } from "lucide-react";

const projects = [
  {
    title: "Build a Spotify Connected App",
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com",
    technologies: ["React", "Express", "Spotify API", "Heroku"],
  },
];

export function ProjectsSection() {
  const isActive = useSectionInView("projects");

  return (
    <section
      id="projects"
      className={`min-h-screen scroll-mt-16 p-8 ${
        isActive ? "opacity-100" : "opacity-80"
      }`}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="font-serif text-3xl font-bold text-slate-200">
          Projects
        </h2>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50 transition-colors hover:border-slate-700"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-medium text-slate-200">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-300"
                    >
                      {project.title}
                      <ExternalLink className="ml-1 inline h-4 w-4" />
                    </a>
                  </h3>
                </div>
                <p className="font-sans text-slate-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-teal-900/30 px-3 py-1 font-sans text-sm text-teal-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
