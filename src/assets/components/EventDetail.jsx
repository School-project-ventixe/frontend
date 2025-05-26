import React from "react";

const EventDetail = () => {
  return (
    <>
    <div className="_detailCardWrapper">
      <div className="_detailTop">
        <img src="" alt="" />
      </div>
      <div className="_detailBottom">
        <h3>Echo Beats Festival</h3>
        <div className="_detailedLocation">
          <i class="fa-regular fa-calendar"></i>
          <span>May 20, 2029 - 6:00 PM</span>
        </div>
        <div className="_detailedLocation">
          <i className="fa-solid fa-location-dot"></i>
          <span>Sunset Park, Los Angeles, CA</span>
        </div>
        <div className="_midborder"></div>
        <div className="_detailPriceInfo">
          <span className="_pricedDetail">Starts from</span>
          <span>$60</span>
        </div>
        <div className="_midborder"></div>
        <div className="_aboutEvent">
          <span>About Event</span>
          <p>
            The Echo Beats Festival brings together a stellar lineup of artists
            across EDM, pop, and hip-hop genres. Prepare to experience a night
            of electrifying music, vibrant light shows, and unforgettable
            performances under the stars. Explore food trucks, art
            installations, and VIP lounges for an elevated experience.
          </p>
        </div>
      </div>
    </div>
    <div className="_termsAndCondition">
        <h3>Terms & Conditions</h3>
        <div className="_numberNote">
            <h4>1. Ticket Purchase and Entry</h4>
        </div>
        <div className="_noteDot">
            <i></i>
            <p></p>
        </div>
    </div>
    </>
  );
};

export default EventDetail;
