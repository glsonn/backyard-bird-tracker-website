import Container from "@/components/layout/Container";

import AppHero from "@/components/AppHero";
import WhyAppExists from "@/components/WhyAppExists";
import AppFeatures from "@/components/AppFeatures";
import AppGallery from "@/components/AppGallery";
import HowItWorks from "@/components/HowItWorks";
import PersonalJournal from "@/components/PersonalJournal";
import AppCTA from "@/components/AppCTA";

export default function AppPage() {
  return (
    <>
      <Container variant="narrow">
        <AppHero />
        <WhyAppExists />
        <AppFeatures />
      </Container>

      <Container variant="standard">
        <AppGallery />
      </Container>

      <Container variant="narrow">
        <HowItWorks />
        <PersonalJournal />
        <AppCTA />
      </Container>
    </>
  );
}
