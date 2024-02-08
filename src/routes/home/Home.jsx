import React, { useRef, useState } from "react"
import Hero from "../hero/Hero"
import Products from "../products/Products"
import About from "../about/About"
import Contact from "../contact/Contact"
import Spacepink from "../../assets/images/pink_space.png"
import Sparkles from "../../components/sparkles/Sparkles"
import SpaceOverlay from "../../components/stars/Stars"
import Services from "../services/Services"

import Space from "../../assets/images/space_bussy2.png"

import "./home.scss"

const Home = () => {
  const ref = useRef()

  return (
    <>
      <div>
        <div className="sparkles-container">
          <Sparkles count={1000} />
        </div>
        <div className="hero-section" id="hero">
          <Hero />
        </div>

        <div className="space-container">{/* <SpaceOverlay /> */}</div>

        {/* <div className="another-overlay"> */}

        <div className="product-section" id="our-work">
          <Products />
        </div>
        <div className="services-section">
          <Services />
        </div>
        <div className="about-section " id="about">
          <div className="space-layer">
            <img src={Space} alt={"space"} className="fuck" />
          </div>
          <div className="about-layer">
            <About />
          </div>
        </div>

        <div className="contact-section" id="contact">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default Home
