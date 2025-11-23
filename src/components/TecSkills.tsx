import React from "react";

// Ícones das tecnologias - EXATAMENTE os links do README do GitHub fornecido
const TECHNOLOGY_ICONS: Record<string, string> = {
  // Front-end
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Next.js": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg",
  "TailwindCSS": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TailwindCSS-Light.svg",
  
  // Back-end
  "Node.js": "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/ExpressJS-Dark.svg",
  "PHP": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/PHP-Dark.svg",
  "Laravel": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Laravel-Light.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  
  // Databases
  "PostgreSQL": "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/postgresql/postgresql-original.svg",
  "MySQL": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/MySQL-Dark.svg",
  "Prisma": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Prisma.svg",
  
  // DevOps & Ferramentas
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "GitHub": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Light.svg",
  "Docker": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Docker.svg",
  "Vercel": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vercel-Dark.svg",
  "Supabase": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Supabase-Dark.svg",
  "Grafana": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
  "Prometheus": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Prometheus.svg",
  "Pnpm": "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Pnpm-Dark.svg",
};

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

interface IntegrationHeroProps {
  technologies: string[];
  title?: string;
  subtitle?: string;
  badgeText?: string;
}

export default function IntegrationHero({ 
  technologies, 
  title = "Integrate with favorite tools",
  subtitle = "Technologies and tools I work with",
  badgeText = "⚡ Technologies"
}: IntegrationHeroProps) {
  // Separar tecnologias em duas fileiras
  const midPoint = Math.ceil(technologies.length / 2);
  const row1 = technologies.slice(0, midPoint);
  const row2 = technologies.slice(midPoint);

  // Mapear tecnologias para seus ícones
  const getIconForTech = (tech: string) => {
    // Primeiro tenta o nome exato
    if (TECHNOLOGY_ICONS[tech]) {
      return TECHNOLOGY_ICONS[tech];
    }
    // Depois tenta sem extensões
    const techKey = tech.replace(/\.(js|tsx?|css)$/i, "");
    if (TECHNOLOGY_ICONS[techKey]) {
      return TECHNOLOGY_ICONS[techKey];
    }
    // Se não encontrar, retorna null
    return null;
  };

  // Mapear tecnologias com seus ícones
  const mapTechWithIcon = (tech: string) => ({ tech, icon: getIconForTech(tech) });
  
  const techIconsRow1 = row1.map(mapTechWithIcon).filter(item => item.icon !== null);
  const techIconsRow2 = row2.map(mapTechWithIcon).filter(item => item.icon !== null);
  
  const iconsRow1 = techIconsRow1.map(item => item.icon) as string[];
  const iconsRow2 = techIconsRow2.map(item => item.icon) as string[];

  return (
    <section className="relative py-16 overflow-hidden bg-background">
      {/* Light grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground">
          {title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          {subtitle}
        </p>

        {/* Carousel */}
        <div className="mt-12 overflow-hidden relative pb-2">
          {/* Row 1 */}
          <div className="flex gap-10 whitespace-nowrap animate-scroll-left">
            {repeatedIcons(iconsRow1, 4).map((src, i) => {
              const techIndex = i % techIconsRow1.length;
              const techName = techIconsRow1[techIndex]?.tech || 'desconhecido';
              return (
                <div 
                  key={i} 
                  className="h-16 w-16 flex-shrink-0 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={src} 
                    alt={techName} 
                    className="h-10 w-10 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Row 2 */}
          <div className="flex gap-10 whitespace-nowrap mt-6 animate-scroll-right">
            {repeatedIcons(iconsRow2, 4).map((src, i) => {
              const techIndex = i % techIconsRow2.length;
              const techName = techIconsRow2[techIndex]?.tech || 'desconhecido';
              return (
                <div 
                  key={i} 
                  className="h-16 w-16 flex-shrink-0 rounded-full bg-card border border-border shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
                >
                  <img 
                    src={src} 
                    alt={techName} 
                    className="h-10 w-10 object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Fade overlays */}
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

