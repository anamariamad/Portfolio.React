import React from "react";
import './Projects.css'

function Projects() {
    // Dentro de projects se deben mostrar tus proyectos con los enlaces de Git
    // Y un formulario donde se deberian poder subir los proyectos
    // - Nombre
    // - Descripcion
    // - Imagen
    // - Enlace de Git

    const projects = [
        {name: 'Broadway Desigh', description: 'Repositorio para practicar html y CSS con motivos de la ciudad de Broadway. Se han usado los siguientes conceptos: Syntax, Selectors, Visual Rules, the Box Model, Display and Positioning, colors and typography', link: 'https://github.com/anamariamad/broadwayDesigh.git'},
        {name: 'Web de Gatos', description: 'Es un mockup de gatitos de figma pasado a código con css y html', link: 'https://github.com/anamariamad/webDeGatos.git'},
        {name: 'FormAStory', description: 'Proyecto para practicar los Formularios', link: 'https://github.com/anamariamad/FormAStory.git'},
        {name: 'MenuBurgers', description: 'Repositorio de un Menú para trabajar los conocimientos de Box Model: height, width, padding, border, and margin', link: 'https://github.com/anamariamad/menuBurgers.git'},
        {name: 'APIdeHarryPotter', description: 'Este es un repositorio que consiste en un proyecto para consumir una API de Harry Potter', link: 'https://github.com/anamariamad/APIdeHarryPotter.git'},
        {name: 'HackatonF5', description: 'El Banco de Tiempo de CODERS "CODEXCHANGE" es una plataforma que conecta a anunciantes que quieran compartir sus habilidades de desarrollo. ', link: 'https://github.com/monicadefran/Equipo_19_HackathonF5.git'},
        {name: 'Proyecto CRUD parte 1', description: 'Desarrollar una aplicación "CRUD" Web en Java que permita pedir cita a las personas del equipo de desarrollo y los equipos para solucionar problemas', link: 'https://github.com/ALABERTUS/Lo_tienes_CRUDo.git'},
        {name: 'Proyecto CRUD parte 2', description: 'Parte front-end', link: 'https://github.com/ALABERTUS/LO-TIENES-CRUDO.git'}
    ]

    const handleFormSubit = (e) => {
        console.log('e', e)
    }
    return(

        <>
        <div className="github-projects-card">
            <div className="card">
                <div className="card-header">My GitHub's projects </div>
                <div className="card-body">
                    <div className="card-list-project">
                        <ul>
                            {projects.map((project, index) => (
                                <p key={index}> 
                                    <li key={index}>
                                        <span className="card-name"><strong>{project.name} </strong></span> :  
                                        <span className="card-description"> {project.description} </span>
                                        <p key={index}>
                                            <strong> <span className="card-link"> GitHub: </span></strong> <span className="card-link-font"> {project.link} </span>
                                        </p>
                                    </li>
                                </p>
                            ))}
                        </ul>
                    </div>

                    <div className="project-form">
                        <h3> ADD PROJECT </h3>
                        <form onSubmit={handleFormSubit}>
                            <div className="form-group">
                                <label htmlFor="projectName">Proyect's name</label>
                                <input
                                    type="text"
                                    id="projectName"
                                    name="projectName"
                                    required
                                    placeholder="Proyect's name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectDescription">Project's Description</label>
                                <input
                                    type="text"
                                    id="projectDescription"
                                    name="projectDescription"
                                    placeholder="Project's description"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectImage">Project's Image </label>
                                <input
                                    type="file"
                                    id="projectImage"
                                    name="projectImage"
                                    placeholder="Project's image"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectURL">URL Git</label>
                                <input
                                    type="text"
                                    id="projectURL"
                                    name="projectURL"
                                    placeholder="URL Git"
                                />
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Projects;