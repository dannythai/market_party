import React from "react";
import styled from "styled-components";
import CoinIcon from "../assets/images/coins.svg";
import TrophyIcon from "../assets/images/trophy.svg";

const StyledInventory = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledCounter = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;
const StyledLogo = styled.img`
  height: 28px;
  margin-right: 1rem;
`;

const Inventory = props => {
  return (
    <StyledInventory>
      <StyledCounter>
        <StyledLogo src={CoinIcon} alt="coin" />
        {props.gold ? props.gold : 0}
      </StyledCounter>
      <StyledCounter>
        <StyledLogo src={TrophyIcon} alt="coin" />
        {props.trophies ? props.trophies : 0}
      </StyledCounter>
    </StyledInventory>
  );
};

export default Inventory;
