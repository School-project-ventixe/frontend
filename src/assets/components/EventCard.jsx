import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${event.id}`);
  };

  return (
    <div className="_eventCardWrapper">
      <div className="_eventContent">
        <div className="_eventImageContainer">
          {/* Bilden är medvetet tom */}
          <img src="" alt="" />
        </div>

        <span className="_eventDate">{event.date}</span>

        <h3 className="_eventTitle">{event.title}</h3>

        <div className="_eventLocation">
          <i className="fa-solid fa-location-dot"></i>
          <span>{event.location}</span>
        </div>

        <div className="_eventPrice">
          <span>{event.price}</span>
          <button onClick={handleClick}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
