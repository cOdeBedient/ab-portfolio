import { StyledTechStack } from './TechStack.styled'
import Tech from './Tech'
import techStackData from './data/techStackData'
import { motion } from "framer-motion"


const TechStack: React.FC = () => {

    const technologies: React.ReactNode[] =
        techStackData.map((stackData) => {
            return <Tech key={stackData.tech} tech={stackData.tech} logo={stackData.logo} />
        })


    return (
        <StyledTechStack>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <h3>Some Things I know</h3>
                <div className='techs'>
                    {technologies}
                </div>
                </motion.div>
        </StyledTechStack>
    )
}

export default TechStack