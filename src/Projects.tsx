import { StyledProjects } from './Projects.styled'
import projectsData from './data/projectsData'
import Project from './Project'

const Projects: React.FC = () => {

    const projectElements: React.ReactNode[] =
        projectsData.map((project) => {
            return <Project key={project.name} name={project.name} thumbnail={project.thumbnail} deployed={project.deployed} repo={project.repo}/>
        })

  return (
    <StyledProjects>
      {projectElements}
    </StyledProjects>
  )
}

export default Projects

