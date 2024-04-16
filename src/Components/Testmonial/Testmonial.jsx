import React from "react";
import "./Testmonial.css";

const Testmonial = () => {
  return (
    <>
      <h1 className="head">What My Clients Says</h1>
      <div className="main">
        <div className="single">
          <img
            src="https://media.licdn.com/dms/image/C4E03AQGOCqhMYu8_8Q/profile-displayphoto-shrink_400_400/0/1521013131412?e=2147483647&v=beta&t=ssFAeBXxxmfOawTyeB1MXrGnQ71V24SP8EPSYuj157o"
            alt=""
          />
          <h4>
            “Your designs are visually stunning, exactly what we envisioned!"
          </h4>
          <p>Saheem</p>
        </div>
        <div className="single">
          <img
            src="https://media.licdn.com/dms/image/C5603AQEwDi8AENDakg/profile-displayphoto-shrink_400_400/0/1552596011868?e=2147483647&v=beta&t=v2pP1SRwHtl_kmXSbvUFiudmGbxWwZf3Io6sqZOBBVc"
            alt=""
          />
          <h4>
            “The interfaces is so intutive and easy to navigate, our users love
            it!”
          </h4>
          <p>Hadi</p>
        </div>
        <div className="single">
          <img
            src="https://api.clockofchange.org/uploads/upload_3e4f2f34793e07c4316b61ca0974976d.jpg"
            alt=""
          />
          <h4>
            “Working with you was seamless, your communication and collaboration
            made process smooth”
          </h4>
          <p>Glen king</p>
        </div>
      </div>
    </>
  );
};

export default Testmonial;
