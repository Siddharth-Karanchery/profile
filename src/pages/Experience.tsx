import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useEffect, useMemo, useState } from "react";
import useFirebase from "@/hooks/useFirebase";

type ProfessionalExperience = {
  id?: string;
  title?: string;
  company?: string;
  period?: string;
  description?: string;
  technologies?: string[];
  type?: string;
  category?: string;
  section?: string;
};

const Experience = () => {
  const firebase = useMemo(() => useFirebase(), []);
  const { getExperienceData } = firebase;
  const [professional, setProfessional] = useState<ProfessionalExperience[]>(
    [],
  );

  useEffect(() => {
    let isMounted = true;
    const loadExperience = async () => {
      try {
        const result = await getExperienceData();
        if (!isMounted || !Array.isArray(result)) {
          return;
        }

        const first = result[0] as any;
        if (
          (first && Array.isArray(first.professional)) ||
          Array.isArray(first.education)
        ) {
          setProfessional(
            (first.professional ?? []) as ProfessionalExperience[],
          );

          return;
        }

        const professionalItems = result.filter((item: any) => {
          const category = (item.type || item.category || item.section || "")
            .toString()
            .toLowerCase();
          return (
            category === "professional" ||
            category === "work" ||
            category === "experience" ||
            Array.isArray(item.technologies)
          );
        });

        const educationItems = result.filter((item: any) => {
          const category = (item.type || item.category || item.section || "")
            .toString()
            .toLowerCase();
          return (
            category === "education" ||
            category === "academic" ||
            Boolean(item.degree) ||
            Boolean(item.institution)
          );
        });

        if (professionalItems.length === 0 && educationItems.length === 0) {
          setProfessional(result as ProfessionalExperience[]);
        } else {
          setProfessional(professionalItems as ProfessionalExperience[]);
        }
      } catch (error) {
        console.error("Failed to load experience:", error);
      }
    };
    loadExperience();
    return () => {
      isMounted = false;
    };
  }, [getExperienceData]);

  const education = [
    {
      degree: "Master of Technology in Embedded Systems Engineering",
      institution: "Amrita School of Engineering",
      period: "2018 - 2020",
      description:
        "Advanced studies in embedded systems, combining hardware–software design, real-time systems, and systems engineering with a strong project and research focus. Graduated with First Class Honors.",
    },
    {
      degree: "Bachelor of Technology in Electrical & Electronics Engineering",
      institution: "Amrita School of Engineering",
      period: "2005 - 2009",
      description:
        "Foundation in electrical circuits, electronics, power systems, and control, with hands-on lab work and projects in applied engineering.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-44 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Professional Experience */}
          <section className="mb-16">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-primary" />
                <span className="text-primary font-mono">{"<"}</span>
                <span className="text-foreground">Professional Experience</span>
                <span className="text-primary font-mono">{" />"}</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-6">
              {professional.length > 0 ? (
                professional.map((job, idx) => (
                  <Card
                    key={job.id ?? `${job.title ?? "job"}-${idx}`}
                    className="bg-code-bg border-primary/20 p-6 hover:border-primary transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {job.title ?? ""}
                        </h3>
                        <p className="text-muted-foreground font-mono">
                          {job.company ?? ""}
                        </p>
                      </div>
                      <span className="text-sm font-mono text-primary/70 border border-primary/30 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {job.period ?? ""}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {job.description ?? ""}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {Array.isArray(job.technologies) &&
                      job.technologies.length > 0 ? (
                        job.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))
                      ) : (
                        <span className="text-muted-foreground text-sm">
                          No technologies listed
                        </span>
                      )}
                    </div>
                  </Card>
                ))
              ) : (
                <div className="text-muted-foreground">
                  Loading experience...
                </div>
              )}
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                <GraduationCap className="text-primary" />
                <span className="text-primary font-mono">{"<"}</span>
                <span className="text-foreground">Education</span>
                <span className="text-primary font-mono">{" />"}</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-6">
              {education.length > 0 ? (
                education.map((edu, idx) => (
                  <Card className="bg-code-bg border-primary/20 p-6 hover:border-primary transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {edu.degree ?? ""}
                        </h3>
                        <p className="text-muted-foreground font-mono">
                          {edu.institution ?? ""}
                        </p>
                      </div>
                      <span className="text-sm font-mono text-primary/70 border border-primary/30 px-3 py-1 rounded-full mt-2 md:mt-0">
                        {edu.period ?? ""}
                      </span>
                    </div>
                    <p className="text-muted-foreground">
                      {edu.description ?? ""}
                    </p>
                  </Card>
                ))
              ) : (
                <div className="text-muted-foreground">
                  Loading education...
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
