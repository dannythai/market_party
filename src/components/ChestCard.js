import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TreasureIcon from "../assets/images/treasure.svg";
import TrophyIcon from "../assets/images/trophy.svg";
import { mascot } from "../util/mascot";

const StyledChestCard = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 70px;
  width: 100%;
  background: white;
  border: 1px solid #cdd9ed;
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  :not(:first-child) {
    margin-top: 1rem;
  }
`;

export const StyledMascotIcon = styled.div`
  background: ${props => mascot[props.mascot]};
  border-radius: 5px;
  height: 36px;
  width: 36px;
`;

export const StyledTypeIcon = styled.img`
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

const SoldBanner = styled.div`
  position: absolute;
  background: #fe346e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 100px;
  height: 40px;
  left: 0;
  top: 0;
  height: 25px;
  font-size: 12px;
`;

const ChestCard = props => {
  const [isSold, setSold] = useState(false);

  useEffect(() => {
    if (isSold) {
      setSold(false);
    }
  }, []);

  const purchase = () => {
    if (isSold) {
      alert("You've already purchased this");
    }
    if (props.gold < props.chest.cost) {
      alert("Not enough gold");
      return;
    }
    setSold(true);
    props.setGold(props.gold - props.chest.cost);
    props.addPin(props.chest);
  };
  return (
    <StyledChestCard onClick={purchase}>
      {isSold && <SoldBanner>SOLD!!</SoldBanner>}
      <StyledMascotIcon mascot={props.chest.mascot} />
      <StyledField>
        Type:
        <StyledTypeIcon
          src={props.chest.type === "gold" ? TreasureIcon : TrophyIcon}
          alt="reward-type"
        />
      </StyledField>
      <StyledField>{`Cost: ${props.chest.cost}`}</StyledField>
      {props.chest.rewards.map(reward => {
        return (
          <div key={`${reward.location}-${reward.amount}`}>
            <StyledField>{`Location: ${reward.location}`}</StyledField>
            <StyledField>{`Reward: ${reward.amount}`}</StyledField>
          </div>
        );
      })}
    </StyledChestCard>
  );
};

export default ChestCard;
