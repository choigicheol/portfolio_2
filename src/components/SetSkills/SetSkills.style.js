import styled, { keyframes } from "styled-components";
import { FlexBox } from "../../style/global.style";

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

export const SetSkillsContainer = styled(FlexBox)`
  width: 100%;
  justify-content: space-around;
`;

export const ImageWrapper = styled.div`
  height: 100px;

  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    height: 50px;
  }
`;

export const Image = styled.img`
  height: 100%;
`;
