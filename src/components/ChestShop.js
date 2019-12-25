import React, { Fragment } from "react";
import styled from "styled-components";
import ChestCard from "./ChestCard";

const StyledContainer = styled.div`
  margin-top: 1rem;
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

const StyledHeadline = styled.div`
  color: #3f4656;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 1rem;
`;

const ChestShop = props => {
  return (
    <StyledContainer>
      <StyledHeadline>Chest Shop</StyledHeadline>
      <StyledChestShop>
        {props.chests.map(chest => (
          <ChestCard chest={chest} />
        ))}
      </StyledChestShop>
    </StyledContainer>
  );
};

export default ChestShop;
