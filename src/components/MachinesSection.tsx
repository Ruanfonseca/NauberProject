import { Button } from "@/components/ui/button";
import {
  Check,
  Gauge,
  Timer,
  Paintbrush,
  DollarSign,
  Factory,
  Zap,
  Shield,
  Wrench,
  ArrowRight,
  Disc,
  Sparkles,
} from "lucide-react";
import nb100Front from "@/assets/nb100-front.jpg";
import d5xFrente from "@/assets/d5x-frente.png";
import d3maxFrente from "@/assets/d3max-frente.png";
import mpp600Frente from "@/assets/mpp600-frente.png";
import lxb850 from "@/assets/lxb850.png";

const machines = [
  {
    id: "nb100",
    name: "NB-100",
    tagline: "Potência Para Grandes Obras",
    badge: "POTÊNCIA INDUSTRIAL",
    badgeStyle: "bg-foreground text-background",
    image: nb100Front,
    alt: "Nauber NB-100 - Potência Industrial",
    description:
      "Desenvolvida para operações de pintura em grande escala. Motor superdimensionado para longas jornadas sem interrupção.",
    features: [
      { icon: Factory, label: "Alta Vazão" },
      { icon: Zap, label: "Motor Potente" },
      { icon: Shield, label: "Construção Robusta" },
      { icon: Wrench, label: "Fácil Manutenção" },
    ],
    highlights: [
      "Fachadas, muros e galpões industriais",
      "Longas jornadas de trabalho intensivo",
      "Economia de tinta e mão de obra",
    ],
    stats: [
      { value: "Alta", label: "Vazão Contínua" },
      { value: "Potente", label: "Motor Industrial" },
    ],
    video: "https://www.youtube.com/embed/r9_Y-ILBqbc",
    buttonVariant: "outline" as const,
    buttonClass:
      "border-foreground text-foreground hover:bg-foreground hover:text-background",
  },
  {
    id: "d5x",
    name: "D-5X",
    tagline: "Airless com Sistema de Diafragma",
    badge: "AIRLESS DIAFRAGMA",
    badgeStyle: "bg-primary text-primary-foreground",
    image: d5xFrente,
    alt: "Nauber D-5X - Máquina Airless",
    description:
      "Equipamento airless com sistema de diafragma. Fabricada em aço galvanizado com motor blindado de alta potência e desempenho confiável.",
    features: [
      { icon: Gauge, label: "Alta Pressão" },
      { icon: Shield, label: "Aço Galvanizado" },
      { icon: Zap, label: "Motor Blindado" },
      { icon: Wrench, label: "Rodas Resistentes" },
    ],
    highlights: [
      "Tintas acrílicas, látex, esmaltes e vernizes",
      "Mangueira até 60m | 220V/50-60Hz",
      "Acompanha pistola, bico, filtro e extensor",
    ],
    stats: [
      { value: "60m", label: "Mangueira Máx." },
      { value: "220V", label: "50-60Hz" },
    ],
    video: "https://www.youtube.com/embed/azLAqWtgD9Q?si=5BDyqdlzLXYsVZ9H",

    buttonVariant: "default" as const,
    buttonClass: "",
  },
  // {
  //   id: "d3max",
  //   name: "D-3X MAX",
  //   tagline: "Airless com Reservatório 30L",
  //   badge: "VERSÁTIL E ÁGIL",
  //   badgeStyle: "bg-primary text-primary-foreground",
  //   image: d3maxFrente,
  //   alt: "Nauber D-3X MAX - Máquina Airless com Reservatório",
  //   description:
  //     "Motor elétrico de indução 220V com reservatório PVC de 30 litros. Possibilidade de conectar 2 pistolas simultaneamente.",
  //   features: [
  //     { icon: Timer, label: "3x Mais Rápido" },
  //     { icon: Paintbrush, label: "Acabamento Perfeito" },
  //     { icon: DollarSign, label: "Reservatório 30L" },
  //     { icon: Gauge, label: "2 Pistolas" },
  //   ],
  //   highlights: [
  //     "Projetos residenciais e comerciais",
  //     "Tintas látex, acrílicas, esmaltes, PU",
  //     "Facilidade de sucção com reservatório",
  //   ],
  //   stats: [
  //     { value: "30L", label: "Reservatório PVC" },
  //     { value: "2x", label: "Pistolas Simultâneas" },
  //   ],
  //   video: "https://www.youtube.com/embed/-CQONK6YsLM",
  //   buttonVariant: "default" as const,
  //   buttonClass: "",
  // },
  {
    id: "mpp600",
    name: "MPP-600",
    tagline: "Airless + Massa Corrida",
    badge: "PINTURA + MASSA",
    badgeStyle: "bg-foreground text-background",
    image: mpp600Frente,
    alt: "Nauber MPP-600 - Airless e Massa Corrida",
    description:
      "Bomba de pistão com vazão de até 6,0 L/min. Motor brushless 4.0 HP com módulo controlador X-9. Pinta e aplica massa corrida.",
    features: [
      { icon: Factory, label: "6,0 L/min Vazão" },
      { icon: Zap, label: "Motor 4.0 HP" },
      { icon: Sparkles, label: "Massa Corrida" },
      { icon: Shield, label: "Módulo X-9" },
    ],
    highlights: [
      "1.500m² pintura/dia (1 operador)",
      "3.000m² pintura/dia (2 operadores)",
      "1.000m² massa corrida/dia (1 operador)",
    ],
    stats: [
      { value: "1.500m²", label: "Pintura/Dia" },
      { value: "4.0 HP", label: "Motor Brushless" },
    ],
    buttonVariant: "outline" as const,
    video: "https://www.youtube.com/embed/ole9VBsxTSM?si=PIJKE9mKHP1c-OsZ",
    buttonClass:
      "border-foreground text-foreground hover:bg-foreground hover:text-background",
  },
  {
    id: "lxb850",
    name: "LXB850-CS",
    tagline: "Lixadeira Brushless com LED",
    badge: "LIXADEIRA",
    badgeStyle: "bg-primary text-primary-foreground",
    image: lxb850,
    alt: "Nauber LXB850-CS - Lixadeira Brushless",
    description:
      "Lixadeira brushless de teto e parede com luz LED dupla. Motor 850W, auto-aspirante que aspira até 90% dos resíduos.",
    features: [
      { icon: Disc, label: "850W Potência" },
      { icon: Zap, label: "Auto-aspirante" },
      { icon: Gauge, label: "900-2300 RPM" },
      { icon: Shield, label: "LED Dupla" },
    ],
    highlights: [
      "Aspira 90% dos resíduos sem aspirador",
      "Prato base 225mm, 6 furos",
      "Saco coletor de 30L + cabo extensor",
    ],
    stats: [
      { value: "90%", label: "Aspiração" },
      { value: "850W", label: "Brushless" },
    ],
    buttonVariant: "default" as const,
    buttonClass: "",
    video: "https://www.youtube.com/embed/4ElWp2IfpBo?si=fW-wdGyghOsqO27c",
  },
];

