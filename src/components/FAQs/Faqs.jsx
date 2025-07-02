import React, { useState } from "react";
import "./Faqs.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a range of home care services, including personal care, mobility assistance, medical support, nutritional guidance, emotional support, and environmental health services tailored to the needs of seniors and individuals requiring special care.",
  },
  {
    question: "How do you ensure the quality of care?",
    answer:
      "Our caregivers are thoroughly trained and vetted. We prioritize ongoing training and feedback to maintain high standards of care and ensure our clients receive the best support possible.",
  },
  {
    question: "Are your services customizable?",
    answer:
      "Yes! We understand that each client has unique needs. Our services can be tailored to meet individual requirements and preferences.",
  },
  {
    question: " What are your operating hours?",
    answer:
      "We offer flexible scheduling, with services available 24/7. Our team is dedicated to being there whenever you need us.",
  },
  {
    question: "How do you handle emergencies?",
    answer:
      "Our caregivers are trained in first aid and emergency response. In case of a medical emergency, we will follow protocols and contact emergency services as needed.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="FAQs" className="faq-page">
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              {activeIndex === index ? (
                <FaChevronUp className="icon" />
              ) : (
                <FaChevronDown className="icon" />
              )}
            </div>
            {activeIndex === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
