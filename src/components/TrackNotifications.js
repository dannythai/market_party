import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import CoinsIcon from "../assets/images/coins.svg";
import TrophyIcon from "../assets/images/trophy.svg";

const SPACE_UNIT = 12;
const START = 25 * SPACE_UNIT; // center
const OFFSET_ICON = 8;

const StyledGainGoldNotification = styled.div`
  display: flex;
  height: 20px;
  width: 20px;
  position: absolute;
  bottom: 37px;
  z-index: 2;
  left: ${props =>
    props.spaces
      ? props.spaces * 12 + START - OFFSET_ICON
      : START - OFFSET_ICON}px;
`;

const StyledGainGoldIcon = styled.img`
  height: 20px;
  width: 20px;
`;
const StyledGoldAmount = styled.span`
  font-size: 1rem;
  color: green;
  margin-right: 5px;
  padding-top: 2px;
`;

export const GainGoldNotification = props => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);
  return (
    <CSSTransition
      in={show}
      classNames="pin-transition"
      timeout={500}
      unmountOnExit
    >
      <StyledGainGoldNotification spaces={props.spaces}>
        <StyledGoldAmount>{`+${props.amount}`}</StyledGoldAmount>
        <StyledGainGoldIcon src={CoinsIcon} alt="gold" />
      </StyledGainGoldNotification>
    </CSSTransition>
  );
};

export const GainTrophyNotification = props => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);
  return (
    <CSSTransition
      in={show}
      classNames="pin-transition"
      timeout={500}
      unmountOnExit
    >
      <StyledGainGoldNotification spaces={props.spaces}>
        <StyledGoldAmount>{`+${props.amount}`}</StyledGoldAmount>
        <StyledGainGoldIcon src={TrophyIcon} alt="gold" />
      </StyledGainGoldNotification>
    </CSSTransition>
  );
};

export default GainGoldNotification;
