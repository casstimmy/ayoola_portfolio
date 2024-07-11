import './about.css'
import React from 'react'
import about_img from "../../assets/about_img.jpg";

function About() {
  return (
    <section className='about_container' id='about'>
      <h2>About Page</h2>
      <div className="img-layout">
              <img src={about_img} alt="Ayoola Ayo about-image" className="img" />
          </div>
    </section>
  )
}

export default About
