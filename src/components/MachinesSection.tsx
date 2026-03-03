import { Button } from "@/components/ui/button";
import { Check, Gauge, Timer, Paintbrush, DollarSign, Factory, Zap, Shield, Wrench, ArrowRight } from "lucide-react";
import dx3Hero from "@/assets/dx3-front.jpg";
import nb100Hero from "@/assets/nb100-front.jpg";

const MachinesSection = () => {
  return (
    <section id="dx3" className="py-12 md:py-20 bg-background relative">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            NOSSOS PRODUTOS
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Conheça as Máquinas <span className="text-primary">Nauber</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Duas soluções projetadas para diferentes necessidades — escolha a ideal para o seu negócio.
          </p>
        </div>

        {/* Two Machines Side by Side */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* DX-3 */}
          <div id="dx3-card" className="bg-card rounded-2xl border border-border shadow-medium overflow-hidden hover:shadow-strong transition-all duration-300 group">
            <div className="relative h-52 md:h-60 overflow-hidden bg-secondary">
              <img src={dx3Hero} alt="Nauber DX-3 - Máquina de Pintura Profissional" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3">
                <span className="bg-primary text-primary-foreground font-bold px-3 py-1.5 rounded-full text-xs shadow-lg">VERSÁTIL E ÁGIL</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">DX-3 NAUBER</h3>
              <p className="text-primary font-semibold text-base mb-3">Pinte 3x Mais Rápido</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Projetada para revolucionar a pintura, a DX-3 entrega rapidez, precisão e economia. Ideal para projetos médios e residenciais.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { icon: Timer, label: "3x Mais Rápido" },
                  { icon: Paintbrush, label: "Acabamento Perfeito" },
                  { icon: DollarSign, label: "-40% Desperdício" },
                  { icon: Gauge, label: "Alta Produtividade" },
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs">
                    <feat.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feat.label}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5 mb-5">
                {["Pulverização inteligente sem marcas", "Limpeza rápida em menos de 5 min", "Alta mobilidade e portabilidade"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-xs">{item}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-primary/5 rounded-lg p-3 text-center">
                  <p className="font-display text-xl font-bold text-primary">-70%</p>
                  <p className="text-muted-foreground text-xs">Tempo de Execução</p>
                </div>
                <div className="bg-primary/5 rounded-lg p-3 text-center">
                  <p className="font-display text-xl font-bold text-primary">+200%</p>
                  <p className="text-muted-foreground text-xs">Capacidade de Entrega</p>
                </div>
              </div>
              {/* Vídeo DX-3 */}
              <div className="aspect-[9/16] max-h-72 w-full rounded-lg overflow-hidden mb-5">
                <iframe
                  src="https://www.youtube.com/embed/-CQONK6YsLM"
                  title="Vídeo DX-3 Nauber"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <Button variant="default" size="default" className="w-full" asChild>
                <a href="#orcamento">Solicitar Orçamento DX-3 <ArrowRight className="w-4 h-4" /></a>
              </Button>
            </div>
          </div>

          {/* NB-100 */}
          <div id="nb100" className="bg-card rounded-2xl border border-border shadow-medium overflow-hidden hover:shadow-strong transition-all duration-300 group">
            <div className="relative h-52 md:h-60 overflow-hidden bg-secondary">
              <img src={nb100Hero} alt="Nauber NB-100 - Potência Industrial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3">
                <span className="bg-foreground text-background font-bold px-3 py-1.5 rounded-full text-xs shadow-lg">POTÊNCIA INDUSTRIAL</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">NB-100 NAUBER</h3>
              <p className="text-primary font-semibold text-base mb-3">Potência Para Grandes Obras</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Desenvolvida para operações de pintura em grande escala. Motor superdimensionado para longas jornadas sem interrupção.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {[
                  { icon: Factory, label: "Alta Vazão" },
                  { icon: Zap, label: "Motor Potente" },
                  { icon: Shield, label: "Construção Robusta" },
                  { icon: Wrench, label: "Fácil Manutenção" },
                ].map((feat, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs">
                    <feat.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feat.label}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-1.5 mb-5">
                {["Fachadas, muros e galpões industriais", "Longas jornadas de trabalho intensivo", "Economia de tinta e mão de obra"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2.5 h-2.5 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-xs">{item}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="bg-foreground/5 rounded-lg p-3 text-center">
                  <p className="font-display text-xl font-bold text-foreground">Alta</p>
                  <p className="text-muted-foreground text-xs">Vazão Contínua</p>
                </div>
                <div className="bg-foreground/5 rounded-lg p-3 text-center">
                  <p className="font-display text-xl font-bold text-foreground">Potente</p>
                  <p className="text-muted-foreground text-xs">Motor Industrial</p>
                </div>
              </div>
              {/* Vídeo NB-100 */}
              <div className="aspect-[9/16] max-h-72 w-full rounded-lg overflow-hidden mb-5">
                <iframe
                  src="https://www.youtube.com/embed/r9_Y-ILBqbc"
                  title="Vídeo NB-100 Nauber"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <Button variant="outline" size="default" className="w-full border-foreground text-foreground hover:bg-foreground hover:text-background" asChild>
                <a href="#orcamento">Solicitar Orçamento NB-100 <ArrowRight className="w-4 h-4" /></a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachinesSection;
