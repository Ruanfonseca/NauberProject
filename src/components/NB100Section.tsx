import { Button } from "@/components/ui/button";
import { Factory, Zap, Shield, Wrench, ArrowRight } from "lucide-react";
import nb100Hero from "@/assets/nb100-front.jpg";
import paintingAction from "@/assets/nb100-operator.jpg";

const NB100Section = () => {
  return (
    <section id="nb100" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Hero Banner */}
        <div className="relative rounded-[2rem] overflow-hidden mb-20">
          <img
            src={nb100Hero}
            alt="Nauber NB-100 - Potência Industrial"
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 to-foreground/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-8 md:px-16">
              <span className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-5 py-2.5 rounded-full text-sm mb-6">
                <Zap className="w-4 h-4" />
                POTÊNCIA INDUSTRIAL
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-background mb-4 max-w-2xl tracking-tight">
                NB-100 NAUBER — Potência Para Grandes Obras
              </h2>
              <p className="text-background/80 text-lg max-w-xl mb-8 leading-relaxed">
                Criada para quem precisa entregar obras grandes rápido e com qualidade profissional.
              </p>
              <Button variant="ctaWhite" size="lg" asChild>
                <a href="#orcamento">
                  Saber Mais
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="order-2 lg:order-1 space-y-8">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Descrição Técnica Detalhada
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A NB-100 foi desenvolvida para operações de pintura em grande escala. 
                Seu <strong className="text-foreground">motor superdimensionado</strong> permite 
                longas jornadas de trabalho sem interrupção, enquanto o sistema de alta vazão 
                garante cobertura rápida de grandes superfícies como fachadas, muros industriais 
                e galpões.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Factory, label: "Alta Vazão", desc: "Para grandes áreas" },
                { icon: Zap, label: "Motor Potente", desc: "Longas jornadas" },
                { icon: Shield, label: "Construção Robusta", desc: "Máxima durabilidade" },
                { icon: Wrench, label: "Fácil Manutenção", desc: "Peças acessíveis" }
              ].map((item, index) => (
                <div key={index} className="bg-card rounded-2xl p-5 shadow-soft border border-border hover:border-primary/30 transition-colors group hover:-translate-y-1 transition-all">
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-foreground">{item.label}</p>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-primary/10 rounded-[2rem] transform rotate-3" />
            <img
              src={paintingAction}
              alt="Pintura profissional com equipamento Nauber"
              className="relative z-10 w-full rounded-2xl shadow-strong"
            />
          </div>
        </div>

        {/* Technical Specs */}
        <div className="bg-card rounded-[2rem] p-8 md:p-12 shadow-medium border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            O Que a NB-100 Oferece
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: "Alta",
                label: "Vazão",
                desc: "Para pintura rápida de fachadas, muros e galpões"
              },
              {
                value: "Uniforme",
                label: "Aplicação",
                desc: "Mesmo em superfícies irregulares ou texturizadas"
              },
              {
                value: "Potente",
                label: "Motor",
                desc: "Superdimensionado para longas jornadas de trabalho"
              },
              {
                value: "Economia",
                label: "Operacional",
                desc: "De tinta e mão de obra em cada projeto"
              }
            ].map((spec, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-secondary hover:bg-primary/10 transition-colors group">
                <p className="font-display text-3xl font-bold text-primary mb-1">{spec.value}</p>
                <p className="font-semibold text-foreground mb-2">{spec.label}</p>
                <p className="text-muted-foreground text-sm">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Box */}
        <div className="mt-12 bg-hero-gradient rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20" />
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              A Grande Solução da NB-100
            </h3>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              A NB-100 elimina o maior problema da pintura pesada: <strong className="text-primary-foreground">como entregar 
              grandes áreas no menor tempo possível sem perda de acabamento.</strong> Ela aumenta 
              drasticamente a capacidade operacional de equipes e empreiteiras, permitindo 
              entregar projetos maiores com menos recursos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NB100Section;