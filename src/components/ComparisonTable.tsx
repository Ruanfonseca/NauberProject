import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComparisonTable = () => {
  const features = [
    { name: "Indicação Principal", dx3: "Projetos médios e residenciais", nb100: "Obras grandes e industriais" },
    { name: "Velocidade de Aplicação", dx3: "3x mais rápido", nb100: "Alta vazão contínua" },
    { name: "Tipo de Superfície", dx3: "Paredes internas e externas", nb100: "Fachadas, muros, galpões" },
    { name: "Tempo de Operação", dx3: "Jornadas regulares", nb100: "Longas jornadas intensivas" },
    { name: "Acabamento", dx3: "Uniforme e preciso", nb100: "Uniforme em grandes áreas" },
    { name: "Motor", dx3: "Profissional", nb100: "Superdimensionado" },
    { name: "Portabilidade", dx3: "Alta mobilidade", nb100: "Robustez industrial" },
    { name: "Economia de Tinta", dx3: true, nb100: true },
    { name: "Suporte Técnico", dx3: true, nb100: true },
  ];

  return (
    <section id="comparativo" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-5 py-2.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            COMPARATIVO
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            DX-3 vs NB-100: Qual é a <span className="text-primary">Ideal Para Você</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Compare as características e escolha a máquina que melhor atende às suas necessidades.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block bg-card rounded-[2rem] shadow-strong overflow-hidden border border-border">
          <div className="grid grid-cols-3">
            <div className="p-6 bg-secondary font-semibold text-muted-foreground">
              Característica
            </div>
            <div className="p-6 bg-primary text-center">
              <h3 className="font-display text-xl font-bold text-primary-foreground">DX-3</h3>
              <p className="text-primary-foreground/70 text-sm">Versátil e Ágil</p>
            </div>
            <div className="p-6 bg-foreground text-center">
              <h3 className="font-display text-xl font-bold text-background">NB-100</h3>
              <p className="text-background/70 text-sm">Potência Industrial</p>
            </div>
          </div>
          
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-3 border-t border-border">
              <div className="p-4 font-medium text-foreground bg-background">
                {feature.name}
              </div>
              <div className="p-4 text-center text-muted-foreground bg-primary/5">
                {typeof feature.dx3 === "boolean" ? (
                  feature.dx3 ? (
                    <Check className="w-5 h-5 text-primary mx-auto" />
                  ) : (
                    <span className="text-muted-foreground/50">—</span>
                  )
                ) : (
                  feature.dx3
                )}
              </div>
              <div className="p-4 text-center text-muted-foreground bg-foreground/5">
                {typeof feature.nb100 === "boolean" ? (
                  feature.nb100 ? (
                    <Check className="w-5 h-5 text-foreground mx-auto" />
                  ) : (
                    <span className="text-muted-foreground/50">—</span>
                  )
                ) : (
                  feature.nb100
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {/* DX-3 Card */}
          <div className="bg-card rounded-2xl shadow-medium overflow-hidden border border-primary/30">
            <div className="bg-primary p-6 text-center">
              <h3 className="font-display text-2xl font-bold text-primary-foreground">DX-3</h3>
              <p className="text-primary-foreground/70">Versátil e Ágil</p>
            </div>
            <div className="p-6 space-y-4">
              {features.slice(0, 7).map((feature, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-muted-foreground text-sm">{feature.name}</span>
                  <span className="text-foreground font-medium text-sm text-right max-w-[50%]">
                    {typeof feature.dx3 === "boolean" ? (
                      feature.dx3 ? <Check className="w-5 h-5 text-primary" /> : "—"
                    ) : (
                      feature.dx3
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* NB-100 Card */}
          <div className="bg-card rounded-2xl shadow-medium overflow-hidden border border-foreground/30">
            <div className="bg-foreground p-6 text-center">
              <h3 className="font-display text-2xl font-bold text-background">NB-100</h3>
              <p className="text-background/70">Potência Industrial</p>
            </div>
            <div className="p-6 space-y-4">
              {features.slice(0, 7).map((feature, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <span className="text-muted-foreground text-sm">{feature.name}</span>
                  <span className="text-foreground font-medium text-sm text-right max-w-[50%]">
                    {typeof feature.nb100 === "boolean" ? (
                      feature.nb100 ? <Check className="w-5 h-5 text-foreground" /> : "—"
                    ) : (
                      feature.nb100
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4 text-sm">
            Não sabe qual escolher? Fale com nossos especialistas.
          </p>
          <Button variant="default" size="lg" asChild>
            <a href="#orcamento">Falar com Especialista</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;