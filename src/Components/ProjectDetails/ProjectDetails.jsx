import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const ProjectDetails = () => {

    const {id} = useParams()
    const [project, setProject] = useState({})

    const getProjectById = async () => {
        try {
          const url = `http://localhost:8080/api/portfolio/projects/${id}`;
          const res = await axios.get(url);
          setProject(res)
        } catch (error) {
          console.log(error);
        }
      };

      const [updatedProject, setUpdatedproject] = useState({
        name: project.name,
        description: project.description,
        image: project.image,
        repositorylink: project.repositoryLink,
        repositoryDeploy: project.repositoryDeploy
      })

      const handleChange = (e) => {
        setUpdatedproject({
          ...updatedProject,
          [e.target.name] : e.target.value
        })
      }
    
      const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
          const url = `http://localhost:8080/api/portfolio/projects/${id}`;
          await axios.put(url, updatedProject);
          console.log("The project was edited!");
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div>
        {project.name}
        {project.description}
        <img src={project.image} alt={project.name} />
        <button> <a href={project.repositoryLink} /> </button>
        <button> <a href={project.repositoryDeploy} /> </button>
        <div className="project-form">
              <h3> EDIT PROJECT </h3>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="projectName">Proyect's name</label>
                  <input
                    type="text"
                    id="projectName"
                    name="name"
                    value={updatedProject.name}
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
                    value={updatedProject.description}
                    onChange={handleChange}
                    placeholder="Project's description"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectImage">Project's Image </label>
                  <input
                    type="file"
                    id="projectImage"
                    name="image"
                    value={updatedProject.image}
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
                    value={updatedProject.repositorylink}
                    onChange={handleChange}
                    placeholder="URL Git"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="projectDeployURL">URL Deploy</label>
                  <input
                    type="text"
                    id="projectDeployURL"
                    name="repositoryLink"
                    value={updatedProject.repositoryDeploy}
                    onChange={handleChange}
                    placeholder="URL Git"
                  />
                </div>
                <button type="submit">Send</button>
              </form>
            </div>
    </div>
  )
}

export default ProjectDetails