import "./Services.css";
import {
  FaCheckCircle,
  FaHandsHelping,
  FaWheelchair,
  FaStethoscope,
  FaUtensils,
  FaHeart,
  FaHome,
  FaMoneyCheckAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const services = [
  {
    title: "Personal Care",
    icon: <FaHandsHelping />,
    details: [
      "Assistance with bathing, grooming & hygiene.",
      "Help with dressing and personal appearance.",
      "Support with toileting and incontinence care",
      "Oral and dental hygiene assistance",
      "Daily routine support to maintain dignity",
    ],
  },
  {
    title: "Mobility and Safety",
    icon: <FaWheelchair />,
    details: [
      "Mobility assistance",
      "Transferring assistance (e.g. bed to wheelchair).",
      "Fall prevention and home safety assessments.",
      "Use of assistive devices (e.g., canes, walkers).",
      "Supervision to prevent accidents or injuries.",
    ],
  },
  {
    title: "Medical Support",
    icon: <FaStethoscope />,
    details: [
      "Medication reminders & administration assistance.",
      "Monitoring of vital signs ",
      "Coordination with doctors & healthcare professionals",
      "Support with wound care & chronic condition management.",
      "Escort to medical appointments.",
    ],
  },
  {
    title: "Nutrition and Hydration",
    icon: <FaUtensils />,
    details: [
      "Meal planning based on dietary needs or restrictions.",
      "Grocery shopping and meal preparation.",
      "Ensuring proper hydration throughout the day",
      "Assistance with feeding",
      "Monitoring food intake and reporting concerns.",
    ],
  },
  {
    title: "Emotional & Psychological Support",
    icon: <FaHeart />,
    details: [
      "Companionship and conversation to reduce loneliness.",
      "Mental stimulation through games, reading, or hobbies.",
      "Active listening and emotional reassurance.",
      "Encouragement to maintain social connections.",
      "Support for clients coping with anxiety, depression, or memory loss.",
    ],
  },
  {
    title: "Environmental & Health Support",
    icon: <FaHome />,
    details: [
      "Making beds",
      "Infection control & prevention",
      "Health awareness",
      "Daily living support",
      "Post-admission care",
      "First aid",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <ul>
              {service.details.map((item, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
