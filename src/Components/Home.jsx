import React from 'react'
import "./Home.css";
import Barner from '../assets/yes.png'

function Home() {
  return (
    <div className='home-page'>
      <div className='left-section'>
        <h1 className="title">Simple solutions for independent and international schools to understand student engagement.</h1>
        <p className="description">Akademika makes ridiculously easy-to-use dashboards, attendance, extracurricular, emergency management and wellbeing solutions.</p>

        <div className="buttons">
          <button className="filled-button">Get Started for Free</button>
          <button className="bordered-button">Learn More</button>
        </div>

      </div>

      <div className="right-section">
        <img src={Barner} alt="" />
      </div>

    </div>
  )
}

export default Home
