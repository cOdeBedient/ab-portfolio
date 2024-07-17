import { StyledProjects } from './Projects.styled'
import projectsData from './data/projectsData'
import Project from './version-1-components/Project'
import ProjectNew from './ProjectNew'
import { motion } from "framer-motion"

const Projects: React.FC = () => {

console.log(projectsData)

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
    <StyledProjects>
        {/* <h3> Projects</h3> */}
        <div className='projects'>
          {projectElements}
        </div>
    </StyledProjects>
  )
}

export default Projects

