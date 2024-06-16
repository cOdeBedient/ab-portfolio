import { StyledAboutNew } from './AboutNew.styled'
import NavBar from './NavBar'
import Footer from './version-1-components/Footer'
import FooterNew from './FooterNew'
import TechStack from './TechStack'
import Projects from './Projects'
import About from './About'
import ScrollingLine from './ScrollingLine'
import { Link } from 'react-router-dom'

const AboutNew: React.FC = () => {
    return (
        <StyledAboutNew>
            <section className="main-elements">
            <Link to='/' className="link-home"><img src="/assets/tech-logos/home-button.svg" alt="link to home" /></Link>
                <About />
                <TechStack />

            </section>
        </StyledAboutNew>
    )
}

export default AboutNew