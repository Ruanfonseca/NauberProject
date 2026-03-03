import dx3Outdoor from "@/assets/dx3-outdoor.jpg";
import dx3Front from "@/assets/dx3-front.jpg";
import dx3Angle from "@/assets/dx3-angle.jpg";
import dx3Action from "@/assets/dx3-action.jpg";
import nb100Operator from "@/assets/nb100-operator.jpg";
import nb100Side from "@/assets/nb100-side.jpg";
import nb100Front from "@/assets/nb100-front.jpg";
import dx3Outdoor2 from "@/assets/dx3-outdoor2.jpg";

const Gallery = () => {
  const images = [
    { src: dx3Outdoor, alt: "DX-3 ao ar livre", caption: "DX-3 em campo" },
    { src: dx3Front, alt: "DX-3 vista frontal", caption: "DX-3 Frontal" },
    { src: dx3Angle, alt: "DX-3 vista angular", caption: "DX-3 Angular" },
    { src: dx3Action, alt: "DX-3 em uso profissional", caption: "DX-3 em Ação" },
    { src: nb100Operator, alt: "Operador com NB-100", caption: "NB-100 Operação" },
    { src: nb100Side, alt: "NB-100 vista lateral", caption: "NB-100 Lateral" },
    { src: nb100Front, alt: "NB-100 vista frontal", caption: "NB-100 Frontal" },
    { src: dx3Outdoor2, alt: "DX-3 ao ar livre", caption: "DX-3 Outdoor" },
  ];

  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            GALERIA
          </span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Conheça Nossos <span className="text-gradient">Equipamentos</span>
          </h2>
          <p className="text-base text-muted-foreground">
            Detalhes, peças e resultados das máquinas Nauber em ação.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-medium hover:shadow-strong transition-all duration-300">
              <img src={image.src} alt={image.alt} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-medium text-sm">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
