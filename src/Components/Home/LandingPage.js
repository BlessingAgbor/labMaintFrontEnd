import React from 'react'
import Hero from "./HeroPage"
import About from "./About"
import Why from "./WhyUs"

const LandingPage = () => {
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <Hero />
      <About />
      <Why />
    </div>
  );
}

export default LandingPage