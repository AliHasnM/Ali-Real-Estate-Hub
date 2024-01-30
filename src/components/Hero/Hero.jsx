import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        {/* Hero session left  */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Discover
              <br />
              Most Suitable
              <br />
              Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-description">
            <span className="secondaryText">
              Welcome to Ali Real Estate Hub, where your dream home awaits!
            </span>
            <span className="secondaryText">
              Discover a seamless blend of elegance and functionality as we
              <br />
              guide you through an unparalleled real estate experience.
            </span>
            <span className="secondaryText">
              Let's turn your aspirations into reality.
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={35} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="statText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="statText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="statText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* hero right session  */}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            <img src="./hero-image.png" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
