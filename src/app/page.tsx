import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CinematicReveal } from "@/components/sections/CinematicReveal";
import { Company } from "@/components/sections/Company";
import { Experience } from "@/components/sections/Experience";
import { SystemsNominal } from "@/components/sections/SystemsNominal";
import { Projects } from "@/components/sections/Projects";

import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { StickyStack } from "@/components/ui/StickyStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-clip">
        <StickyStack>
          <div className="sticky-card bg-background relative z-[60]">
            <Hero />
          </div>
          
          <div className="sticky-card about-card bg-background relative z-[50]">
            <About />
          </div>
          
          <div className="sticky-card bg-background relative z-[40]">
            <CinematicReveal />
          </div>
          
          <div className="sticky-card bg-background relative z-[30]">
            <Company />
          </div>
          
          <div className="sticky-card bg-background relative z-[20]">
            <Experience />
          </div>
          
          <div className="sticky-card bg-background relative z-[10]">
            <SystemsNominal />
          </div>
          
          <div className="sticky-card bg-background relative z-[5]">
            <Projects />
          </div>
          

          <div className="sticky-card bg-background relative z-[1]">
            <Contact />
          </div>
        </StickyStack>
      </main>
      <Footer />
    </>
  );
}
