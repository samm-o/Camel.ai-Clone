import Image from "next/image";
import Hero from "@/components/Hero";
import LogoSection from "@/components/LogoSection";
import DemoChat from "@/components/DemoChat";
import DemoDash from "@/components/DemoDash";
import ApiSignup from "@/components/ApiSignup";
import FaqSection from "@/components/FaqSection";
import MiniFooter from "@/components/MiniFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoSection />
      <DemoChat />
      <DemoDash />
      <ApiSignup />
      <FaqSection />
      <MiniFooter />
    </main>
  );
}
