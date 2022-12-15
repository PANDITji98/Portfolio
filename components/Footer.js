import React from 'react'
import "./FooterStyles.css"
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem",}}/>
                    <div>
                        <p>Shivalik Nagar, BHEL, Ranipur</p>
                        <p>Haridwar, Uttarakhand (249401)</p>
                    </div>
                </div>
                <div className='phone'>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem",}}/>
                    <div>
                        <p>+91 895-846-9269</p>
                    </div>
                </div>
                <div className='email'>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem",}}/>
                    <div>
                        <p>anshul.hdr@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='about-me'>
                 <h4>About Me</h4> 
                 <p>Hi, I guess you have already gone through my portfolio which I tried to create on my own <br/> and this is my very first project that I can show. <br/> If you like the website please let me know!</p>
                </div>
                <div className='social-media'>
                    <FaFacebook size={20} style={{color: "#fff", marginRight: "0.5rem"}}/>
                    <FaInstagram size={20} style={{color: "#fff", marginRight: "0.5rem"}}/>
                    <FaLinkedin size={20} style={{color: "#fff", marginRight: "0.5rem"}}/>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Footer