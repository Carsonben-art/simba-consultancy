import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import "./ServicePage.css";

import training from "../../Assets/training.webp";
import research from "../../Assets/research.webp";
import development from "../../Assets/development.webp";

const services = [
  {
    id: 1,
    title: "Advancing Human Potential Through Research",
    description:
      "We provide expertise in research for institutions on strategies, human capacity development, livelihoods, emerging issues, and health skills.",
    details:
      "We provide expertise in research for institutions which target policies and programming, strategies, human capacity development, livelihoods, emerging issues, and behaviours and life and health skills from a multi-disciplinary approach. Our key focus include project feasibility, planning and design, implementation, development, monitoring and evaluation in development, policy, health systems and diseases (including Malaria, Tuberculosis, HIV and AIDS), Sexual and Reproductive Health, education, WATSAN, agriculture and livelihoods, child protection, environmental issues, Gender, governance, humanitarian emergencies, organisational culture, change management, team building, Faith Based Behaviour Management (FBBM), management and reporting of proceedings among others.",
    image: research,
  },
  {
    id: 2,
    title: "Strategic Systems and Human Capital Solutions",
    description:
      "We develop training materials targeting human systems in the areas requested on consultation by clients in UN bodies, governments, INGOs, CSOs, and Parastatals.",
    details:
      "We develop training materials targeting human systems in the areas noted above on consultation by client in the UN bodies, governments, INGOs, CSOs, Parastatal among others. We also provide advocacy and community competency monitoring and training at community level on all the areas mentioned above. We make use of learner-centered and adult training approaches in the delivery of our training services. Some of these include but not limited to small group discussions, role plays & simulation, plenary discussions, stories of best practices, songs, riddles, proverbs, case studies, participant led lesson reviews, brainstorming, thematic play, and inputs from facilitators. These approaches help participants internalize the knowledge and skills learnt, as they are motivated to actively participate in the learning process.",
    image: training,
  },
  {
    id: 3,
    title: "PeopleCore: From Research to Community Impact",
    description:
      "We also do community developments through our sister Community-Based Organization (CBO), the Center for People Development (C4PD).",
    details:
      "We also do community developments through our sister Community Based Organization (CBO) referred to as Center for People Development (C4PD). Center for People Development has community outreaches in Nairobi and Nyanza in developing community farmer field schools and safe water and hygiene promotion through Home Health Promoters (HHPs) and Social Mobilisers (SMs) to mitigate the effects of HIV and AIDS. We train the community members on Income Generating Activities (IGAs) and hygiene matters to protect, prevent, and promote health as a social protection to the older carers. On every consultancy done, 15% of the income is designated for the development and humanitarian activities. We have a nursery school which is developing, and we are planning for its growth to the university level in the next ten years.",
    image: development,
  },
];

const ServicePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    onOpen();
  };

  return (
    <motion.div
      className="services-container"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
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
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <Button
              onClick={() => handleOpen(service)}
              className="view-more-button"
            >
              View More
            </Button>
          </motion.div>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedService?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{selectedService?.details}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </motion.div>
  );
};

export default ServicePage;
