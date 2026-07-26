"use client";

import { useState } from "react";
import Container from "./Container";
import Link from "next/link";

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
            <Link href="/">Home</Link>
            <Link href="/starter-kit">Starter Kit</Link>
            <Link href="/app">App</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/newsletter">Newsletter</Link>
            <Link href="/about">About</Link>
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
