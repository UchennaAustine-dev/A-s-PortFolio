"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  stars?: number;
  technologies: string[];
  index: number;
}

export function ProjectCard({
  title,
  description,
  image,
  link,
  stars,
  technologies,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur">
        <div className="relative aspect-video">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-clash text-xl font-medium text-slate-100">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 hover:text-teal-300"
              >
                <span>{title}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </h3>
            {stars && (
              <div className="flex items-center space-x-1 text-sm text-slate-400">
                <Star className="h-4 w-4 fill-current" />
                <span>{stars}</span>
              </div>
            )}
          </div>
          <p className="text-sm leading-relaxed text-slate-300">
            {description}
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-teal-900/30 text-teal-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
