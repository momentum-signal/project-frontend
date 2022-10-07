import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UploadIcon from "@mui/icons-material/Upload";

function Icons() {
  return (
    <div className="grid grid-cols-2 gap-8 w-5/6 mx-auto">
      <div className="p-4 bg-green-300 rounded">
        <VideocamIcon />
        <p>Add a new meeting</p>
      </div>
      <div className="p-4 bg-orange-300 rounded">
        <AddBoxIcon />
        <p>Join</p>
      </div>
      <div className="p-4 bg-cyan-400 rounded">
        <CalendarMonthIcon />
        <p>Schedule</p>
      </div>
      <div className="p-4 bg-gray-900 rounded">
        <UploadIcon />
        <p>Share screen</p>
      </div>
    </div>
  );
}

export default Icons;
