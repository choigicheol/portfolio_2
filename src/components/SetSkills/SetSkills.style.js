import styled from "styled-components";
import { FlexBox } from "../../style/global.style";

export const SetSkillsContainer = styled(FlexBox)`
  width: 100%;
  justify-content: space-around;
`;

export const ImageWrapper = styled.div`
  height: 100px;
  width: auto;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    height: 50px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;
