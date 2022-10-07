import React from "react";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";

function Header() {
  return (
    <header className="fixed top-0 left-0 md:left-24 w-full md:w-[calc(100%-6rem)] h-16 md:h-24 flex items-center justify-between py-3 bg-[#1C1F2E] md:bg-[#131315] px-12">
      <div className="hidden md:block">
        <h2>Good Morning! Kawsar</h2>
        <p>Let's have a meeting</p>
      </div>
      <div className="md:hidden">
        <HomeIcon />
      </div>
      <div className="hidden md:block">
        <input
          className="h-12 w-96 rounded px-4 text-black"
          type="text"
          name="Search"
          placeholder="Search"
          id=""
        />
      </div>
      <div className="hidden md:block">
        <h1>Kawsar Ahmed</h1>
        <p>coder.kawsar@gmail.com</p>
      </div>
      <div className="md:hidden">
        <LoginIcon />
      </div>
    </header>
  );
}

export default Header;
