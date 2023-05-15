import styled from "styled-components";

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin: 0 40px;
  color: ${(props) => props.theme.fontColor};
  @media ${(props) => props.theme.mobile} {
    margin: 0;
  }
`;
