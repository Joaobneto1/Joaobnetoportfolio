import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Code2, Lightbulb, Users } from "lucide-react";

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  // Mapear ícones Lucide para as features
  const features = [
    {
      icon: Code2,
      title: t.cleanCode.title,
      description: t.cleanCode.description,
    },
    {
      icon: Lightbulb,
      title: t.communication.title,
      description: t.communication.description,
    },
    {
      icon: Users,
      title: t.collaboration.title,
      description: t.collaboration.description,
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="relative max-w-5xl mx-auto">
          {/* Soft glow background */}
          <div className="size-[520px] -top-80 left-1/2 -translate-x-1/2 rounded-full absolute blur-[300px] -z-10 bg-primary/5" aria-hidden />

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground">
              {t.title}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground text-center mt-2 max-w-lg mx-auto">
              {t.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group">
                  <div className="size-10 p-2 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="mt-5 space-y-2">
                    <h3 className="text-base font-medium text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
