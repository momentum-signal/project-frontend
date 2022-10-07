import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Sidebar() {
  return (
    <div className="bg-[#1C1F2E] md:bg-[#131315] pt-2 md:pt-0 fixed bottom-0 left-0 md:static flex md:flex-col w-full md:w-96 justify-center md:justify-between items-center border border-t border-l-0 border-r-0 md:border-r border-[#3f445d] gap-x-2 md:gap-x-0">
      <div className="md:mt-8 cursor-pointer p-2 md:p-4 hover:bg-[#514FE2] rounded bg-[#514FE2]">
        <HomeIcon />
      </div>
      <div className="flex md:flex-col gap-x-2 md:gap-x-0">
        <div className="cursor-pointer  p-2 md:p-4 md:mb-2 hover:bg-[#514FE2] rounded">
          <MessageIcon />
        </div>
        <div className="cursor-pointer  p-2 md:p-4 md:mb-2 hover:bg-[#514FE2] rounded">
          <CalendarMonthIcon />
        </div>
        <div className="cursor-pointer  p-2 md:p-4 md:mb-2 hover:bg-[#514FE2] rounded">
          <FiberManualRecordIcon />
        </div>
      </div>
      <div className="flex md:flex-col gap-x-2 md:gap-x-0">
        <div className="cursor-pointer p-2 md:p-4 md:mb-2 hover:bg-[#514FE2] rounded">
          <SettingsIcon />
        </div>
        <div className="cursor-pointer p-2 md:p-4 md:mb-2 hover:bg-[#514FE2] rounded">
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
