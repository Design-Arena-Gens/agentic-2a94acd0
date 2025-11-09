import { AIAgents } from "@/components/AIAgents";
import { CallToAction } from "@/components/CallToAction";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Integrations } from "@/components/Integrations";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { ProductUpdates } from "@/components/ProductUpdates";
import { Testimonials } from "@/components/Testimonials";
import { WorkflowRail } from "@/components/WorkflowRail";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-white/10 via-transparent to-transparent opacity-70" />
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-12 px-4 pt-10 sm:px-6 md:px-10">
        <Navbar />
      </div>
      <main className="relative mt-10">
        <Hero />
        <FeatureShowcase />
        <WorkflowRail />
        <AIAgents />
        <Integrations />
        <Testimonials />
        <ProductUpdates />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
