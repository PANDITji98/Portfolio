import "./AboutContentStyles.css"
import DPS2 from '../assets/DPS2.png'
import FMS from '../assets/FMS.png'
import GKV from '../assets/GKV.png'
import Ugly from '../assets/Ugly.jpg'
import LessUgly from '../assets/LessUgly.jpg'
import coding from '../assets/coding.jpeg'
import books from '../assets/books.jpg'
import Gaming from '../assets/Gaming.jpg'
import fitness from '../assets/fitness.jpeg'
import { Link } from 'react-router-dom'
import React from 'react'


const AboutContent = () => {
  return (
    <div className="about">
            <h1>HI!</h1>
            <p>First of all, welcome to my very first React app. And thank you so much for your time! <br/> My name is Anshul Jha and I come from a middle-class family.My father is a businessman and my Mother assist him in the business as well as she manage household stuff.<br/> I did my graduation (B.B.A) and masters (M.B.A) from the Gurukul Kangri University with Human Resources and Finance as major and minor specializations. I do not come from a technical background but I have keen interest and passion for computers and new tech. I have been assisting my Father since 2019 in Tally.ERP 9 and Tally Prime, I have been an Admin and Accountant in a factory, an HR intern and a US IT Recruiter. Working as an IT Recruiter, I got to know that I can also try my luck in IT industry as I was alraedy into gaming and stuff a lot. That is where I realized that I can learn with full interest and passion, & then only I decided to learn JavaScript,HTML,CSS as well as React.JS. I love solving problems beause it helps me get good sleep with satisfaction that I do hold power to serve and with that I can make money as well. Afterall! it is a blessing if your mentor supports and guides you well.</p>
            <div className="journey">
                <div className="qualifications">
                  <h2>Schooling</h2>
                  <img src={DPS2} alt="DPS" className="img1"/>
                  <p>I did my schooling from Delhi Public School, Haridwar.<br/> High school with 58.9% & Intermediate from Commerce with Financial Marketing Management (FMM) with 68.2%. <br/> In school only I learned some basics about C and C++.</p>
                  <h2>Graduation-2016 to 2019</h2>
                  <img src={GKV} alt="GKV" className="img1"/>
                  <p>Further, I decided to enroll myself in <span>Bachelors in Business Administration (B.B.A)</span> from Gurukul Kangri University with Human Resource and Finance as major and minor subjects.<br/> Here I learned in depth stuff about management and got connected with really supportive and qualified mentors who guided me.</p>
                  <h2>Post-Graduation-2019 to 2021</h2>
                  <img src={FMS} alt="FMS" className="img1"/>
                  <p>Right after completing my graduation I decided to enroll in <span>Masters in Business Administation (M.B.A)</span> from the same University with the same specializations I had during my graduation. <br/> It was the time of Corona outbreak.</p>
                  <h2>One of my biggest acheivement</h2>
                  <img src={Ugly} alt="Ugly" className="img2"/>
                  <img src={LessUgly} alt="LessUgly" className="img2"/>
                  <p>I lost more than 30 Kilograms during my post-graduation in 2019 as I was gaining weight rapidly.<br/>Earlier I was 107.6 kilos but one of my childhood best friends, <Link to="https://www.linkedin.com/in/prabal-sharma-980a001a2?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxgS8jJG9QbSXzVptLHrX6Q%3D%3D" target="blank" style={{color: " rgb(221, 241, 36)"}}>Prabal Sharma</Link> helped me by providing me a proper diet chart and training.</p>
                  <h2>Hobbies</h2>
                  <div className="hobbies">
                  <img src={coding} alt="coding" className="img3"/>
                  <img src={fitness} alt="fitness" className="img3"/>
                  <img src={Gaming} alt="gaming" className="img3"/>
                  <img src={books} alt="books" className="img3"/>
                </div>
                </div>
            </div>
    </div>
  )
}

export default AboutContent