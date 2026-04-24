"use client";

import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import { ExternalLink, Rocket, Cpu, BarChart3, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function Company() {
  return (
    <section id="company" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32 overflow-hidden">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:gap-20">
        <AnimatedSection className="flex flex-col gap-8 md:items-center md:text-center">
          <AnimatedItem>
            <EyebrowBadge>COMPANY & VISION</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[20ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl mx-auto">
              Co-Founder @ <span className="text-accent">Katalyx Solutions.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Branding & Mission */}
          <AnimatedSection className="lg:col-span-7 space-y-8 flex flex-col z-10">
            <AnimatedItem className="space-y-4 flex flex-col items-start md:items-center lg:items-start text-left md:text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400">
                <Rocket size={16} className="text-emerald-400" />
                Founded January 2025
              </div>
              <h3 className="text-3xl md:text-4xl font-medium leading-tight text-foreground">
                Building Future-Ready <br />
                <span className="text-emerald-400">Digital Infrastructure.</span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-xl">
                At Katalyx, we believe digital transformation should be seamless and secure — 
                powered by intelligent, real-time AI, not inefficiency or manual bottlenecks. 
                We build AI-powered software, automation systems, and scalable platforms.
              </p>
            </AnimatedItem>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {[
                {
                  icon: Cpu,
                  title: "AI & Automation",
                  desc: "Replacing legacy systems with intelligent, scalable AI layers."
                },
                {
                  icon: BarChart3,
                  title: "Scale Smarter",
                  desc: "Enabling businesses to grow rapidly with robust infrastructure."
                }
              ].map((item, i) => (
                <AnimatedItem
                  key={i}
                  className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-left hover:bg-white/[0.08] transition-colors"
                >
                  <item.icon size={24} className="text-emerald-400 mb-4" />
                  <h4 className="text-lg font-medium mb-2 text-foreground">{item.title}</h4>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </AnimatedItem>
              ))}
            </div>

            <AnimatedItem className="pt-4 flex justify-start md:justify-center lg:justify-start">
              <a
                href="https://katalyxsolutions.com"
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer btn-premium bg-white inline-flex items-center justify-center gap-2 px-10 py-4 text-sm font-medium text-black shadow-[0_20px_40px_-10px_rgba(16,185,129,0.2)] rounded-full hover:-translate-y-1 transition-transform"
              >
                Visit Company Website <ExternalLink size={18} />
              </a>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right Column: Interactive Card / Visual */}
          <AnimatedSection className="lg:col-span-5 relative z-10 flex w-full">
            <AnimatedItem className="w-full">
              <div className="group relative bg-white/[0.03] border border-white/10 rounded-[2rem] backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/5 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]">
                {/* Gradient Top */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none" />
                
                <div className="p-8 space-y-6 relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="h-12 w-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                      <Globe size={24} className="text-emerald-400 transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                    <span className="text-xs font-mono text-emerald-400/60 tracking-widest uppercase">Identity</span>
                  </div>
                  
                  <div className="space-y-4 pt-4 text-left">
                    <h4 className="text-xl font-medium text-foreground">Digital Innovation Partner</h4>
                    <div className="space-y-3">
                      {[
                        "Enterprise-Grade Scalability",
                        "Outcome-Oriented Development",
                        "Strategic Global Partnerships",
                        "AI-Powered Operational Efficiency"
                      ].map((text, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-zinc-300">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          {text}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 text-left">
                    <div className="flex items-center justify-between text-xs text-zinc-500 font-mono tracking-wider">
                      <span>Vision 2026</span>
                      <span>Global Expansion</span>
                    </div>
                    <div className="mt-3 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-emerald-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual Glows */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
            </AnimatedItem>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
