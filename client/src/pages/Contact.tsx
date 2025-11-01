import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      className: "bg-[#626F47]/90 backdrop-blur-lg border border-white/20 shadow-2xl text-white",
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-card">
          <div className="relative z-10 text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid="text-contact-page-title">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to align your business for success? Let's start the conversation.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-contact-form-title">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      data-testid="input-company"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      data-testid="textarea-message"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                    Send Message
                  </Button>
                </form>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6" data-testid="text-contact-info-title">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <Card className="p-6">
                      <div className="flex items-start gap-4">
                        <Mail className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1" data-testid="text-email-label">
                            Email
                          </h3>
                          <a
                            href="mailto:hello@alignconsulting.com"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            data-testid="link-email"
                          >
                            hello@alignconsulting.com
                          </a>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <div className="flex items-start gap-4">
                        <Phone className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1" data-testid="text-phone-label">
                            Phone
                          </h3>
                          <a
                            href="tel:+1234567890"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            data-testid="link-phone"
                          >
                            +1 (234) 567-890
                          </a>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1" data-testid="text-location-label">
                            Office
                          </h3>
                          <p className="text-muted-foreground" data-testid="text-location">
                            123 Business Street<br />
                            Suite 100<br />
                            New York, NY 10001
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                <div className="bg-accent/20 rounded-md p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4" data-testid="text-booking-title">
                    Book a Consultation
                  </h3>
                  <p className="text-muted-foreground mb-6" data-testid="text-booking-description">
                    Schedule a free 30-minute consultation to discuss your business needs.
                  </p>
                  <Button size="lg" className="w-full" data-testid="button-book-consultation">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
