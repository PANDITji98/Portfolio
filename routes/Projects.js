import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import ProjectWork from '../components/ProjectWork'


const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="Here are some of my projects" text="Please take a look!"/>
      <ProjectWork/>                           {/* fetched data from Local API by creating one!!!*/}
      <Footer />
    </div>
  )
}

export default Projects