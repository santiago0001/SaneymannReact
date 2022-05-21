import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [widthPx, SetWidthPx] = useState(window.screen.width);

  window.onresize = console.log("cambio");

  // useEffect(() => {
  //   SetWidthPx(window.screen.width);
  // }, []);

  return (
    <div className="App">
      {/* <AppBar widthPx={widthPx} /> */}
      <NavBar/>

      <h1>{widthPx}</h1>
    </div>
  );
}

export default App;
