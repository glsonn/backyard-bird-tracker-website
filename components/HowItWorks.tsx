export default function HowItWorks() {
  const steps = [
    {
      title: "Notice a Bird",
      description:
        "Whether it's a familiar visitor or a first-time guest, every sighting begins with simply paying attention.",
    },
    {
      title: "Record What You Saw",
      description:
        "Save the species, date, and any notes you want to remember. It only takes a few moments.",
    },
    {
      title: "Look Back and Remember",
      description:
        "As your journal grows, you'll begin to recognize seasonal visitors, favorite birds, and the story of your own backyard.",
    },
  ];

  return (
    <section id="how-it-works">
      <div className="app-inner">
        <h2 className="feature-title">How It Works</h2>

        <p className="app-text">
          Backyard Bird Tracker stays intentionally simple. The goal isn't to
          collect more data—it's to help you enjoy the birds you notice every
          day.
        </p>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.title} className="card">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
