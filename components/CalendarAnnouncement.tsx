import Link from "next/link";

export default function CalendarAnnouncement() {
  return (
    <section className="calendar-announcement">
      <p className="calendar-announcement-label">A FREE GIFT FOR 2027</p>

      <h2>The 2027 Backyard Birding Calendar</h2>

      <p>
        Enjoy a year of backyard birds, with 12 photographs celebrating the
        birds that make our everyday lives a little more interesting.
      </p>

      <Link href="/2027-bird-calendar" className="button primary">
        Get Your Free Calendar
      </Link>
    </section>
  );
}
