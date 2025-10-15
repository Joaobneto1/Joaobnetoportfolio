import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-gradient-hero border-t border-primary-foreground/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm">
            © 2025 João Batista Neto. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Joaobneto1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-primary-foreground" />
            </a>
            <a 
              href="https://www.linkedin.com/in/joaobatista011/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-primary-foreground" />
            </a>
            <a 
              href="mailto:Joaobneto03@outlook.com"
              className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
