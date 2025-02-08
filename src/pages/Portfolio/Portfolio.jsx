import { NavLink } from "react-router"
import projects from "../../data/projects"
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="projects">
                {projects.map(project => (
                    <div className="project">
                        <img src={project.image} alt={project.name} />
                        <div className="project-content">
                            <h3>
                                <NavLink to={project.githubLink} target="_blank">{project.name} <span><FaGithub /></span></NavLink></h3> 
                            <p>{project.technologies}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio