import Container from "./Container";

export default function Header() {
  return (
    <header className="site-header">
      <Container variant="standard">
        <div className="header-inner">
          <div className="logo">Backyard Bird Tracker</div>

          <nav className="nav">
            <a href="/">Home</a>
            <a href="/starter-kit">Starter Kit</a>
            <a href="/app">App</a>
            <a href="/articles">Articles</a>
            <a href="/about">About</a>
          </nav>

          <div className="cta">
            <a href="/starter-kit" className="button primary cta">
              Get Starter Kit
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
