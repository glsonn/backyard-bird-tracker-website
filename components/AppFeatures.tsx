export default function AppFeatures() {
  const features = [
    {
      title: "Record Sightings",
      description:
        "Quickly save the birds you see, along with the date, location, and any notes you want to remember.",
    },
    {
      title: "Build Your Bird Journal",
      description:
        "Create a personal history of your backyard visitors that grows with every observation.",
    },
    {
      title: "Remember Familiar Visitors",
      description:
        "Look back at past sightings to see when favorite birds returned and how often they visited.",
    },
    {
      title: "Notice Patterns Over Time",
      description:
        "Watch your backyard change through the seasons as your journal reveals familiar rhythms and new surprises.",
    },
  ];

  return (
    <section id="features">
      <div className="app-inner">
        <h2 className="feature-title">What You Can Do</h2>

        <p className="app-text">
          Backyard Bird Tracker stays focused on the simple joy of noticing
          birds. Each feature is designed to help you build a richer picture of
          the wildlife just outside your door.
        </p>

        <div className="included-grid">
          {features.map((feature) => (
            <div key={feature.title} className="card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
