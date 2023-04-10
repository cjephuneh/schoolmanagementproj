import React from 'react';
import './Features.css'; 
 import Barner from '../assets/seo 1.png'

function Features() {
  return (
    <div classname="features-page">
        <div classname="section-one">
            <div classname='description-title'>
                <h1 classname='title-1'>A Complete Range Of Features</h1>
                <p>System defining the full modules which can support the support the school daily<br></br> 
                operations with website and mobile apps for the parents, students <br></br>
                and teachers            
                </p>
            </div>

            <div className="feature-box">
                <div className="feature-image">
                    <img src={Barner} alt="" />
                </div>
                <div className="feature-description">
                    <h3>Intuitive Dashboard</h3>
                    <p>website and mobile apps for website and<br></br> 
                    mobile apps for the parents,students <br></br>
                    and teachers the parents,students 
                    </p>
                </div>
            </div>


        </div>
    </div>
  );
}

export default Features;
