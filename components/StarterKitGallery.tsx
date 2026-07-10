import Image from "next/image";

const pages = [
  {
    src: "/images/starter-kit/cover.png",
    alt: "Starter Kit cover",
    title: "Beautifully Illustrated Cover",
  },
  {
    src: "/images/starter-kit/my-backyard.png",
    alt: "My Backyard page",
    title: "Getting to Know Your Backyard",
  },
  {
    src: "/images/starter-kit/monthly-log.png",
    alt: "Monthly Backyard Log page",
    title: "Monthly Observation Log",
  },
  {
    src: "/images/starter-kit/favorites.png",
    alt: "Favorite Backyard Birds page",
    title: "Favorite Birds Journal",
  },
];

export default function StarterKitGallery() {
  return (
    <section>
      <div className="gallery-section">
        <h2 className="feature-title">Take a Look Inside</h2>

        <p className="gallery-text">
          Explore a few pages from the printable journal you'll receive. Every
          page is designed to help you slow down, notice more, and enjoy the
          birds that visit your backyard throughout the year.
        </p>

        <div className="gallery-grid">
          {pages.map((page) => (
            <figure key={page.src} className="gallery-item">
              <Image src={page.src} alt={page.alt} width={1102} height={1428} />

              <figcaption>{page.title}</figcaption>
            </figure>
          ))}
        </div>

        <p className="gallery-text">
          The complete Starter Kit also includes a Midwest Backyard Bird
          Checklist, First Sighting pages, seasonal arrival trackers, note
          pages, and more.
        </p>

        <div className="starter-actions">
          <a
            href="/downloads/backyard-bird-tracker-starter-kit.pdf"
            className="button primary"
            download
          >
            Download the Starter Kit
          </a>
        </div>
      </div>
    </section>
  );
}
