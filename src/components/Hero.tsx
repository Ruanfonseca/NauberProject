import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, TrendingUp, CheckCircle } from "lucide-react";
import dx5Hero from "@/assets/d5x-frente.png";

const Hero = () => {
  return (
    <section className="relative bg-hero-gradient overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-30" />
      </div>

      <div className="container mx-auto px-4 py-10 md:py-14 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[65vh]">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-2 mb-6 animate-fade-in backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary-foreground" />
              <span className="text-primary-foreground/90 text-sm font-medium">
                Tecnologia Airless Profissional
              </span>
            </div>

            <h1
              className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground mb-4 leading-[1.1] animate-fade-in tracking-tight"
              style={{ animationDelay: "0.1s" }}
            >
              Pinte{" "}
              <span className="relative inline-block">
                3x Mais Rápido
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 8C50 3 150 3 198 8"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary-foreground/40"
                  />
                </svg>
              </span>{" "}
              com Acabamento Perfeito
            </h1>

            <p
              className="text-base md:text-lg text-primary-foreground/75 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              As máquinas Nauber D-5X e NB-100 revolucionam a pintura
              profissional. Mais velocidade, mais economia, mais lucro para o
              seu negócio.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="ctaWhite" size="lg" asChild>
                <a href="#orcamento">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#dx3">Conhecer Produtos</a>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-3 md:gap-6 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { icon: Clock, value: "3x", label: "Mais Rápido" },
                { icon: TrendingUp, value: "40%", label: "Economia de Tinta" },
                {
                  icon: CheckCircle,
                  value: "100%",
                  label: "Acabamento Uniforme",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center lg:text-left p-3 rounded-xl bg-primary-foreground/5 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-0.5">
                    <stat.icon className="w-4 h-4 text-primary-foreground/70" />
                    <span className="font-display text-xl md:text-2xl font-bold text-primary-foreground">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-primary-foreground/60 text-xs">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className="relative animate-fade-in-right"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="absolute inset-0 bg-primary-foreground/10 rounded-[2rem] blur-3xl transform rotate-6" />
            <img
              src={dx5Hero}
              alt="Máquina de Pintura Nauber D-5X"
              className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl animate-float rounded-3xl"
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-background rounded-xl px-6 py-3 shadow-strong z-20">
              <p className="font-display font-bold text-foreground text-base">
                D-5X NAUBER
              </p>
              <p className="text-muted-foreground text-xs">
                Airless com Sistema de Diafragma
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-1.5 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
