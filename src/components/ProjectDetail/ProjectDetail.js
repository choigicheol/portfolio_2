import React from "react";
import styled from "styled-components";
import { FlexBox } from "../../style/global.style";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 50px;
  align-items: center;
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
  /* justify-content: space-around; */
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;

  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const MiddleLinkBox = styled(FlexBox)`
  flex: 1;
  padding: 20px 0;
  div {
    font-size: 16px;
  }
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    padding: 10px 0;
    div {
      font-size: 14px;
    }
  }
`;

const MiddleLink = styled.a`
  margin-right: 20px;
  font-weight: bold;
  font-size: 20px;
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
  /* align-items: flex-start; */
`;

const ColumnContainer = styled(FlexBox)`
  flex-direction: column;
  padding: 20px 0;
  flex: 1;
  div {
    font-size: 20px;
    font-weight: bold;
  }
`;

function ProjectDetail({ props }) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <MiddleContainer>
        <MiddleLinkBox>
          <MiddleLink href={props.deploy} target="_blank">
            Deploy
          </MiddleLink>
          <MiddleLink href={props.github} target="_blank">
            Github
          </MiddleLink>
        </MiddleLinkBox>
        <MiddleLinkBox>
          <div>{props.skills}</div>
        </MiddleLinkBox>
      </MiddleContainer>
      <WorkBlogBox>
        <ColumnContainer>
          <div>Work</div>
          <ul>
            {props.work.map((work) => (
              <li>{work}</li>
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
    </Container>
  );
}

export default ProjectDetail;
