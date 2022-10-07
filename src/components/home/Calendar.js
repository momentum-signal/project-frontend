import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarArea() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="flex justify-center text-black">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
