import React from "react";
import './Projects.css'
import axios from "axios";
import { Link } from "react-router-dom";

function Projects() {
    // Dentro de projects se deben mostrar tus proyectos con los enlaces de Git
    // Y un formulario donde se deberian poder subir los proyectos
    // - Nombre
    // - Descripcion
    // - Imagen
    // - Enlace de Git

    const projects = []

    const getProjects = async () => {
        try {
            const url = "http://localhost:8080/api/portfolio/projects"
            const res = await axios.get(url)
            projects = res
        } catch(error) {
            console.log(error)
        }
    }

    const deleteProject = async (id, project) => {
        try {
            const url = `http://localhost:8080/api/portfolio/projects/${id}`
            const res = await axios.delete(url, id, project)
            console.log("The project was deleted!")
        } catch(error) {
            console.log(error)
        }
    }

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
                                        <button onClick={() => deleteProject(project.id, project)} />
                                        <Link to={`/${id}`}>See details</Link>
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