"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

export function About() {
  return (
    <section id="about" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:gap-20">
        <AnimatedSection className="flex flex-col gap-8 md:items-center md:text-center">
          <AnimatedItem>
            <EyebrowBadge>ABOUT ME // YASH GUPTA</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[20ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl mx-auto">
              Designing and building digital products with a <span className="text-accent">founder&apos;s mindset</span> and a <span className="text-accent">developer&apos;s precision.</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="max-w-[60ch] font-sans text-base leading-relaxed text-zinc-400 md:text-lg mx-auto">
              As a Co-Founder at <span className="text-foreground">Katalyx Solutions</span>, I bridge the gap between architectural vision and hands-on execution. I specialize in building responsive, high-performance applications using modern frameworks and robust system design. Whether I&apos;m architecting complex backend systems or refining UI/UX interactions, I focus on delivering scalable outcomes that drive real-world impact.
            </p>
          </AnimatedItem>
          <AnimatedItem className="flex flex-wrap justify-center gap-4 mt-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/10 px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent backdrop-blur-md transition-all duration-200 hover:bg-accent/20">
              Start a Chat
            </a>
            <a href="/Documents/Yash_Gupta_Resume.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-foreground backdrop-blur-md transition-all duration-200 hover:bg-white/[0.08]">
              Download Resume
            </a>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Web & App Development", desc: "Developing high-performance, responsive websites and Android applications with clean code." },
            { title: "Intelligence & Design", desc: "Crafting intuitive, modern interfaces with a focus on seamless user experience across devices." },
            { title: "Project Management", desc: "Leading end-to-end delivery with agile workflows and technical project leadership." },
            { title: "Technical Architecture", desc: "Designing scalable cloud systems and intelligent automation layers for enterprise workloads." },
            { title: "Product Strategy", desc: "Translating commercial vision into high-impact digital products and scalable solutions." },
            { title: "Strategic Leadership", desc: "Co-founding and directing technical teams with a focus on innovation and market-ready growth." }
          ].map((item, i) => (
            <AnimatedItem key={i} className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all hover:bg-white/[0.04]">
              <h3 className="font-sans text-lg font-medium text-foreground">{item.title}</h3>
              <p className="font-sans text-sm leading-relaxed text-zinc-400">{item.desc}</p>
            </AnimatedItem>
          ))}
        </AnimatedSection>
        
        <AnimatedSection className="grid grid-cols-2 gap-6 md:gap-12 border-t border-white/5 pt-12 text-center max-w-2xl mx-auto">
          <AnimatedItem>
            <div className="font-mono text-4xl md:text-5xl font-semibold text-accent mb-2">15+</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">Projects Completed</div>
          </AnimatedItem>
          <AnimatedItem>
            <div className="font-mono text-4xl md:text-5xl font-semibold text-accent mb-2">99%</div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">Client Satisfaction</div>
          </AnimatedItem>
        </AnimatedSection>
      </div>
    </section>
  );
}
