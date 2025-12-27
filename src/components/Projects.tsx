import { Badge } from "@/components/ui/badge";
import { Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { motion } from "framer-motion";

// Gradientes temáticos monocromáticos para cada projeto
const projectGradients = [
  "from-zinc-900 via-zinc-800 to-zinc-700",
  "from-neutral-800 via-neutral-700 to-neutral-600",
  "from-stone-900 via-stone-800 to-stone-700",
  "from-gray-800 via-gray-700 to-gray-600",
  "from-zinc-800 via-zinc-700 to-zinc-600",
  "from-neutral-900 via-neutral-800 to-neutral-700",
  "from-stone-800 via-stone-700 to-stone-600",
  "from-gray-900 via-gray-800 to-gray-700",
];

export const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground max-w-2xl"
          >
            {language === 'pt' 
              ? 'Uma seleção de projetos que demonstram minha experiência em desenvolvimento fullstack.' 
              : 'A selection of projects showcasing my fullstack development experience.'}
          </motion.p>
        </div>

        {/* Grid de projetos */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {t.projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative h-full bg-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-border hover:shadow-2xl hover:shadow-foreground/5 hover:-translate-y-1">
                {/* Gradient Visual */}
                <div className={`relative h-48 md:h-56 bg-gradient-to-br ${projectGradients[index % projectGradients.length]} overflow-hidden`}>
                  {/* Number overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl md:text-9xl font-bold text-white/10 select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  {/* Subtle pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-24 h-24 border border-white/20 rounded-full" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-lg rotate-12" />
                  </div>

                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-6 h-6 text-white/80" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-foreground/90 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="text-xs px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <Button 
                      variant="ghost"
                      size="sm"
                      className="rounded-full px-4 text-sm font-medium hover:bg-muted group/btn"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        {language === 'pt' ? 'Ver código' : 'View code'}
                        <ArrowUpRight className="ml-1 h-3 w-3 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
