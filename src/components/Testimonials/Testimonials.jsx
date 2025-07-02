import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import { FaUserCircle } from "react-icons/fa";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div id="testimonials" className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <FaUserCircle size={50} color="#333" />
                <div>
                  <h3>Chidochashe Zhou</h3>
                  <span>Family member of a client</span>
                </div>
              </div>
              <p>
                “The professionalism of this team is unmatched. They communicate
                clearly, treat our loved one with dignity, and are always ready
                to adapt to any changes. We’re so grateful to have found such
                dedicated caregivers.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <FaUserCircle size={50} color="#333" />
                <div>
                  <h3>Liyana Mabikire</h3>
                  <span>Granddaughter of a client</span>
                </div>
              </div>
              <p>
                “We’ve used other home care services before, but none compare to
                the quality and warmth we’ve experienced here. My grandfather is
                thriving, and that’s thanks to the compassionate support he
                receives every day.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <FaUserCircle size={50} color="#333" />
                <div>
                  <h3>Munyaradzi Manake</h3>
                  <span>Client</span>
                </div>
              </div>
              <p>
                “As someone recovering from surgery, I was nervous about needing
                help. But the caregivers made me feel comfortable and respected.
                They were always on time, attentive, and genuinely caring. I
                felt like I had family by my side.”
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <FaUserCircle size={50} color="#333" />
                <div>
                  <h3>Tanyaradzwa Nhete</h3>
                  <span>Niece of a client</span>
                </div>
              </div>
              <p>
                “From the moment we reached out, the care and attention we
                received were outstanding. The caregivers are not just trained
                professionals—they’re compassionate companions. My uncle always
                looks forward to their visits, and that means everything to us.”
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
