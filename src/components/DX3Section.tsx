import {
  Check,
  Gauge,
  Timer,
  Paintbrush,
  DollarSign,
  Zap,
  Shield,
  Wrench,
  Factory,
  Sparkles,
  Disc,
} from "lucide-react";
import d5xLateral from "@/assets/d5x-lateral.png";
import d5xFrente from "@/assets/d5x-frente.png";
import d3maxLateral from "@/assets/d3max-lateral.png";
import d3maxFrente from "@/assets/d3max-frente.png";
import mpp600Lateral from "@/assets/mpp600-lateral.png";
import mpp600Frente from "@/assets/mpp600-frente.png";
import lxb850 from "@/assets/lxb850.png";
import lxb850Kit from "@/assets/lxb850-kit.png";

const sections = [
  {
    id: "dx5",
    badge: "AIRLESS DIAFRAGMA",
    title: "D-5X NAUBER",
    subtitle: "Alta Pressão Para Acabamento Perfeito",
    description:
      "Equipamento airless com sistema de diafragma. Fabricada em aço galvanizado (anti-ferrugem) com pintura a pó. Motor blindado de alta potência e desempenho confiável. Alta pressão para excelente acabamento, melhor atomização e maior eficiência.",
    image1: d5xFrente,
    image2: d5xLateral,
    features: [
      {
        icon: Shield,
        title: "Aço Galvanizado",
        description:
          "Tratamento anti-ferrugem com pintura a pó para máxima durabilidade.",
      },
      {
        icon: Zap,
        title: "Motor Blindado",
        description:
          "Potência confiável para alta capacidade de produção contínua.",
      },
      {
        icon: Gauge,
        title: "Alta Pressão",
        description: "Excelente acabamento com melhor atomização e eficiência.",
      },
      {
        icon: Wrench,
        title: "Conexão INOX",
        description:
          "Acoplamento em aço INOX para resistência e vedação perfeita.",
      },
    ],
    checklist: [
      "Rodas de alta resistência para transporte",
      "Válvulas de alta qualidade e regulador de pressão",
      "Mangueira 1/4 15m + pistola Nauber Ultra",
      "Bico Light Green 517 + filtro 60 mesh",
      "Comprimento máximo da mangueira: 60m",
    ],
    usage:
      "Indicada para pintura na construção civil com tintas acrílicas, látex, esmaltes, vernizes e seladores à base de água.",
    stats: [
      { value: "60m", label: "Mangueira Máx." },
      { value: "220V", label: "50-60Hz" },
    ],
    bg: "bg-background",
  },
  // {
  //   id: "d3max-detail",
  //   badge: "RESERVATÓRIO 30L",
  //   title: "D-3X MAX NAUBER",
  //   subtitle: "Versatilidade com 2 Pistolas Simultâneas",
  //   description:
  //     "Fabricada em aço galvanizado com motor elétrico de indução 220V. Reservatório em PVC com capacidade de 30 litros para facilidade de sucção e possibilidade de conectar 2 pistolas simultaneamente.",
  //   image1: d3maxFrente,
  //   image2: d3maxLateral,
  //   features: [
  //     {
  //       icon: DollarSign,
  //       title: "Reservatório 30L",
  //       description:
  //         "PVC com facilidade de sucção e grande capacidade de material.",
  //     },
  //     {
  //       icon: Paintbrush,
  //       title: "2 Pistolas",
  //       description:
  //         "Possibilidade de conectar 2 pistolas para maior produtividade.",
  //     },
  //     {
  //       icon: Timer,
  //       title: "3x Mais Rápido",
  //       description: "Alta pressão para acabamento perfeito em menos tempo.",
  //     },
  //     {
  //       icon: Gauge,
  //       title: "Pressão Mecânica",
  //       description: "Regulador e válvula de controle para ajuste preciso.",
  //     },
  //   ],
  //   checklist: [
  //     "Motor elétrico de indução blindado 220V",
  //     "Conexão de acoplamento em aço INOX",
  //     "Mangueira 1/4 15m + pistola Nauber Ultra",
  //     "Bico Light Green 517 + extensor 50cm",
  //     "Comprimento máximo da mangueira: 60m",
  //   ],
  //   usage:
  //     "Projetos residenciais e comerciais. Tintas látex, acrílicas, esmaltes, vernizes, seladores e PU.",
  //   stats: [
  //     { value: "30L", label: "Reservatório" },
  //     { value: "2x", label: "Pistolas" },
  //   ],
  //   bg: "bg-secondary/50",
  // },
  {
    id: "mpp600-detail",
    badge: "PINTURA + MASSA CORRIDA",
    title: "MPP-600 NAUBER",
    subtitle: "Bomba de Pistão com Motor Brushless 4.0 HP",
    description:
      "Máquina de pintura airless e aplicação de massa corrida com bomba de pistão. Vazão de até 6,0 litros/min com sistema de manutenção simplificado e peças de alto desempenho. Motor brushless 4.0 HP com módulo controlador X-9.",
    image1: mpp600Frente,
    image2: mpp600Lateral,
    features: [
      {
        icon: Factory,
        title: "6,0 L/min",
        description: "Vazão de bomba de pistão para alta produtividade.",
      },
      {
        icon: Zap,
        title: "Motor 4.0 HP",
        description: "Brushless com módulo controlador de tensão X-9.",
      },
      {
        icon: Sparkles,
        title: "Massa Corrida",
        description: "Aplica pintura e massa corrida com a mesma máquina.",
      },
      {
        icon: Wrench,
        title: "Manutenção Simples",
        description: "Sistema simplificado com peças de alto desempenho.",
      },
    ],
    checklist: [
      "Pistola Ultra + bico 517 (pintura) + bico 529 (massa)",
      "Filtro 30 mesh + filtro 60 mesh",
      "15m de mangueira 3/8 + extensor 50cm",
      "Carrinho de transporte incluso",
      "Chaves, fusível, tela filtro e manual",
    ],
    usage:
      "Tintas acrílicas, esmaltes, látex, epóxies, massa corrida, massa acrílica e materiais de média densidade.",
    stats: [
      { value: "1.500m²", label: "Pintura/Dia" },
      { value: "1.000m²", label: "Massa/Dia" },
    ],
    productivity: [
      { value: "1.500m²", label: "Pintura (1 operador)" },
      { value: "3.000m²", label: "Pintura (2 operadores)" },
      { value: "1.000m²", label: "Massa corrida (1 operador)" },
    ],
    bg: "bg-background",
  },
  {
    id: "lxb850-detail",
    badge: "LIXADEIRA BRUSHLESS",
    title: "LXB850-CS NAUBER",
    subtitle: "Auto-aspirante com LED Dupla",
    description:
      "Lixadeira brushless de teto e parede com luz LED em fita dupla. Motor de 850W auto-aspirante que aspira até 90% dos resíduos, dispensando o uso de aspirador. Base articulada com 6 furos para melhor sucção e rendimento de lixa.",
    image1: lxb850,
    image2: lxb850Kit,
    features: [
      {
        icon: Disc,
        title: "850W Brushless",
        description: "Motor potente para lixamento eficiente de teto e parede.",
      },
      {
        icon: Zap,
        title: "Auto-aspirante",
        description: "Aspira até 90% dos resíduos sem precisar de aspirador.",
      },
      {
        icon: Gauge,
        title: "900-2300 RPM",
        description:
          "Ajuste eletrônico de velocidade para diferentes materiais.",
      },
      {
        icon: Shield,
        title: "LED Dupla",
        description:
          "Iluminação integrada para perfeita visualização do trabalho.",
      },
    ],
    checklist: [
      "Prato base 225mm com padrão 6 furos",
      "Caixa de comando blindada contra pó",
      "Saco coletor de pó até 30 litros",
      "Cabo extensor incluso",
      "Equipamento 220V / 50-60Hz",
    ],
    usage:
      "Indicada para lixamentos em paredes de alvenaria, gesso e massa corrida.",
    stats: [
      { value: "90%", label: "Aspiração" },
      { value: "225mm", label: "Prato Base" },
    ],
    bg: "bg-secondary/50",
  },
];

