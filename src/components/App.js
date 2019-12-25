import React from "react";
import styled from "styled-components";
import ChestShop from "./ChestShop";
import GameBoard from "./GameBoard";
import MascotDetails from "./MascotDetails";
import Inventory from "./Inventory";

const AppWrapper = styled.div`
  height: 100vh;
  width: 1100px;
  display: grid;
  grid-template-columns: 380px 720px;
  grid-template-rows: 50px 430px 1fr;
  margin: auto;
`;

const MOCK_CHESTS = [
  {
    mascot: "mousey",
    cost: 2,
    type: "gold",
    rewards: [
      {
        location: 2,
        amount: 5,
        distance_away_from_mascot: -2
      }
    ]
  },
  {
    mascot: "wolf",
    cost: 2,
    type: "trophy",
    rewards: [
      {
        location: 10,
        amount: 5,
        distance_away_from_mascot: -2
      }
    ]
  },
  {
    mascot: "flixy",
    cost: 2,
    type: "gold",
    rewards: [
      {
        location: 10,
        amount: 5,
        distance_away_from_mascot: -2
      }
    ]
  },
  {
    mascot: "bizarro",
    cost: 2,
    type: "gold",
    rewards: [
      {
        location: 10,
        amount: 5,
        distance_away_from_mascot: -2
      }
    ]
  }
];

const App = () => {
  return (
    <AppWrapper>
      <Inventory />
      <ChestShop chests={MOCK_CHESTS} />
      <MascotDetails />
      <GameBoard />
    </AppWrapper>
  );
};

export default App;
