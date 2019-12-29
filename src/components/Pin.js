import React, { Fragment, useState } from "react";
import styled from "styled-components";
import ChestIcon from "../assets/images/treasure.svg";
import TrophyIcon from "../assets/images/trophy.svg";

const SPACE_UNIT = 12;
const START = 25 * SPACE_UNIT; // center
const OFFSET_LABEL = 5;
const OFFSET_ICON = 8;
const BASE_TRACK_LEVEL = 64;

const StyledPin = styled.div`
  transform: perspective(40px) rotateX(20deg) rotateZ(-45deg);
  transform-origin: 50% 50%;
  transition: left 1s;
  border-radius: 50% 50% 50% 0;
  padding: 0 3px 3px 0;
  width: 40px;
  height: 40px;
  background: ${props => (props.color ? props.color : "#ed1f34")};
  margin: -2.2em 0 0 -1.3em;
  -webkit-box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.5);
  box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: ${BASE_TRACK_LEVEL}px;
  left: ${props => (props.spaces ? props.spaces * 12 + START : START)}px;
  z-index: ${props => (props.showLocation ? 999 : 0)};
`;

const StyledSpaceLabel = styled.span`
  transition: left 1s;
  position: absolute;
  bottom: ${BASE_TRACK_LEVEL + 7}px;
  left: ${props =>
    props.spaces
      ? props.spaces * 12 + START - OFFSET_LABEL
      : START - OFFSET_LABEL}px;
  z-index: 2;
`;

const PinIcon = styled.img`
  display: ${props => (props.hide ? "none" : "initial")};
  height: 20px;
  width: 20px;
  transition: left 1s;
  position: absolute;
  bottom: ${BASE_TRACK_LEVEL + 7}px;
  left: ${props =>
    props.spaces
      ? props.spaces * 12 + START - OFFSET_ICON
      : START - OFFSET_ICON}px;
  z-index: 2;
`;

const StyledLocationText = styled.span`
  user-select: none;
  cursor: "initial";
  display: ${props => (props.hide ? "none" : "initial")};
  transition: left 1s;
  position: absolute;
  bottom: ${BASE_TRACK_LEVEL + 7}px;
  font-size: 1rem;
  color: white !important;
  z-index: 3;
  left: ${props =>
    props.spaces
      ? props.spaces * 12 + START - OFFSET_ICON
      : START - OFFSET_ICON}px;
`;

const Pin = props => {
  return (
    <Fragment>
      <StyledSpaceLabel {...props}>{props.spaces}</StyledSpaceLabel>
      <StyledPin {...props} />
    </Fragment>
  );
};

export const ChestPin = props => {
  const [showLocation, setShowLocation] = useState(false);
  return (
    <Fragment>
      <PinIcon
        onMouseEnter={() => setShowLocation(true)}
        onMouseLeave={() => setShowLocation(false)}
        hide={showLocation}
        {...props}
        src={ChestIcon}
        alt="chest-pin"
      />
      <StyledLocationText
        onMouseEnter={() => setShowLocation(true)}
        onMouseLeave={() => setShowLocation(false)}
        hide={!showLocation}
        {...props}
      >
        {props.spaces}
      </StyledLocationText>
      <StyledPin
        onMouseEnter={() => setShowLocation(true)}
        onMouseLeave={() => setShowLocation(false)}
        isActive={showLocation}
        {...props}
      />
    </Fragment>
  );
};

export const TrophyPin = props => {
  const [showLocation, setShowLocation] = useState(false);
  return (
    <Fragment>
      <PinIcon
        onMouseEnter={() => setShowLocation(true)}
        onMouseLeave={() => setShowLocation(false)}
        hide={showLocation}
        {...props}
        src={TrophyIcon}
        alt="trophy-pin"
      />
      <StyledLocationText
        onMouseEnter={() => setShowLocation(true)}
        onMouseLeave={() => setShowLocation(false)}
        hide={!showLocation}
        {...props}
      >
        {props.spaces}
      </StyledLocationText>
      <StyledPin
        onMouseEnter={() => setShowLocation(true)}
        onMouseLeave={() => setShowLocation(false)}
        isActive={showLocation}
        {...props}
      />
    </Fragment>
  );
};

export default Pin;
