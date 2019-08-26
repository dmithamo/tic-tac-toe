import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const ClickableSquare = (props) => {
  const { value } = props;
  return <StyledSquare onClick={props.onClick}>{value}</StyledSquare>;
};

class Board extends Component {
  constructor(props) {
    super(props);
    // Needs to manage state of entire board
    this.state = {
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
    };

    this.onClick = this.onClick.bind(this);
  }

  async onClick(index) {
    // Needs to be an async function.
    // Ensures move is recorded before detectGameOver is called
    const { gameOver, xToPlay } = this.state;
    if (!gameOver) {
      const currentValue = this.state.squareValues[index];
      await (currentValue === ''
        ? xToPlay
          ? this.setState((prevState) => ({
              ...prevState,
              squareValues: { ...prevState.squareValues, [index]: 'X' },
              xToPlay: false,
            }))
          : this.setState((prevState) => ({
              ...prevState,
              squareValues: { ...prevState.squareValues, [index]: 'O' },
              xToPlay: true,
            }))
        : console.log('You kent play here!'));

      // Check if gameOver
      this.detectGameOver();
    } else {
      console.log('Issover bruh!');
    }
  }

  detectGameOver() {
    // If all boxes are filled (deadlock)
    let arrayOfSquareValues = Object.values(this.state.squareValues);
    const gameOver = arrayOfSquareValues.every((val) => val !== '');
    gameOver && this.setState({ gameOver });
  }

  render() {
    const { squareValues, xToPlay, gameOver } = this.state;
    return (
      <Fragment>
        <Subheader>{`${
          !gameOver ? (xToPlay ? 'X to play' : 'O to play') : 'Game over!'
        }`}</Subheader>
        <Table>
          <tbody>
            <tr>
              <ClickableSquare
                onClick={() => this.onClick(1)}
                value={squareValues[1]}
              />
              <ClickableSquare
                onClick={() => this.onClick(2)}
                value={squareValues[2]}
              />
              <ClickableSquare
                onClick={() => this.onClick(3)}
                value={squareValues[3]}
              />
            </tr>
            <tr>
              <ClickableSquare
                onClick={() => this.onClick(4)}
                value={squareValues[4]}
              />
              <ClickableSquare
                onClick={() => this.onClick(5)}
                value={squareValues[5]}
              />
              <ClickableSquare
                onClick={() => this.onClick(6)}
                value={squareValues[6]}
              />
            </tr>
            <tr>
              <ClickableSquare
                onClick={() => this.onClick(7)}
                value={squareValues[7]}
              />
              <ClickableSquare
                onClick={() => this.onClick(8)}
                value={squareValues[8]}
              />
              <ClickableSquare
                onClick={() => this.onClick(9)}
                value={squareValues[9]}
              />
            </tr>
          </tbody>
        </Table>
      </Fragment>
    );
  }
}

const StyledSquare = styled.td`
  color: black;
  font-family: monospace;
  font-weight: bold;
  font-size: 80px;
  padding: 10px;
  text-align: center;
  width: 100px;
  height: 100px;
  cursor: pointer;
  border: 1px solid black;
  border-collapse: collapse;
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
