import React from 'react'
import Nav from '../components/nav/Nav'
import HeroSection from '../components/hero/HeroSection'
import Partners from '../components/partners/Partners'
import ServicePage from '../components/services/ServicePage'
import Survey from '../components/survey/Survey'
import Achievements from '../components/achievements/Achievements'
import FooterSection from '../components/footer/FooterSection'


const Home = () => {
  return (
    <div>
      <Nav />
      <div id="home"><HeroSection /></div>
      <div id="partners"><Partners /></div>
      <div id="services"><ServicePage /></div>
      <div id="survey"><Survey /></div>
      <div id="achievements"><Achievements /></div>
      <div id="contacts"><FooterSection /></div>
    </div>
  )
}

export default Home
