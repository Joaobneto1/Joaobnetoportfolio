import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Video, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Booking = () => {
  const { language } = useLanguage();
  const t = translations[language].booking;

  // Placeholder - será substituído pelo embed do Cal.com
  const calLink = null; // Ex: "https://cal.com/seuusuario/meeting"

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header com botão voltar */}
      <header className="container px-4 md:px-6 py-6">
        <Button variant="ghost" asChild className="gap-2">
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>
        </Button>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 container px-4 md:px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Título e descrição */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              {t.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Layout: Info + Calendário */}
          <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
            {/* Card de informações */}
            <motion.div 
              className="bg-card border border-border rounded-2xl p-6 h-fit"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                  JB
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">João Batista Neto</p>
                  <h3 className="font-semibold text-foreground">{t.meetingTitle}</h3>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-6">
                {t.meetingDescription}
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="h-4 w-4 text-primary" />
                  <span>{t.duration}</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Video className="h-4 w-4 text-primary" />
                  <span>Google Meet</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Globe className="h-4 w-4 text-primary" />
                  <span>America/Sao_Paulo</span>
                </div>
              </div>
            </motion.div>

            {/* Área do calendário */}
            <motion.div
              className="bg-card border border-border rounded-2xl p-6 min-h-[500px] flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {calLink ? (
                // Embed do Cal.com será inserido aqui
                <iframe
                  src={calLink}
                  className="w-full h-full min-h-[500px] rounded-xl"
                  frameBorder="0"
                />
              ) : (
                // Placeholder enquanto não tem o link
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto">
                    <Calendar className="h-10 w-10 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t.placeholderTitle}</h3>
                    <p className="text-sm text-muted-foreground max-w-sm">
                      {t.placeholderDescription}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Booking;
