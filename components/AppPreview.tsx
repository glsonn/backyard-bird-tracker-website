import Container from "@/components/layout/Container";

export default function AppPreview() {
  return (
    <section className="app-preview">
      <Container variant="narrow">
        <div className="app-inner">
          <h2 className="feature-title">A simple way to track what you see.</h2>

          <p className="app-text">
            The app helps you record the birds that visit your space over
            time—so you can notice patterns, seasons, and returning visitors.
          </p>

          <div className="app-highlights">
            <div className="app-card card">
              <h3>Daily tracking</h3>
              <p>Log what you see in just a few seconds.</p>
            </div>

            <div className="app-card card">
              <h3>Visitor history</h3>
              <p>See which birds return and when.</p>
            </div>

            <div className="app-card card">
              <h3>Seasonal rhythm</h3>
              <p>Understand how your backyard changes over time.</p>
            </div>
          </div>

          <div className="app-actions">
            <a href="/app" className="button primary">
              Explore the App
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
