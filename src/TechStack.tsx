import { StyledTechStack } from './TechStack.styled'
import Tech from './Tech'
import techStackData from './techStackData'

const TechStack: React.FC = () => {

    const technologies: React.ReactNode[] =
        techStackData.map((stackData) => {
            return <Tech key={stackData.tech} tech={stackData.tech} logo={stackData.logo} />
        })


    return (
        <StyledTechStack>
            <h3>Tech Stack</h3>
            <div className='techs'>
                {technologies}
            </div>
        </StyledTechStack>
    )
}

export default TechStack