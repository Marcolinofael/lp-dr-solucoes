import HeroSection from "@/components/hero-section";
import { Services } from "@/components/services";
import { Monitoring } from "@/components/monitoring";
import { Environments } from "@/components/environments";
import { Process } from "@/components/process";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SurveillanceBackground } from "@/components/ui/surveillance-background";

export default function Home() {
  return (
    <>
      <SurveillanceBackground className="fixed inset-0 -z-10" />
      <HeroSection />
      <div className="relative z-10">
        <Services />
        <Monitoring />
        <Environments />
        <Process />
        <Contact />
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  );
}
