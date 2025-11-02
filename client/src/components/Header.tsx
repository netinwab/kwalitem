import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <div className="flex flex-col cursor-pointer">
              <span className="text-2xl font-bold text-primary hover-elevate active-elevate-2 px-3 py-1 rounded-md -ml-3" data-testid="link-logo">
                Kwalitem
              </span>
              <p className="text-xs text-muted-foreground ml-0.5 mt-0.5 tracking-wide font-semibold" data-testid="text-tagline">
                People, Purpose, and Performance
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer inline-block ${
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground hover-elevate active-elevate-2"
                  }`}
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild data-testid="button-contact">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t" data-testid="mobile-menu">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 text-sm font-medium rounded-md cursor-pointer inline-block ${
                      isActive(item.href)
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground hover-elevate active-elevate-2"
                    }`}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Button className="mt-2" asChild data-testid="button-mobile-contact">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
