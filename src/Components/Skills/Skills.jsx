import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaDatabase, FaJava } from 'react-icons/fa'
import './Skills.css'

function Skills() {
    return (
        <div className='skills-container'> 
        <div className='skills-card'>
            <h2>My skills</h2>
            <div className='skills-list'>
                <div className='skill'>
                    <FaHtml5 className='icon'> </FaHtml5>
                </div>

                <div className='skill'>
                    <FaCss3 className='icon'> </FaCss3>
                </div>

                <div className='skill'>
                    <FaJs className='icon'> </FaJs>
                </div>

                <div className='skill'>
                    <FaReact className='icon'> </FaReact>
                </div>

                <div className='skill'>
                    <FaDatabase className='icon'> </FaDatabase>
                </div>
    
                <div className='skill'>
                    <FaJava className='icon'> </FaJava>
                </div>
    
            </div>
        </div>
        </div>

    )
}

export default Skills;