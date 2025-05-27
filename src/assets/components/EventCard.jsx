import React from "react";
import { useNavigate } from "react-router-dom";
import { dateFormat } from "../../Utils/DateFormat";

const EventCard = ({ id, imageUrl, eventName, location, startDate, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${id}`);
  };

  console.log(imageUrl)

  const formattedPrice = price % 1 === 0 ? price.toString() : price.toFixed(2);

  return (
    <div className="_eventCardWrapper">
      <div className="_eventContent">
        <div className="_eventImageContainer">
          <img src={imageUrl} alt="Event Image" />
        </div>

        <span className="_eventDate">{dateFormat(startDate)}</span>

        <h3 className="_eventTitle">{eventName}</h3>

        <div className="_eventLocation">
          <i className="fa-solid fa-location-dot"></i>
          <span>{location}</span>
        </div>

        <div className="_eventPrice">
          <span>${formattedPrice}</span>
          <button onClick={handleClick}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
