import React from "react";
import styled, { keyframes } from "styled-components";

const infiniteArrow = keyframes`
  100%{
    transform : translateY(0) ;
  }
`;

const Container = styled.div`
  display: flex;
  cursor: pointer;
  width: 120px;
  span {
    font-size: 20px;
    margin-right: 5px;
  }
`;

const ArrowBox = styled.span`
  animation: ${infiniteArrow} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    infinite;
  transform: translateY(-100%);
`;

function ScrollArrow() {
  return (
    <Container>
      <span>{"Scroll Down"}</span>
      <ArrowBox>
        <svg
          width="20"
          height="21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.833 13.977l4.47-4.47 1.179 1.178L10 17.167l-6.482-6.482 1.179-1.178 4.47 4.47V3.833h1.666v10.144z"
            fill="#777"
          />
        </svg>
      </ArrowBox>
    </Container>
  );
}

export default ScrollArrow;
