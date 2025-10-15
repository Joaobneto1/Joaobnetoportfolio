import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-12 animate-slide-up">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Sobre Mim
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <Card className="p-8 md:p-12 bg-gradient-card border-none shadow-medium">
            <p className="text-lg text-card-foreground leading-relaxed mb-8">
              Desenvolvedor Fullstack com experiência na criação de aplicações web escaláveis e modernas, 
              com foco em performance, responsividade e segurança. Atuo no desenvolvimento de soluções completas, 
              desde a modelagem de dados até a implementação do front-end, sempre priorizando boas práticas de 
              desenvolvimento, controle de acesso seguro e uma experiência fluida.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <Code2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Código Limpo</h3>
                <p className="text-sm text-muted-foreground">
                  Práticas de desenvolvimento com foco em manutenibilidade e escalabilidade
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Comunicação</h3>
                <p className="text-sm text-muted-foreground">
                  Capacidade de expressar ideias de forma clara e eficaz em equipes multidisciplinares
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Colaboração</h3>
                <p className="text-sm text-muted-foreground">
                  Habilidade de trabalhar de maneira produtiva em grupo, priorizando metas comuns
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
