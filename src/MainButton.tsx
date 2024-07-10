import { StyledMainButton } from './MainButton.styled'
import NavBar from './NavBar'
import FooterNew from './FooterNew'
import TextCycle from './TextCycle'
import { Link } from 'react-router-dom'

interface ButtonProps {
    buttonText: string
  }

  const MainButton: React.FC<ButtonProps> = ({ buttonText }) => {
    return (
        <StyledMainButton>
            {buttonText}
        </StyledMainButton>
    )
}

export default MainButton