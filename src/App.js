import React from 'react';
import styled from 'styled-components';
import Copyright from './components/Copyright';
import Board from './components/Board';

const App = () => (
  <Container>
    <header>
      <h1>Tic to the Tac Toe</h1>
      <Copyright />
      <Board />
    </header>
  </Container>
);

const Container = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  margin: auto;
  text-align: center;
`;

export default App;
