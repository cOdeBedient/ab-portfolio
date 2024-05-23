import { StyledProject } from './Project.styled'

interface ProjectProps {
    name: string,
    thumbnail: string,
    deployed?: string,
    repo?: string,
}

const Tech: React.FC<ProjectProps> = ({ name, thumbnail, deployed, repo }) => {

    return (
        <StyledProject>
            <p>{name}</p>
            <p>{deployed}</p>
            <p>{repo}</p>
            <img src={thumbnail} alt={`${name} logo`} />
        </StyledProject>
    )
}

export default Tech