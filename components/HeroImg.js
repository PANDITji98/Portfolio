import React from 'react'
import './HeroImgStyle.css'
import IntroImg from '../assets/introImg.jpg' 
import Resume from '../assets/Anshul Jha_Resume.pdf'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='intro-img'/>
        </div>
        <div className='content'>
          <h1>Hello Everyone!</h1>
          <p>Welcome to my first React.JS portfolio</p>
          <div>
            <Link target="_blank" to="https://www.linkedin.com/in/anshul-jha-86b963227?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIudrIvo3ReOuvSgredRd9Q%3D%3D" className='btn'>LinkedIn</Link>
            <Link target="_blank" to={Resume} className='btn btn-light'>CV</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg