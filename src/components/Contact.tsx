import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import { Button } from "@/components/ui/button";
import { LocationMap } from "@/components/ui/location-map";

export const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language].contact;

  const bentoItems = [
    {
      Icon: Mail,
      name: t.email,
      description: "Joaobneto03@outlook.com",
      href: "mailto:Joaobneto03@outlook.com",
      cta: language === 'pt' ? 'Enviar email' : 'Send email',
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
      background: (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      ),
    },
    {
      Icon: Phone,
      name: t.phone,
      description: "(75) 98859-2945",
      href: "tel:+5575988592945",
      cta: language === 'pt' ? 'Ligar agora' : 'Call now',
      className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      background: (
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-transparent" />
      ),
    },
    {
      Icon: Linkedin,
      name: "LinkedIn",
      description: language === 'pt' ? 'Conecte-se comigo profissionalmente' : 'Connect with me professionally',
      href: "https://www.linkedin.com/in/joaobatista011/",
      cta: language === 'pt' ? 'Ver perfil' : 'View profile',
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
      background: (
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-transparent" />
      ),
    },
    {
      Icon: Github,
      name: "GitHub",
      description: language === 'pt' ? 'Explore meus projetos e contribuições' : 'Explore my projects and contributions',
      href: "https://github.com/Joaobneto1",
      cta: language === 'pt' ? 'Ver repositórios' : 'View repositories',
      className: "lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3",
      background: (
        <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 via-transparent to-transparent" />
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Bento Grid - Main content */}
          <div className="max-w-4xl mx-auto">
            <BentoGrid className="lg:grid-cols-3 lg:grid-rows-2 auto-rows-[11rem]">
              {bentoItems.map((item) => (
                <BentoCard key={item.name} {...item} />
              ))}
            </BentoGrid>
          </div>

          {/* Bottom Section: Map + CTA */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 pt-4">
            {/* Location Map */}
            <LocationMap 
              location="Maceió/AL, Brasil"
              coordinates="9°39'57 S, 36°41'06 W"
              className="w-[260px]"
            />

            {/* Circular Reveal CTA */}
            <CircularRevealHeading
              size="sm"
              items={[
                {
                  text: language === 'pt' ? 'PORTUGUÊS NATIVO' : 'NATIVE PORTUGUESE',
                  image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=400&fit=crop"
                },
                {
                  text: language === 'pt' ? 'INGLÊS INTERMEDIÁRIO' : 'INTERMEDIATE ENGLISH',
                  image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=400&h=400&fit=crop"
                },
                {
                  text: language === 'pt' ? 'VAMOS CONVERSAR' : "LET'S TALK",
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=400&fit=crop"
                },
                {
                  text: language === 'pt' ? 'CRIAR JUNTOS' : 'CREATE TOGETHER',
                  image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop"
                }
              ]}
              centerText={
                <div className="text-center">
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    {language === 'pt' ? 'Pronto para começar?' : 'Ready to start?'}
                  </p>
                  <Button asChild size="sm" className="rounded-full">
                    <a href="mailto:Joaobneto03@outlook.com">
                      <Send className="mr-2 h-3 w-3" />
                      {language === 'pt' ? 'Email' : 'Email'}
                    </a>
                  </Button>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
