"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "Core Java under Industry Academia Interaction Program",
    issuer: "Softpro India",
    date: "2024",
  },
  {
    title: "Project-based Internship with Focus on App Development Practices",
    issuer: "Corizo & Wipro DICE",
    date: "Oct 2024 - Nov 2024",
  },
  {
    title: "Data Science Training Program",
    issuer: "Corizo & Wipro DICE",
    date: "Dec 2024 - Jan 2025",
  },
  {
    title: "Innovation, Design, and Entrepreneurship (IDE) Bootcamp",
    issuer: "AICTE & Ministry of Educations Innovation Cell (MIC)",
    date: "Feb 2025",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:gap-20">
        <AnimatedSection className="flex flex-col gap-8 md:items-center md:text-center">
          <AnimatedItem>
            <EyebrowBadge>PROFESSIONAL DEVELOPMENT</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[20ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl mx-auto">
              Certifications
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg mx-auto">
              Professional development and training programs completed.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {certifications.map((cert) => (
            <AnimatedItem
              key={cert.title}
              className="group relative flex flex-col items-start gap-4 rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]"
            >
              <div className="flex items-center gap-4 w-full">
                <div className="inline-flex rounded-lg border border-white/10 bg-white/5 p-3 text-accent group-hover:scale-110 transition-transform">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {cert.date}
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="font-sans text-xl font-medium text-foreground leading-snug">
                  {cert.title}
                </h3>
                <p className="font-sans text-sm text-zinc-400">
                  {cert.issuer}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
