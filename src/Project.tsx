import { StyledProjectNew } from './Project.styled'

interface ProjectProps {
    name: string,
    thumbnail: string,
    tagline: string,
    deployed?: string,
    repo?: string,
}

const Tech: React.FC<ProjectProps> = ({ name, thumbnail, deployed, repo, tagline }) => {

    return (
        <StyledProjectNew>
                <div className="no-tagline-container">
                    <div className="project-details">
                        <h2>{name}</h2>
                        <div className="deployed-repo">
                            <a href={deployed} target="_blank">deployed</a>
                            <p className="line">|</p>
                            <a href={repo} target="_blank">repo</a>
                        </div>
                    </div>
                </div>
                <p>{tagline}</p>
        </StyledProjectNew>
    )
}

export default Tech