import React from "react";
import styled from "styled-components";
import { StyledHeadline } from "./ChestShop";
import { mascot } from "../util/mascot";

const StyledMascotDetails = styled.div`
  box-sizing: border-box;
  height: 230px;
  width: 100%;
  background: white;
  border: 1px solid #cdd9ed;
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  :not(:first-child) {
    margin-top: 1rem;
  }
`;

const StyledInlineAvatar = styled.div`
  border-radius: 5px;
  display: inline-block;
  background: ${props => mascot[props.mascot]};
  width: 16px;
  height: 16px;
  margin-right: 5px;
`;

const MascotDetails = () => {
  return (
    <div>
      <StyledHeadline>Tips</StyledHeadline>
      <StyledMascotDetails>
        <div>
          <StyledInlineAvatar mascot="mousey" />
          has an equal chance of moving up to <b>4</b> spaces forwards and
          backwards
        </div>
        <div>
          <StyledInlineAvatar mascot="bizarro" />
          can move up to <b>10</b> spaces forwards and backwards. Slightly
          higher chance of moving forwards.
        </div>
        <div>
          <StyledInlineAvatar mascot="wolf" />
          has an equal chance of moving up to <b>2</b> spaces forwards and
          backwards.
        </div>
        <div>
          <StyledInlineAvatar mascot="flixy" />
          can move up to <b>8</b> spaces forwards and backwards. Slightly higher
          chance of moving forwards.
        </div>
      </StyledMascotDetails>
    </div>
  );
};

export default MascotDetails;
