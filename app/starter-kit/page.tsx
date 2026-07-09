import Container from "@/components/layout/Container";

import StarterHero from "@/components/StarterHero";
import WhatIsStarterKit from "@/components/WhatIsStarterKit";
import IncludedItems from "@/components/IncludedItems";
import WhoItsFor from "@/components/WhoItsFor";
import StarterKitGallery from "@/components/StarterKitGallery";
import StarterFAQ from "@/components/StarterFAQ";
import StarterCTA from "@/components/StarterCTA";

export default function StarterKitPage() {
  return (
    <>
      <Container variant="narrow">
        <StarterHero />
        <WhatIsStarterKit />
        <IncludedItems />
        <WhoItsFor />
      </Container>

      <Container variant="standard">
        <StarterKitGallery />
      </Container>

      <Container variant="narrow">
        <StarterFAQ />
        <StarterCTA />
      </Container>
    </>
  );
}
