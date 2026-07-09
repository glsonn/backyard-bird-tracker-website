export default function WhoItsFor() {
  const audiences = [
    "You're just beginning to notice the birds in your neighborhood.",
    "You'd like a simple activity to enjoy alone or with family.",
    "You enjoy spending time outdoors and want to observe more closely.",
    "You prefer writing and sketching on paper before using an app.",
  ];

  return (
    <section>
      <div className="why-inner">
        <h2 className="feature-title">Who It's For</h2>

        <p className="why-text">
          The Starter Kit was designed for curious beginners and casual
          birdwatchers. If any of these sound familiar, you're in the right
          place:
        </p>

        <ul className="starter-list">
          {audiences.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="why-text">
          There are no checklists to complete and no expertise required. Just
          start where you are, enjoy the birds that visit, and let your
          curiosity grow naturally.
        </p>
      </div>
    </section>
  );
}
