import Container from "./Container";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container variant="standard">
        <div className="footer-inner footer-centered">
          <div className="footer-mission">
            <p className="mission-title">Backyard Bird Tracker</p>
            <p className="mission-text">See who visits today.</p>
          </div>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/starter-kit">Starter Kit</a>
            <a href="/app">App</a>
            <a href="/articles">Articles</a>
            <a href="/about">About</a>
          </div>

          <div className="footer-brand">
            <p>by Midwest Birds</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
