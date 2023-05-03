import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  /* background: ${(props) => props.theme.backgroundColor}; */
  background: black;
  color: ${(props) => props.theme.fontColor};
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  letter-spacing: 3px;
  div {
    position: absolute;
    display: flex;
    transform: ${(props) => `matrix(1, 0, 0, 1, ${props.scrollY}, 0)`};
    left: -2000px;
  }
  span {
    font-family: ${(props) => props.theme.fontFamily};
    display: flex;
    font-size: 80px;
    font-weight: bold;
    margin-right: 25px;
  }
`;

function Rail({ scrollY, dir, title = "", page }) {
  const correctionValue = dir === "forward" ? 1 : -1;
  const makeTitle = (title) => {
    let sumTitle = [];
    for (let i = 0; i < 25; i++) {
      sumTitle.push(<span>{`${title}`}</span>);
    }
    return sumTitle;
  };
  return (
    <Container
      scrollY={scrollY * correctionValue + 1000 * page * correctionValue * -1}
    >
      <div>{makeTitle(title)}</div>
    </Container>
  );
}

export default Rail;
