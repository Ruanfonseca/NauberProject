import { 
  Clock, 
  BadgeDollarSign, 
  Target, 
  TrendingUp, 
  Sparkles, 
  Shield 
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Reduza em até 70% o tempo necessário para concluir cada projeto de pintura."
    },
    {
      icon: BadgeDollarSign,
      title: "Maior Faturamento",
      description: "Entregue mais obras no mesmo período e aumente significativamente seu lucro."
    },
    {
      icon: Target,
      title: "Precisão Total",
      description: "Acabamento uniforme e profissional em cada centímetro da superfície pintada."
    },
    {
      icon: TrendingUp,
      title: "Produtividade",
      description: "Multiplique sua capacidade de entrega sem aumentar a equipe de trabalho."
    },
    {
      icon: Sparkles,
      title: "Qualidade Superior",
      description: "Resultados que impressionam clientes e geram indicações naturais."
    },
    {
      icon: Shield,
      title: "Durabilidade",
      description: "Equipamentos robustos projetados para uso intensivo profissional."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-background relative">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            BENEFÍCIOS
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Por Que Escolher as Máquinas <span className="text-primary">Nauber</span>?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Vantagens reais que transformam seu trabalho e seus resultados financeiros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative bg-card rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border border-border hover:border-primary/30 overflow-hidden hover:-translate-y-1">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative w-11 h-11 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-md">
                <benefit.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="relative font-display text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
              <p className="relative text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;