import { useState } from "react";
import axios from "axios";
import "../styles/CreateEvent.css";

function CreateEvent() {
  const [title, setTitle] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [location, setLocation] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [description, setDescription] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [totalSeats, setTotalSeats] = useState("");
  const [image, setImage] = useState(null);
  const [generating, setGenerating] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const generateDescription = async () => {
    if (!title) {
      alert("Please enter event title first");
      return;
    }
    try {
      setGenerating(true);
      const res = await axios.post(
        "http://localhost:5000/api/ai/generate-description",
        { title }
      );
      setDescription(res.data.description);
    } catch (error) {
      console.error(error);
      alert("AI description generation failed");
    } finally {
      setGenerating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const token = localStorage.getItem("token");
      if (!token) { alert("You must login first"); return; }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("hotel_name", hotelName);
      formData.append("location", location);
      formData.append("event_date", eventDate);
      formData.append("event_time", eventTime);
      formData.append("description", description);
      formData.append("ticket_price", ticketPrice);
      formData.append("total_seats", totalSeats);
      formData.append("image", image);

      await axios.post("http://localhost:5000/api/events/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Event Created Successfully");
      setTitle(""); setHotelName(""); setLocation("");
      setEventDate(""); setEventTime(""); setDescription("");
      setTicketPrice(""); setTotalSeats(""); setImage(null);
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="create-event-page">

      {/* Header */}
      <div className="create-page-header">
        <div className="section-eyebrow">
          <span className="eyebrow-dot" />
          <span>Admin</span>
        </div>
        <h2>Create Event</h2>
        <p className="create-page-sub">
          Fill in the details below to list a new event on FestNest.
        </p>
      </div>

      <form className="create-form" onSubmit={handleSubmit}>
        <div className="create-form-topline" />

        <div className="create-form-grid">

          {/* Title */}
          <div className="create-field create-field-full">
            <label>Event Title</label>
            <input
              type="text"
              placeholder="e.g. New Year Gala 2026"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Hotel Name */}
          <div className="create-field">
            <label>Hotel / Venue Name</label>
            <input
              type="text"
              placeholder="Venue name"
              value={hotelName}
              onChange={(e) => setHotelName(e.target.value)}
            />
          </div>

          {/* Location */}
          <div className="create-field">
            <label>Location</label>
            <input
              type="text"
              placeholder="City or address"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          {/* Date */}
          <div className="create-field">
            <label>Event Date</label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              required
            />
          </div>

          {/* Time */}
          <div className="create-field">
            <label>Event Time</label>
            <input
              type="time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="create-field create-field-full">
            <div className="create-label-row">
              <label>Description</label>
              <button
                type="button"
                className="ai-gen-btn"
                onClick={generateDescription}
                disabled={generating}
              >
                {generating ? "Generating..." : "✦ Generate with AI"}
              </button>
            </div>
            <textarea
              placeholder="Describe the event..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
            />
          </div>

          {/* Ticket Price */}
          <div className="create-field">
            <label>Ticket Price (₹)</label>
            <input
              type="number"
              placeholder="e.g. 1500"
              value={ticketPrice}
              onChange={(e) => setTicketPrice(e.target.value)}
              required
            />
          </div>

          {/* Total Seats */}
          <div className="create-field">
            <label>Total Seats</label>
            <input
              type="number"
              placeholder="e.g. 200"
              value={totalSeats}
              onChange={(e) => setTotalSeats(e.target.value)}
              required
            />
          </div>

          {/* Image */}
          <div className="create-field create-field-full">
            <label>Event Image</label>
            <div className="file-upload-wrap">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <div className="file-upload-hint">
                {image ? `✓ ${image.name}` : "Click to upload an image"}
              </div>
            </div>
          </div>

        </div>

        <div className="create-form-footer">
          <button
            type="submit"
            className="create-submit-btn"
            disabled={submitting}
          >
            {submitting ? "Creating..." : "Create Event →"}
          </button>
        </div>

      </form>
    </div>
  );
}

export default CreateEvent;
