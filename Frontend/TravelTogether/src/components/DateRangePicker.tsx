import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "/Users/shalomal/Desktop/TravelTogether/TravelTogether/frontend/travelTogether/src/Styles/Datepicker.css";

const DateRangePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="date-picker-wrapper">
      <DatePicker
        selectsStart
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
        startDate={startDate}
        placeholderText="Start Date"
      />

      <DatePicker
        selectsEnd
        selected={endDate}
        onChange={(date: Date) => setEndDate(date)}
        endDate={endDate}
        startDate={startDate}
        minDate={startDate}
        placeholderText="End Date"
      />
    </div>
  );
};

export default DateRangePicker;
