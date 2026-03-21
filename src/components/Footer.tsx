import { ArrowUpRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import LogoOficial from "@/assets/LogoBranca.png";

const lojas = [
  // {
  //   nome: "Loja Campo Grande - Monteiro",
  //   endereco: "Estr. do Monteiro, 967 - Campo Grande, RJ, 23045-831",
  //   email: "contato@casadoviana.com",
  // },
  // {
  //   nome: "Loja Estrada do Pré",
  //   endereco: "Rua Mora, 674 - Campo Grande, RJ, 23052-510",
  //   email: "mkcasadoviana@hotmail.com",
  // },
  // {
  //   nome: "Loja Realengo",
  //   endereco: "R. Gen. Azeredo, 849 - Realengo, RJ, 21765-000",
  //   email: "contato@casadoviana.com",
  // },
  {
    nome: "Loja Recreio dos Bandeirantes",
    endereco: "R. Gen. Landri Gonçalves, 305 - Recreio, RJ, 22795-410",
    email: "contato@casadoviana.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display font-bold text-xl text-background">
                <img src={LogoOficial} alt="Nauber Logo" className="w-24 h-6" />
              </span>
            </div>
            <p className="text-background/60 max-w-sm text-sm leading-relaxed mb-3">
              Máquinas de pintura profissional. Revendedora autorizada:
            </p>
            <a
              href="https://www.casadoviana.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors"
            >
              Casa do Viana ↗
            </a>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="font-display font-bold text-background mb-4 text-sm">
              Produtos
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "#dx5", label: "DX-5" },
                { href: "#nb100", label: "NB-100" },
                { href: "#beneficios", label: "Benefícios" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/60 hover:text-primary transition-colors flex items-center gap-1 group text-sm"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="font-display font-bold text-background mb-3 mt-6 text-sm">
              Contato Geral
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-background/60 text-sm">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <a
                  href="tel:+552132513756"
                  className="hover:text-primary transition-colors"
                >
                  (21) 3251-3756
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/60 text-sm">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <a
                  href="https://wa.me/5521966115638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  (21) 96611-5638
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/60 text-sm">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Seg–Sex 8h–18h | Sáb 8h–13h</span>
              </li>
            </ul>
          </div>

          {/* Lojas (2 colunas) */}
          <div className="md:col-span-2">
            <h4 className="font-display font-bold text-background mb-4 text-sm">
              Nossas Lojas
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {lojas.map((loja, i) => (
                <div key={i} className="space-y-1.5">
                  <p className="text-background font-semibold text-sm">
                    {loja.nome}
                  </p>
                  <p className="flex items-start gap-1.5 text-background/60 text-xs">
                    <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                    {loja.endereco}
                  </p>
                  <p className="flex items-center gap-1.5 text-background/60 text-xs">
                    <Mail className="w-3 h-3 shrink-0" />
                    <a
                      href={`mailto:${loja.email}`}
                      className="hover:text-primary transition-colors"
                    >
                      {loja.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-background/40 text-xs">
            © {new Date().getFullYear()} Casa do Viana — Revendedora Autorizada
            Nauber. Todos os direitos reservados.
          </p>
          <p className="text-background/40 text-xs">
            Zona Oeste do Rio de Janeiro
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
