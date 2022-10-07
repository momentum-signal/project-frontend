import { Button } from "@mui/material";
import "./App.css";
import Calender from "./components/Calender";
import LiveTime from "./components/LiveTime";
import Header from "./shared/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LiveTime></LiveTime>
      <Calender></Calender>

    </div>
  );
}

export default App;
