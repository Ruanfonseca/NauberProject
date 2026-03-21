import { Button } from "@/components/ui/button";
import { Factory, Zap, Shield, Wrench, ArrowRight } from "lucide-react";
import nb100Front from "@/assets/nb100-front.jpg";
import nb100Operator from "@/assets/nb100-operator.jpg";

const NB100Section = () => {
  return (
    <section id="nb100" className="py-12 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-10">
          <img
            src={nb100Front}
            alt="Nauber NB-100 - Potência Industrial"
            className="w-full h-[250px] md:h-[350px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 to-foreground/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-6 md:px-12">
              <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-4 py-2 rounded-full text-sm mb-4">
                <Zap className="w-4 h-4" />
                POTÊNCIA INDUSTRIAL
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-background mb-3 max-w-2xl tracking-tight">
                NB-100 NAUBER — Potência Para Grandes Obras
              </h2>
              <p className="text-background/80 text-base max-w-xl mb-6 leading-relaxed">
                Criada para quem precisa entregar obras grandes rápido e com
                qualidade profissional.
              </p>
              <Button variant="ctaWhite" size="default" asChild>
                <a href="#orcamento">
                  Saber Mais <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                Descrição Técnica
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                A NB-100 foi desenvolvida para operações de pintura em grande
                escala. Seu{" "}
                <strong className="text-foreground">
                  motor superdimensionado
                </strong>{" "}
                permite longas jornadas de trabalho sem interrupção, enquanto o
                sistema de alta vazão garante cobertura rápida de fachadas,
                muros e galpões.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Factory, label: "Alta Vazão", desc: "Grandes áreas" },
                { icon: Zap, label: "Motor Potente", desc: "Longas jornadas" },
                {
                  icon: Shield,
                  label: "Construção Robusta",
                  desc: "Máxima durabilidade",
                },
                {
                  icon: Wrench,
                  label: "Fácil Manutenção",
                  desc: "Peças acessíveis",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-4 shadow-soft border border-border hover:border-primary/30 transition-all group hover:-translate-y-1"
                >
                  <item.icon className="w-6 h-6 text-primary mb-2 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-foreground text-sm">
                    {item.label}
                  </p>
                  <p className="text-muted-foreground text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3" />
            <img
              src={nb100Operator}
              alt="NB-100 em operação"
              className="relative z-10 w-full rounded-2xl shadow-strong"
            />
          </div>
        </div>

        {/* Solution Box */}
        <div className="bg-hero-gradient rounded-2xl p-6 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-3">
              A Grande Solução da NB-100
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              A NB-100 elimina o maior problema da pintura pesada:{" "}
              <strong className="text-primary-foreground">
                como entregar grandes áreas no menor tempo possível sem perda de
                acabamento.
              </strong>{" "}
              Ela aumenta drasticamente a capacidade operacional de equipes e
              empreiteiras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NB100Section;
