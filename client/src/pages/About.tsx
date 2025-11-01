import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutImage from "@assets/stock_images/team_collaboration_m_e988465b.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-card">
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid="text-about-hero-title">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We Align People and Systems for Real Impact
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src={aboutImage}
                  alt="Professional consulting team"
                  className="w-full h-auto rounded-md shadow-lg"
                  data-testid="img-about"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-about-headline">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description-1">
                  At Kwalitem, we believe that sustainable growth comes from the perfect harmony between your people, processes, and systems. We partner with businesses to create clarity, build confidence, and foster collaboration at every level.
                </p>
                <p className="text-lg text-muted-foreground mb-6" data-testid="text-about-description-2">
                  Our approach is rooted in understanding your unique challenges and opportunities. We don't just provide advice—we work alongside you to implement lasting change that drives measurable results.
                </p>
                <p className="text-lg text-muted-foreground mb-8" data-testid="text-about-description-3">
                  With years of experience across industries, our team brings deep expertise in strategy, operations, and organizational development. We're committed to your success.
                </p>
                <Button asChild data-testid="button-view-services">
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="text-values-title">
                Our Values
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary" data-testid="text-value-1-title">
                  Clarity
                </h3>
                <p className="text-muted-foreground" data-testid="text-value-1-description">
                  We bring clear thinking to complex challenges, making the path forward visible and achievable.
                </p>
              </Card>
              <Card className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary" data-testid="text-value-2-title">
                  Collaboration
                </h3>
                <p className="text-muted-foreground" data-testid="text-value-2-description">
                  Success happens when people work together. We foster environments where teams thrive.
                </p>
              </Card>
              <Card className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-3 text-primary" data-testid="text-value-3-title">
                  Confidence
                </h3>
                <p className="text-muted-foreground" data-testid="text-value-3-description">
                  We empower leaders and teams with the tools and mindset to tackle any challenge.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
