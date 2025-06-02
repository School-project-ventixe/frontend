import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import bookingApi from "../Services/BookingApi";

export default function BookEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookingMessage, setBookingMessage] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `https://eventservice-ventixe-amezefgkfsc4dces.swedencentral-01.azurewebsites.net/api/events/${id}`
        );
        if (!response.ok) throw new Error("Could not fetch event");
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleBooking = async () => {
    try {
      await bookingApi.post("/bookings", { eventId: id });
      setBookingMessage("Booking successful! Redirecting...");
      setTimeout(() => navigate("/bookings"), 1000);
    } catch (err) {
      const msg =
        err.response?.data || err.message || "Booking failed";
      setBookingMessage(`Booking failed: ${msg}`);
    }
  };

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!event) return <p>Event not found.</p>;

  return (
    <>
      <h1 className="_h1ForBooking">{event.eventName}</h1>
      <div className="_bookCard">
        <img src={event.imageUrl} alt={event.eventName} />
        <div className="_eventBookingInfo">
          <p>
            <strong>Date:</strong> {new Date(event.startDate).toLocaleString()}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Price:</strong> ${event.price}
          </p>
          <p>
            <strong>Description:</strong> {event.eventDescription}
          </p>
          <button onClick={handleBooking}>Confirm Booking</button>
          {bookingMessage && <p>{bookingMessage}</p>}
        </div>
      </div>
    </>
  );
}
