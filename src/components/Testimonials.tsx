import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content:
        "Outstanding developer who consistently delivers high-quality code. Their attention to detail and problem-solving skills are exceptional.",
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "CTO at StartupXYZ",
      content:
        "A true professional who goes above and beyond. Their full-stack expertise helped us launch our product ahead of schedule.",
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Designer at CreativeStudio",
      content:
        "Excellent collaboration skills and deep understanding of both frontend and backend. A pleasure to work with on complex projects.",
      avatar: "ER",
    },
    {
      name: "David Park",
      role: "Engineering Director",
      content:
        "Impressive technical skills combined with great communication. They transformed our legacy system into a modern, scalable application.",
      avatar: "DP",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-primary font-mono">{"<"}</span>
            <span className="text-foreground">Testimonials</span>
            <span className="text-primary font-mono tracking-wide">
              {" />"}
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-primary rounded-full"></div>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="bg-code-bg border-primary/20 p-6 h-full">
                  <Quote className="w-8 h-8 text-primary/40 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                      <span className="font-mono text-primary font-bold">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
