"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { CaretLeft, CaretRight, ArrowUpRight } from "@phosphor-icons/react";
import { AnimatedItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const projects = [
  {
    title: "HealthcareX24",
    type: "Enterprise Health Platform",
    description: "Fragmented medical records and delayed doctor access led to healthcare inefficiencies. I engineered a centralized AI platform that unified patient data and enabled instant virtual consultations, reducing administrative overhead by 40%.",
    image: "/images/healthcare_x24_generated.png",
    fallbackImage: "/images/healthcare_x24_generated.png",
    liveUrl: "https://healthcarex24.com",
    tags: ["React", "AI", "Node.js", "WebRTC"],
    accentClass: "border-emerald-400/40",
    rotation: -3,
    chipClass: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
  },
  {
    title: "Katalyx HR ERP",
    type: "Automation System",
    description: "Manual payroll and employee management caused significant operational bottlenecks. I architected an automated ERP solution that streamlined the entire employee lifecycle and payroll processing, ensuring 100% compliance and precision.",
    image: "/images/katalyx_hr_erp_generated.png",
    fallbackImage: "/images/katalyx_hr_erp_generated.png",
    liveUrl: "https://katalyxhrerp.online",
    tags: ["React", "Express", "MongoDB", "Redux"],
    accentClass: "border-blue-400/40",
    rotation: 2,
    chipClass: "border-blue-400/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20"
  },
  {
    title: "AbhiRoom",
    type: "Property Management",
    description: "Traditional room booking suffered from unverified listings and static pricing issues. I developed a smart booking ecosystem with dynamic pricing and verified check-ins, significantly improving trust and occupancy rates for property owners.",
    image: "/images/abhiroom_booking_generated.png",
    fallbackImage: "/images/abhiroom_booking_generated.png",
    liveUrl: "https://abhiroom.in",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    accentClass: "border-rose-400/40",
    rotation: 4,
    chipClass: "border-rose-400/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20"
  },
  {
    title: "Inventory Intelligence",
    type: "Operations App",
    description: "Lack of real-time stock visibility often led to supply chain disruptions. I built an intelligent inventory tracking app with real-time updates and predictive stock alerts, providing businesses with a 360° view of their operations.",
    image: "/images/inventory_management_generated.png",
    fallbackImage: "/images/inventory_management_generated.png",
    liveUrl: null,
    tags: ["React Expo", "Node.js", "MongoDB", "Express"],
    accentClass: "border-white/20",
    rotation: -2,
    chipClass: "border-white/20 bg-white/5 text-gray-200 hover:bg-white/10"
  }
];

const SPRING = {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
  mass: 0.85,
};

function getCircularOffset(cardIndex: number, currentIndex: number, total: number) {
  let offset = ((cardIndex - currentIndex) % total + total) % total;
  if (offset > Math.floor(total / 2)) offset -= total;
  return offset;
}

function getCardVisuals(offset: number, cardWidth: number, isMobile: boolean) {
  const abs = Math.abs(offset);
  const dir = offset > 0 ? 1 : offset < 0 ? -1 : 0;

  if (abs === 0) {
    return { x: 0, y: 40, scale: 1, opacity: 1, filter: "brightness(1)", zIndex: 20 };
  }
  if (abs === 1) {
    const xFactor = isMobile ? 0.44 : 0.55;
    const yDrop = isMobile ? 26 : 42;
    return { x: dir * cardWidth * xFactor, y: yDrop, scale: 0.82, opacity: 0.72, filter: "brightness(0.52)", zIndex: 12 };
  }
  if (abs === 2) {
    const xFactor = isMobile ? 0.82 : 0.95;
    return { x: dir * cardWidth * xFactor, y: 50, scale: 0.66, opacity: 0.28, filter: "brightness(0.36)", zIndex: 6 };
  }
  return { x: dir * cardWidth * 1.30, y: 150, scale: 0.54, opacity: 0, filter: "brightness(0.2)", zIndex: 2 };
}

const NavButton = ({ direction, onClick, isMobile }: { direction: "prev" | "next", onClick: () => void, isMobile: boolean }) => (
  <motion.button
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous project" : "Next project"}
    whileHover={{ scale: 1.12, y: -3 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.18, ease: "easeOut" }}
    style={{
      position: "absolute",
      top: "36%",
      transform: "translateY(-50%)",
      [direction === "prev" ? "left" : "right"]: 0,
      zIndex: 30,
      background: "rgba(255,255,255,0.07)",
      border: "1.4px solid rgba(255,255,255,0.25)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderRadius: "50%",
      width: isMobile ? 38 : 46,
      height: isMobile ? 38 : 46,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      flexShrink: 0,
      boxShadow: "0 6px 28px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12)",
    }}
  >
    {direction === "prev" ? (
      <CaretLeft size={isMobile ? 16 : 20} color="rgba(255,255,255,0.9)" />
    ) : (
      <CaretRight size={isMobile ? 16 : 20} color="rgba(255,255,255,0.9)" />
    )}
  </motion.button>
);

const DotIndicators = ({ total, current, onDotClick }: { total: number, current: number, onDotClick: (i: number) => void }) => (
  <div style={{ display: "flex", gap: 7, alignItems: "center", justifyContent: "center" }}>
    {Array.from({ length: total }).map((_, i) => (
      <motion.button
        key={i}
        onClick={() => onDotClick(i)}
        aria-label={`Go to project ${i + 1}`}
        animate={{
          width: i === current ? 22 : 6,
          opacity: i === current ? 1 : 0.35,
          background: i === current ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.45)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ height: 6, borderRadius: 9999, border: "none", cursor: "pointer", padding: 0, flexShrink: 0 }}
      />
    ))}
  </div>
);

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = projects.length;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (!wrapperRef.current) return;
    const measure = () => {
      const w = wrapperRef.current!.offsetWidth;
      setContainerWidth(w);
      const isMobile = w < 640;
      const cw = isMobile ? Math.round(w * 0.75) : Math.min(Math.round(w * 0.56), 500);
      setCardWidth(cw);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, []);

  const isMobile = containerWidth > 0 && containerWidth < 640;
  const carouselHeight = cardWidth > 0 ? Math.round(cardWidth * (isMobile ? 1.28 : 1.04)) + (isMobile ? 140 : 94) : 580;

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((i) => (i - 1 + total) % total);
  }, [isAnimating, total]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((i) => (i + 1) % total);
  }, [isAnimating, total]);

  const handleDotClick = useCallback((index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
  }, [isAnimating, currentIndex]);

  const handleCardClick = useCallback((offset: number) => {
    if (offset === 1) handleNext();
    if (offset === -1) handlePrev();
  }, [handleNext, handlePrev]);

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) >= 48) {
      if (dx < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  }, [handleNext, handlePrev]);

  return (
    <section id="projects" className="relative border-t border-white/5 bg-background px-6 pb-28 pt-24 md:px-10 md:pb-40 md:pt-32" style={{ overflow: "hidden" }}>
      <div className="mx-auto flex max-w-[1400px] flex-col gap-16 md:gap-20">
        <AnimatedSection className="flex flex-col gap-8 md:items-center md:text-center">
          <AnimatedItem>
            <EyebrowBadge>FEATURED PROJECTS</EyebrowBadge>
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="max-w-[20ch] font-sans text-4xl font-semibold leading-[0.98] tracking-tighter text-foreground md:text-6xl mx-auto">
              Selected work across <span className="text-accent">web and mobile.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <div
          ref={wrapperRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ position: "relative", height: carouselHeight, overflow: "visible", touchAction: "pan-y" }}
          className="mx-auto w-full max-w-6xl mt-4"
        >
          <NavButton direction="prev" onClick={handlePrev} isMobile={isMobile} />
          <NavButton direction="next" onClick={handleNext} isMobile={isMobile} />

          {cardWidth > 0 &&
            projects.map((project, i) => {
              const offset = getCircularOffset(i, currentIndex, total);
              const visuals = getCardVisuals(offset, cardWidth, isMobile);
              const isActive = offset === 0;
              const isSide = Math.abs(offset) === 1;
              const ctaHref = project.liveUrl ?? "#contact";
              const ctaLabel = project.liveUrl ? "View Project" : "Request Demo";

              return (
                <motion.article
                  key={project.title}
                  animate={{
                    x: visuals.x,
                    y: visuals.y,
                    scale: visuals.scale,
                    opacity: visuals.opacity,
                    filter: visuals.filter,
                  }}
                  transition={SPRING}
                  onAnimationComplete={() => { if (isActive) setIsAnimating(false); }}
                  onClick={() => handleCardClick(offset)}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    marginLeft: -(cardWidth / 2),
                    width: cardWidth,
                    zIndex: visuals.zIndex,
                    "--card-rotate": "0deg",
                    transformOrigin: "center bottom",
                    cursor: isSide ? "pointer" : "default",
                    willChange: "transform, opacity, filter",
                  } as any}
                  className={`project-glass-card overflow-hidden rounded-2xl border ${project.accentClass}`}
                >
                  <div data-text={project.type} className="project-card-media project-card-image-wrap relative h-40 sm:h-48 md:h-56 lg:h-60">
                    <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.src = project.fallbackImage; }} />
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="mb-2 text-lg sm:text-xl md:text-2xl font-medium break-words text-white">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-xs sm:text-sm text-gray-300 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mb-4 sm:mb-5 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.07 }}
                          transition={{ duration: 0.18 }}
                          className={`rounded-md border px-2 sm:px-2.5 py-1 text-xs font-medium transition-colors duration-200 cursor-default ${project.chipClass}`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.a
                      href={ctaHref}
                      target={project.liveUrl ? "_blank" : undefined}
                      rel={project.liveUrl ? "noreferrer" : undefined}
                      onClick={(e) => e.stopPropagation()}
                      className="btn-shimmer bg-white inline-flex items-center justify-center gap-2 mt-2 px-6 py-3 text-xs sm:text-sm font-medium text-black rounded-full"
                    >
                      {ctaLabel} <ArrowUpRight size={16} weight="bold" />
                    </motion.a>
                  </div>
                </motion.article>
              );
            })}
        </div>

        <div className="relative z-30 mt-8 sm:mt-12">
          <DotIndicators total={total} current={currentIndex} onDotClick={handleDotClick} />
        </div>
      </div>
    </section>
  );
}
