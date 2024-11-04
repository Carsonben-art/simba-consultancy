import React from 'react';
import { useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { BiAnalyse, BiData, BiServer } from 'react-icons/bi';
import './Survey.css';

import data from '../../Assets/data.jpg';
import server from '../../Assets/server.jpg';
import analysis from '../../Assets/analysis.jpg';

const Survey = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="hospital-section">
      <div className="surveys">
        <div className="images-grid">
          <img src={data} alt="data" />
          <img src={server} alt="server" />
          <img src={analysis} alt="Analysis" />
        </div>
        <div className="content">
          <h5>Simba Education Consultancy Data</h5>
          <h2>ODK Mobile Data Collection</h2>
          <p>
            Khasto consultants has embraced mobile data capturing using Open Data Kit (ODK), which is a set of open-source tools for managing mobile data collection solutions.
          </p>
          <ul className="features-list">
            <li><BiData className="icon" /> Build an ODK data collection form.</li>
            <li><BiServer className="icon" /> Collect the data and send it directly to a server.</li>
            <li><BiAnalyse className="icon" /> Aggregate and export collected data for analysis.</li>
          </ul>
          <Button className="learn-more-btn" onClick={onOpen}>Learn more →</Button>
        </div>
      </div>

      <div className="message">
        <div className="message-container">
          <p>
            "As a public health professional, I am committed to improving the quality of life in the community by protecting, promoting, and maintaining their health. I pass on my expertise in field epidemiology and successful disease control strategies to policy makers, health managers, public health specialists, researchers, paramedical staff, community, and faith-based organizations."
          </p>
          <p>SIMBA EDUCATION CONSULTANCY</p>
          <p>Chairman's Message</p>
        </div>
      </div>

      {/* Chakra UI Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="lg" scrollBehavior="inside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mobile Data Capturing & Training</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p><strong>Mobile Data Capturing</strong></p>
            <p>
              ODK can automatically capture start & end time, date, GPS locations, and images, addressing issues found in traditional data capture methods. ODK features include a touchscreen UI with swipe navigation, xforms compatibility, GPS and photo support, question grouping, repeats, constraints, answer defaults, logic, and branching, making it an effective tool for modern data capture.
            </p>
            <p>
              Surveys are conducted quickly without data transfer delays. This method removes errors introduced in traditional data capture, eliminates printing costs, and reduces data transfer time.
            </p>

            <p><strong>Training</strong></p>
            <p>
              We offer training to link knowledge, skills, practice, and behavior, helping reduce the burdens imposed by a changing environment.
            </p>

            <p><strong>Strategic Planning and Curriculum Development</strong></p>
            <p>
              We provide strategic planning and visioning, preparing 3, 5, and 10-year strategic plans with well-researched logical frameworks. We also develop curriculum in health, education, and economic development, using evidence-based management (SBM-R) approaches, and train using these curricula.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Survey;
