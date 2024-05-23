import { StyledNavBar } from './NavBar.styled'

const NavBar: React.FC = () => {
    return (
        <StyledNavBar>
            <button>about</button>
            <button>contact</button>
            <button>projects</button>
            <button>blog</button>
        </StyledNavBar>
    )
}

export default NavBar