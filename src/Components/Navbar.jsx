import React from 'react'
import Logo from '../assets/logo1.png'

const Navbar = () => {
  return (
        <nav>
           <div className='nav-logo'>
                <img src={Logo} alt=''  />
           </div>
           <div className='nav-links-container'>
            <a href="">Home</a>
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">contact</a>
            <button className='nav-button'>
                Download Brochure
            </button>
           </div>
        
        </nav>
      
    
  )
}

export default Navbar

