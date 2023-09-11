import React, { useEffect, useState } from "react";
import "./Projects.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Projects() {
  // Dentro de projects se deben mostrar tus proyectos con los enlaces de Git
  // Y un formulario donde se deberian poder subir los proyectos
  // - Nombre
  // - Descripcion
  // - Imagen
  // - Enlace de Git

  const [projects, setProjects] = useState([])

  const getProjects = async () => {
    try {
      const url = "http://localhost:8083/api/portfolio/projects";
      const res = await axios.get(url);
      setProjects(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects()
  }, [])

  const [newProject, setNewproject] = useState({
    name: "",
    description: "",
    image: "",
    repositoryLink: "",
    repositoryDeploy: ""
  })

  const handleChange = (e) => {
    setNewproject({
      ...newProject,
      [e.target.name] : e.target.value
    })
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = "http://localhost:8083/api/portfolio/projects";
      await axios.post(url, newProject);
      console.log("The project was created!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="github-projects-card">
        <div className="card">
          <div className="card-header">My GitHub's projects </div>
          <div className="card-body">
            <div className="card-list-project">
              <ul>
                {projects?.map((project, index) => (
                  <p key={index}>
                    <li key={index}>
                      <span className="card-name">
                        <strong>{project.name} </strong>
                      </span>{" "}
                      :
                      <span className="card-description">
                        {" "}
                        {project.description}{" "}
                      </span>
                      <p key={index}>
                        <strong>
                          {" "}
                          <span className="card-link"> GitHub: </span>
                        </strong>{" "}
                        <span className="card-link-font"> {project.repositoryLink} </span>
                      </p>
                      <Link to={`/${project.id}`}>See details</Link>
                    </li>
                  </p>
                ))}
              </ul>
            </div>

            <div className="project-form">
              <h3> ADD PROJECT </h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="projectName">Proyect's name</label>
                  <input
                    type="text"
                    id="projectName"
                    name="name"
                    value={newProject.name}
                    onChange={handleChange}
                    required
                    placeholder="Proyect's name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectDescription">
                    Project's Description
                  </label>
                  <input
                    type="text"
                    id="projectDescription"
                    name="description"
                    value={newProject.description}
                    onChange={handleChange}
                    placeholder="Project's description"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectImage">Project's Image </label>
                  <input
                    type="text"
                    id="projectImage"
                    name="image"
                    value={newProject.image}
                    onChange={handleChange}
                    placeholder="Project's image"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectURL">URL Git</label>
                  <input
                    type="text"
                    id="projectURL"
                    name="repositoryLink"
                    value={newProject.repositorylink}
                    onChange={handleChange}
                    placeholder="URL Git"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectDeployURL">URL Deploy</label>
                  <input
                    type="text"
                    id="projectDeployURL"
                    name="repositoryDeploy"
                    value={newProject.repositoryDeploy}
                    onChange={handleChange}
                    placeholder="URL Deploy"
                  />
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
