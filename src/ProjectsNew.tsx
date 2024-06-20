import { StyledProjectsNew } from './ProjectsNew.styled'
import FooterNew from './FooterNew'
import Projects from './Projects'
import { Link } from 'react-router-dom'

const ProjectsNew: React.FC = () => {
    return (
        <StyledProjectsNew>
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