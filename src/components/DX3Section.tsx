import { Check, Gauge, Timer, Paintbrush, DollarSign } from "lucide-react";
import dx3Hero from "@/assets/dx3-outdoor.jpg";
import equipmentDetail from "@/assets/dx3-action.jpg";

const DX3Section = () => {
  const features = [
    {
      icon: Timer,
      title: "Velocidade 3x Superior",
      description: "Aplique tinta até 3 vezes mais rápido que métodos tradicionais de rolo e pincel."
    },
    {
      icon: Paintbrush,
      title: "Acabamento Uniforme",
      description: "Pulverização inteligente garante cobertura perfeita sem marcas ou imperfeições."
    },
    {
      icon: DollarSign,
      title: "Economia Real",
      description: "Reduza o desperdício de tinta em até 40% com controle preciso de vazão."
    },
    {
      icon: Gauge,
      title: "Alta Produtividade",
      description: "Aumente drasticamente seu faturamento entregando mais obras no mesmo tempo."
    }
  ];

  return (
    <section id="dx3" className="py-20 md:py-32 bg-background relative">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-5 py-2.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-primary rounded-full" />
            PRODUTO PRINCIPAL
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            DX-3 NAUBER — A Pintura <span className="text-primary">3x Mais Rápida</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Projetada para revolucionar o processo de pintura, a DX-3 entrega rapidez, 
            precisão e economia, eliminando completamente os problemas clássicos da pintura manual.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="relative animate-fade-in-left">
            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] transform -rotate-3" />
            <img
              src={dx3Hero}
              alt="Nauber DX-3 - Máquina de Pintura Profissional"
              className="relative z-10 w-full rounded-2xl shadow-strong"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                O Que a DX-3 Faz Por Você
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A Nauber DX-3 é uma máquina de pintura airless que transforma completamente 
                a forma como profissionais trabalham. Com motor de alta performance e sistema 
                de pulverização de última geração, ela elimina os principais problemas da 
                pintura manual: <strong className="text-foreground">retrabalho, marcas de pincel 
                e consumo excessivo de tinta.</strong>
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Aplica tinta até 3x mais rápido que rolo e pincel",
                "Acabamento extremamente uniforme e profissional",
                "Reduz desperdício com pulverização inteligente",
                "Aumenta produtividade e reduz tempo total de obra",
                "Sistema de limpeza rápida em menos de 5 minutos"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary transition-colors">
                    <Check className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/30 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-2">{feature.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Solution Section */}
        <div className="bg-hero-gradient rounded-[2rem] p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 pattern-dots opacity-20" />
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
                A Grande Solução da DX-3
              </h3>
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                A DX-3 resolve o problema principal do pintor: <strong className="text-primary-foreground">demora, 
                retrabalho e inconsistência.</strong> Ela transforma horas de pintura em minutos, 
                aumentando faturamento, eficiência e reputação do profissional.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
                  <p className="font-display text-3xl font-bold text-primary-foreground mb-1">-70%</p>
                  <p className="text-primary-foreground/70 text-sm">Tempo de Execução</p>
                </div>
                <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
                  <p className="font-display text-3xl font-bold text-primary-foreground mb-1">+200%</p>
                  <p className="text-primary-foreground/70 text-sm">Capacidade de Entrega</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={equipmentDetail}
                alt="Detalhes da pistola de pintura DX-3"
                className="w-full max-w-md mx-auto rounded-2xl shadow-strong"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DX3Section;