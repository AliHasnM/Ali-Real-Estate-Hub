import React from "react";
import "./GetStarted.css";
const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <sapn className="primaryText">Get Started With AliRealEstateHub</sapn>
          <span className="secondaryText">
            Ready to find your ideal home? Getting started is simple. Browse
            through our listings, explore neighborhoods, and connect with our
            experts for tailored recommendations. Your dream home is just a
            click away. Begin your real estate journey with Ali Real Estate Hub
            today.
          </span>
          <button className="button">
            <a href="mailto:mughal201burewala@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
