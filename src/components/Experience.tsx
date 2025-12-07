import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";
import { cn } from "@/lib/utils";

type TabType = "work" | "education" | "courses";

export const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;
  const [activeTab, setActiveTab] = useState<TabType>("work");
  const [activeIndex, setActiveIndex] = useState(0);

  const diploma = "/diploma.pdf";

  const tabs = [
    { id: "work" as TabType, label: t.professionalExperience, icon: Briefcase },
    { id: "education" as TabType, label: t.education, icon: GraduationCap },
    { id: "courses" as TabType, label: t.courses, icon: Award },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case "work":
        return t.experiences.map((exp, i) => ({
          id: `work-${i}`,
          title: exp.title,
          subtitle: exp.organization,
          period: exp.period,
          description: exp.description,
        }));
      case "education":
        return t.educationList.map((edu, i) => ({
          id: `edu-${i}`,
          title: edu.title,
          subtitle: edu.organization,
          period: edu.period,
          description: edu.description,
          showDiploma: i === 0,
        }));
      case "courses":
        return [{
          id: "courses-all",
          title: t.courses,
          subtitle: "",
          period: "",
          description: t.coursesList,
        }];
      default:
        return [];
    }
  };

  const data = getCurrentData();
  const currentItem = data[activeIndex];

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-center gap-2 rounded-xl bg-secondary/50 p-1.5 w-fit mx-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-foreground text-background shadow-lg"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Card Stack */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Background cards for depth effect */}
              {data.length > 1 && (
                <>
                  <div className="absolute inset-0 bg-card/50 border border-border rounded-2xl transform translate-x-4 translate-y-4 -z-10" />
                  <div className="absolute inset-0 bg-card/30 border border-border/50 rounded-2xl transform translate-x-8 translate-y-8 -z-20" />
                </>
              )}

              {/* Main Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem?.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg"
                >
                  {currentItem && (
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                            {currentItem.title}
                          </h3>
                          {currentItem.subtitle && (
                            <p className="text-lg text-primary font-medium">
                              {currentItem.subtitle}
                            </p>
                          )}
                          {currentItem.period && (
                            <p className="text-sm text-muted-foreground">
                              {currentItem.period}
                            </p>
                          )}
                        </div>
                        
                        {/* Icon */}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-foreground/10 text-foreground">
                          {activeTab === "work" && <Briefcase className="h-7 w-7" />}
                          {activeTab === "education" && <GraduationCap className="h-7 w-7" />}
                          {activeTab === "courses" && <Award className="h-7 w-7" />}
                        </div>
                      </div>

                      {/* Description */}
                      <div className="space-y-3">
                        {activeTab === "courses" ? (
                          <div className="grid sm:grid-cols-2 gap-3">
                            {currentItem.description.map((item: string, i: number) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                              >
                                <div className="w-2 h-2 rounded-full bg-foreground mt-2 shrink-0" />
                                <span className="text-sm text-card-foreground">{item}</span>
                              </motion.div>
                            ))}
                          </div>
                        ) : (
                          <ul className="space-y-3">
                            {currentItem.description.map((item: string, i: number) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-3 text-card-foreground"
                              >
                                <div className="w-2 h-2 rounded-full bg-foreground mt-2 shrink-0" />
                                <span>{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </div>

                      {/* Diploma Link */}
                      {activeTab === "education" && (currentItem as any).showDiploma && (
                        <motion.a
                          href={diploma}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors"
                        >
                          <Award className="w-4 h-4" />
                          {t.viewDiploma}
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              {data.length > 1 && (
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={handlePrev}
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  {/* Dots */}
                  <div className="flex items-center gap-2">
                    {data.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          index === activeIndex
                            ? "w-8 bg-foreground"
                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        )}
                        aria-label={`Go to item ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
