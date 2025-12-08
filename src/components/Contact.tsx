import { Mail, Phone, MapPin, Linkedin, Github, Globe, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";

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
      Icon: MapPin,
      name: t.location,
      description: "Maceió/AL, Brasil",
      className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
      background: (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      ),
    },
    {
      Icon: Linkedin,
      name: "LinkedIn",
      description: language === 'pt' ? 'Conecte-se comigo profissionalmente' : 'Connect with me professionally',
      href: "https://www.linkedin.com/in/joaobatista011/",
      cta: language === 'pt' ? 'Ver perfil' : 'View profile',
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3",
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
      className: "lg:col-start-2 lg:col-end-4 lg:row-start-2 lg:row-end-3",
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

          {/* Bento Grid */}
          <BentoGrid className="lg:grid-rows-2 auto-rows-[14rem] max-w-5xl mx-auto">
            {bentoItems.map((item) => (
              <BentoCard key={item.name} {...item} />
            ))}
          </BentoGrid>

          {/* Languages & CTA */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Languages Card */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                {t.languages}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">
                    {language === 'pt' ? 'Português' : 'Portuguese'}
                  </span>
                  <span className="text-sm text-muted-foreground px-2 py-1 bg-primary/10 rounded">
                    {language === 'pt' ? 'Nativo' : 'Native'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">
                    {language === 'pt' ? 'Inglês' : 'English'}
                  </span>
                  <span className="text-sm text-muted-foreground px-2 py-1 bg-primary/10 rounded">
                    {language === 'pt' ? 'Intermediário' : 'Intermediate'}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex flex-col justify-center items-center text-center">
              <MessageCircle className="w-10 h-10 mb-3" />
              <h3 className="text-xl font-bold mb-2">
                {language === 'pt' ? 'Pronto para começar?' : 'Ready to start?'}
              </h3>
              <p className="text-primary-foreground/80 mb-4 text-sm">
                {language === 'pt' ? 'Vamos criar algo incrível juntos!' : "Let's create something amazing together!"}
              </p>
              <Button 
                asChild
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <a href="mailto:Joaobneto03@outlook.com">
                  <Send className="mr-2 h-4 w-4" />
                  {language === 'pt' ? 'Enviar Email' : 'Send Email'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
