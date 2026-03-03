import { MapPin, Award, Handshake, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CasaTesteSection = () => {
  return (
    <section id="casa-teste" className="py-12 md:py-20 bg-primary/5 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm mb-4">
            <Handshake className="w-4 h-4" />
            REVENDEDORA OFICIAL
          </span>

          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 tracking-tight">
            <span className="text-primary">Casa do Viana</span> — Revendedora Oficial Nauber
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
            A <strong className="text-foreground">Casa do Viana</strong> é a <strong className="text-foreground">única revendedora autorizada</strong> dos produtos Nauber na{" "}
            <strong className="text-foreground">Zona Oeste do Rio de Janeiro</strong>. Com atendimento especializado, 
            oferecemos suporte completo desde a escolha do equipamento até o pós-venda.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-card rounded-xl border border-border p-5 text-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">Revenda Autorizada</h3>
              <p className="text-muted-foreground text-xs">Produtos originais Nauber com garantia de fábrica</p>
            </div>

            <div className="bg-card rounded-xl border border-border p-5 text-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">Única na Zona Oeste - RJ</h3>
              <p className="text-muted-foreground text-xs">Exclusividade em revenda Nauber na região</p>
            </div>

            <div className="bg-card rounded-xl border border-border p-5 text-center">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-1">Suporte Completo</h3>
              <p className="text-muted-foreground text-xs">Orientação técnica e assistência pós-venda</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="#orcamento">Fale com a Casa do Viana</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://www.casadoviana.com/" target="_blank" rel="noopener noreferrer">Visite Nosso Site</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasaTesteSection;
