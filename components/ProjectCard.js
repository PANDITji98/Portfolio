import React from 'react'
import './ProjectCard.css'
import { NavLink } from 'react-router-dom'
import ProjectCardData from './ProjectCardData'

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
    <img src={props.img} alt='image'/>
    <h2 className='project-title'>{props.title}</h2>
    <div className='project-details'>
        <p>{props.text}</p>
        <div className='project-btns'>
            <NavLink to={props.link} className='btn'>LINK</NavLink> 
        </div>
    </div>
</div>
  )
}

export default ProjectCard