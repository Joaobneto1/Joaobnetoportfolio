import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Joaobneto1",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/joaobatista011/",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:Joaobneto03@outlook.com",
      label: "Email",
    },
  ];

  const mainLinks = [
    { href: "#about", label: language === "pt" ? "Sobre" : "About" },
    { href: "#skills", label: language === "pt" ? "Habilidades" : "Skills" },
    { href: "#projects", label: language === "pt" ? "Projetos" : "Projects" },
    { href: "#experience", label: language === "pt" ? "Experiência" : "Experience" },
    { href: "#contact", label: language === "pt" ? "Contato" : "Contact" },
  ];

  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24 border-t border-border">
      <div className="px-4 lg:px-8">
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="#"
            className="flex items-center gap-x-2"
            aria-label="João Batista Neto"
          >
            <Code2 className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">João Batista Neto</span>
          </a>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="secondary"
                  size="icon"
                  className="h-10 w-10 rounded-full"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-border mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-primary underline-offset-4 hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 text-sm leading-6 text-muted-foreground lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>© 2025 João Batista Neto</div>
            <div>{t.rights}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
