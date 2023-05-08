import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const Container = styled.div`
  background: black;
  color: ${(props) => props.theme.fontColor};
  height: 130px;
  position: relative;
  display: flex;
  align-items: center;
  letter-spacing: 3px;
  margin: 40px 0;
  div {
    position: absolute;
    display: flex;
    opacity: 1;
    transform: ${(props) => `translate3d(${props.scrollY}px, 0, 0)`};
    left: -2000px;
    transition: transform 1s linear;
  }
  span {
    font-family: ${(props) => props.theme.fontFamily};
    display: flex;
    font-size: 80px;
    font-weight: bold;
    margin-right: 25px;
    cursor: default;
  }
`;

function Rail({ dir, words, page }) {
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const makeTitle = useMemo(() => {
  //   let sumTitle = [];
  //   for (let i = 0; i < 25; i++) {
  //     sumTitle.push(<span key={i}>{`${title}`}</span>);
  //   }
  //   return sumTitle;
  // }, [title]);

  const correctionValue = dir === "forward" ? 1 : -1;

  return (
    <div styled={{ backgroundColor: "rgba(38, 37, 40, 0.99)" }}>
      <Container
        scrollY={
          (scrollY / 3) * correctionValue + 1000 * page * correctionValue * -1
        }
      >
        <div>
          {words.map((word, idx) => (
            <span key={idx}>{word}</span>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Rail;
