import { StyledProjectsNew } from './ProjectsNew.styled'
import FooterNew from './FooterNew'
import Projects from './Projects'
import { Link } from 'react-router-dom'

interface Backgrounds {
    home: string;
    projects: string;
    smallHead: string;
  }
  
  interface ProjectsNewProps {
    backgrounds: Backgrounds;
  }
  
  const ProjectsNew: React.FC<ProjectsNewProps> = ({ backgrounds }) => {
    return (
        <StyledProjectsNew>
            <img className="background-projects" src={backgrounds.projects} alt="Adam's head" />
            <section className="main-elements">
                <Projects />
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