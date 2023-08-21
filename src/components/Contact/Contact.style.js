import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 40px;
  width: 100%;
  justify-content: center;
  background: #f2f2f2;
  color: rgba(13, 13, 14);
  padding: 10px 80px;
  flex-wrap: wrap;
  box-sizing: border-box;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    padding: 20px 10px;
  }
`;

export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
  flex: 0 0 auto;
  span {
    font-size: 16px;
    margin-left: 10px;
    flex: 0 0 auto;
  }
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    span {
      font-size: 14px;
      margin-left: 10px;
    }
  }
`;

export const ImageDiv = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 5px;
  background-image: ${(props) => `url(${props.path})`};
  background-position: top;
  background-size: cover;
  box-sizing: border-box;
  cursor: pointer;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    width: 30px;
    height: 30px;
  }
`;
