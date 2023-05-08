import React from "react";
import styled from "styled-components";

export const Pointer = styled.div`
  will-change: transform;
  position: fixed;
  background-color: rgb(0, 255, 255);
  /* mix-blend-mode: difference; */
  opacity: 0.5;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  left: -16px;
  top: -18px;
  transition: transform 0.7s ease-out;
  z-index: 99999;
  pointer-events: none;
  transform: ${(props) => `translate3d(${props.x}px, ${props.y}px, 0)`};
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
  transition: transform 0.5s ease-out;
  z-index: 99999;
  pointer-events: none;
  transform: ${(props) => `translate3d(${props.x}px, ${props.y}px, 0)`};
`;

function CursorCircle({ x, y }) {
  return (
    <div>
      <Pointer x={x} y={y} />
      <PointerSmall x={x} y={y} />
    </div>
  );
}

export default CursorCircle;
