import React from 'react';
import Copyright from './components/Copyright';
import Grid from './components/Grid';

const App = () => (
  <div>
    <header>
      <h1>Tic to the Tac Toe</h1>
      <Copyright />
      <Grid />
    </header>
  </div>
);

export default App;
