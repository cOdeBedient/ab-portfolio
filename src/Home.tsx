import { StyledHome } from './Home.styled'
import NavBar from './NavBar'
import Footer from './Footer'
import TechStack from './TechStack'

const Home: React.FC = () => {
    return (
        <StyledHome>
            <NavBar />
            <h2>Hello, I'm Adam</h2>
            <h3>I’m a software developer who loves flowers, solving creative problems technically and solving technical problems creatively.</h3>
            <TechStack />
            <Footer />
        </StyledHome>
    )
}

export default Home