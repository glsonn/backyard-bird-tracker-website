import Image from "next/image";

const screenshots = [
  {
    src: "/images/app/add-sighting.png",
    alt: "Add a new bird sighting",
    title: "Record a New Sighting",
  },
  {
    src: "/images/app/yard-stats-2.png",
    alt: "Yard statistics",
    title: "See Your Backyard at a Glance",
  },
  {
    src: "/images/app/species-seen.png",
    alt: "Species you've recorded",
    title: "Build Your Species List",
  },
  {
    src: "/images/app/seasonal-tracking.png",
    alt: "Seasonal tracking",
    title: "Follow the Seasons",
  },
  {
    src: "/images/app/recent-sightings.png",
    alt: "Recent sightings",
    title: "Look Back at Recent Visits",
  },
  {
    src: "/images/app/edit-sighting.png",
    alt: "Editing notes for a bird sighting in the Backyard Bird Tracker app",
    title: "Remember the Details",
  },
];

export default function AppGallery() {
  return (
    <section>
      <div className="gallery-section">
        <h2 className="feature-title">Take a Look Inside the App</h2>

        <p className="gallery-text">
          Backyard Bird Tracker is designed to stay simple and enjoyable. Record
          your sightings in seconds, then watch your personal bird journal grow
          over time.
        </p>

        <div className="gallery-grid">
          {screenshots.map((shot) => (
            <figure key={shot.src} className="gallery-item">
              <Image src={shot.src} alt={shot.alt} width={430} height={932} />

              <figcaption>{shot.title}</figcaption>
            </figure>
          ))}
        </div>

        <p className="gallery-text">
          Every sighting adds another page to your backyard story, making it
          easier to remember favorite visitors, seasonal arrivals, and the
          little moments that make birdwatching rewarding.
        </p>

        <div className="starter-actions">
          <a
            href="https://app.backyardbirdtracker.com"
            className="button primary"
          >
            Open Backyard Bird Tracker
          </a>
        </div>
      </div>
    </section>
  );
}
