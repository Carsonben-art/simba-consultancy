import React from 'react'
import Nav from '../components/nav/Nav'
import HeroSection from '../components/hero/HeroSection'
import Partners from '../components/partners/Partners'
import ServicePage from '../components/services/ServicePage'
import Survey from '../components/survey/Survey'
// import Achievements from '../components/achievements/Achievements'


const Home = () => {
  return (
    <div>
      <Nav />
      <HeroSection />
      <Partners />
      <ServicePage />
      <Survey />
      {/* <Achievements /> */}
    </div>
  )
}

export default Home
