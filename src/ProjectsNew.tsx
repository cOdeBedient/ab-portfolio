import { StyledProjectsNew } from './ProjectsNew.styled'
import Projects from './Projects'
import { Link } from 'react-router-dom'

const ProjectsNew: React.FC = () => {
    return (
        <StyledProjectsNew>
            <Link to='/' className="link-home"><img src="/assets/tech-logos/home-button.svg" alt="link to home" /></Link>
            <section className="main-elements">
                <Projects />
            </section>
        </StyledProjectsNew>
    )
}

export default ProjectsNew