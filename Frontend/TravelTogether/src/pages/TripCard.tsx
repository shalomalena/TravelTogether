import React, { useState } from "react";
import "/Users/shalomal/Desktop/TravelTogether/TravelTogether/frontend/travelTogether/src/Styles/TripCard.css";
const TripCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="Tripcard">
      <div className="add-content">
        <span className="plus-icon">+</span>
        <p>Add a Trip</p>
      </div>
    </div>
  );
};

export default TripCard;
