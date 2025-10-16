import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-12 animate-slide-up">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <Card className="p-8 md:p-12 bg-gradient-card border-none shadow-medium">
            <p className="text-lg text-card-foreground leading-relaxed mb-8">
              {t.description}
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <Code2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{t.cleanCode.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.cleanCode.description}
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{t.communication.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.communication.description}
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                <div className="p-3 rounded-full bg-gradient-primary">
                  <Users className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{t.collaboration.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {t.collaboration.description}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
