import React from "react";
import "./About.css";
import about_img from "../../assets/image9.jpg";
import play_icon from "../../assets/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div id="about" className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        {/* <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        /> */}
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Compassionate Home Care for Your Loved Ones</h2>
        <p>
          At Charpepp Private Home Care Services, we understand the unique needs
          of our senior loved ones and individuals requiring special care. Our
          mission is to provide personalized support that enhances daily living
          and ensures comfort in the familiar surroundings of home.
        </p>
        <p>
          Our dedicated team offers a range of services designed to cater to the
          physical, emotional, and psychological well-being of our clients. From
          personal care, mobility assistance, and medical support to nutrition,
          hydration, and emotional support, we are committed to nurturing a safe
          and supportive environment.
        </p>
        <p>
          We believe in the importance of dignity and respect in caregiving. Our
          trained professionals are here to provide compassionate care, ensuring
          that each client receives the attention and support they need to
          thrive. Whether it's daily living support, health awareness, or
          post-admission care, we are here to help.
        </p>
      </div>
    </div>
  );
};

export default About;
