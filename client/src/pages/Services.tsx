import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

import socialMediaImg from "@assets/stock_images/social_media_marketi_fbd8d924.jpg";
import creativeServicesImg from "@assets/stock_images/creative_photography_060189dd.jpg";
import webDesignImg from "@assets/stock_images/web_design_developme_284bb9e4.jpg";
import contentCreationImg from "@assets/stock_images/content_creation_vid_5ab45af7.jpg";
import eventCoverageImg from "@assets/stock_images/event_coverage_corpo_775a810c.jpg";
import consultingImg from "@assets/stock_images/business_consulting__e52f7c23.jpg";
import heroImg from "@assets/stock_images/professional_busines_dad49129.jpg";

const services = [
  {
    id: 1,
    title: "Strategy & Alignment",
    image: socialMediaImg,
    link: "/strategy-and-alignment"
  },
  {
    id: 2,
    title: "Project & Program Management",
    image: creativeServicesImg,
    link: "/project-and-program-management"
  },
  {
    id: 3,
    title: "Process Optimization",
    image: contentCreationImg,
    link: "/process-optimization"
  },
  {
    id: 4,
    title: "Workshop & Experiences",
    image: webDesignImg,
    link: "/workshop-and-experiences"
  },
  {
    id: 5,
    title: "Consulting",
    image: consultingImg,
    link: "/consulting"
  }
];

const processSteps = [
  {
    number: "1",
    title: "Fill Out the Form Below",
    description: "Your success is important to us. Before we start, we want to make sure we're the perfect fit. The short form below helps us understand your business needs and how we can best support your growth."
  },
  {
    number: "2",
    title: "Schedule and Attend a Discovery Call",
    description: "If our goals align, we'll hop on a discovery call to dive deeper into your vision, define clear objectives, and map out the best strategy for your business!"
  },
  {
    number: "3",
    title: "Review Your Custom Proposal",
    description: "After the call, we'll create a tailored proposal. This will include clear goals, a strategic plan, and package options. After reading the agreement and adding the signature. We can get started :)"
  }
];

const serviceOptions = [
  "Strategy & Alignment",
  "Project & Program Management",
  "Workshop & Experiences",
  "Process Optimization",
  "Consulting",
  "Custom Package",
  "Not sure yet"
];

const startTimeOptions = [
  "October 2025",
  "November 2025",
  "December 2025"
];

export default function Services() {
  const { toast } = useToast();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    title: "",
    location: "",
    website: "",
    startTime: ""
  });

  const handleServiceToggle = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, selectedServices });
    toast({
      className: "bg-[#626F47]/90 backdrop-blur-lg border border-white/20 shadow-2xl text-white",
      title: "Success!",
      description: "We'll be in touch soon to schedule your discovery call.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" data-testid="text-services-hero-title">
              Our Services
            </h1>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="overflow-hidden hover-elevate" data-testid={`card-service-${service.id}`}>
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3" data-testid={`text-service-title-${service.id}`}>
                      {service.title}
                    </h3>
                    <a
                      href={service.link}
                      className="text-primary hover:underline inline-flex items-center gap-1"
                      data-testid={`link-see-more-${service.id}`}
                    >
                      See more →
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="py-16 md:py-20 bg-card">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-tagline-heading">
              We combine bold creativity with data driven strategy
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-tagline-subtext">
              so everything we create doesn't just look amazing, it drives results.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="text-process-heading">
              Our Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {processSteps.map((step) => (
                <Card key={step.number} className="p-8" data-testid={`card-process-step-${step.number}`}>
                  <div className="text-4xl font-bold text-primary mb-4" data-testid={`text-step-number-${step.number}`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3" data-testid={`text-step-title-${step.number}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-step-description-${step.number}`}>
                    {step.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-card" id="work-with-us">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" data-testid="text-form-heading">
              Work with us
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    data-testid="input-first-name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    data-testid="input-last-name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email*</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Your Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  data-testid="input-title"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Where is your business based?</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  data-testid="input-location"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  data-testid="input-website"
                />
              </div>

              <div className="space-y-3">
                <Label>Which services are you leaning towards?</Label>
                <div className="space-y-2">
                  {serviceOptions.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`service-${index}`}
                        checked={selectedServices.includes(service)}
                        onCheckedChange={() => handleServiceToggle(service)}
                        data-testid={`checkbox-service-${index}`}
                      />
                      <Label
                        htmlFor={`service-${index}`}
                        className="text-sm font-normal cursor-pointer"
                      >
                        {service}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="startTime">When do you want to start?</Label>
                <Select value={formData.startTime} onValueChange={(value) => setFormData({ ...formData, startTime: value })}>
                  <SelectTrigger id="startTime" data-testid="select-start-time">
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {startTimeOptions.map((option, index) => (
                      <SelectItem key={index} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                data-testid="button-submit-form"
              >
                Let's chat!
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
