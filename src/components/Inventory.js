import React, { useEffect } from "react";
import styled from "styled-components";
import CoinIcon from "../assets/images/coins.svg";
import TrophyIcon from "../assets/images/trophy.svg";
import DiceIcon from "../assets/images/dice.svg";
import Button from "./Button";

const StyledInventory = styled.div`
  grid-column: 2 / 3;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`;

const StyledCounterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-right: 1rem;
`;
const StyledLogo = styled.img`
  height: 28px;
  margin-right: 0.75rem;
`;

const StyledRoundInfo = styled.div`
  font-size: 1.25rem;
  margin-left: 1rem;
`;

const Inventory = props => {
  return (
    <StyledInventory>
      <StyledRoundInfo>
        Click &nbsp;
        <Button onClick={props.roll}>
          {props.round === 0 ? "Play" : "Roll"}
        </Button>
        {props.round === 0 && props.round !== 9 ? " to begin" : " to advance"}
        {props.round === 9 ? " one last time!" : ""}
      </StyledRoundInfo>
      <StyledCounterContainer>
        <StyledCounter>
          <StyledLogo src={DiceIcon} alt="dice" />
          {`${props.round || 0}/10`}
        </StyledCounter>
        <StyledCounter>
          <StyledLogo src={CoinIcon} alt="coin" />
          {props.gold ? props.gold : 0}
        </StyledCounter>
        <StyledCounter>
          <StyledLogo src={TrophyIcon} alt="coin" />
          {props.trophies ? props.trophies : 0}
        </StyledCounter>
      </StyledCounterContainer>
    </StyledInventory>
  );
};

export default Inventory;
