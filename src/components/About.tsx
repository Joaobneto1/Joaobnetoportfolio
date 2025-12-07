import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Code2, Lightbulb, Users } from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

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
    <section id="about" className="bg-background">
      <ContainerScroll
        titleComponent={
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold text-foreground">
              {t.title}
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              {t.description}
            </p>
          </div>
        }
      >
        <div className="h-full w-full p-6 md:p-10 flex flex-col justify-center">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="group text-center md:text-left">
                  <div className="size-12 p-2.5 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mx-auto md:mx-0 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="mt-5 space-y-2">
                    <h3 className="text-lg font-medium text-foreground">
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
      </ContainerScroll>
    </section>
  );
};
