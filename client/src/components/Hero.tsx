import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@assets/generated_images/Hero_background_collaboration_scene_225561f2.png";
import teamImage from "@assets/stock_images/team_collaboration_m_e988465b.jpg";
import businessImage from "@assets/stock_images/business_consulting__e52f7c23.jpg";
import professionalImage from "@assets/stock_images/professional_busines_dad49129.jpg";

export default function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const workSteps = [
    {
      title: "Clarify",
      description: "Define the vision, goals, and measures of success.",
      image: professionalImage
    },
    {
      title: "Align",
      description: "Connect people, processes, and priorities.",
      image: teamImage
    },
    {
      title: "Strengthen",
      description: "Build systems that enable consistency and accountability.",
      image: businessImage
    },
    {
      title: "Empower",
      description: "Develop leaders and teams to sustain growth long after delivery.",
      image: teamImage
    }
  ];

  return (
    <>
      <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" data-testid="text-hero-headline">
            Elevate Your Brand with Creative Marketing Solutions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto" data-testid="text-hero-subtext">
            We combine bold creativity with data-driven strategy to deliver results that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              asChild
              className="text-base"
              data-testid="button-work-with-us"
            >
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                Work With Us
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-base bg-background/10 backdrop-blur-sm border-white/30 text-white hover:bg-background/20"
              data-testid="button-book-consultation"
            >
              <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')}>
                Book a Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground" data-testid="text-how-we-work-title">
            How we work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workSteps.map((step, index) => (
              <Card key={index} className="overflow-hidden bg-background" data-testid={`card-work-step-${index}`}>
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-2 text-foreground" data-testid={`text-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-step-description-${index}`}>
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
