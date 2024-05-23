import { StyledHome } from './Home.styled'
import NavBar from './NavBar'
import Footer from './Footer'
import TechStack from './TechStack'
import Projects from './Projects'

const Home: React.FC = () => {
    return (
        <StyledHome>
            <img className="background" src='/assets/bright-flower-background.jpg' alt="flower backround" />
            <NavBar />
            <div className="header-with-flower">
                <div className="ab-header">
                    <h1>Hello, I'm Adam</h1>
                    <h2>I’m a software developer who loves flowers, solving creative problems technically and solving technical problems creatively.</h2>
                </div>
                <img className="flower" src='/assets/single-flower.png' alt="flower" />
            </div>
            <TechStack />
            <Projects />
            <Footer />
        </StyledHome>
    )
}

export default Home