import Container from "@/components/layout/Container";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import StarterKitPreview from "@/components/StarterKitPreview";
import AppPreview from "@/components/AppPreview";
import ArticlesPreview from "@/components/ArticlesPreview";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <Container variant="narrow">
      <Hero />
      <WhySection />
      <StarterKitPreview />
      <AppPreview />
      <ArticlesPreview />
      <FinalCTA />
    </Container>
  );
}
