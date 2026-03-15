import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "Why Choose Us", href: "#why-choose-us" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-white py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 cursor-pointer">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Ber-Mor Gas Service Logo"
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-extrabold text-xl text-primary tracking-tight group-hover:text-accent transition-colors leading-tight">
                Ber-Mor Gas Service
              </span>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                Your Trusted Home Comfort Experts
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="tel:3153394812"
              className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-xl font-bold hover:bg-accent transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <Phone className="w-4 h-4" />
              (315) 339-4812
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-semibold text-foreground py-2 border-b border-border/50 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:3153394812"
              className="flex items-center justify-center gap-2 w-full py-3 mt-2 bg-primary text-white rounded-xl font-bold hover:bg-accent transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (315) 339-4812
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="flex items-center justify-center gap-2 w-full py-3 bg-secondary text-secondary-foreground rounded-xl font-bold hover:bg-secondary/80 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
