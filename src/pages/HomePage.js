import React from "react";
import MeetingContainer from "../components/home/MeetingContainer";
import LiveTime from "../components/home/LiveTime";
import CalendarArea from "../components/home/Calendar";

function HomePage() {
  return (
    <div className="md:flex h-full items-center">
      <div className="md:w-3/6">
        <MeetingContainer />
      </div>
      {/* time and calendar */}
      <div className="md:w-3/6">
        <LiveTime />
        <CalendarArea />
      </div>
    </div>
  );
}

export default HomePage;
