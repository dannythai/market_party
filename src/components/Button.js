import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.background || "#1E88E5"} !important;
  color: white !important;
  height 40px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  position: relative;
  white-space: nowrap;
  border: none;
  color: var(--text);
  padding: 9px 24px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  background: var(--color);
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
`;

export default Button;
