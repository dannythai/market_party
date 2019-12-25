import React, { useState } from "react";
import styled from "styled-components";
import MascotTrack from "./MascotTrack";

const StyledGameBoard = styled.form`
  grid-column: 2;
  grid-row: 1 / 4;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledRoundIndicator = styled.div``;
const StyledRoundLabel = styled.div`
  padding-right: 1rem;
`;

const GameBoard = () => {
  const [round, setRound] = useState(0);
  const roll = e => {
    e.preventDefault();
    setRound(round + 1);
    console.log("roll is ", Math.random());
  };

  const generateSpaces = () => {
    const space = Math.round(Math.random() * 50);
    return space;
  };

  return (
    <StyledGameBoard onSubmit={roll}>
      <StyledRoundIndicator>
        <StyledRoundLabel>{`Round: ${round}`}</StyledRoundLabel>
        <button type="submit">Roll</button>
      </StyledRoundIndicator>
      <MascotTrack color="#f8b195" spaces={generateSpaces()} />
      <MascotTrack color="#f67280" spaces={generateSpaces()} />
      <MascotTrack color="#c06c84" spaces={generateSpaces()} />
      <MascotTrack color="#ffd369" spaces={generateSpaces()} />
    </StyledGameBoard>
  );
};

export default GameBoard;
