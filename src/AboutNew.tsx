import { StyledAboutNew } from './AboutNew.styled'
import NavBar from './NavBar'
import Footer from './version-1-components/Footer'
import FooterNew from './FooterNew'
import TechStack from './TechStack'
import Projects from './Projects'
import About from './About'
import { Link } from 'react-router-dom'


interface Backgrounds {
    home: string;
    projects: string;
    smallHead: string;
  }
  
  interface AboutNewProps {
    backgrounds: Backgrounds;
  }
  
  const AboutNew: React.FC<AboutNewProps> = ({ backgrounds }) => {
    return (
        <StyledAboutNew>
            <img className="background-about" src={backgrounds.projects} alt="Woods Background" />
            <section className="main-elements">
                <About backgrounds={backgrounds}/>
                <TechStack />
            </section>
            <div className="footer">
                <Link to='/' className="home-button">
                    <img src="/assets/tech-logos/home-button.svg" alt="link to home" />
                </Link>
                <FooterNew />
            </div>
        </StyledAboutNew>
    )
}

export default AboutNew