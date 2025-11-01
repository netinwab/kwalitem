import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const portfolioItems = [
  {
    id: 1,
    title: "Brand Refresh Campaign",
    category: "Social Media",
    description: "Complete social media overhaul resulting in 300% engagement increase",
    metrics: "300% increase in engagement"
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Web Design",
    description: "Modern, conversion-optimized online store with seamless user experience",
    metrics: "45% increase in conversions"
  },
  {
    id: 3,
    title: "Corporate Event Coverage",
    category: "Photography",
    description: "Professional event documentation capturing key moments and brand essence",
    metrics: "500+ high-quality images"
  },
  {
    id: 4,
    title: "Content Strategy",
    category: "Content",
    description: "Comprehensive content calendar driving consistent brand messaging",
    metrics: "2x content output"
  },
  {
    id: 5,
    title: "Product Launch",
    category: "Marketing",
    description: "Multi-channel campaign generating buzz and driving pre-orders",
    metrics: "$100K+ in pre-orders"
  },
  {
    id: 6,
    title: "Brand Identity",
    category: "Creative",
    description: "Complete brand redesign including logo, colors, and brand guidelines",
    metrics: "Complete brand system"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-card">
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid="text-portfolio-hero-title">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Real results for real businesses. See how we've helped clients achieve their goals.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover-elevate cursor-pointer" data-testid={`card-portfolio-${item.id}`}>
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-6xl opacity-20">📁</div>
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3" data-testid={`badge-category-${item.id}`}>
                      {item.category}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2" data-testid={`text-portfolio-title-${item.id}`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-3" data-testid={`text-portfolio-description-${item.id}`}>
                      {item.description}
                    </p>
                    <p className="text-sm font-medium text-primary" data-testid={`text-portfolio-metrics-${item.id}`}>
                      {item.metrics}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-card">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to see your project here?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's create something amazing together
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
