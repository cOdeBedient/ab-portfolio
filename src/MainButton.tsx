import { StyledMainButton } from './MainButton.styled'

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