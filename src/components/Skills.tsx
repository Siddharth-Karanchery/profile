const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-blue-400",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    },
    {
      title: "Backend",
      color: "text-green-400",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Tools & Others",
      color: "text-purple-400",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Agile"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary font-mono">{'<'}</span>
            <span className="text-foreground">Skills & Technologies</span>
            <span className="text-primary font-mono">{' />'}</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="bg-code-bg rounded-lg border border-border p-8 font-mono text-sm">
          <div className="space-y-6">
            <div className="text-muted-foreground">
              <span className="text-blue-400">import</span> <span className="text-foreground">{'{'}</span>
            </div>

            {skillCategories.map((category, idx) => (
              <div key={idx} className="pl-4 space-y-2">
                <div className="text-muted-foreground">
                  <span className={category.color}>{category.title}</span>
                  <span className="text-foreground">,</span>
                </div>
                <div className="pl-4 flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-4 py-2 bg-secondary border border-primary/30 rounded-lg text-foreground hover:border-primary hover:shadow-glow transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-muted-foreground">
              <span className="text-foreground">{'}'}</span> <span className="text-blue-400">from</span>{" "}
              <span className="text-green-400">"@/skills"</span>;
            </div>

            <div className="pt-6 border-t border-border">
              <div className="text-muted-foreground">
                <span className="text-primary">//</span> Always learning and exploring new technologies
              </div>
              <div className="mt-2">
                <span className="text-blue-400">console</span>
                <span className="text-foreground">.</span>
                <span className="text-yellow-300">log</span>
                <span className="text-foreground">(</span>
                <span className="text-green-400">"Growth mindset activated 🚀"</span>
                <span className="text-foreground">);</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
