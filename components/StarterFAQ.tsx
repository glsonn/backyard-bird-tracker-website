export default function StarterFAQ() {
  const faqs = [
    {
      question: "Who is the Starter Kit for?",
      answer:
        "It's designed for beginners, families, gardeners, retirees, and anyone who enjoys watching the birds around their home.",
    },
    {
      question: "Do I need birdwatching experience?",
      answer:
        "Not at all. The Starter Kit is meant to help you begin noticing birds with confidence, even if you can't identify a single species today.",
    },
    {
      question: "Is the Starter Kit printable?",
      answer:
        "Yes. The pages are designed to print at home so you can write, sketch, and keep your observations in a journal you'll enjoy returning to.",
    },
    {
      question: "Will there be a digital app too?",
      answer:
        "Yes. The Backyard Bird Tracker app is being built alongside the Starter Kit, giving you the choice of keeping your journal on paper, digitally, or both.",
    },
  ];

  return (
    <section>
      <div className="faq-section">
        <h2 className="feature-title">Frequently Asked Questions</h2>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.question} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
