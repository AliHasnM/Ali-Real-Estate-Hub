import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="flexCenter paddings innerWidth f-container">
        {/* left side  */}
        <div className="flexColStart f-left">
          <img src="./alirealestatehub.png" alt="logo" width={120} />
          <span className="secondaryText">
            Empowering Dreams, Enriching Lives:
            <br />
            Our Vision is to Create the Ideal Home
            <br />
            for Every Individual
          </span>
        </div>
        {/* right side  */}
        <div className="flexColStart f-righ">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Burewala, Punjab, Pakistan</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
