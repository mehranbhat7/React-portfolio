import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <Programs />
        <About />
      </>
    </div>
  );
}

export default App;
