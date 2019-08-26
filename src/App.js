import React from 'react';
import Copyright from './components/Copyright';
import Board from './components/Board';

const App = () => (
  <div>
    <header>
      <h1>Tic to the Tac Toe</h1>
      <Copyright />
      <Board />
    </header>
  </div>
);

export default App;
