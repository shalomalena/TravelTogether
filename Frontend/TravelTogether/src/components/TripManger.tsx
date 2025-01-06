import React, { useState, useEffect } from "react";
import Projector from "./ProjectorProps.tsx";
import FreeSearch from "../components/Searchbar.tsx";
import DateRangePicker from "../components/DateRangePicker.tsx";
import "/Users/shalomal/Desktop/TravelTogether/TravelTogether/frontend/travelTogether/src/Styles/TripManger.css";

const TripManager: React.FC = () => {
  const [isProjectorOpen, setProjectorOpen] = useState(true); // Open modal by default when navigated to
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    setProjectorOpen(true); // Ensure modal is open when navigating to this page
  }, []);

  const handleSubmit = () => {
    if (!destination || !startDate || !endDate) {
      alert("Please fill all fields before submitting.");
      return;
    }
    console.log({ destination, startDate, endDate });

    // Handle the trip submission logic (e.g., API call, state update)
    setProjectorOpen(false); // Close projector after submission
  };

  return (
    <div>
      <Projector
        isOpen={isProjectorOpen}
        onClose={() => setProjectorOpen(false)}
      >
        <h2>Add Trip Details</h2>
        <FreeSearch onSelect={setDestination} />
        <DateRangePicker
          onSelectDates={(start, end) => {
            setStartDate(start);
            setEndDate(end);
          }}
        />
        <button onClick={handleSubmit}>Submit</button>
      </Projector>
    </div>
  );
};

export default TripManager;
