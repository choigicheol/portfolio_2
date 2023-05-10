import styled from "styled-components";

export const Pointer = styled.div`
  will-change: transform;
  position: fixed;
  background-color: rgba(255, 255, 255);
  mix-blend-mode: difference;
  opacity: 1;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  left: -20px;
  top: -22px;
  z-index: 99999;
  pointer-events: none;
  transform: ${(props) => `translate3d(${props.x}px, ${props.y}px, 0)`};
  transition: transform 0.5s ease-out;
`;

export const PointerSmall = styled.div`
  will-change: transform;
  position: fixed;
  background-color: red;
  /* mix-blend-mode: difference; */
  opacity: 1;
  border-radius: 50%;
  width: 3px;
  height: 3px;
  left: -2px;
  top: -3px;
  z-index: 99999;
  pointer-events: none;
  transform: ${(props) => `translate3d(${props.x}px, ${props.y}px, 0)`};
  transition: transform 0.4s ease-out;
`;
