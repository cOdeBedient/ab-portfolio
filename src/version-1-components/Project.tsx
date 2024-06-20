import { StyledProject } from './Project.styled'
import { motion } from "framer-motion"

interface ProjectProps {
    name: string,
    thumbnail: string,
    tagline: string,
    deployed?: string,
    repo?: string,
}

const Tech: React.FC<ProjectProps> = ({ name, thumbnail, deployed, repo, tagline }) => {

    return (
        <StyledProject>
                <div className="no-tagline-container">
                    <img src={thumbnail} alt={`${name} logo`} />
                    <div className="project-details">
                        <h4>{name}</h4>
                        <div className="deployed-repo">
                            <a href={deployed}>deployed</a>
                            <p className="line">|</p>
                            <a href={repo}>repo</a>
                        </div>
                    </div>
                </div>
                <p>{tagline}</p>
        </StyledProject>
    )
}

export default Tech