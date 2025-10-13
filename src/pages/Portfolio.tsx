import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const uiDesign = [
    { title: "E-commerce Dashboard", description: "Modern admin interface with analytics", image: "🎨" },
    { title: "Mobile Banking App", description: "Clean, user-friendly banking interface", image: "💳" },
    { title: "Social Media Platform", description: "Engaging social network design", image: "📱" },
  ];

  const web = [
    { title: "SaaS Landing Page", description: "Conversion-optimized landing page", tech: ["React", "Tailwind"], image: "🌐" },
    { title: "Portfolio Website", description: "Personal portfolio with animations", tech: ["Next.js", "Framer"], image: "💼" },
    { title: "E-learning Platform", description: "Interactive course management system", tech: ["Vue", "Node.js"], image: "📚" },
  ];

  const paintings = [
    { title: "Abstract Landscape", medium: "Acrylic on Canvas", year: "2023", image: "🎨" },
    { title: "Urban Sunset", medium: "Oil on Canvas", year: "2023", image: "🌆" },
    { title: "Nature Series", medium: "Watercolor", year: "2022", image: "🌿" },
  ];

  const sketches = [
    { title: "Portrait Studies", medium: "Graphite", year: "2023", image: "✏️" },
    { title: "Architectural Sketches", medium: "Pen & Ink", year: "2023", image: "🏛️" },
    { title: "Character Design", medium: "Pencil", year: "2022", image: "👤" },
  ];

  const inkWorks = [
    { title: "Botanical Illustration", medium: "Black Ink", year: "2023", image: "🌺" },
    { title: "Calligraphy Art", medium: "Brush & Ink", year: "2023", image: "✍️" },
    { title: "Abstract Patterns", medium: "India Ink", year: "2022", image: "🖋️" },
  ];

  const digitalArt = [
    { title: "Sci-Fi Concept Art", software: "Procreate", year: "2023", image: "🚀" },
    { title: "Character Illustrations", software: "Adobe Illustrator", year: "2023", image: "🎭" },
    { title: "Digital Paintings", software: "Photoshop", year: "2022", image: "🖼️" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-primary font-mono">{'<'}</span>
              <span className="text-foreground">Portfolio</span>
              <span className="text-primary font-mono">{' />'}</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
          </div>

          <Tabs defaultValue="ui-design" className="w-full">
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 mb-8 bg-code-bg border border-primary/20">
              <TabsTrigger value="ui-design">UI Design</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="paintings">Paintings</TabsTrigger>
              <TabsTrigger value="sketches">Sketches</TabsTrigger>
              <TabsTrigger value="ink-works">Ink Works</TabsTrigger>
              <TabsTrigger value="digital-art">Digital Art</TabsTrigger>
            </TabsList>

            <TabsContent value="ui-design" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uiDesign.map((item, idx) => (
                  <Card key={idx} className="bg-code-bg border-primary/20 hover:border-primary transition-all group overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                      {item.image}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {web.map((item, idx) => (
                  <Card key={idx} className="bg-code-bg border-primary/20 hover:border-primary transition-all group overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                      {item.image}
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <ExternalLink className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech, techIdx) => (
                          <span key={techIdx} className="px-2 py-1 bg-primary/10 text-primary text-xs font-mono rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="paintings" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paintings.map((item, idx) => (
                  <Card key={idx} className="bg-code-bg border-primary/20 hover:border-primary transition-all overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-8xl">
                      {item.image}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{item.medium}</p>
                      <p className="text-xs text-primary/70 mt-1">{item.year}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sketches" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sketches.map((item, idx) => (
                  <Card key={idx} className="bg-code-bg border-primary/20 hover:border-primary transition-all overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-8xl">
                      {item.image}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{item.medium}</p>
                      <p className="text-xs text-primary/70 mt-1">{item.year}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ink-works" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inkWorks.map((item, idx) => (
                  <Card key={idx} className="bg-code-bg border-primary/20 hover:border-primary transition-all overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-8xl">
                      {item.image}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{item.medium}</p>
                      <p className="text-xs text-primary/70 mt-1">{item.year}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="digital-art" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {digitalArt.map((item, idx) => (
                  <Card key={idx} className="bg-code-bg border-primary/20 hover:border-primary transition-all overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-8xl">
                      {item.image}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{item.software}</p>
                      <p className="text-xs text-primary/70 mt-1">{item.year}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
