import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import LogoBranca from "@/assets/LogoBranca.png";
import LogoOficial from "@/assets/LogoOficial.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-soft border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-3 group">
            {/* <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-primary-foreground font-display font-bold text-xl">
                N
              </span>
            </div> */}
            <span
              className={`transition-all duration-300 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <img
                src={isScrolled ? LogoOficial : LogoBranca}
                alt="Nauber Logo"
                className="w-24 h-6"
              />
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#dx5", label: "D-5X" },
              { href: "#nb100", label: "NB-100" },
              { href: "#beneficios", label: "Benefícios" },
              { href: "#para-quem", label: "Para Quem" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:opacity-100 ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant={isScrolled ? "default" : "ctaWhite"}
              size="lg"
              asChild
            >
              <a href="#orcamento">Solicitar Orçamento</a>
            </Button>
          </div>

          {isScrolled && (
            <button
              className="md:hidden p-2 text-foreground transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in bg-background/95 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col gap-2">
              {[
                { href: "#dx5", label: "D-5X" },
                { href: "#nb100", label: "NB-100" },
                { href: "#beneficios", label: "Benefícios" },
                { href: "#para-quem", label: "Para Quem" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors font-medium py-3 px-4 rounded-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" size="lg" className="mt-4" asChild>
                <a href="#orcamento">Solicitar Orçamento</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
