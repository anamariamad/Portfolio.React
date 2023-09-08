import React from 'react';
import './Body.css';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import ContactMe from '../ContactMe/ContactMe';

function Body() {
    return(
        <>
            <div className='body-container'>
                <About id="about" />

                <Skills id="skills" />

                <Projects id="projects" />

                <ContactMe id="contactMe"/>
            </div>
        </>
    )
}

export default Body;