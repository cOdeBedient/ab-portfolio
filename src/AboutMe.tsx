import { StyledAbout } from './AboutMe.styled'
import { motion } from "framer-motion"


interface Backgrounds {
    home: string;
    projects: string;
    smallHead: string;
  }
  
  interface AboutProps {
    backgrounds: Backgrounds;
  }

const About: React.FC<AboutProps> = ({ backgrounds }) => {
    return (
        <StyledAbout>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
            <div className="about-section">
            <img className="ferry-photo" src={backgrounds.smallHead} alt='Adam on a ferry' />
            <p>As a career-shifter (career-blender?) with a background in math and computer science, I have been involved in all sides of project execution. Whether working to wholly redesign and code a new data-flow and user interface for a travel and commerce website, or filming, editing, and producing a 5-year long documentary about the refugee population in Central New York, I flourish when the work is dynamic. I believe that understanding project scope makes a good developer, and my superpower is seeing the forest from the trees. I have found that a good idea is only a good if it makes sense for the user, and code is only good if it is readable and scalable.<br></br><br></br>
An expert learner and seasoned technical storyteller, my innate - and acquired! - ability to understand and then convey information to solve problems creatively and collaboratively paved the runway for my inevitable return to the technical world. My passion for logical communication makes me an expert at sniffing out a problem and finding a path forward, while my creativity and ability to lead through listening makes me an ideal team member.<br></br><br></br>
I believe that humanity comes first, a lesson I first learned as a filmmaker, and one I've carried with me into my work as an engineer. If we deny our humanity, the work suffers. Every time. This mantra has guided much of my work, and I view collaboration as a soup to nuts concept. The user is a collaborator just as much as the back end dev. If we aren’t tuned into the breadth of each other’s experiences during the creation process, THE WORK SUFFERS.<br></br><br></br>

During my time as a creative storyteller, documentarian, editor, director, and cinematographer, I obtained what I like to consider a masters-level degree in critical thinking and small team collaboration. As a project lead, I was integral to shaping a creative vision, leading meetings from broad and conceptual to granular and administrative, and helping to manage other team members.<br></br><br></br>

If it sounds like I am speaking your language, or if you know someone I should talk to, please reach out! I would love to connect over a zoom tea-time, or a game of pickleball.</p><br></br><br></br>
<p>adambedient@gmail.com • 315-941-0948</p>
            </div>
            </motion.div>
        </StyledAbout>
    )
}

export default About