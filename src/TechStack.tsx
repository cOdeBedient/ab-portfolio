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
            {technologies}
        </StyledTechStack>
    )
}

export default TechStack