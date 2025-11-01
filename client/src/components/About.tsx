import { Button } from "@/components/ui/button";
import aboutImage from "@assets/generated_images/About_section_professional_portrait_3d479e10.png";

export default function About() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-accent/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={aboutImage}
              alt="Professional consulting team"
              className="w-full h-auto rounded-md shadow-lg"
              data-testid="img-about"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-about-headline">
              We Align People and Systems for Real Impact
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description-1">
              At Align, we believe that sustainable growth comes from the perfect harmony between your people, processes, and systems. We partner with businesses to create clarity, build confidence, and foster collaboration at every level.
            </p>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-about-description-2">
              Our approach is rooted in understanding your unique challenges and opportunities. We don't just provide advice—we work alongside you to implement lasting change that drives measurable results.
            </p>
            <Button asChild data-testid="button-learn-more">
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')}>
                Learn More
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
