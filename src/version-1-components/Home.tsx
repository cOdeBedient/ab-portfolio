import { StyledHome } from './Home.styled'
import NavBar from '../NavBar'
import Footer from './Footer'
import TechStack from '../TechStack'
import Projects from '../Projects'
import About from '../About'
import ScrollingLine from '../ScrollingLine'

interface Backgrounds {
    home: string;
    projects: string;
    smallHead: string;
  }
  
  interface HomeProps {
    backgrounds: Backgrounds;
  }

  const Home: React.FC<HomeProps> = ({ backgrounds }) => {
    return (
        <StyledHome>
            
            {/* <img className="background" src='/assets/bright-flower-background.jpg' alt="flower backround" /> */}
            <NavBar />
            {/* <ScrollingLine /> */}
            <section className="main-elements">
                <div className="header-with-flower">
                    <div className="ab-header">
                        <h1>Adam's Mood Board</h1>
                        <h2>I’m a software developer who loves flowers, solving creative problems technically and solving technical problems creatively.</h2>
                    </div>
                    <img className="flower" src='/assets/flower-bigger-4.png' alt="flower" />
                </div>
            
                <TechStack />
                <Projects />
                <About backgrounds={backgrounds}/>
                <Footer />
            </section>
        </StyledHome>
    )
}

export default Home