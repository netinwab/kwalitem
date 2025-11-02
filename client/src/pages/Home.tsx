import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurServicesPreview from "@/components/OurServicesPreview";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <OurServicesPreview />
        
        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-why-choose-heading">
                Why work with us?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We bring expertise, creativity, and dedication to every project
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Strategic Approach</h3>
                <p className="text-muted-foreground">
                  We combine data-driven insights with creative thinking to deliver results that matter
                </p>
              </Card>
              
              <Card className="p-8 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Quick delivery without compromising on quality or attention to detail
                </p>
              </Card>
              
              <Card className="p-8 text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  Your success is our priority. We're with you every step of the way
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6" data-testid="text-cta-heading">
              Ready to get started?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help elevate your brand and achieve your business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild data-testid="button-cta-contact">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-testid="button-cta-portfolio">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
