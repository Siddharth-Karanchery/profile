import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credential: "AWS-SA-2023-001",
      description:
        "Professional certification for designing distributed systems on AWS",
      image: "☁️",
    },
    {
      title: "React Advanced Certification",
      issuer: "Meta",
      date: "2023",
      credential: "META-REACT-2023",
      description:
        "Advanced React patterns, performance optimization, and best practices",
      image: "⚛️",
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2022",
      credential: "COURSERA-FS-2022",
      description: "Comprehensive full-stack development with MERN stack",
      image: "💻",
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud",
      date: "2022",
      credential: "GCP-PRO-2022",
      description: "Professional cloud architect certification",
      image: "🌩️",
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credential: "CKA-2022-789",
      description: "Kubernetes cluster administration and management",
      image: "⚙️",
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2021",
      credential: "MONGO-DEV-2021",
      description: "Advanced MongoDB database design and optimization",
      image: "🍃",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main className="pt-44 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <Award className="text-primary" />
              <span className="text-primary font-mono">{"<"}</span>
              <span className="text-foreground">Certificates</span>
              <span className="text-primary font-mono">{" />"}</span>
            </h1>
            <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
            <p className="text-muted-foreground mt-4 font-mono">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, idx) => (
              <Card
                key={idx}
                className="bg-code-bg border-primary/20 hover:border-primary transition-all duration-300 group overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-4xl border border-primary/20">
                      {cert.image}
                    </div>
                    <ExternalLink className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-muted-foreground font-mono text-sm mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-muted-foreground text-sm mb-4">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">
                        Credential ID
                      </p>
                      <p className="text-sm text-primary font-mono">
                        {cert.credential}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full border border-primary/20">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Certificates;
