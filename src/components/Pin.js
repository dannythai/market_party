import React, { Fragment } from "react";
import styled from "styled-components";

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
  bottom: 30px;
  left: ${props => (props.spaces ? props.spaces * 12 : 0)}px;
`;

const StyledSpaceLabel = styled.span`
  transition: left 1s;
  position: absolute;
  bottom: 37px;
  left: ${props => (props.spaces ? props.spaces * 12 - 7 : 0)}px;
  z-index: 2;
`;

const Pin = props => {
  return (
    <Fragment>
      <StyledSpaceLabel {...props}>
        {props.spaces < 10 ? `0${props.spaces}` : props.spaces}
      </StyledSpaceLabel>
      <StyledPin {...props} />
    </Fragment>
  );
};
export default Pin;
