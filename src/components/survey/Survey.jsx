// HospitalSection.js
import React from 'react';

import { BiAnalyse, BiData, BiServer } from 'react-icons/bi';

import './Survey.css';

import data from '../../Assets/data.jpg'
import server from '../../Assets/server.jpg'
import analysis from '../../Assets/analysis.jpg'

const Survey = () => {
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
        Khasto consultants has embraced mobile data capturing using Open Data Kit (ODK) which is a set of open-source set of tools  to  manage mobile data collection solutions.
        </p>
        <ul className="features-list">
          <li>
            <BiData className="icon" /> Build a ODK data collection form.
          </li>
          <li>
            <BiServer className="icon" /> Collect the data send direct to a server.
          </li>
          <li>
            <BiAnalyse className="icon" /> Aggregate the collected data  and export to analyse
          </li>
        </ul>
        <button className="learn-more-btn">Learn more →</button>
      </div>
      </div>
      {/* Message */}

      <div className='message'>
    <div className="message-container">
     <p>
      "As a public health professional I am totally sold to contribute
       in improving the quality of life of the community by protecting, 
       promoting and maintaining their good health. I, therefore, 
       pass my expertise and extend my excellence of field epidemiological 
       knowledge along with successful strategies applied for eradication, 
       prevention and control of diseases, as well as managerial skills 
       (regarding Public Health), to policy makers, health managers & 
       public health specialists, to researcher & paramedical/ health staff and to 
       community and faith based organisations."
      </p>
      <p>KHASTO CONSULTANCY </p>
        <p>Chairman's Message</p>

    </div>
    </div>
    </div>
  );
};

export default Survey;