const DX3Section = () => {
  return (
    <>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-12 md:py-20 ${section.bg} relative`}
        >
          <div className="absolute inset-0 pattern-dots opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {section.badge}
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 tracking-tight">
                {section.title} —{" "}
                <span className="text-primary">{section.subtitle}</span>
              </h2>
            </div>

            {/* Content: Image + Description */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl transform -rotate-2" />
                <img
                  src={section.image1}
                  alt={section.title}
                  className="relative z-10 w-full max-h-80 object-contain rounded-2xl"
                />
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
                <div className="grid gap-2">
                  {section.checklist.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 group">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {section.features.map((feature, i) => (
                <div
                  key={i}
                  className="bg-card rounded-xl p-5 shadow-soft hover:shadow-medium transition-all border border-border hover:border-primary/30 group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-1 text-sm">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom: Stats + Usage + Image2 */}
            <div className="bg-hero-gradient rounded-2xl p-6 md:p-10 relative overflow-hidden">
              <div className="absolute inset-0 pattern-dots opacity-20" />
              <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-4">
                    Indicações de Uso
                  </h3>
                  <p className="text-primary-foreground/80 leading-relaxed mb-6">
                    {section.usage}
                  </p>

                  {"productivity" in section && section.productivity && (
                    <div className="mb-6">
                      <h4 className="text-primary-foreground font-semibold mb-3 text-sm">
                        Produtividade (8h de trabalho):
                      </h4>
                      <div className="grid gap-2">
                        {section.productivity.map((p, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg p-3"
                          >
                            <span className="font-display font-bold text-primary-foreground text-lg">
                              {p.value}
                            </span>
                            <span className="text-primary-foreground/70 text-sm">
                              {p.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    {section.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/10 text-center"
                      >
                        <p className="font-display text-2xl font-bold text-primary-foreground mb-0.5">
                          {stat.value}
                        </p>
                        <p className="text-primary-foreground/70 text-xs">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <img
                    src={section.image2}
                    alt={`${section.title} detalhe`}
                    className="w-full max-h-72 object-contain mx-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default DX3Section;
