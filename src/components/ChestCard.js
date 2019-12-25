import React from "react";
import styled from "styled-components";
import TreasureIcon from "../assets/images/treasure.svg";
import TrophyIcon from "../assets/images/trophy.svg";

const StyledChestCard = styled.div`
  box-sizing: border-box;
  height: 70px;
  width: 100%;
  background: white;
  border: 1px solid #cdd9ed;
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  align-items: center;

  :not(:first-child) {
    margin-top: 1rem;
  }
`;

const StyledMascotIcon = styled.div`
  background: ${props => props.color};
  border-radius: 5px;
  height: 36px;
  width: 36px;
`;

const StyledTypeIcon = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 5px;
  margin-bottom: 5px;
`;

const StyledField = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;

const mascot = {
  mousey: "#f8b195",
  wolf: "#f67280",
  flixy: "#c06c84",
  bizarro: "#ffd369"
};

const ChestCard = props => (
  <StyledChestCard>
    <StyledMascotIcon color={mascot[props.chest.mascot]} />
    <StyledField>
      Type:
      <StyledTypeIcon
        src={props.chest.type === "gold" ? TreasureIcon : TrophyIcon}
        alt="reward-type"
      />
    </StyledField>
    <StyledField>Location: 2</StyledField>
  </StyledChestCard>
);

export default ChestCard;
