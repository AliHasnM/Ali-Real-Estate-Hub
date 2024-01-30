import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
import "./Contact.css";

const Contact = () => {
  return (
    <section c-wrapper>
      <div className="flexCenter paddings innerWidth c-container">
        {/* left side  */}
        <div className="flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            Have questions or ready to take the next step? Our dedicated team at
            Ali Real Estate Hub is here to assist you. Contact us for
            personalized guidance, property inquiries, or to schedule a viewing.
            Reach out, and let's embark on this exciting journey together.
          </span>
          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              {/* first mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">0307-8357370</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* second mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">0307-8357370</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* second row */}
            <div className="flexStart row">
              {/* third mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">0307-8357370</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* fourth mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">0307-8357370</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side  */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contactImage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
