import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="links">
          <h3>Copyright © 2024 Mehran. All rights reserved.</h3>

          <a href="https://www.linkedin.com/in/mehranbhat/">
            <img
              src="https://www.edigitalagency.com.au/?attachment_id=55125"
              alt=""
            />
          </a>
          <a href="https://github.com/mehranbhat7">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt=""
            />
          </a>
        </div>
        <div className="terms">
          <h3>Terms of Service</h3>
          <h3>Privacy Policy</h3>
          <h3>📞 +91-6005046534</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
