"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import {
  Atom, Braces, Code2, Database, FileCode2,
  GitBranch, Globe, Layers,
  Server, Smartphone, Terminal, Box,
} from "lucide-react";
import { GithubLogo } from "@phosphor-icons/react";

const skills = [
  { name: "OpenAI API", category: "ai" },
  { name: "Automation", category: "ai" },
  { name: "Intelligent Systems", category: "ai" },
  { name: "React.js", category: "frontend" },
  { name: "React Native", category: "frontend" },
  { name: "Flutter", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Android Studio", category: "tools" },
  { name: "Dart", category: "language" },
  { name: "C", category: "language" },
];

const categoryColors: Record<string, string> = {
  ai: "255, 100, 150",
  frontend: "142, 249, 252",
  backend: "142, 252, 204",
  database: "142, 202, 252",
  tools: "204, 142, 252",
  language: "252, 208, 142",
};

const skillIcons: Record<string, any> = {
  "OpenAI API": Atom,
  Automation: Server,
  "Intelligent Systems": Layers,
  "HTML/CSS": Globe,
  JavaScript: FileCode2,
  "React.js": Atom,
  "React Native": Smartphone,
  Flutter: Layers,
  "Node.js": Server,
  Express: Terminal,
  MongoDB: Database,
  PostgreSQL: Database,
  Git: GitBranch,
  GitHub: GithubLogo,
  Docker: Box,
  "Android Studio": Smartphone,
  Dart: Braces,
  C: Terminal,
};

const fallbackColor = "142, 202, 252";
const FallbackIcon = Code2;

export function SystemsNominal() {
  return (
    <section
      id="systems"
      className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32"
      style={{ overflow: "hidden" }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:grid md:grid-cols-[5fr_4fr] md:gap-20">
        <AnimatedSection className="flex flex-col gap-8 z-10">
          <AnimatedItem>
            <EyebrowBadge>TECHNICAL SKILLS // SYSTEMS NOMINAL</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[16ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl">
              Proficient across <br />
              <span className="text-accent">Full Stack.</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[48ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg">
              A robust arsenal of tools and technologies. From building intelligent 
              AI systems to crafting high-performance, cross-platform mobile and web applications, 
              these are the components that power the infrastructure I create.
            </p>
          </AnimatedItem>
          <AnimatedItem>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08] active:translate-y-[1px]"
            >
              View Projects
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="flex flex-col relative w-full pt-20 md:pt-0">
          <div className="skills-rotator w-full" style={{ minHeight: "640px" }}>
            <div className="wrapper">
              <div className="inner" style={{ "--quantity": skills.length } as any}>
                {skills.map((skill, index) => {
                  const SkillIcon = skillIcons[skill.name] ?? FallbackIcon;
                  const color = categoryColors[skill.category] ?? fallbackColor;
                  return (
                    <div
                      key={`${skill.name}-${skill.category}`}
                      className="card"
                      style={{ "--index": index, "--color-card": color } as any}
                    >
                      <div className="img">
                        <SkillIcon size={30} strokeWidth={1.8} />
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
