"use client";

import { useEffect, useState } from "react";

export function useSectionInView(sectionId: string) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);
        if (entry.isIntersecting) {
          window.history.replaceState(null, "", `#${sectionId}`);
        }
      },
      { threshold: 0.75 }
    );

    const element = document.getElementById(sectionId);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sectionId]);

  return isActive;
}
