import Container from "@/components/layout/Container";

export default function StarterKitPreview() {
  return (
    <section className="starter-kit">
      <Container variant="narrow">
        <div className="starter-inner">
          <h2 className="feature-title">The Backyard Bird Starter Kit</h2>

          <p className="starter-text">
            A simple, printable guide to help you recognize and record the birds
            that visit your space—without needing to be an expert.
          </p>

          <ul className="starter-list">
            <li>Common backyard birds in the Midwest</li>
            <li>Birds you’re most likely to see—and how to tell them apart</li>
            <li>Seasonal arrival guide</li>
            <li>Feeder-friendly species list</li>
            <li>Simple tracking sheet</li>
          </ul>

          <div className="starter-actions">
            <a href="/starter-kit" className="button primary">
              Get the Starter Kit
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
