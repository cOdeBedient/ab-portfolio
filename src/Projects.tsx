import { StyledProjectsNew } from './Projects.styled'
import FooterNew from './FooterNew'
import { Link } from 'react-router-dom'
import projectsData from './data/projectsData'
import ProjectNew from './Project'
import { motion } from "framer-motion"

interface Backgrounds {
    home: string;
    projects: string;
    smallHead: string;
  }
  
  interface ProjectsNewProps {
    backgrounds: Backgrounds;
  }
  
  const ProjectsNew: React.FC<ProjectsNewProps> = ({ backgrounds }) => {
    const projectElements: React.ReactNode[] =
    projectsData.map((project) => {
        return (
          <motion.div className="project-div"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <ProjectNew key={project.name} name={project.name} thumbnail={project.thumbnail} deployed={project.deployed} repo={project.repo} tagline={project.tagline}/>
          </motion.div>
        )
    })

    return (
        <StyledProjectsNew>
            <img className="background-projects" src={backgrounds.projects} alt="Adam's head" />
            <section className="main-elements">
            <section className="projects-container">
                <div className='projects'>
                {projectElements}
                </div>
            </section>
            </section>
            <div className="footer">
                <Link to='/' className="home-button">
                    <img src="/assets/tech-logos/home-button.svg" alt="link to home" />
                </Link>
                <FooterNew />
            </div>
        </StyledProjectsNew>
    )
}

export default ProjectsNew