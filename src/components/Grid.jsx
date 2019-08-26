import React from 'react';
import styled from 'styled-components';

const Grid = () => (
  <Table>
    <tbody>
      <Row />
      <Row />
      <Row />
    </tbody>
  </Table>
);

const Row = () => (
  <tr>
    <Cell>
      <Square />
    </Cell>
    <Cell>
      <Square />
    </Cell>
    <Cell>
      <Square />
    </Cell>
  </tr>
);
const Square = styled.button`
  color: black;
  font-family: monospace;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  border: none;
  outline: none;
  width: 100px;
  height: 100px;
  cursor: pointer;
`;

const Table = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`;

const Cell = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100px;
  height: 100px;
`;

export default Grid;
