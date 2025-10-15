import { User, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-code-bg">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary font-mono">{"<"}</span>
            <span className="text-foreground">About Me</span>
            <span className="text-primary font-mono tracking-wide">
              {" />"}
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Code-styled bio */}
          <div className="bg-background rounded-lg border border-border p-8 font-mono text-sm">
            <div className="space-y-2 text-muted-foreground">
              <div>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-yellow-300">aboutMe</span> ={" "}
                <span className="text-foreground">{"{"}</span>
              </div>
              <div className="pl-4">
                <span className="text-purple-400">name:</span>{" "}
                <span className="text-green-400">"Siddharth Karanchery"</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-400">role:</span>{" "}
                <span className="text-green-400">"Fullstack Developer"</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-400">location:</span>{" "}
                <span className="text-green-400">"Brampton, ON"</span>,
              </div>
              <div className="pl-4">
                <span className="text-purple-400">passion:</span>{" "}
                <span className="text-green-400">
                  "Building amazing web experiences"
                </span>
                ,
              </div>
              <div className="pl-4">
                <span className="text-purple-400">description:</span>{" "}
                <span className="text-foreground">`</span>
              </div>
              <div className="pl-8 text-foreground leading-relaxed">
                I'm a passionate fullstack developer with expertise in modern
                web technologies. I love turning complex problems into simple,
                beautiful, and intuitive solutions. When I'm not coding, you'll
                find me exploring new technologies and building things.
              </div>
              <div className="pl-4">
                <span className="text-foreground">`</span>
              </div>
              <div>
                <span className="text-foreground">{"}"}</span>;
              </div>
            </div>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-background rounded-lg border border-primary/20 p-6 hover:border-primary transition-all duration-300 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Experience
                  </h3>
                  <p className="text-muted-foreground">
                    5+ years(13 total) of professional experience in web
                    development, delivering high-quality solutions for clients
                    worldwide.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg border border-primary/20 p-6 hover:border-primary transition-all duration-300 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Education
                  </h3>
                  <p className="text-muted-foreground">
                    Master's degree in Embedded Systems Engineering and a
                    bachelor's degree in Electrical and Electronics Engineering
                    with focus on software engineering and modern web
                    technologies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg border border-primary/20 p-6 hover:border-primary transition-all duration-300 hover:shadow-glow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    Approach
                  </h3>
                  <p className="text-muted-foreground">
                    I believe in writing clean, maintainable code and creating
                    user-centric applications that make a real impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
