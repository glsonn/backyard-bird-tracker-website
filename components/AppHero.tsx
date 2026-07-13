export default function AppHero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="article-tag">BACKYARD BIRD TRACKER APP</p>

        <h1 className="hero-title">Keep track of the birds you discover.</h1>

        <p className="hero-subtitle">
          A simple bird journal to record sightings, remember backyard visitors,
          and notice patterns over time.
        </p>

        <div className="hero-actions">
          <a
            href="https://app.backyardbirdtracker.com"
            className="button primary"
          >
            Try the App
          </a>

          <a href="#how-it-works" className="button secondary">
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
