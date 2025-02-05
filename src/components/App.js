import React from "react";
import About from "./About";
import Home from "./Home";
import Navbar from "./Navbar"; // Ensure Navbar is imported correctly

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
