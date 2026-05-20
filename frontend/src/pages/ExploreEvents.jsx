import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/ExploreEvents.css";

function ExploreEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await API.get("/events");
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="explore-events-page">

      {/* Page header */}
      <div className="explore-header">
        <div className="section-eyebrow">
          <span className="eyebrow-dot" />
          <span>Curated Experiences</span>
        </div>
        <h2>Explore Events</h2>
        <p className="explore-sub">
          From intimate soirées to grand galas — find the events that move you.
        </p>
      </div>

      {/* Loading state */}
      {loading && (
        <div className="explore-loading">
          <div className="loading-spinner" />
          <p>Finding events for you...</p>
        </div>
      )}

      {/* Empty state */}
      {!loading && events.length === 0 && (
        <div className="explore-empty">
          <div className="explore-empty-icon">🎉</div>
          <h3>No events found</h3>
          <p>Check back soon — new events are added regularly.</p>
        </div>
      )}

      {/* Events grid */}
      {!loading && events.length > 0 && (
        <div className="events-grid">
          {events.map((event, i) => (
            <div
              key={event.id}
              className="event-card"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {/* Image */}
              <div className="event-card-img-wrap">
                {event.image ? (
                  <img
                    src={`http://localhost:5000/uploads/${event.image}`}
                    alt={event.title}
                  />
                ) : (
                  <div className="event-card-img-placeholder">🎉</div>
                )}
                <span className="event-card-tag">Event</span>
              </div>

              {/* Body */}
              <div className="event-card-body">

                <div className="event-card-meta">
                  <span className="event-card-date">📅 {event.event_date}</span>
                  <span className="event-card-time">🕐 {event.event_time}</span>
                </div>

                <h3 className="event-card-name">{event.title}</h3>

                <p className="event-card-location">📍 {event.location}</p>

                {event.description && (
                  <p className="event-card-desc">{event.description}</p>
                )}

                <div className="event-card-chips">
                  <div className="event-chip">
                    <span className="event-chip-label">Price</span>
                    <span className="event-chip-val">₹{event.ticket_price}</span>
                  </div>
                  <div className="event-chip">
                    <span className="event-chip-label">Seats</span>
                    <span className="event-chip-val">{event.total_seats}</span>
                  </div>
                </div>

                <div className="event-card-footer">
                  <button className="book-btn">Book Ticket →</button>
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default ExploreEvents;
