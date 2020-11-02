import { StyledButton } from './styles/StyledButton';

const StartButton = ({ callback }) => {
  return <StyledButton onClick={callback}>Start Game</StyledButton>;
};

export default StartButton;
