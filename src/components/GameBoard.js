import React from "react";
import styled from "styled-components";
import MascotTrack from "./MascotTrack";

const StyledGameBoard = styled.div`
  grid-column: 2;
  grid-row: 2 / 4;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const GameBoard = props => {
  const {
    mouseyLocation,
    wolfLocation,
    bizarroLocation,
    flixyLocation
  } = props;
  return (
    <StyledGameBoard>
      <MascotTrack
        mascot="mousey"
        pins={props.mouseyPins}
        spaces={mouseyLocation}
        mascotLocationHistory={props.locationHistory.mousey}
      />
      <MascotTrack
        mascot="bizarro"
        pins={props.bizarroPins}
        spaces={bizarroLocation}
        mascotLocationHistory={props.locationHistory.bizarro}
      />
      <MascotTrack
        mascot="wolf"
        pins={props.wolfPins}
        spaces={wolfLocation}
        mascotLocationHistory={props.locationHistory.wolf}
      />
      <MascotTrack
        mascot="flixy"
        pins={props.flixyPins}
        spaces={flixyLocation}
        mascotLocationHistory={props.locationHistory.flixy}
      />
    </StyledGameBoard>
  );
};

export default GameBoard;
