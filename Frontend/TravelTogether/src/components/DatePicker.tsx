import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "/Users/shalomal/Desktop/TravelTogether/TravelTogether/frontend/travelTogether/src/Styles/Datepicker.css";

const DatePicker: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  };
  return (
    <div>
      <DatePicker
        selectsStart
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        startDate={startDate}
      />
      <DatePicker
        selectsEnd
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        endDate={endDate}
        startDate={startDate}
        minDate={startDate}
      />
    </div>
  );
};
