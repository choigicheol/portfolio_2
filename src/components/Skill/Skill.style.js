import styled from "styled-components";
import { FlexBox } from "../../style/global.style";

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  padding: 0 80px;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    padding: 0 10px;
  }
`;
