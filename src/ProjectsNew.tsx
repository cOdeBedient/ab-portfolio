import { StyledProjectsNew } from './ProjectsNew.styled'
import NavBar from './NavBar'
import Footer from './Footer'
import TechStack from './TechStack'
import Projects from './Projects'
import About from './About'
import ScrollingLine from './ScrollingLine'

const ProjectsNew: React.FC = () => {
    return (
        <StyledProjectsNew>
            
            {/* <img className="background" src='/assets/bright-flower-background.jpg' alt="flower backround" /> */}
            <NavBar />
            {/* <ScrollingLine /> */}
            <section className="main-elements">
                <Projects />
                {/* <Footer /> */}
            </section>
        </StyledProjectsNew>
    )
}

export default ProjectsNew