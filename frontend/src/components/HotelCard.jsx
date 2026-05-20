import "../styles/HotelCard.css";

const HotelCard = ({ hotel }) => {
  const isStay = hotel.hotel_type === "STAY";

  return (
    <div className="hotel-card">

      <div className="hotel-card-img-wrap">
        <img
          src={hotel.image || "/placeholder.jpg"}
          alt={hotel.name}
        />
        <span className="hotel-card-tag">
          {isStay ? "🏨 Stay" : "🎉 Event Host"}
        </span>
      </div>

      <div className="hotel-card-body">

        <div className="hotel-card-type">
          {isStay ? "Stay Hotel" : "Event Hotel"}
        </div>

        <h3 className="hotel-card-name">{hotel.name}</h3>

        <p className="hotel-card-location">📍 {hotel.location}</p>

        {hotel.description && (
          <p className="hotel-card-desc">{hotel.description}</p>
        )}

        {/* Stay Hotel extras */}
        {isStay && hotel.room_details && (
          <div className="hotel-card-detail">
            <span className="hotel-card-detail-label">Rooms</span>
            <span className="hotel-card-detail-val">{hotel.room_details}</span>
          </div>
        )}

        {isStay && hotel.travel_services && (
          <div className="hotel-card-detail">
            <span className="hotel-card-detail-label">Travel Services</span>
            <span className="hotel-card-detail-val">{hotel.travel_services}</span>
          </div>
        )}

        {/* Event Hotel extras */}
        {!isStay && hotel.banquet_hall_details && (
          <div className="hotel-card-detail">
            <span className="hotel-card-detail-label">Banquet Hall</span>
            <span className="hotel-card-detail-val">{hotel.banquet_hall_details}</span>
          </div>
        )}

        {!isStay && hotel.catering_services && (
          <div className="hotel-card-detail">
            <span className="hotel-card-detail-label">Catering</span>
            <span className="hotel-card-detail-val">{hotel.catering_services}</span>
          </div>
        )}

        <div className="hotel-card-footer">
          <button className="hotel-card-btn">View Details →</button>
        </div>

      </div>
    </div>
  );
};

export default HotelCard;
