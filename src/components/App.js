import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ChestShop from "./ChestShop";
import GameBoard from "./GameBoard";
import MascotDetails from "./MascotDetails";
import Inventory from "./Inventory";
import Chest from "../util/chest";
import clamp from "../util/numbers";

const AppWrapper = styled.div`
  height: 100vh;
  width: 1100px;
  display: grid;
  grid-template-columns: 380px 720px;
  grid-template-rows: 50px 400px 1fr;
  margin: auto;
`;

const BASE_GOLD_INCOME = 5;

const App = () => {
  const chestHelper = new Chest();

  const [chests, setChests] = useState(chestHelper.generate());
  const [round, setRound] = useState(0);
  const [gold, setGold] = useState(0);
  const [trophies, setTrophies] = useState(0);

  const [mouseyLocation, setMouseyLocation] = useState(0);
  const [mouseyPins, setMouseyPins] = useState([]);

  const [wolfLocation, setWolfLocation] = useState(0);
  const [wolfPins, setWolfPins] = useState([]);

  const [bizarroLocation, setBizarroLocation] = useState(0);
  const [bizarroPins, setBizarroPins] = useState([]);

  const [flixyLocation, setFlixyLocation] = useState(0);
  const [flixyPins, setFlixyPins] = useState([]);

  const [locationHistory, setLocationHistory] = useState({
    mousey: { old: 0 },
    wolf: { old: 0 },
    bizarro: { old: 0 },
    flixy: { old: 0 }
  });

  useEffect(() => {
    window.addEventListener("keypress", e => {
      if (e.key === "Enter") {
        roll(e);
      }
    });
  }, []);

  useEffect(() => {
    if (round === 10) {
      alert(`Game over - Your Score: ${trophies}`);
      resetGame();
    }
  }, [round]);

  const resetGame = () => {
    setRound(0);
    setGold(0);
    setTrophies(0);
    setMouseyLocation(0);
    setWolfLocation(0);
    setBizarroLocation(0);
    setFlixyLocation(0);
    setMouseyPins([]);
    setWolfPins([]);
    setBizarroPins([]);
    setFlixyPins([]);
  };

  const refreshChests = () => {
    if (gold < 2) {
      alert("Not enough gold!");
      return;
    }
    setGold(gold - 2);
    setChests(chestHelper.generate());
  };

  const generateSpaces = () => {
    const direction = Math.random() < 0.5 ? -1 : 1;
    const space = clamp(Math.round(Math.random() * 50), 0, 25);
    return direction * space;
  };

  const roll = e => {
    e.preventDefault();
    setRound(round + 1);
    setGold(gold + BASE_GOLD_INCOME);
    setChests(chestHelper.generate());
    const newMouseyLocation = generateSpaces();
    const newWolfLocation = generateSpaces();
    const newBizarroLocation = generateSpaces();
    const newFlixyLocation = generateSpaces();
    setMouseyLocation(newMouseyLocation);
    setWolfLocation(newWolfLocation);
    setBizarroLocation(newBizarroLocation);
    setFlixyLocation(newFlixyLocation);

    setMouseyPins(updatePins(mouseyPins, mouseyLocation, newMouseyLocation));
    setWolfPins(updatePins(wolfPins, wolfLocation, newWolfLocation));
    setBizarroPins(
      updatePins(bizarroPins, bizarroLocation, newBizarroLocation)
    );
    setFlixyPins(updatePins(flixyPins, flixyLocation, newFlixyLocation));

    setLocationHistory({
      mousey: {
        old: mouseyLocation,
        new: newMouseyLocation
      },
      wolf: {
        old: wolfLocation,
        new: newWolfLocation
      },
      flixy: {
        old: flixyLocation,
        new: newFlixyLocation
      },
      bizarro: {
        old: bizarroLocation,
        new: newBizarroLocation
      }
    });
  };

  const addMouseyPin = pin => {
    setMouseyPins([...mouseyPins, pin]);
  };

  const addWolfPin = pin => {
    setWolfPins([...wolfPins, pin]);
  };

  const addBizarroPin = pin => {
    setBizarroPins([...bizarroPins, pin]);
  };

  const addFlixyPin = pin => {
    setFlixyPins([...flixyPins, pin]);
  };

  const updatePins = (pins, start, end) => {
    const goldPins = pins.filter(pin => pin.type === "gold");
    const updatedGoldPins = addGoldGainedPins(goldPins, start, end);
    const trophyPins = pins.filter(pin => pin.type === "trophy");
    const updatedTrophyPins = addTrophyPins(trophyPins, start, end);
    return [...updatedGoldPins, ...updatedTrophyPins];
  };

  const addGoldGainedPins = (pins, start, end) => {
    const newPins = [];
    let goldGained = 0;
    for (let i = 0; i < pins.length; i++) {
      if (pins[i].rewards && pins[i].rewards.length === 1 && start < end) {
        if (
          pins[i].rewards[0].location <= end &&
          pins[i].rewards[0].location >= start
        ) {
          goldGained += pins[i].rewards[0].amount;
          newPins.push({
            id: Math.random() * 10000,
            type: "gold_gained",
            amount: pins[i].rewards[0].amount,
            location: pins[i].rewards[0].location
          });
          continue;
        }
      }

      if (pins[i].rewards && pins[i].rewards.length === 1 && start > end) {
        if (
          pins[i].rewards[0].location <= start &&
          pins[i].rewards[0].location >= end
        ) {
          goldGained += pins[i].rewards[0].amount;
          newPins.push({
            id: Math.random() * 10000,
            type: "gold_gained",
            amount: pins[i].rewards[0].amount,
            location: pins[i].rewards[0].location
          });
          continue;
        }
      }
      newPins.push(pins[i]);
    }
    if (goldGained) {
      setGold(gold + goldGained);
    }
    return newPins;
  };

  const addTrophyPins = (pins, start, end) => {
    const newPins = [];
    let trophiesGained = 0;
    for (let i = 0; i < pins.length; i++) {
      if (pins[i].rewards && pins[i].rewards.length === 1 && start < end) {
        if (
          pins[i].rewards[0].location <= end &&
          pins[i].rewards[0].location >= start
        ) {
          trophiesGained += pins[i].rewards[0].amount;
          newPins.push({
            id: Math.random() * 10000,
            type: "trophy_gained",
            amount: pins[i].rewards[0].amount,
            location: pins[i].rewards[0].location
          });
          continue;
        }
      }

      if (pins[i].rewards && pins[i].rewards.length === 1 && start > end) {
        if (
          pins[i].rewards[0].location <= start &&
          pins[i].rewards[0].location >= end
        ) {
          trophiesGained += pins[i].rewards[0].amount;
          newPins.push({
            id: Math.random() * 10000,
            type: "trophy_gained",
            amount: pins[i].rewards[0].amount,
            location: pins[i].rewards[0].location
          });
          continue;
        }
      }
      newPins.push(pins[i]);
    }
    if (trophiesGained) {
      setTrophies(trophies + trophiesGained);
    }
    return newPins;
  };

  return (
    <AppWrapper>
      <Inventory gold={gold} trophies={trophies} roll={roll} round={round} />
      <ChestShop
        gold={gold}
        setGold={setGold}
        addMouseyPin={addMouseyPin}
        addWolfPin={addWolfPin}
        addBizarroPin={addBizarroPin}
        addFlixyPin={addFlixyPin}
        refreshChests={refreshChests}
        chests={chests}
      />
      <MascotDetails />
      <GameBoard
        locationHistory={locationHistory}
        mouseyPins={mouseyPins}
        mouseyLocation={mouseyLocation}
        wolfPins={wolfPins}
        wolfLocation={wolfLocation}
        bizarroLocation={bizarroLocation}
        bizarroPins={bizarroPins}
        flixyLocation={flixyLocation}
        flixyPins={flixyPins}
      />
    </AppWrapper>
  );
};

export default App;
