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
import DX3Section from "@/components/DX3Section";
import NB100Section from "@/components/NB100Section";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nauber D-5X e NB-100 | Máquinas de Pintura Profissional</title>
        <meta
          name="description"
          content="Descubra as máquinas de pintura Nauber D-5X e NB-100. Pinte 3x mais rápido com acabamento perfeito. Ideal para pintores profissionais e construtoras."
        />
        <meta
          name="keywords"
          content="máquina de pintura, pintura airless, Nauber D-5X, Nauber NB-100, pintura profissional, equipamento de pintura"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <NB100Section />
          <MachinesSection />
          <DX3Section />

          <BenefitsSection />

          {/* <ComparisonTable /> */}
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
