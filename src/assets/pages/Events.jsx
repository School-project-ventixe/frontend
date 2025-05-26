import React from "react";
import EventCard from "../components/EventCard";

const events = [
  {
    id: "1",
    title: "Adventure Gear Show",
    date: "June 5, 2029 - 3:00 PM",
    location: "Rocky Ridge Exhibition Hall, Denver, CO",
    price: "$40",
    imageUrl: "https://via.placeholder.com/300x200?text=Adventure+Gear", // valfri placeholder
  },
  {
    id: "2",
    title: "Tech Talk 2029",
    date: "June 12, 2029 - 6:00 PM",
    location: "Tech Arena, San Francisco, CA",
    price: "$25",
    imageUrl: "https://via.placeholder.com/300x200?text=Tech+Talk",
  },
  {
    id: "3",
    title: "React Workshop",
    date: "June 20, 2029 - 10:00 AM",
    location: "Online",
    price: "Free",
    imageUrl: "https://via.placeholder.com/300x200?text=React+Workshop",
  },
];

const Events = () => {
  return (
    <div className="_mobileEvents">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;
