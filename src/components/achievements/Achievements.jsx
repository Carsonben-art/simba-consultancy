import React from 'react'
import { TiGroup } from "react-icons/ti";
import { MdAssuredWorkload } from "react-icons/md";
import { FaAward, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import './Achievements.css'

const Achievements = () => {
  return (
    <div className='achievement-section'>
      <div className="title">
        <div className="line"></div>
        <p>Simba Education Consultancy</p>
        <div className="line"></div>
      </div>
      <div className="title-heading">
        <h2>
            Our services are unmatched.
        </h2>
      </div>
      <div className="achievements-container">
            <div className="achievements">
                <TiGroup className='icon' />
                <h2>8900+</h2>
                <p>Happy Clients</p>
            </div>
            <div className="achievements">
                <MdAssuredWorkload className='icon' />
                <h2>30+</h2>
                <p>Our Partners</p>
            </div>
            <div className="achievements">
                <FaAward className='icon' />
                <h2>100+</h2>
                <p>Awards Achieved</p>
            </div>
            <div className="achievements">
                <TiGroup className='icon' />
                <h2>100+</h2>
                <p>Consultation Workshops</p>
            </div>
      </div>
      <div className="contacts">
        <div className="contact-text">
            <h1>Get In touch</h1>
            <p>A Simba we e committed in providing the highest <br/>
            standard of medical services and cutting-edge consultancy.</p>
            <h1>Address:</h1>
            <p>
              Diamond Plaza, 2nd Floor on Mutati <br/>
              and Masari Road junction on 3rd <br/>
              and 4th Parklands Avenue. <br/>
            </p>
            <h1>Regional Offices</h1>
            <p>Juba, South Sudan, <br/>
                Hargeisa, Somalia, <br/>
                Kigali, Rwanda.
            </p>
            <h1>Contact Details:</h1>
            <p>Tel: +254 20 5226693</p>
            <p>Email: info@simbaeducationconsultants.org</p>
            <div className="line"></div>
            <div className="socials">
                <a href="#facebook"><FaFacebook className='icons'/></a>
                <a href="#Instagram"><FaInstagram className='icons'/></a>
                <a href="#X"><FaTwitter className='icons'/></a>
                <a href="#LinkedIn"><FaLinkedin className='icons' /></a>
            </div>
        </div>
        <div className="contact-form">
            <h2>Book Now</h2>
            <div className="form-container">
                <p>Enter Your name</p>
                <input type="text" />
            </div>
            <div className="form-container">
                <p>Enter Your Email</p>
                <input type="email" />
            </div>
            <div className="form-container">
                <p>Insert your message.</p>
                <textarea type="text" />
            </div>
            <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default Achievements;
