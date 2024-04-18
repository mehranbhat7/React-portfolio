import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setsticky(true) : setsticky(false);
    });
  }, []);

  return (
    <nav className="container">
      <div className={`navbar ${sticky ? "dark-nav" : " "}`}>
        <img src={logo} alt="" />
        <ul className="nav-links">
          <li>
            <Link to="hero" smooth={true} offset={0} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="heads" smooth={true} offset={-140} duration={1000}>
              About
            </Link>
          </li>
          <li>
            <Link to="main" smooth={true} offset={-210} duration={1000}>
              Testimonial
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              offset={-155}
              duration={1000}
              className="btn"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
