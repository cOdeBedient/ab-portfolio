import { StyledHomeNew } from './Home.styled'
import MainButton from './MainButton'
import NavBar from './NavBar'
import FooterNew from './FooterNew'
import TextCycle from './TextCycle'
import { Link } from 'react-router-dom'

interface Backgrounds {
    home: string;
    projects: string;
    smallHead: string;
  }
  
  interface HomeNewProps {
    backgrounds: Backgrounds;
  }

  const HomeNew: React.FC<HomeNewProps> = ({ backgrounds }) => {
    return (
        <StyledHomeNew>
            <img className="background" src={backgrounds.home} alt="Adam's head" />
            <section className="main-elements">
                <div className="header-with-flower">
                    <section className="ab-header">
                        {/* <div className='click-for-more'>
                            <img src="/assets/click-for-more-2.png" />
                        </div> */}
                        <div className="title">
                                <h1>Adam Bedient:</h1>
                            <TextCycle />
                        </div>
                        <p className="tagline">I’m a software developer who loves flowers, solving creative problems technically and solving technical problems creatively.</p>
                    </section>
                    <div className="button-div">
                        <Link to='/projects/' tabIndex={-1}><MainButton buttonText={"Projects"}></MainButton></Link>
                        <Link to='/about/' tabIndex={-1}><MainButton buttonText={"About Me"}></MainButton></Link>
                    </div>
                </div>
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

export default HomeNew