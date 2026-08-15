import Container from "@/components/layout/Container";
import NewsletterSignup from "@/src/components/newsletter/NewsletterSignup";

export default function NewsletterPage() {
  return (
    <main className="newsletter-page">
      <Container variant="narrow">
        <section className="newsletter-header">
          <div className="hero-inner">
            <p className="article-tag">NEWSLETTER</p>
            <h1 className="hero-title">The Backyard Bird Tracker Newsletter</h1>

            <p className="newsletter-tagline">
              One gentle email each Friday to help you notice, record, and enjoy
              the birds around your home.
            </p>
          </div>
        </section>

        <section className="newsletter-intro">
          <p>
            The Backyard Bird Tracker Newsletter isn&apos;t about rare birds,
            birding competitions, or breaking news.
          </p>

          <p>
            It&apos;s a quiet weekly conversation for people who enjoy the birds
            that visit their own backyards.
          </p>

          <p>
            Whether you&apos;ve been feeding birds for decades or just noticed
            your first cardinal, you&apos;re welcome here.
          </p>
        </section>

        <section className="newsletter-preview">
          <h2>A glimpse inside</h2>

          <blockquote>
            <p>
              I happened to glance out there once on Monday morning and saw a
              small flock of black birds come in for a landing. I didn&apos;t
              get a good look though because something scared them up into our
              30-year-old maple. I figured, “Must be a bunch of Grackles or
              maybe Red-winged Blackbirds.”
            </p>

            <p>
              A little later, they returned and stayed longer. I could see now
              that they weren&apos;t red-wings, and they were too small for
              Grackles. I had to get my monocular to see what they really were.
            </p>
          </blockquote>
        </section>

        <section className="newsletter-contents">
          <h2>Every Friday you&apos;ll receive</h2>

          <ul>
            <li>A seasonal observation from the backyard</li>
            <li>One thing to watch for during the coming week</li>
            <li>A short Backyard Moment</li>
            <li>A simple journal prompt</li>
            <li>Occasional articles, app updates, or free resources</li>
          </ul>
        </section>

        <section className="newsletter-invitation">
          <h2>Come along each Friday.</h2>

          <p>
            If you&apos;d enjoy one thoughtful email each week about the birds around
            your home, we&apos;d love to have you join us.
          </p>
        </section>

        <section className="newsletter-signup">
          <NewsletterSignup />
        </section>
      </Container>
    </main>
  );
}
