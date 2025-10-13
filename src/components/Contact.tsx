import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary font-mono">{'<'}</span>
            <span className="text-foreground">Get In Touch</span>
            <span className="text-primary font-mono">{' />'}</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-code-bg rounded-lg border border-border p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-mono text-primary">name: string</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-primary/30 focus:border-primary font-mono"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-primary">email: string</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-primary/30 focus:border-primary font-mono"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-primary">message: string</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background border-primary/30 focus:border-primary font-mono min-h-[150px]"
                  placeholder="Your message here..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-mono font-semibold shadow-glow hover:shadow-glow-intense"
              >
                send() → Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-code-bg rounded-lg border border-border p-8 font-mono text-sm">
              <div className="space-y-2 text-muted-foreground">
                <div>
                  <span className="text-blue-400">const</span> <span className="text-yellow-300">contact</span> ={" "}
                  <span className="text-foreground">{'{'}</span>
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">email:</span>{" "}
                  <span className="text-green-400">"your.email@example.com"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">location:</span>{" "}
                  <span className="text-green-400">"Your City, Country"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">availability:</span>{" "}
                  <span className="text-green-400">"Open to opportunities"</span>,
                </div>
                <div>
                  <span className="text-foreground">{'}'}</span>;
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground font-mono">
                <span className="text-primary">//</span> Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-code-bg rounded-lg border border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-code-bg rounded-lg border border-primary/20 p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Let's build something amazing</h3>
                  <p className="text-muted-foreground text-sm">
                    I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
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

export default Contact;
