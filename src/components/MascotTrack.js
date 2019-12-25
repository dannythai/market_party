import React, { Fragment } from "react";
import styled from "styled-components";
import Pin from "./Pin";

const StyledMascotTrack = styled.div`
  background: lightgray;
  border-radius: 50px;
  height: 30px;
  width: 600px;
`;

const StyledTrackWrapper = styled.div`
  position: relative;
`;

const MascotTrack = props => {
  console.log("track props --- ", props);
  return (
    <StyledTrackWrapper>
      <Pin color={props.color} spaces={props.spaces} />
      <StyledMascotTrack />
    </StyledTrackWrapper>
  );
};

export default MascotTrack;
