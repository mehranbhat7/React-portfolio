import React, { useRef, useEffect, useState } from "react";
import "./Portfolio.css";
import firebasee from "../../assets/firebase auth.png";
import amazon from "../../assets/amazon.png";
import udemy from "../../assets/udemy.png";
import currency from "../../assets/currency converter.png";
import wordpress from "../../assets/wordpress.png";

const Portfolio = () => {
  const slides = useRef(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(
        (prevCounter) => (prevCounter + 1) % slides.current.children.length
      );
    }, 1300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const slideWidth = slides.current.children[0].offsetWidth;
    slides.current.style.transition = "transform 0.5s ease";
    slides.current.style.transform = `translateX(-${counter * slideWidth}px)`;
  }, [counter]);

  return (
    <>
      <h1 className="head">My Portfolio</h1>
      <div className="programsz" ref={slides}>
        <div className="slide">
          <img src={firebasee} alt="" />
        </div>
        <div className="slide">
          <img src={amazon} alt="" />
        </div>
        <div className="slide">
          <img src={udemy} alt="" />
        </div>
        <div className="slide">
          <img src={currency} alt="" />
        </div>
        <div className="slide">
          <img src={wordpress} alt="" />
        </div>
        <div className="slide">
          <img src={firebasee} alt="" />
        </div>
        <div className="slide">
          <img src={amazon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
