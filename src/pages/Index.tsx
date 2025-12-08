import { LivingFluidHero } from "@/components/LivingFluidHero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SectionReveal } from "@/components/SectionReveal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LivingFluidHero />
      <SectionReveal>
        <About />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <Skills />
      </SectionReveal>
      <SectionReveal delay={0.2}>
        <Projects />
      </SectionReveal>
      <SectionReveal delay={0.1}>
        <Experience />
      </SectionReveal>
      <SectionReveal delay={0.2}>
        <Contact />
      </SectionReveal>
      <Footer />
    </div>
  );
};

export default Index;
