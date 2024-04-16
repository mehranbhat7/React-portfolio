import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testmonial from "./Components/Testmonial/Testmonial";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <Programs />
        <About />
        <Skills />
        <Portfolio />
        <Testmonial />
      </>
    </div>
  );
}

export default App;
