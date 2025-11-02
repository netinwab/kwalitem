import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import portfolio1 from "@assets/generated_images/Portfolio_case_study_1_a267a3ca.png";
import portfolio2 from "@assets/generated_images/Portfolio_case_study_2_4fb61639.png";
import portfolio3 from "@assets/generated_images/Portfolio_case_study_3_63a389d5.png";

const projects = [
  {
    title: "Tech Startup Transformation",
    description: "Helped a growing SaaS company restructure their operations, resulting in 40% efficiency improvement.",
    image: portfolio1,
    metrics: ["40% Efficiency", "25% Revenue Growth", "6 Months"],
  },
  {
    title: "Enterprise Culture Shift",
    description: "Guided a Fortune 500 company through organizational change, improving employee engagement by 35%.",
    image: portfolio2,
    metrics: ["35% Engagement", "15% Retention", "12 Months"],
  },
  {
    title: "Manufacturing Process Optimization",
    description: "Streamlined production workflows for a manufacturing firm, reducing costs by 30%.",
    image: portfolio3,
    metrics: ["30% Cost Reduction", "20% Output", "8 Months"],
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

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-portfolio-title">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-portfolio-subtitle">
            Real results for real businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
            >
              <Card
                className="overflow-hidden hover-elevate active-elevate-2 cursor-pointer group h-full"
                data-testid={`card-portfolio-${index}`}
              >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-portfolio-${index}`}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground" data-testid={`text-portfolio-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-portfolio-description-${index}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.map((metric, metricIndex) => (
                    <Badge key={metricIndex} variant="secondary" data-testid={`badge-metric-${index}-${metricIndex}`}>
                      {metric}
                    </Badge>
                  ))}
                </div>
              </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
