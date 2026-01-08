import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const Hero = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Language Toggle */}
      <Button
        onClick={toggleLanguage}
        size="sm"
        variant="outline"
        className="absolute top-6 right-6 z-20 bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
      >
        <Languages className="mr-2 h-4 w-4" />
        {language === 'pt' ? 'EN' : 'PT'}
      </Button>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-xl text-primary-foreground/70">{t.greeting}</p>
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight">
              João Batista Neto
            </h1>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
              {t.role}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Maceió/AL</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(75) 98859-2945</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>Joaobneto03@outlook.com</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow"
            >
              <a href="https://github.com/Joaobneto1" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow"
            >
              <a href="https://www.linkedin.com/in/joaobatista011/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow"
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5" />
                {t.contact}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
