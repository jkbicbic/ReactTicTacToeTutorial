import styled from 'styled-components';
import './App.css';

import Game from './components/game';

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <GameContainer>
      <Game />
    </GameContainer>
  );
}

export default App;