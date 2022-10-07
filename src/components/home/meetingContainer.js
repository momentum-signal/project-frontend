import * as React from "react";
import Box from "@mui/material/Box";
import VideocamIcon from "@mui/icons-material/Videocam";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";

export default function MeetingContainer() {
  return (
    <Box className="m-10 md:m-0">
      <div className="grid grid-cols-2 gap-y-10 justify-items-center">
        <div className="text-center">
          <div className="box-border h-24 w-24 lg:h-32 lg:w-32 p-4 bg-orange-400 flex justify-center items-center rounded-3xl">
            <VideocamIcon sx={{ fontSize: 64, color: "white" }} />
          </div>
          <p className="text-lg mt-2">New Meeting</p>
        </div>

        <div className="text-center">
          <div className="box-border h-24 w-24 lg:h-32 lg:w-32 p-4 bg-blue-400 flex justify-center items-center rounded-3xl">
            <AddBoxIcon sx={{ fontSize: 64, color: "white" }} />
          </div>
          <p className="text-lg mt-2">Join</p>
        </div>

        <div className="text-center">
          <div className="box-border h-24 w-24 lg:h-32 lg:w-32 p-4 bg-indigo-600 flex justify-center items-center rounded-3xl">
            <CalendarMonthIcon sx={{ fontSize: 64, color: "white" }} />
          </div>
          <p className="text-lg mt-2">Schedule</p>
        </div>

        <div className="text-center">
          <div className="box-border h-24 w-24 lg:h-32 lg:w-32 p-4 bg-yellow-400 flex justify-center items-center rounded-3xl">
            <ScreenShareIcon sx={{ fontSize: 64, color: "white" }} />
          </div>
          <p className="text-lg mt-2">Screen Share</p>
        </div>
      </div>
    </Box>
  );
}
