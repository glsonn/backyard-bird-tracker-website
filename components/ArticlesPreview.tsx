import Container from "@/components/layout/Container";

export default function ArticlesPreview() {
  return (
    <section className="articles">
      <Container variant="narrow">
        <div className="articles-inner">
          <h2 className="feature-title">From the field journal</h2>

          <p className="articles-text">
            Short notes, seasonal observations, and simple guides for noticing
            birds in everyday spaces.
          </p>

          <div className="articles-grid">
            <article className="article-card card">
              <p className="article-tag">Seasonal note</p>
              <h3>Why winter feeders suddenly get busy</h3>
              <p>
                Cold weather reshapes backyard activity in predictable ways.
              </p>
            </article>

            <article className="article-card card">
              <p className="article-tag">Observation</p>
              <h3>The quiet return of spring birds</h3>
              <p>What to look for when migration begins again.</p>
            </article>

            <article className="article-card card">
              <p className="article-tag">Guide</p>
              <h3>Start identifying birds by behavior, not color</h3>
              <p>A simpler way to recognize common backyard species.</p>
            </article>
          </div>

          <div className="articles-actions">
            <a href="/articles" className="button secondary">
              Read more articles
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
