import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testmonial from "./Components/Testmonial/Testmonial";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <Programs />
        <About />
        <Portfolio />
        <Testmonial />
      </>
    </div>
  );
}

export default App;
