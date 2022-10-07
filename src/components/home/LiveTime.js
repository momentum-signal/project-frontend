import React from "react";

export default function LiveTime() {
  let time = new Date().toLocaleTimeString();
  let [currentTime, changeTime] = React.useState(time);

  function checkTime() {
    time = new Date().toLocaleTimeString();
    changeTime(time);
  }

  setInterval(checkTime, 1000);

  return (
    <div className="mb-12">
      <h1 className="text-6xl text-center">{currentTime}</h1>
    </div>
  );
}
