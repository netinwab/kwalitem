import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import serviceImage from "@assets/stock_images/professional_busines_dad49129.jpg";

export default function OurServicesPreview() {
  const services = [
    "Strategy & Alignment",
    "Photography & Creative Services",
    "Workshop & Experiences",
    "Process Optimization",
  ];

  return (
    <section className="py-16 md:py-24 bg-background" data-testid="section-our-services">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="text-section-title">
          Our Services
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={serviceImage}
              alt="Business team collaboration"
              className="w-full h-auto rounded-md object-cover"
              data-testid="img-services-preview"
            />
          </div>

          <div className="order-1 md:order-2 flex flex-col gap-3">
            {services.map((service, index) => (
              <Button
                key={index}
                variant="outline"
                size="lg"
                className="w-full justify-start text-left px-6 h-auto py-4 rounded-full hover-elevate active-elevate-2"
                data-testid={`button-service-${index}`}
              >
                {service}
              </Button>
            ))}
            
            <Link href="/services">
              <span
                className="mt-4 text-primary hover:underline text-center block cursor-pointer"
                data-testid="link-explore-services"
              >
                explore our full services →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
