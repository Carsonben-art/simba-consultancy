// ServicePage.jsx
import React from "react";
import { motion } from "framer-motion";
import "./ServicePage.css";

import training from "../../Assets/training.jpg";
import research from "../../Assets/research.jpg";
import development from "../../Assets/development.jpg";

const services = [
  {
    id: 1,
    title: "Advancing Human Potential Through Research",
    description:
      "We provide expertise in research for institutions on strategies, human capacity development, livelihoods, emerging issues, and health skills.",
    image: research,
  },
  {
    id: 2,
    title: "Strategic Systems & Human Capital Solutions",
    description:
      "We develop training materials targeting human systems in the areas requested on consultation by clients in UN bodies, governments, INGOs, CSOs, and Parastatals.",
    image: training,
  },
  {
    id: 3,
    title: "PeopleCore: From Research to Community Impact",
    description:
      "We also do community developments through our sister Community-Based Organization (CBO), the Center for People Development (C4PD).",
    image: development,
  },
];

const ServicePage = () => {
  return (
    <motion.div
      className="services-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >

      <h2 className="services-title">
        Empowering Growth: <br />
        From Classroom to Community
      </h2>

      <div className="services-grid">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="view-more-button">View More</button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ServicePage;
