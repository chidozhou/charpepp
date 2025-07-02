import React from "react";
import "./Pricing.css";
import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Essential Care",
    price: "$200/month",
    description: "Essential daily support.",
    features: [
      "Personalized Care",
      "Companionship",
      "Daily Living Assistance ",
      "Light Housekeeping",
    ],
  },
  {
    name: "Comprehensive Care",
    price: "$250/month",
    description: "All Essential Care",
    features: [
      "Medication Management",
      "Meal Preparation",
      "Transportation To Medical Appointments",
    ],
  },
  {
    name: "Premium Care",
    price: "$300/month",
    description: "All Comprehensive Care services",
    features: [
      "Caregiver Support",
      "Telehealth services",
      "Home Safety Assessments",
    ],
  },
  {
    name: "Elite Care",
    price: "$350/month",
    description: "All Premium Care services",
    features: ["Specialized Care Programs", "Technology Integration "],
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="pricing-section">
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <p className="desc">{plan.description}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" /> {feature}
                </li>
              ))}
            </ul>
            {/* <button className="btn">Choose Plan</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
