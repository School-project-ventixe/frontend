import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(
      "https://eventservice-ventixe-amezefgkfsc4dces.swedencentral-01.azurewebsites.net/api/events"
    )
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setEvents(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredEvents = events.filter((evt) => {
    const haystack = [evt.eventName, evt.location].join(" ").toLowerCase();

    return haystack.includes(searchTerm.trim().toLowerCase());
  });

  return (
    <>
      <div className="_topBar">
        <SearchBar
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search event, location, etc"
        />
      </div>

      <div className="_mobileEvents">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((evt) => (
            <EventCard
              key={evt.id}
              id={evt.id}
              imageUrl={evt.imageUrl}
              eventName={evt.eventName}
              eventDescription={evt.eventDescription}
              location={evt.location}
              startDate={evt.startDate}
              price={evt.price}
            />
          ))
        ) : (
          <span>No events matched your search.</span>
        )}
      </div>
    </>
  );
};

export default Events;
