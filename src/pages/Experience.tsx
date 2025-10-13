import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const professional = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Leading development of enterprise web applications using React, Node.js, and PostgreSQL. Mentoring junior developers and implementing CI/CD pipelines.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Inc",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects, focusing on responsive design and API integration. Improved application performance by 40%.",
      technologies: ["Vue.js", "Express", "MongoDB", "Redis"],
    },
    {
      title: "Junior Web Developer",
      company: "StartUp Labs",
      period: "2018 - 2020",
      description: "Built frontend components and collaborated with design team to implement pixel-perfect interfaces. Participated in agile development processes.",
      technologies: ["JavaScript", "React", "CSS", "REST APIs"],
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      period: "2016 - 2018",
      description: "Specialized in Software Engineering and Web Technologies. Thesis on scalable web architectures.",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "State University",
      period: "2012 - 2016",
      description: "Core studies in programming, databases, and systems design. Dean's list all semesters.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Professional Experience */}
          <section className="mb-16">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-primary" />
                <span className="text-primary font-mono">{'<'}</span>
                <span className="text-foreground">Professional Experience</span>
                <span className="text-primary font-mono">{' />'}</span>
              </h1>
              <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-6">
              {professional.map((job, idx) => (
                <Card key={idx} className="bg-code-bg border-primary/20 p-6 hover:border-primary transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">{job.title}</h3>
                      <p className="text-muted-foreground font-mono">{job.company}</p>
                    </div>
                    <span className="text-sm font-mono text-primary/70 border border-primary/30 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                <GraduationCap className="text-primary" />
                <span className="text-primary font-mono">{'<'}</span>
                <span className="text-foreground">Education</span>
                <span className="text-primary font-mono">{' />'}</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <Card key={idx} className="bg-code-bg border-primary/20 p-6 hover:border-primary transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-1">{edu.degree}</h3>
                      <p className="text-muted-foreground font-mono">{edu.institution}</p>
                    </div>
                    <span className="text-sm font-mono text-primary/70 border border-primary/30 px-3 py-1 rounded-full mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Experience;
