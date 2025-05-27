import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`https://localhost:7138/api/events/${id}`);
        if (!response.ok) {
          throw new Error("Något gick fel vid hämtning av event");
        }
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

  if (loading) return <p>Loading event...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!event) return <p>Event not found.</p>;

  const handleBookClick = () => {
    navigate(`/bookevent/${id}`);
  };

  return (
    <>
      <div className="_detailAndTerms">
        <div className="_detailCardWrapper">
          <div className="_detailTop">
            <img src={event.imageUrl} alt={event.eventName} />
          </div>
          <div className="_detailBottom">
            <h3>{event.eventName}</h3>
            <div className="_detailedLocation">
              <i className="fa-regular fa-calendar"></i>
              <span>{new Date(event.startDate).toLocaleString()}</span>
            </div>
            <div className="_detailedLocation">
              <i className="fa-solid fa-location-dot"></i>
              <span>{event.location}</span>
            </div>
            <div className="_midborder"></div>
            <div className="_bookingSession">
              <div className="_detailPriceInfo">
                <span className="_pricedDetail">Starts from</span>
                <span>${event.price}</span>
              </div>
              <div>
                <button className="_btnBook" onClick={handleBookClick}>
                  Book This Event
                </button>
              </div>
            </div>
            <div className="_midborder"></div>
            <div className="_aboutEvent">
              <span>About Event</span>
              <p>{event.eventDescription}</p>
            </div>
          </div>
        </div>

        <div className="_termsAndCondition">
          <h3>Terms & Conditions</h3>
          <div className="_numberNote">
            <h4>1. Ticket Purchase and Entry</h4>
          </div>
          <div>
            <ul className="_noteDot">
              <li>All attendees must possess a valid ticket for entry.</li>
              <li>
                Tickets are non-refundable and non-transferable unless specified
                by the event organizer.
              </li>
              <li>
                Attendees must present a valid government-issued ID along with
                their ticket at the gate.
              </li>
            </ul>
          </div>
          <div className="_numberNote">
            <h4>2. Security and Safety</h4>
          </div>
          <div>
            <ul className="_noteDot">
              <li>
                Attendees are subject to security checks, including bag
                inspections, upon entry.
              </li>
              <li>
                Prohibited items include weapons, drugs, alcohol, fireworks, and
                other hazardous materials.
              </li>
              <li>
                The event organizer reserves the right to deny entry to
                individuals deemed a security risk.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetail;
