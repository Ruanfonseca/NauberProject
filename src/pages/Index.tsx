import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MachinesSection from "@/components/MachinesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ComparisonTable from "@/components/ComparisonTable";
import TargetAudience from "@/components/TargetAudience";
import Gallery from "@/components/Gallery";
import CasaTesteSection from "@/components/CasaTesteSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nauber DX-3 e NB-100 | Máquinas de Pintura Profissional</title>
        <meta 
          name="description" 
          content="Descubra as máquinas de pintura Nauber DX-3 e NB-100. Pinte 3x mais rápido com acabamento perfeito. Ideal para pintores profissionais e construtoras." 
        />
        <meta name="keywords" content="máquina de pintura, pintura airless, Nauber DX-3, Nauber NB-100, pintura profissional, equipamento de pintura" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <MachinesSection />
          <BenefitsSection />
          <ComparisonTable />
          <TargetAudience />
          <Gallery />
          <CasaTesteSection />
          <FinalCTA />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
