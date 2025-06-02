import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import bookingApi from "../Services/BookingApi";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchBookings = async () => {
    try {
      const response = await bookingApi.get("/bookings");
      setBookings(response.data);
    } catch (err) {
      const msg =
        err.response?.data || err.message || "Failed to fetch bookings";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancel = async (bookingId) => {
    const confirmDelete = window.confirm(
      "Är du säker på att du vill avboka denna bokning?"
    );
    if (!confirmDelete) return;

    try {
      await bookingApi.delete(`/bookings/${bookingId}`);
      setBookings((prev) => prev.filter((b) => b.id !== bookingId));
    } catch (err) {
      const msg =
        err.response?.data || err.message || "Failed to cancel booking";
      alert("Fel vid avbokning: " + msg);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="_bookings-container">
      <h2 className="_myBookingsH2">Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <table className="_bookings-table">
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Date</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="clickable-row">
                <td
                  onClick={() =>
                    navigate(`/bookings/booking-details/${booking.id}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  {booking.event.eventName}
                </td>
                <td>{new Date(booking.event.startDate).toLocaleString()}</td>
                <td>${booking.event.price}</td>
                <td>
                  <button
                    className="_cancelEvent"
                    onClick={() => handleCancel(booking.id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
