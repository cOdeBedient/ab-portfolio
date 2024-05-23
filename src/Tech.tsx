import { StyledTech } from './Tech.styled'

interface TechProps {
    tech: string;
    logo: string;
}

const Tech: React.FC<TechProps> = ({ tech, logo }) => {

    return (
        <StyledTech>
            <p>{tech}</p>
            <img src={logo} alt={`${tech} logo`} />
        </StyledTech>
    )
}

export default Tech