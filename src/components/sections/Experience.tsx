"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:gap-20">
        
        {/* Professional & Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Professional */}
          <AnimatedSection className="flex flex-col gap-8">
            <AnimatedItem>
              <EyebrowBadge>PROFESSIONAL EXPERIENCE</EyebrowBadge>
            </AnimatedItem>
            <div className="flex flex-col gap-6">
              {[
                { role: "Software Development Intern", company: "Jam Analytics Private Limited", format: "On-site Internship", duration: "1 July 2025 - 14 Aug 2025" },
                { role: "Android App Development Intern", company: "Corizo", format: "Remote", duration: "Oct 2024 - Nov 2024" }
              ].map((item, i) => (
                <AnimatedItem key={i} className="flex flex-col gap-2 border-l border-white/10 pl-6 relative before:absolute before:left-[-4px] before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-accent">
                  <h3 className="font-sans text-xl font-medium text-foreground">{item.role}</h3>
                  <div className="font-sans text-base text-zinc-300">{item.company}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-1">{item.format} &middot; {item.duration}</div>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection className="flex flex-col gap-8">
            <AnimatedItem>
              <EyebrowBadge>EDUCATION</EyebrowBadge>
            </AnimatedItem>
            <div className="flex flex-col gap-6">
              {[
                { institute: "Shri Ram Murti Smarak College of Engineering and Technology", degree: "Bachelor of Technology in Computer Science and Engineering (CSE)", date: "June 2026" },
                { institute: "Madhavrao Scindia Public School, Bareilly", degree: "Intermediate", date: "March 2022" }
              ].map((item, i) => (
                <AnimatedItem key={i} className="flex flex-col gap-2 border-l border-white/10 pl-6 relative before:absolute before:left-[-4px] before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-accent">
                  <h3 className="font-sans text-xl font-medium text-foreground leading-snug">{item.institute}</h3>
                  <div className="font-sans text-base text-zinc-300">{item.degree}</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-1">{item.date}</div>
                </AnimatedItem>
              ))}
            </div>
            <AnimatedItem className="mt-4 border-t border-white/5 pt-6">
              <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-4">Subjects of Interest</h4>
              <div className="flex flex-wrap gap-2">
                {["Data Structure", "Software Engineering", "AI & ML"].map(subject => (
                  <span key={subject} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-300">
                    {subject}
                  </span>
                ))}
              </div>
            </AnimatedItem>
          </AnimatedSection>

        </div>

        {/* Certifications & Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 border-t border-white/5 pt-16">
          
          {/* Achievements */}
          <AnimatedSection className="flex flex-col gap-8">
            <AnimatedItem>
              <EyebrowBadge>ACHIEVEMENTS // HACKATHONS</EyebrowBadge>
            </AnimatedItem>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "Smart India Hackathon (SIH) 2023", result: "Position: Waiting List Runner-Up" },
                { title: "UCER Prayagraj Hackathon", result: "Award: Most Scalable Solution" },
                { title: "SRMS CET Hackathon 1, 2 & 3", result: "Awards: Winner" }
              ].map((item, i) => (
                <AnimatedItem key={i} className="flex flex-col gap-2 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                  <h3 className="font-sans text-lg font-medium text-foreground">{item.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-accent">{item.result}</p>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection className="flex flex-col gap-8">
            <AnimatedItem>
              <EyebrowBadge>CERTIFICATIONS</EyebrowBadge>
            </AnimatedItem>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Core Java under Industry Academia Interaction Program", issuer: "Softpro India", date: "2024" },
                { title: "Project-based Internship with Focus on App Development Practices", issuer: "Corizo & Wipro DICE", date: "Oct 2024 - Nov 2024" },
                { title: "Data Science Training Program", issuer: "Corizo & Wipro DICE", date: "Dec 2024 - Jan 2025" },
                { title: "Innovation, Design, and Entrepreneurship (IDE) Bootcamp", issuer: "AICTE & Ministry of Educations Innovation Cell (MIC)", date: "Feb 2025" }
              ].map((item, i) => (
                <AnimatedItem key={i} className="flex flex-col justify-between gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                  <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-500">{item.date}</div>
                  <h3 className="font-sans text-sm font-medium text-foreground leading-snug">{item.title}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-zinc-400 mt-2 border-t border-white/10 pt-2">{item.issuer}</p>
                </AnimatedItem>
              ))}
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
