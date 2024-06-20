import { StyledFooterNew } from './FooterNew.styled'
import { Link } from 'react-router-dom'

const FooterNew: React.FC = () => {
    return (
        <>
            <StyledFooterNew>
                <Link to="https://github.com/cOdeBedient" target="_blank">
                    <img src="/assets/tech-logos/github.svg" alt="github logo" />
                </Link>
                <Link to="https://www.linkedin.com/in/adam-bedient" target="_blank">
                    <img src="/assets/tech-logos/linkedin.svg" alt="linkedIn logo" />
                </Link>
            </StyledFooterNew>
        </>
    )
}

export default FooterNew