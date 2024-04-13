import React from "react";
import "./Programs.css";

const Programs = () => {
  return (
    <>
      <h1 className="head">What Services I'm Providing here</h1>
      <div className="programs">
        <div className="program">
          <img
            src="https://www.mindinventory.com/blog/wp-content/uploads/2021/03/mobile-app-design-fundamentals-the-difference-between-UI-and-UX.webp"
            alt=""
          />
          <div className="caption">
            <h1>📝</h1>
            <h4>UI/UX Design</h4>
          </div>
        </div>
        <div className="program">
          <img
            src="https://kinsta.com/wp-content/uploads/2023/02/github-pages.jpg"
            alt=""
          />
          <div className="caption">
            <h1>🛠</h1>
            <h4>Version control</h4>
          </div>
        </div>
        <div className="program">
          <img
            src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg"
            alt=""
          />
          <div className="caption">
            <h1>💻</h1>
            <h4>Web Development</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Programs;
