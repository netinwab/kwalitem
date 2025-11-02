import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import strategyImage from "@assets/generated_images/Business_strategy_service_card_bc835e5a.png";
import processImage from "@assets/generated_images/Process_optimization_service_card_020047d6.png";
import systemsImage from "@assets/generated_images/Systems_alignment_service_card_53394959.png";
import orgDevImage from "@assets/generated_images/Organizational_development_service_card_d8ae649e.png";
import leadershipImage from "@assets/generated_images/Leadership_training_service_card_55601e2c.png";

const services = [
  {
    title: "Business Strategy & Growth",
    description: "Strategic planning and execution frameworks that drive sustainable business expansion.",
    image: strategyImage,
  },
  {
    title: "Process Optimization",
    description: "Streamline operations and eliminate inefficiencies for maximum productivity.",
    image: processImage,
  },
  {
    title: "Systems Alignment",
    description: "Integrate people, technology, and processes for seamless organizational flow.",
    image: systemsImage,
  },
  {
    title: "Organizational Development",
    description: "Build strong organizational structures that support growth and innovation.",
    image: orgDevImage,
  },
  {
    title: "Leadership & Team Confidence Training",
    description: "Empower leaders and teams with the skills and confidence to excel.",
    image: leadershipImage,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Comprehensive solutions to align your business for success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className="group overflow-hidden hover-elevate active-elevate-2 cursor-pointer h-full"
                data-testid={`card-service-${index}`}
              >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-service-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  data-testid={`button-see-more-${index}`}
                >
                  See More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
