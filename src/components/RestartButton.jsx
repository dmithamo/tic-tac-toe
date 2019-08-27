import React from 'react';
import styled from 'styled-components';

const RestartButton = (props) => (
  <StyledButton disabled={props.disabled} onClick={props.onClick}>
    Restart
  </StyledButton>
);

const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: ${(props) => (props.disabled ? '#D3D3D3' : 'black')};
  color: white;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-top: 20px;
  border-radius: 10px;
  width: 100px;
  padding: 10px;
  font-family: monospace;
  font-weight: bold;
  font-size: 14px;
`;

export default RestartButton;
