import { Badge } from "@/components/ui/badge";
import { Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

export const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section id="projects" className="py-20 bg-background min-h-screen flex items-center">
      <div className="container px-4 md:px-6 w-full">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {t.projects.map((project, index) => (
              <CarouselItem key={project.title}>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px]">
                  {/* Left side - Project info */}
                  <div className="space-y-6 order-2 lg:order-1">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                      {project.title}
                    </h2>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="outline"
                          className="text-xs px-3 py-1 rounded-full border-border/50 text-muted-foreground"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                      {project.description}
                    </p>

                    <div className="flex gap-4 pt-4">
                      <Button 
                        variant="outline"
                        className="rounded-full px-6"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          {language === 'pt' ? 'Código' : 'Code'}
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Right side - Project visual */}
                  <div className="order-1 lg:order-2 relative">
                    <div className="absolute top-0 right-0 text-right">
                      <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                        {t.title}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {current}/{count}
                      </span>
                    </div>
                    
                    {/* Project placeholder visual */}
                    <div className="mt-16 flex justify-center">
                      <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-muted to-muted/50 rounded-3xl flex items-center justify-center shadow-2xl">
                        <Code2 className="w-24 h-24 md:w-32 md:h-32 text-muted-foreground/50" />
                        <div className="absolute -bottom-2 -right-2 w-20 h-20 md:w-24 md:h-24 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <span className="text-2xl md:text-3xl font-bold text-primary">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-center mt-6 text-xs text-muted-foreground uppercase tracking-wider">
                      {project.title} - {project.tags[0]}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-2 mt-12">
            <CarouselPrevious className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8" />
            <div className="flex gap-1.5 mx-4">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current - 1 
                      ? 'w-6 bg-foreground' 
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative inset-0 translate-x-0 translate-y-0 h-8 w-8" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};
