import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  max-height: 700px;
  width: 100%;
  height: 100%;
  border: 0.5px solid #eeeeee;
  border-radius: 2%;
  overflow: hidden;
  background: rgb(29, 30, 39);
  box-sizing: border-box;
`;

export const Top = styled.div`
  padding: 10px;
  display: flex;
  width: 100%;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #000000;
  border-shadow: 1px 0 1px #000000;
  background: rgb(47, 39, 38);
  box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
`;

export const Button = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid black;
  background: ${(props) => props.color};
`;

export const SrcText = styled.div`
  display: flex;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  justify-content: center;
`;

export const TerminalContent = styled.div`
  max-height: 655px;
  height: 100%;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: scroll;
  overflow-x: scroll;
`;

export const TerminalBase = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 30px;

  img {
    height: 20px;
    width: 18px;
    margin-right: 10px;
  }
`;

export const NextDir = styled.div`
  color: ${(props) =>
    props.directoryName === props.subDirName ? "#2e2e2e" : "tomato"};
  font-size: 18px;
  background: ${(props) =>
    props.directoryName === props.subDirName ? "#ffffff" : "none"};
  cursor: pointer;
  margin-right: 30px;
`;

export const DirName = styled.span`
  color: rgb(73, 224, 244);
  font-size: 25px;
  margin-right: 10px;
`;
