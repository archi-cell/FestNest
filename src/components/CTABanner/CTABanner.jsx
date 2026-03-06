import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="cta-section">
      <div className="section-tag cta-tag">Begin Your Journey</div>
      <h2 className="section-title">Ready to Create<br />Something <em>Extraordinary?</em></h2>
      <p className="section-sub cta-sub">
        Join over 2 million guests who trust FestNest for their most important moments.
      </p>
      <div className="cta-actions">
        <button className="btn-primary">Book a Hotel</button>
        <button className="btn-ghost">Plan an Event</button>
      </div>
    </section>
  );
}