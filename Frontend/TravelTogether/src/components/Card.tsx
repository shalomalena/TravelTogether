import React, { useState } from "react";
import "/Users/shalomal/Desktop/TravelTogether/TravelTogether/frontend/travelTogether/src/Styles/Card.css";
const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="card" onClick={() => (window.location.href = "/trips")}>
      <div className="add-content">
        <span className="plus-icon">+</span>
        <p>Add a Trip</p>
      </div>
    </div>
  );
};

export default Card;
