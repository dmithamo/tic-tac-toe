import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import RestartButton from './RestartButton';

const ORIGINAL_STATE = {
  squareValues: {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  },
  xToPlay: true,
  gameOver: false,
  winner: 'Draw',
};

const ClickableSquare = (props) => {
  const { value, gameOver } = props;

  // useState to manage the square's color
  const [squareBG, setSquareBG] = useState('white');

  const handleMouseEnter = () => {
    setSquareBG('#DCDCDC70');
  };

  const handleMouseLeave = () => {
    setSquareBG('white');
  };

  return (
    <td>
      <StyledSquare
        squareBG={squareBG}
        setSquareBG={setSquareBG}
        disabled={gameOver || value !== '' ? true : false}
        onClick={props.onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {value}
      </StyledSquare>
    </td>
  );
};

function Board() {
  // Needs to manage state of entire board
  const [state, setState] = useState(ORIGINAL_STATE);

  const onClick = (index) => {
    const { gameOver } = state;
    if (!gameOver) {
      markMove(index);
      detectGameOver();
    }
  };

  const markMove = (index) => {
    xToPlay
      ? setState({
          ...state,
          squareValues: { ...state.squareValues, [index]: 'X' },
          xToPlay: false,
        })
      : setState({
          ...state,
          squareValues: { ...state.squareValues, [index]: 'O' },
          xToPlay: true,
        });
  };

  const detectGameOver = () => {
    // If all boxes are filled (deadlock)
    let arrayOfSquareValues = Object.values(state.squareValues);
    const gameOver = arrayOfSquareValues.every((val) => val !== '');
    gameOver && setState({ ...state, gameOver });

    //Also check if someone won
    checkWinner('X');
    checkWinner('O');
  };

  const checkWinner = (player) => {
    const { squareValues } = state;
    // Rows
    const rowOneVals = [squareValues[1], squareValues[2], squareValues[3]];
    const rowTwoVals = [squareValues[4], squareValues[5], squareValues[6]];
    const rowThreeVals = [squareValues[7], squareValues[8], squareValues[9]];
    // Columns
    const colOneVals = [squareValues[1], squareValues[4], squareValues[7]];
    const colTwoVals = [squareValues[2], squareValues[5], squareValues[8]];
    const colThreeVals = [squareValues[3], squareValues[6], squareValues[9]];

    // Diagonals
    const diagOne = [squareValues[1], squareValues[5], squareValues[9]];
    const diagTwo = [squareValues[3], squareValues[5], squareValues[7]];

    // Run each line thro the win checking test
    for (let line of [
      rowOneVals,
      rowTwoVals,
      rowThreeVals,
      colOneVals,
      colTwoVals,
      colThreeVals,
      diagOne,
      diagTwo,
    ]) {
      checkEachLineForWin(line, player);
    }
  };

  const checkEachLineForWin = (line, player) => {
    const gameOver = line.every((val) => val === player);
    gameOver &&
      setState({
        ...state,
        gameOver,
        winner: player === 'X' ? 'X won' : 'O won',
      });
  };

  const resetGame = () => {
    //Restore original state
    setState(ORIGINAL_STATE);
  };

  const { squareValues, xToPlay, gameOver, winner } = state;
  return (
    <Fragment>
      <Subheader>{`${
        !gameOver
          ? xToPlay
            ? 'X to play'
            : 'O to play'
          : `Game over! ${winner}`
      }`}</Subheader>
      <Table>
        <tbody>
          <tr>
            <ClickableSquare
              onClick={() => onClick(1)}
              value={squareValues[1]}
              gameOver={gameOver}
            />
            <ClickableSquare
              onClick={() => onClick(2)}
              value={squareValues[2]}
              gameOver={gameOver}
            />
            <ClickableSquare
              onClick={() => onClick(3)}
              value={squareValues[3]}
              gameOver={gameOver}
            />
          </tr>
          <tr>
            <ClickableSquare
              onClick={() => onClick(4)}
              value={squareValues[4]}
              gameOver={gameOver}
            />
            <ClickableSquare
              onClick={() => onClick(5)}
              value={squareValues[5]}
              gameOver={gameOver}
            />
            <ClickableSquare
              onClick={() => onClick(6)}
              value={squareValues[6]}
              gameOver={gameOver}
            />
          </tr>
          <tr>
            <ClickableSquare
              onClick={() => onClick(7)}
              value={squareValues[7]}
              gameOver={gameOver}
            />
            <ClickableSquare
              onClick={() => onClick(8)}
              value={squareValues[8]}
              gameOver={gameOver}
            />
            <ClickableSquare
              onClick={() => onClick(9)}
              value={squareValues[9]}
              gameOver={gameOver}
            />
          </tr>
        </tbody>
      </Table>
      <RestartButton
        disabled={gameOver ? false : true}
        onClick={() => resetGame()}
      />
    </Fragment>
  );
}

const StyledSquare = styled.button`
  color: black;
  background-color: ${(props) => props.squareBG};
  font-family: monospace;
  font-weight: bold;
  font-size: 80px;
  padding: 10px;
  text-align: center;
  width: 100px;
  height: 100px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border: 1px solid black;
  outline: none;
`;

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`;

const Subheader = styled.div`
  color: black;
  font-family: monospace;
  font-weight: bold;
  font-size: 20px;
`;

export default Board;
