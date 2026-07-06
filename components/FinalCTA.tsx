import Container from "@/components/layout/Container";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <Container variant="narrow">
        <div className="cta-inner">
          <h2 className="cta-title">Start noticing what's already there.</h2>

          <p className="cta-text">
            Your backyard is already full of life. The only thing missing is
            attention. The Starter Kit is a simple way to begin paying it.
          </p>

          <div className="cta-actions">
            <a href="/starter-kit" className="button primary">
              Get the Starter Kit
            </a>

            <a href="/app" className="button secondary">
              Explore the App
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
