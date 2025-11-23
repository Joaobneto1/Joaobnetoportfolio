import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import IntegrationHero from "./TecSkills";

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  // Lista EXATA das tecnologias do README do GitHub (sem extras)
  const allTechnologies = [
    // Front-end
    "HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "TailwindCSS",
    // Back-end
    "Node.js", "Express.js", "PHP", "Laravel", "Python",
    // Databases
    "PostgreSQL", "MySQL", "Prisma",
    // DevOps & Ferramentas
    "Git", "GitHub", "Docker", "Vercel", "Supabase", "Grafana", "Prometheus", "Pnpm"
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <IntegrationHero 
        technologies={allTechnologies}
        title={t.title}
        subtitle={language === 'pt' ? "Tecnologias e ferramentas que utilizo no desenvolvimento" : "Technologies and tools I use in development"}
        badgeText={language === 'pt' ? "Tecnologias" : "Technologies"}
      />
    </section>
  );
};
