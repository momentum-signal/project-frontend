import React from "react";
import Calendar from "../components/home/Calendar";
import MeetingContainer from "../components/home/MeetingContainer";
import Time from "../components/home/Time";

function HomePage() {
  return (
    <div className="md:flex h-full items-center">
      <div className="md:w-3/6">
        <MeetingContainer />
      </div>
      {/* time and calendar */}
      <div className="md:w-3/6">
        <Time />
        <Calendar />
      </div>
    </div>
  );
}

export default HomePage;
