import React from "react";
import styled from "styled-components";
import Pin, { ChestPin, TrophyPin } from "./Pin";
import {
  GainGoldNotification,
  GainTrophyNotification
} from "./TrackNotifications";
import { mascot } from "../util/mascot";

const StyledMascotTrack = styled.div`
  background: lightgray;
  border-radius: 50px;
  height: 30px;
  width: 600px;
`;

const StyledTrackWrapper = styled.div`
  position: relative;
`;

const StyledMascotLocationText = styled.div`
  visibility: ${props => (props.hide ? "hidden" : "initial")};
  padding-top: 1rem;
`;

const MascotTrack = props => {
  const renderTreasurePins = () => {
    const treasureChests = props.pins.filter(pin => pin.type === "gold");
    const treasurePins = [];
    for (let i = 0; i < treasureChests.length; i++) {
      const tPin = treasureChests[i];
      for (let reward of tPin.rewards) {
        treasurePins.push(
          <ChestPin
            key={`pin-${reward.location}-${reward.cost}`}
            color="gray"
            spaces={reward.location}
          />
        );
      }
    }
    return treasurePins;
  };

  const renderGainedGoldPins = () => {
    const gainedGoldPins = props.pins.filter(pin => pin.type === "gold_gained");
    return gainedGoldPins.map(ggPin => {
      return (
        <GainGoldNotification
          amount={ggPin.amount}
          key={ggPin.id}
          spaces={ggPin.location}
        />
      );
    });
  };

  const renderGainedTrophyPins = () => {
    const gainedTrophyPins = props.pins.filter(
      pin => pin.type === "trophy_gained"
    );
    return gainedTrophyPins.map(ggPin => {
      return (
        <GainTrophyNotification
          amount={ggPin.amount}
          key={ggPin.id}
          spaces={ggPin.location}
        />
      );
    });
  };

  const renderTrophyPin = () => {
    const trophyRewards = props.pins.filter(pin => pin.type === "trophy");
    const trophyPins = [];
    for (let i = 0; i < trophyRewards.length; i++) {
      const tPin = trophyRewards[i];
      for (let reward of tPin.rewards) {
        trophyPins.push(
          <TrophyPin
            key={`pin-${reward.location}-${reward.cost}`}
            color="gray"
            spaces={reward.location}
          />
        );
      }
    }
    return trophyPins;
  };
  return (
    <StyledTrackWrapper>
      {renderTreasurePins()}
      {renderGainedGoldPins()}
      {renderTrophyPin()}
      {renderGainedTrophyPins()}
      <Pin color={mascot[props.mascot]} spaces={props.spaces} />
      <StyledMascotTrack />
      <StyledMascotLocationText
        hide={props.mascotLocationHistory.new === undefined}
      >{`${props.mascot} went from ${props.mascotLocationHistory.old} to ${props.mascotLocationHistory.new}`}</StyledMascotLocationText>
    </StyledTrackWrapper>
  );
};

export default MascotTrack;
