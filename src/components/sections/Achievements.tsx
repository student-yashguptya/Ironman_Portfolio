"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { Award } from "lucide-react";

const achievements = [
  {
    title: "Smart India Hackathon (SIH) 2023",
    result: "Position: Waiting List Runner-Up",
  },
  {
    title: "UCER Prayagraj Hackathon",
    result: "Award: Most Scalable Solution",
  },
  {
    title: "SRMS CET Hackathon 1, 2 & 3",
    result: "Awards: Winner",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:gap-20">
        <AnimatedSection className="flex flex-col gap-8 md:items-center md:text-center">
          <AnimatedItem>
            <EyebrowBadge>HACKATHON MILESTONES</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[20ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl mx-auto">
              Achievements
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg mx-auto">
              Hackathon milestones highlighting performance and innovation.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {achievements.map((achievement) => (
            <AnimatedItem
              key={achievement.title}
              className="group relative flex flex-col items-start gap-4 rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]"
            >
              <div className="inline-flex rounded-lg border border-white/10 bg-white/5 p-3 text-accent group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Award className="h-6 w-6" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-xl font-medium text-foreground">
                  {achievement.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                  {achievement.result}
                </p>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
