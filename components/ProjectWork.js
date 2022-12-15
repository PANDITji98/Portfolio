import React from 'react'
import './ProjectCard.css'
import ProjectCardData from './ProjectCardData'
import ProjectCard from './ProjectCard'


const ProjectWork = () => {
  return (
    <div className='container'>
    <h1 className='project-heading'>Projects</h1>
    <div className='project-container'>
        {ProjectCardData.map((val, ind) => {
            return(
                <ProjectCard
                key={ind}
                img={val.img}
                title={val.title}
                text={val.text}
                link={val.link} 
                />
            )
        })}
    </div>
    </div>
  )
}

export default ProjectWork
