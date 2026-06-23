import { StyledProjectNew } from './Project.styled'

interface ProjectProps {
    name: string,
    thumbnail: string,
    tagline: string,
    deployed?: string,
    repo?: string,
    login?: string | null
}

const Tech: React.FC<ProjectProps> = ({ name, thumbnail, deployed, repo, login, tagline }) => {

    return (
        <StyledProjectNew>
                <div className="no-tagline-container">
                    <div className="project-details">
                        <h2>{name}</h2>
                        <div className="deployed-repo">
                            <a href={deployed} target="_blank" rel="noreferrer">deployed</a>
                            <p className="line">|</p>
                            <a href={repo} target="_blank" rel="noreferrer">repo</a>
                        </div>
                        {login && <p className="password-text">{login}</p>}
                    </div>
                    <div className="image-container">
                        <img src={thumbnail} alt="project thumb" />
                    </div>
                </div>
                <p>{tagline}</p>
        </StyledProjectNew>
    )
}

export default Tech