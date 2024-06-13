import { StyledAboutNew } from './AboutNew.styled'
import NavBar from './NavBar'
import Footer from './Footer'
import FooterNew from './FooterNew'
import TechStack from './TechStack'
import Projects from './Projects'
import About from './About'
import ScrollingLine from './ScrollingLine'

const AboutNew: React.FC = () => {
    return (
        <StyledAboutNew>
            <section className="main-elements">
                <About />
                <TechStack />

            </section>
        </StyledAboutNew>
    )
}

export default AboutNew