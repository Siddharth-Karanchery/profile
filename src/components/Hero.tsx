import { useState, useEffect } from "react";
import { Code2, Terminal, FileCode } from "lucide-react";

const CodeTab = ({ active, onClick, children, icon: Icon }: { active: boolean; onClick: () => void; children: React.ReactNode; icon: any }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 text-sm font-mono transition-colors border-r border-border ${
      active ? "bg-code-line text-primary" : "bg-code-bg text-muted-foreground hover:bg-code-line"
    }`}
  >
    <Icon className="w-4 h-4" />
    {children}
  </button>
);

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const fullText = "const developer = { name: 'Your Name', role: 'Fullstack Developer' };";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col bg-background pt-20">


      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-code-bg">
        <div className="max-w-6xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Code Display */}
            <div className="space-y-8 animate-fade-in">
              <div className="font-mono text-sm text-muted-foreground">
                <span className="text-primary">1</span> <span className="text-blue-400">import</span>{" "}
                <span className="text-yellow-300">{'{ Developer }'}</span> <span className="text-blue-400">from</span>{" "}
                <span className="text-green-400">"@/universe"</span>;
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="text-foreground">Hi, I'm </span>
                  <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                    Developer
                  </span>
                </h1>
                <div className="h-12 font-mono text-xl text-muted-foreground overflow-hidden">
                  <span className="text-primary">{'>'}</span> {displayText}
                  <span className="animate-pulse">|</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground font-mono">
                <span className="text-primary">//</span> Crafting elegant solutions with clean code
              </p>

              <div className="flex gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-primary text-primary-foreground font-mono font-semibold rounded-lg shadow-glow hover:shadow-glow-intense transition-all duration-300 hover:scale-105"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-secondary text-foreground font-mono font-semibold rounded-lg border border-primary/30 hover:border-primary hover:shadow-glow transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right: Avatar with Glow */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-glow blur-3xl animate-glow-pulse"></div>
                <div className="relative w-72 h-72 rounded-full border-4 border-primary shadow-glow-intense overflow-hidden bg-code-bg">
                  <div className="w-full h-full flex items-center justify-center">
                    <Code2 className="w-32 h-32 text-primary" />
                  </div>
                </div>
                {/* Line Numbers Decoration */}
                <div className="absolute -left-12 top-0 bottom-0 w-8 font-mono text-xs text-muted-foreground/50 space-y-6 pt-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div key={num}>{num}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
