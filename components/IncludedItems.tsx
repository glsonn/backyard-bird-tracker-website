export default function IncludedItems() {
  const items = [
    {
      title: "Bird Identification Guide",
      description:
        "Learn to recognize many of the most common backyard birds with simple illustrations and helpful notes.",
    },
    {
      title: "Observation Journal",
      description:
        "Record the birds you see, where you spotted them, and anything interesting you noticed.",
    },
    {
      title: "Favorite Birds Pages",
      description:
        "Keep a personal collection of the birds you enjoy seeing most, complete with room for sketches and notes.",
    },
    {
      title: "Tips for Getting Started",
      description:
        "Practical advice for attracting birds, observing respectfully, and making birdwatching part of your everyday routine.",
    },
  ];

  return (
    <section id="inside">
      <div className="app-inner">
        <h2 className="feature-title">What's Included</h2>

        <p className="app-text">
          Everything in the Starter Kit is designed to help you notice more,
          learn naturally, and enjoy spending time watching the birds around
          your home.
        </p>

        <div className="included-grid">
          {items.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