const MachinesSection = () => {
  return (
    <section id="dx3" className="py-12 md:py-20 bg-background relative">
      <div className="absolute inset-0 pattern-dots opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
            <span className="w-2 h-2 bg-primary rounded-full" />
            NOSSOS PRODUTOS
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
            Conheça as Máquinas <span className="text-primary">Nauber</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Soluções completas para pintura, massa corrida e lixamento — escolha
            a ideal para o seu negócio.
          </p>
        </div>

        {/* First row: 2 machines */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-6">
          {machines.slice(0, 4).map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>

        {/* Second row: 3 machines */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {machines.slice(2).map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div> */}
      </div>
    </section>
  );
};

const MachineCard = ({ machine }: { machine: (typeof machines)[0] }) => (
  <div
    id={`${machine.id}-card`}
    className="bg-card rounded-2xl border border-border shadow-medium overflow-hidden hover:shadow-strong transition-all duration-300 group"
  >
    <div className="relative h-52 md:h-60 overflow-hidden bg-secondary flex items-center justify-center">
      <img
        src={machine.image}
        alt={machine.alt}
        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-3 left-3">
        <span
          className={`${machine.badgeStyle} font-bold px-3 py-1.5 rounded-full text-xs shadow-lg`}
        >
          {machine.badge}
        </span>
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
        {machine.name} NAUBER
      </h3>
      <p className="text-primary font-semibold text-sm mb-3">
        {machine.tagline}
      </p>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {machine.description}
      </p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {machine.features.map((feat, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs">
            <feat.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="text-foreground">{feat.label}</span>
          </div>
        ))}
      </div>

      <div className="space-y-1.5 mb-5">
        {machine.highlights.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 text-primary" />
            </div>
            <span className="text-muted-foreground text-xs">{item}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        {machine.stats.map((stat, i) => (
          <div key={i} className="bg-primary/5 rounded-lg p-3 text-center">
            <p className="font-display text-lg font-bold text-primary">
              {stat.value}
            </p>
            <p className="text-muted-foreground text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      {machine.video && (
        <div className="aspect-[9/16] max-h-72 w-full rounded-lg overflow-hidden mb-5">
          <iframe
            src={machine.video}
            title={`Vídeo ${machine.name} Nauber`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}

      <Button
        variant={machine.buttonVariant}
        size="default"
        className={`w-full ${machine.buttonClass}`}
        asChild
      >
        <a href="#orcamento">
          Solicitar Orçamento {machine.name} <ArrowRight className="w-4 h-4" />
        </a>
      </Button>
    </div>
  </div>
);

export default MachinesSection;
