import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Front-end",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS", "TailwindCSS"],
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    title: "Back-end",
    skills: ["Node.js", "Express.js", "API REST", "JWT", "RLS"],
    color: "bg-accent/10 text-accent border-accent/20"
  },
  {
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MySQL", "Prisma"],
    color: "bg-primary/10 text-primary border-primary/20"
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Railway", "Supabase"],
    color: "bg-accent/10 text-accent border-accent/20"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tecnologias & Ferramentas
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
