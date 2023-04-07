import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../assets/Vector 1.png'

function Home() {
  return (
    <div className='home-container'>
      <Navbar />
      <div className='home-container'>
        <div className='Banner-background-cont'>
            <img src={BannerBackground} alt="" />
        </div>
        

      </div>
    </div>
  )
}

export default Home
