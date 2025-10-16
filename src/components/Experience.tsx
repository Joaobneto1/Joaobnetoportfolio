import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/translations";

export const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  const diploma = "/diploma.pdf";

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {t.title}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Work Experience */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" />
                {t.professionalExperience}
              </h3>
              {t.experiences.map((exp, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:shadow-medium transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <ul className="space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm text-card-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" />
                {t.education}
              </h3>
              {t.educationList.map((edu, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:shadow-medium transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{edu.title}</h4>
                      <p className="text-primary font-medium">{edu.organization}</p>
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </div>
                    <ul className="space-y-1">
                      {edu.description.map((item, i) => (
                        <li key={i} className="text-sm text-card-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                    {index === 0 && (
                      <a 
                        href={diploma} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:underline mt-2"
                      >
                        <Award className="w-4 h-4" />
                        {t.viewDiploma}
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              {t.courses}
            </h3>
            <Card className="p-6 bg-card border-border">
              <div className="grid md:grid-cols-2 gap-3">
                {t.coursesList.map((course, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-primary mt-2" />
                    <span className="text-card-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
