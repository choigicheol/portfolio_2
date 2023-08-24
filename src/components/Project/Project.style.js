import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: ${(props) => (props.isDetailView ? "flex" : "grid")};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  place-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 40px;
  position: relative;
  box-sizing: border-box;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;
