import React from "react";
import styled from "styled-components";
import ChestCard from "./ChestCard";
import Button from "./Button";

const StyledContainer = styled.div`
  margin-top: 8px;
  grid-column: 1;
  grid-row: 1 / 3;
`;

const StyledChestShop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  border: 1px solid #cdd9ed;
  border-radius: 4px;
  padding: 1rem;
`;

export const StyledHeadline = styled.div`
  color: #3f4656;
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ChestShop = props => {
  const mascotToSetter = {
    mousey: props.addMouseyPin,
    wolf: props.addWolfPin,
    bizarro: props.addBizarroPin,
    flixy: props.addFlixyPin
  };
  return (
    <StyledContainer>
      <StyledHeadline>
        <span>Chest Shop</span>
        <Button onClick={props.refreshChests}>Refresh (2)</Button>
      </StyledHeadline>

      <StyledChestShop>
        {props.chests.map(chest => (
          <ChestCard
            gold={props.gold}
            setGold={props.setGold}
            addPin={mascotToSetter[chest.mascot]}
            key={chest.id}
            chest={chest}
          />
        ))}
      </StyledChestShop>
    </StyledContainer>
  );
};

export default ChestShop;
