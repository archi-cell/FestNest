import { useNavigate } from "react-router-dom";
import "../styles/hero.css";

const features = [
  {
    icon: "✦",
    title: "Curated Properties",
    desc: "Every hotel and venue is personally vetted for quality, service, and atmosphere before listing.",
  },
  {
    icon: "⚡",
    title: "Instant Booking",
    desc: "Confirm your stay or event in seconds with real-time availability and instant confirmation.",
  },
  {
    icon: "🛡",
    title: "Secure Payments",
    desc: "Bank-grade encryption protects every transaction, with flexible cancellation policies.",
  },
  {
    icon: "🎩",
    title: "Concierge Support",
    desc: "Dedicated event specialists available 24/7 to help plan and coordinate your occasion.",
  },
];

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero-section">
        {/* Teal glow orbs */}
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        {/* Live badge */}
        <div className="hero-kicker">
          <span className="hero-kicker-dot" />
          <span>Hotels · Events · Venues</span>
        </div>

        <h1>
          Book the place<br />
          that feels <span>right.</span>
        </h1>

        <p className="hero-sub">
          Discover amazing events and book the best hotels
          for your stay or event hosting — verified and instant.
        </p>

        {/* Search bar */}
        <div className="hero-search">
          <div className="hero-search-field">
            <span className="hero-search-label">Where</span>
            <span className="hero-search-val">City or venue</span>
          </div>
          <div className="hero-search-divider" />
          <div className="hero-search-field">
            <span className="hero-search-label">Type</span>
            <span className="hero-search-val">Hotel / Event / Venue</span>
          </div>
          <div className="hero-search-divider" />
          <div className="hero-search-field">
            <span className="hero-search-label">Guests</span>
            <span className="hero-search-val">Add guests</span>
          </div>
          <button
            className="hero-search-btn"
            onClick={() => navigate("/events")}
          >
            Search →
          </button>
        </div>

        {/* CTA buttons */}
        <div className="hero-buttons">
          <button
            onClick={() => navigate("/events")}
            className="hero-btn hero-btn-primary"
          >
            Explore Events
          </button>
          <button
            onClick={() => navigate("/hotels/stay")}
            className="hero-btn hero-btn-ghost"
          >
            Hotels for Stay
          </button>
          <button
            onClick={() => navigate("/hotels/events")}
            className="hero-btn hero-btn-ghost"
          >
            Hotels for Events
          </button>
        </div>

        {/* Stats strip */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num">8K+</span>
            <span className="hero-stat-label">Hotels</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">3K+</span>
            <span className="hero-stat-label">Events</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">1K+</span>
            <span className="hero-stat-label">Venues</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num">4.9★</span>
            <span className="hero-stat-label">Avg Rating</span>
          </div>
        </div>
      </section>

      {/* ── Why FestNest ── */}
      <section className="features-section">
        <div className="features-header">
          <span className="features-eyebrow">Why FestNest</span>
          <h2 className="features-heading">
            Every detail,{" "}
            <em>perfectly</em> considered
          </h2>
          <p className="features-sub">
            Built for people who care about the experience, not just the booking.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Upcoming Events ── */}
      <section className="events-section">
        <div className="events-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>Upcoming Events</span>
          </div>
          <h2 className="events-title">
            Moments worth <em>attending</em>
          </h2>
          <p className="events-subtitle">
            From intimate soirées to grand galas — find the events that move you.
          </p>
        </div>

        <div className="events-grid">
          <div className="event-card">
            <div className="event-date">
              <span className="event-day">31</span>
              <span className="event-month">December · 2026</span>
            </div>
            <h3>New Year Party</h3>
            <p className="event-location">📍 Bengaluru</p>
            <span className="event-tag">Gala Party</span>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span className="event-day">25</span>
              <span className="event-month">December · 2026</span>
            </div>
            <h3>Christmas Gala Dinner</h3>
            <p className="event-location">📍 Mumbai</p>
            <span className="event-tag">Feast & Fun</span>
          </div>

          <div className="event-card">
            <div className="event-date">
              <span className="event-day">19</span>
              <span className="event-month">May · 2026</span>
            </div>
            <h3>Cultural Music Night</h3>
            <p className="event-location">📍 Hyderabad</p>
            <span className="event-tag">Cultural Experience</span>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials-section">
        <div className="testimonials-header">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>Guest Stories</span>
          </div>
          <h2 className="testimonials-title">
            What our guests <em>remember</em>
          </h2>
        </div>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "FestNest turned our wedding into a fairy tale. Every detail was
              flawless — from the venue to the last petal on the table."
            </p>
            <div className="testimonial-user">
              <div className="testimonial-avatar">P</div>
              <div>
                <h4>Priya Malhotra</h4>
                <span>Wedding at The Ivory Terrace</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "The corporate summit we booked through FestNest was seamless.
              400 delegates, zero hiccups, and an absolutely stunning venue."
            </p>
            <div className="testimonial-user">
              <div className="testimonial-avatar">R</div>
              <div>
                <h4>Rahul Singhania</h4>
                <span>Summit at Goldenleaf Convention</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-text">
              "I book all my business travel through FestNest now. The hotel
              quality, pricing, and support are genuinely unmatched anywhere."
            </p>
            <div className="testimonial-user">
              <div className="testimonial-avatar">A</div>
              <div>
                <h4>Ananya Iyer</h4>
                <span>Regular Guest · Amber Hills</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
