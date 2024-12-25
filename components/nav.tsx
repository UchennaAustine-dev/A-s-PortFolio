"use client";

import { useState, useEffect } from "react";

const navItems = [
  {
    name: "--- ABOUT",
    href: "#about",
  },
  {
    name: "--- EXPERIENCE",
    href: "#experience",
  },
  {
    name: "--- PROJECTS",
    href: "#projects",
  },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex flex-col space-y-4">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(item.href)?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className={`text-sm tracking-widest transition-colors hover:text-teal-300 lg:static sticky top-0 bg-[#0a192f] py-2 ${
            activeSection === item.href.replace("#", "")
              ? "text-teal-300"
              : "text-slate-400"
          }`}
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}
