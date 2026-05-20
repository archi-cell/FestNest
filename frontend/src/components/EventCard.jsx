import "../styles/EventCard.css";

const EventCard = ({ event }) => {
  return (
    <div className="event-card">

      <div className="event-card-img-wrap">
        <img src={event.image} alt={event.name} />
        <span className="event-card-tag">Event</span>
      </div>

      <div className="event-card-body">
        <div className="event-card-meta">
          <span className="event-card-date">📅 {event.date}</span>
          <span className="event-card-time">🕐 {event.time}</span>
        </div>

        <h3 className="event-card-name">{event.name}</h3>

        <p className="event-card-location">📍 {event.location}</p>

        <p className="event-card-desc">{event.description}</p>

        <div className="event-card-footer">
          <button className="event-card-btn">View Details →</button>
        </div>
      </div>

    </div>
  );
};

export default EventCard;
