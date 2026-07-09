"use client";

import { useState } from "react";
import Container from "./Container";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Container variant="standard">
        <div className="header-inner">
          <div className="logo">Backyard Bird Tracker</div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a href="/">Home</a>
            <a href="/starter-kit">Starter Kit</a>
            <a href="/app">App</a>
            <a href="/articles">Articles</a>
            <a href="/about">About</a>
          </nav>

          <div className="header-cta">
            <a href="/starter-kit" className="button primary">
              Get the Starter Kit
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
