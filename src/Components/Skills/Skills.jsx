import React, { useState, useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(80);
    }, 100);
  }, []);

  return (
    <div>
      <h1 className="head">Skills</h1>
      <div className="progress-wrapper">
        <div className="progress-bar" style={{ width: `${98}%` }}>
          <span className="progress-label">HTML</span>
        </div>
      </div>
      <div className="progress-wrapper">
        <div className="progress-bar" style={{ width: `${90}%` }}>
          <span className="progress-label">CSS</span>
        </div>
      </div>
      <div className="progress-wrapper">
        <div className="progress-bar" style={{ width: `${progress}%` }}>
          <span className="progress-label">JavaScript</span>
        </div>
      </div>
      <div className="progress-wrapper">
        <div className="progress-bar" style={{ width: `${100}%` }}>
          <span className="progress-label">React Js</span>
        </div>
      </div>
      <div className="progress-wrapper">
        <div className="progress-bar" style={{ width: `${70}%` }}>
          <span className="progress-label">Git / GitHub</span>
        </div>
      </div>
      <div className="progress-wrapper">
        <div className="progress-bar" style={{ width: `${85}%` }}>
          <span className="progress-label">WordPress</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
