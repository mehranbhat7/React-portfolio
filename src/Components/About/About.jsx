import React from "react";
import "./About.css";
import photo from "../../assets/removed photo.png";

const About = () => {
  return (
    <>
      <h1 className="heads" style={{ marginTop: "70px" }}>
        About Me
      </h1>
      <div className="about-container">
        <div className="about-img">
          <img
            style={{ height: "430px", width: "280px", marginBottom: "80px" }}
            src={photo}
            alt=""
          />
        </div>
        <div className="about-text">
          <h4>
            Adapting to different project requirements and staying abreast of
            industry trends is a key aspect of my role. Clear communication with
            stakeholders, whether through video calls, or documentation, is
            paramount to ensure a shared understanding of project goals and
            expectations.
          </h4>
          <h4>
            Overall, my remote work experience has allowed me to thrive in a
            dynamic and collaborative environment, contributing to the success
            of diverse projects while maintaining a healthy work-life balance.
          </h4>
          <h4>
            I specialize in building visually appealing and user-friendly
            interfaces for websites and web applications. Proficient in HTML,
            CSS, JavaScript and ReactJs. I bring designs to life by creating
            responsive and interactive components.
          </h4>
          <h4>
            I contribute to projects with creativity and problem-solving skills.
            Effective communication and collaboration are integral to my
            approach, ensuring the successful delivery of high-quality, user
            centric solutions
          </h4>
        </div>
      </div>
    </>
  );
};

export default About;
