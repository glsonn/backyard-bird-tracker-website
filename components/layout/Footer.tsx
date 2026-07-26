import Container from "./Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container variant="standard">
        <div className="footer-inner footer-centered">
          <div className="footer-mission">
            <p className="mission-title">Backyard Bird Tracker</p>
            <p className="mission-text">See who visits today.</p>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/starter-kit">Starter Kit</Link>
            <Link href="/app">App</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/newsletter">Newsletter</Link>
            <Link href="/about">About</Link>
          </nav>

          <div className="footer-brand">
            <p>by Midwest Birds</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
