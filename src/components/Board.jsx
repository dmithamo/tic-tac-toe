import React, { Component } from 'react';
import styled from 'styled-components';

class ClickableSquare extends Component {
  // Needs to manage state of individual cell
  render() {
    return <StyledSquare />;
  }
}

class Board extends Component {
  // Needs to manage state of entire board
  render() {
    return (
      <Table>
        <tbody>
          <Row />
          <Row />
          <Row />
        </tbody>
      </Table>
    );
  }
}

const Row = () => (
  <tr>
    <ClickableSquare />
    <ClickableSquare />
    <ClickableSquare />
  </tr>
);

const StyledSquare = styled.td`
  color: black;
  font-family: monospace;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  width: 100px;
  height: 100px;
  cursor: pointer;
  border: 1px solid black;
  border-collapse: collapse;
  width: 100px;
  height: 100px;
`;

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`;

export default Board;
