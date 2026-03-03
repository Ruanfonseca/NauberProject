import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle, Shield, Truck, CreditCard, Headphones, MapPin, Clock } from "lucide-react";

const lojas = [
  {
    nome: "Loja Campo Grande - Monteiro",
    endereco: "Estr. do Monteiro, 967 - Campo Grande, Rio de Janeiro - RJ, 23045-831",
    telefone: "(21) 3251-3756",
    whatsapp: "(21) 99403-5132",
    email: "contato@casadoviana.com",
    horario: "Seg a Sex 8:00–18:00 | Sáb 8:00–13:00",
  },
  {
    nome: "Loja Estrada do Pré",
    endereco: "Rua Mora, 674 - Campo Grande, Rio de Janeiro - RJ, 23052-510",
    telefone: "(21) 3251-3756",
    whatsapp: "(21) 99403-5132",
    email: "mkcasadoviana@hotmail.com",
    horario: "Seg a Sex 8:00–18:00 | Sáb 8:00–13:00",
  },
  {
    nome: "Loja Realengo",
    endereco: "R. Gen. Azeredo, 849 - Realengo, Rio de Janeiro - RJ, 21765-000",
    telefone: "(21) 3251-3756",
    whatsapp: "(21) 99403-5132",
    email: "contato@casadoviana.com",
    horario: "Seg a Sex 8:00–18:00 | Sáb 8:00–13:00",
  },
  {
    nome: "Loja Recreio dos Bandeirantes",
    endereco: "R. Gen. Landri Gonçalves, 305 - Recreio dos Bandeirantes, Rio de Janeiro - RJ, 22795-410",
    telefone: "(21) 3251-3756",
    whatsapp: "(21) 99403-5132",
    email: "contato@casadoviana.com",
    horario: "Seg a Sex 8:00–18:00 | Sáb 8:00–13:00",
  },
];

const FinalCTA = () => {
  return (
    <section id="orcamento" className="py-12 md:py-20 bg-hero-gradient relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 pattern-dots opacity-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-primary-foreground text-primary font-bold px-5 py-2 rounded-full text-sm mb-6 shadow-lg">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            CENTRAL DE ATENDIMENTO
          </span>
          
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
            Transforme Sua Pintura Hoje Mesmo
          </h2>
          
          <p className="text-lg text-primary-foreground/75 mb-10 max-w-2xl mx-auto leading-relaxed">
            Visite uma de nossas lojas ou entre em contato. A{" "}
            <strong className="text-primary-foreground">Casa do Viana</strong> é a única revendedora autorizada Nauber na Zona Oeste do RJ.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button variant="ctaWhite" size="lg" className="text-base" asChild>
              <a href="https://wa.me/5521966115638" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Solicitar Orçamento via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Lojas Grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left">
            {lojas.map((loja, index) => (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-5 hover:bg-primary-foreground/15 transition-all"
              >
                <h3 className="font-display font-bold text-primary-foreground text-base mb-3">
                  {loja.nome}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-primary-foreground/80">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>{loja.endereco}</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Phone className="w-4 h-4 shrink-0" />
                    <a href={`tel:+55${loja.telefone.replace(/\D/g, "")}`} className="hover:text-primary-foreground transition-colors">
                      {loja.telefone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Mail className="w-4 h-4 shrink-0" />
                    <a href={`mailto:${loja.email}`} className="hover:text-primary-foreground transition-colors">
                      {loja.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground/80">
                    <Clock className="w-4 h-4 shrink-0" />
                    <span>{loja.horario}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-xs mb-6 uppercase tracking-wider">Garantias Nauber</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: "Garantia", value: "1 Ano" },
                { icon: Headphones, label: "Suporte", value: "Especializado" },
                { icon: Truck, label: "Entrega", value: "Todo Brasil" },
                { icon: CreditCard, label: "Pagamento", value: "Facilitado" }
              ].map((item, index) => (
                <div key={index} className="text-center p-3 rounded-xl bg-primary-foreground/5 backdrop-blur-sm">
                  <item.icon className="w-6 h-6 text-primary-foreground/80 mx-auto mb-2" />
                  <p className="font-display text-lg font-bold text-primary-foreground">{item.value}</p>
                  <p className="text-primary-foreground/60 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
