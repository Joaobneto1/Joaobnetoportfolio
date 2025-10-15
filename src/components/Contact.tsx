import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Joaobneto03@outlook.com",
      href: "mailto:Joaobneto03@outlook.com"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(75) 98859-2945",
      href: "tel:+5575988592945"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Maceió/AL, Brasil",
      href: null
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "joaobatista011",
      href: "https://www.linkedin.com/in/joaobatista011/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Joaobneto1",
      href: "https://github.com/Joaobneto1"
    }
  ];

  const languages = [
    { language: "Português", level: "Nativo" },
    { language: "Inglês", level: "Intermediário" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Vamos Conversar?
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e colaborações. Entre em contato!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Contact Info */}
            <Card className="p-8 bg-gradient-card border-none shadow-medium">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Languages & CTA */}
            <div className="space-y-6">
              <Card className="p-8 bg-card border-border shadow-soft">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Idiomas
                </h3>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-primary" />
                        <span className="text-foreground font-medium">{lang.language}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-gradient-primary border-none text-center">
                <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                  Pronto para começar?
                </h3>
                <p className="text-primary-foreground/90 mb-6">
                  Vamos criar algo incrível juntos!
                </p>
                <Button 
                  asChild
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90 shadow-glow"
                >
                  <a href="mailto:Joaobneto03@outlook.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Enviar Email
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
