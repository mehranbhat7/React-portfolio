import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="navbar">
        <img src={logo} alt="" />
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
          <li>
            <button className="btn">Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
