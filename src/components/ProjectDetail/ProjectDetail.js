import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../style/global.style";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-weight: bold;
  width: 80%;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;

const MiddleContainer = styled(FlexBox)`
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

const MiddleLinkBox = styled(FlexBox)`
  flex: 1;
  padding: 20px 0;
  flex-direction: column;
  span {
    font-weight: bold;
  }
  font-weight: bold;
  div {
    padding: 5px 0;
    font-size: 16px;
  }
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    padding: 10px 0;
  }
`;

const MiddleLink = styled.a`
  margin-right: 20px;
  font-size: 14px;
  color: white;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 16px;
  }
`;

const WorkBlogBox = styled(FlexBox)`
  width: 80%;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const ColumnContainer = styled(FlexBox)`
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

const Comment = styled(FlexBox)`
  width: 80%;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
`;

function ProjectDetail({ props }) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <MiddleContainer>
        <MiddleLinkBox>
          {!!props.deploy && (
            <div>
              <span>Deploy : </span>
              <MiddleLink href={props.deploy} target="_blank">
                {props.deploy}
              </MiddleLink>
            </div>
          )}
          <div>
            <span>Github : </span>
            <MiddleLink href={props.github} target="_blank">
              {props.github}
            </MiddleLink>
          </div>
        </MiddleLinkBox>
        <MiddleLinkBox>
          <div>{props.skills}</div>
        </MiddleLinkBox>
      </MiddleContainer>
      <WorkBlogBox>
        <ColumnContainer>
          <div>Work</div>
          <ul>
            {props.work.map((work, idx) => (
              <li key={idx}>{work}</li>
            ))}
          </ul>
        </ColumnContainer>
        <ColumnContainer>
          <div>blog</div>
          <ul>
            {props.blog.map((blog) => (
              <li>
                <a href={blog.url} target="_blank" style={{ color: "white" }}>
                  {blog.title}
                </a>
              </li>
            ))}
          </ul>
        </ColumnContainer>
      </WorkBlogBox>

      <Comment>
        <ColumnContainer>
          <div>Retrospective</div>
          {props.Retrospective.map((retro, idx) => (
            <p key={idx}>{retro}</p>
          ))}
        </ColumnContainer>
      </Comment>
    </Container>
  );
}

export default ProjectDetail;
