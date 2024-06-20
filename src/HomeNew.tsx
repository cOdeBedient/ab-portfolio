import { StyledHomeNew } from './HomeNew.styled'
import NavBar from './NavBar'
import FooterNew from './FooterNew'
import TextCycle from './TextCycle'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
    return (
        <StyledHomeNew>
            {/* <img className="background" src='/assets/bright-flower-background.jpg' alt="flower backround" /> */}
            {/* <NavBar /> */}
            {/* <ScrollingLine /> */}
            <img className="background" src='/assets/adam-head.jpg' alt="Adam's head" />
            <section className="main-elements">
                <div className="header-with-flower">
                    <section className="ab-header">
                        {/* <div className="black-box"></div> */}
                        <div className="title">
                            <h1>Adam Bedient:</h1>
                            <TextCycle />
                        </div>
                        <p>I’m a software developer who loves flowers, solving creative problems technically and solving technical problems creatively.</p>
                    </section>
                    <div className="button-div">
                        <Link to='/projects/' ><button>Projects</button></Link>
                        <Link to='/about/'><button>About Me</button></Link>
                    </div>
                </div>
                    {/* <div className="home-socials">
                        <img src="/assets/tech-logos/github.svg" alt="github logo" />
                        <img src="/assets/tech-logos/instagram.svg" alt="github logo" />
                        <img src="/assets/tech-logos/linkedin.svg" alt="github logo" />
                    </div> */}
                    {/* <img className="flower" src='/assets/flower-bigger-4.png' alt="flower" /> */}
{/*             
                <TechStack />
                <Projects />
                <About />
                <Footer /> */}
            </section>
            <div className="footer">
                <Link to='/' className="home-button">
                    <img src="/assets/tech-logos/home-button.svg" alt="link to home" />
                </Link>
                <FooterNew />
            </div>
        </StyledHomeNew>
    )
}

export default Home