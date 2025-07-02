import React from "react";
import "./Choose.css";
import about_img from "../../assets/image12.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-right">
        <h3>WHY CHOOSE US</h3>
        <h2>Why Families Trust Charpepp Private Home Care Services</h2>
        <p>
          Choosing the right home care provider is a crucial decision for any
          family. At Charpepp Private Home Care Services, we understand the deep
          responsibility that comes with caring for your loved ones. That’s why
          we are committed to offering a truly personalized and culturally
          sensitive experience.
        </p>
        <ul className="points">
          <li>
            <strong>Personalized Care:</strong> Tailored care plans are crafted
            to meet the specific physical, emotional, and medical needs of each
            client.
          </li>
          <li>
            <strong>Regular Updates:</strong> We keep families—both local and
            abroad—informed through consistent updates, offering peace of mind
            and transparency.
          </li>
          <li>
            <strong>Culturally Sensitive:</strong> Our caregivers are trained to
            respect and honor the unique cultural and spiritual values of every
            client.
          </li>
          <li>
            <strong>Experienced and Compassionate Team:</strong> Our staff isn’t
            just qualified—they’re deeply committed to treating every client
            with empathy, dignity, and patience.
          </li>
          <li>
            <strong>Reliable Support for Diaspora Families:</strong> Whether you
            are near or far, we act as your eyes and hands, ensuring your loved
            ones are in safe, caring hands.
          </li>
        </ul>
      </div>
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
      </div>
    </div>
  );
};

export default About;
