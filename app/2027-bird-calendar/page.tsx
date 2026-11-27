import Image from "next/image";

export default function BirdCalendarPage() {
  return (
    <main className="about-page">
      <div className="container container--narrow">
        <div className="hero-inner">
          <p>FREE DOWNLOAD</p>
        </div>

        <section className="about-section calendar-section">
          <h1 className="hero-title">The 2027 Backyard Birding Calendar</h1>

          <p>
            A little gift from Backyard Bird Tracker to help you enjoy the birds
            throughout the year.
          </p>

          <p>
            Each month features a photograph of a bird, celebrating some of the
            familiar and not-so-familiar visitors that make backyard
            birdwatching so enjoyable.
          </p>

          <div className="calendar-preview">
            <Image
              src="/images/2027-bird-calendar-preview.jpg"
              alt="Preview of the 2027 Backyard Birding Calendar"
              width={800}
              height={600}
              priority
            />
          </div>

          <div className="calendar-download">
            <a
              href="/downloads/2027-backyard-bird-calendar.pdf"
              className="button primary"
              download
            >
              Download the Free 2027 Calendar (PDF)
            </a>

            <p>
              It&apos;s completely free. Download the PDF and print it at home
              or through your preferred print shop.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>A Year of Backyard Birds</h2>

          <p>
            Whether you&apos;re already an enthusiastic backyard birder or just
            beginning to notice the birds around you, I hope this calendar
            brings a little enjoyment to each month of 2027.
          </p>

          <p>Thanks for being part of Backyard Bird Tracker!</p>
        </section>
      </div>
    </main>
  );
}
