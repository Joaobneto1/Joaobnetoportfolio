import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  const skillCategories = [
    {
      title: t.frontend,
      skills: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS", "TailwindCSS"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: t.backend,
      skills: ["Node.js", "Express.js", "PHP", "Laravel", "API REST", "JWT", "RLS"],
      color: "bg-accent/10 text-accent border-accent/20"
    },
    {
      title: t.databases,
      skills: ["PostgreSQL", "MySQL", "Prisma"],
      color: "bg-primary/10 text-primary border-primary/20"
    },
    {
      title: t.devops,
      skills: ["Git", "GitHub", "Docker", "Vercel", "Railway", "Supabase"],
      color: "bg-accent/10 text-accent border-accent/20"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="p-8 bg-card border-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline"
                      className={`${category.color} px-4 py-2 text-sm font-medium`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
