import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import AboutSection from '../components/AboutSection.jsx'
import Navbar from '../components/Navbar.jsx'


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <AboutSection />
        </div>
    )
}

export default LandingPage