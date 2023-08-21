import styled from "styled-components";

export const Container = styled.div`
  display: ${(props) =>
    props.isDetailView ? (props.isSelect ? "flex" : "none") : "flex"};
  max-width: ${(props) =>
    props.isDetailView && props.isSelect ? "80%" : "600px"};
  width: 100%;
  max-height: ${(props) =>
    props.isDetailView && props.isSelect ? "600px" : "300px"};
  height: 100%;
  transform: ${(props) =>
    props.isDetailView && props.isSelect ? "rotateY(360deg)" : "rotateY(0)"};
  transition: all 0.4s ease;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: ${(props) => (props.isDetailView ? "hidden" : "none")};
`;

export const ImgDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  background-image: ${(props) => `url(${props.mainScreen})`};
  background-position: top;
  background-size: cover;
  box-sizing: border-box;
`;

export const ExplainArea = styled.div`
  height: 100px;
  opacity: ${(props) => (props.isOver ? "1" : "0")};
  width: 100%;
  position: absolute;
  background: rgba(96, 115, 147, 0.75);
  bottom: 0;
  transition: opacity 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #ffffff;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .explainTitle {
    font-size: 20px;
    font-weight: bold;
  }
  span {
    margin-right: 5px;
  }
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    height: 60px;
    .explainTitle {
      font-size: 16px;
    }
    span {
      font-size: 12px;
    }
  }
`;

export const DetailView = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 10px;
  cursor: default;
  position: relative;
  background: rgba(81, 81, 81, 0.5);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
`;

export const SlideImage = styled.div`
  height: 500px;
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: ${(props) => `url(${props.url})`};
`;

export const CloseButton = styled.span`
  font-size: 22px;
  letter-spacing: 2px;
  font-weight: bold;
  padding-right: 10px;
  cursor: pointer;
  .W30 {
    width: 30px;
  }
`;

export const CloseButtonArea = styled.div`
  position: fixed;
  height: 60px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;
  z-index: 10;
`;
