import Container from "@/components/layout/Container";

export default function WhySection() {
  return (
    <section className="why">
      <Container variant="narrow">
        <div className="why-inner">
          <h2 className="why-title">A simple way to start noticing.</h2>

          <p className="why-text">
            Most of us share our spaces with more wildlife than we realize. This
            is a simple tool for paying attention—recording the birds that visit
            your yard, your balcony, or your window.
          </p>

          <p className="why-text">
            Nothing complicated. No pressure. Just a growing record of everyday
            moments you might otherwise miss.
          </p>
        </div>
      </Container>
    </section>
  );
}
