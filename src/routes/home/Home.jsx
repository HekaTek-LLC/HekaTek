import React from "react"
import Hero from "../hero/Hero"
import Products from "../products/Products"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import TechStack from "../../routes/tech-stack/TechStack"
import "./home.scss"

const Home = () => {
  return (
    <>
      <div className="background-dots">
        <div className="hero-section hero-overlay" id="home">
          <Hero />
        </div>
        <div className="services-section" id="services">
          <Services />
        </div>
        <div className="tech-stack-section">
          <TechStack />
        </div>
        <div className="product-section" id="our-work">
          <Products />
        </div>
        <div className="contact-section" id="contact">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default Home
