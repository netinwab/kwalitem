import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "wouter";
import { SiLinkedin, SiInstagram } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        className: "bg-[#626F47]/90 backdrop-blur-lg border border-white/20 shadow-2xl text-white",
        title: "Thanks for subscribing!",
        description: "You'll receive our insights and updates in your inbox.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Left: Newsletter */}
          <div>
            <h3 className="text-base font-normal text-foreground mb-2" data-testid="text-footer-newsletter-title">
              Receive free marketing tips,
            </h3>
            <h4 className="text-base font-normal text-foreground mb-4">
              directly in your inbox
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <div>
                <label htmlFor="footer-email" className="block text-sm text-muted-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background"
                  data-testid="input-newsletter-email"
                />
              </div>
              <Button 
                type="submit" 
                size="default" 
                className="w-fit px-8"
                data-testid="button-newsletter-submit"
              >
                Submit
              </Button>
            </form>
          </div>

          {/* Center: Connect */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-3" data-testid="text-footer-connect-title">
              Connect
            </h3>
            <a
              href="mailto:info@kwalitem.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block mb-4"
              data-testid="link-footer-email"
            >
              info@kwalitem.com
            </a>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-instagram"
              >
                <SiInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-linkedin"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right: Explore */}
          <div className="md:text-right">
            <h3 className="text-lg font-semibold text-foreground mb-3" data-testid="text-footer-explore-title">
              Explore
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:inline-grid">
              <Link href="/">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-block" data-testid="link-footer-home">
                  Home
                </span>
              </Link>
              <Link href="/services">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-block" data-testid="link-footer-services">
                  Services
                </span>
              </Link>
              <Link href="/about">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-block" data-testid="link-footer-about">
                  About
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-block" data-testid="link-footer-portfolio">
                  Portfolio
                </span>
              </Link>
              <Link href="/blog">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-block" data-testid="link-footer-blogs">
                  Blogs
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer inline-block" data-testid="link-footer-contact">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="text-center pt-8 border-t">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-primary mb-1" data-testid="text-footer-logo">
              Kwalitem
            </h2>
            <p className="text-xs uppercase tracking-wide text-muted-foreground" data-testid="text-footer-tagline">
              PEOPLE, PURPOSE & PERFORMANCE
            </p>
          </div>
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            Copyright © {new Date().getFullYear()} Kwalitem. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
