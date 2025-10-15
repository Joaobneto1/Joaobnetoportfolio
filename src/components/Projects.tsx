import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Sistema para Medicamentos",
    description: "Sistema completo para gerenciamento de medicamentos com controle de estoque e dispensação.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "CubosPay - Frontend",
    description: "Interface moderna para plataforma de pagamentos com dashboard interativo.",
    tags: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    title: "Controle Financeiro",
    description: "Aplicação para gestão financeira pessoal com relatórios e gráficos detalhados.",
    tags: ["React", "Express", "Prisma"],
  },
  {
    title: "Sistema DinDin",
    description: "Plataforma de educação financeira com gerenciamento de gastos.",
    tags: ["JavaScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "API Bancária",
    description: "API RESTful para operações bancárias com segurança JWT e RLS.",
    tags: ["Node.js", "Express", "JWT"],
  },
  {
    title: "Sistema PDV",
    description: "Sistema de ponto de venda completo com controle de estoque e vendas.",
    tags: ["React", "Node.js", "MySQL"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Projetos
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma seleção de projetos que demonstram minhas habilidades em desenvolvimento fullstack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group p-6 bg-card border-border hover:shadow-strong transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 group-hover:border-primary group-hover:text-primary transition-colors"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-primary border-none"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
