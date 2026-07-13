import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="hero">
      <Container variant="narrow">
        <div className="hero-inner">
          <h1 className="hero-title">See who visits today.</h1>

          <p className="hero-subtitle">
            Backyard Bird Tracker is a simple way to notice, record, and enjoy
            the birds that share your everyday spaces.
          </p>

          <div className="hero-actions">
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
