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
  );
};

export default Survey;
