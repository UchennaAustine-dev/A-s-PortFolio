"use client";

import { Github, Linkedin, CodepenIcon, Instagram } from "lucide-react";
import { Nav } from "./nav";
import { BackgroundParticles } from "./background-particles";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: CodepenIcon,
    href: "https://codepen.io",
    label: "CodePen",
  },
  {
    icon: Instagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
];

export function Sidebar() {
  return (
    <aside className="w-full lg:w-[300px] lg:fixed lg:left-0 lg:top-0 lg:h-screen border-b lg:border-r border-slate-800 bg-[#0a192f] overflow-hidden">
      <div className="absolute inset-0">
        <BackgroundParticles />
      </div>
      <div className="relative z-10 h-full p-8 flex flex-col">
        <div className="space-y-4">
          <h1 className="font-serif text-4xl font-bold text-slate-100">
            Your Name
          </h1>
          <h2 className="font-sans text-xl font-light text-slate-400">
            Front End Engineer
          </h2>
          <p className="font-sans text-sm leading-relaxed text-slate-400">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        <div className="mt-12">
          <Nav />
        </div>

        <div className="mt-auto flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors hover:text-teal-300"
              aria-label={link.label}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
