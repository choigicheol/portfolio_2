import styled from "styled-components";
import { FlexBox } from "../../style/global.style";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  width: 80%;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;

export const MiddleContainer = styled(FlexBox)`
  width: 80%;
  align-items: center;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  box-sizing: border-box;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

export const MiddleLinkBox = styled(FlexBox)`
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
  span {
    font-weight: bold;
  }
  font-weight: bold;
  div {
    padding: 5px 0;
    font-size: 16px;
    margin-right: 20px;
  }
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    padding: 10px 0;
    font-size: 12px;
  }
`;

export const MiddleLink = styled.a`
  font-size: 16px;
  width: 100px;
  color: white;

  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

export const WorkBlogBox = styled(FlexBox)`
  width: 80%;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

export const ColumnContainer = styled(FlexBox)`
  flex-direction: column;
  padding: 20px 0;
  flex: 1;
  div {
    font-size: 30px;
    font-weight: bold;
  }
  li {
    margin: 5px 0;
    font-size: 16px;
  }
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    div {
      font-size: 20px;
    }
    li {
      font-size: 14px;
    }
  }
`;

export const Comment = styled(FlexBox)`
  width: 80%;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
`;
