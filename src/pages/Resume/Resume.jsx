import React from 'react'
import { NavLink } from 'react-router'
import SheliaResume from "../../assets/shelia-resume.pdf";

const Resume = () => {
  return (
    <div className='resume'>
        <h1>Resume</h1>
        <p>Download my <NavLink to={SheliaResume} target='_blank'>resume</NavLink></p>
        <div className='skills'>
            <h2>Frontend Proficiencies</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        </div>
        <div className='skills'>
            <h2>Backend Proficiencies</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>REST</li>
            </ul>
        </div>
    </div>
  )
}

export default Resume