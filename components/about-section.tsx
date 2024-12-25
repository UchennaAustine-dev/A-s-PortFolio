"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";

export function AboutSection() {
  const isActive = useSectionInView("about");

  return (
    <section
      id="about"
      className={`min-h-screen scroll-mt-16 p-8 ${
        isActive ? "opacity-100" : "opacity-80"
      }`}
    >
      <div className="mx-auto max-w-3xl space-y-8">
        <h2 className="font-serif text-3xl font-bold text-slate-200">About</h2>
        <div className="space-y-4 font-sans text-slate-400">
          <p className="leading-relaxed">
            I'm a developer passionate about crafting accessible, pixel-perfect
            user interfaces that blend thoughtful design with robust
            engineering. My favorite work lies at the intersection of design and
            development, creating experiences that not only look great but are
            meticulously built for performance and usability.
          </p>
          <p className="leading-relaxed">
            Currently, I'm a Senior Front-End Engineer at{" "}
            <span className="text-teal-300">Klaviyo</span>, specializing in
            accessibility. I contribute to the creation and maintenance of UI
            components that power Klaviyo's frontend, ensuring our platform
            meets web accessibility standards and best practices to deliver an
            inclusive user experience.
          </p>
        </div>
      </div>
    </section>
  );
}
