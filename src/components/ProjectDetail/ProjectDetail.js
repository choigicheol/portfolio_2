import React from "react";
import {
  Container,
  Title,
  MiddleContainer,
  MiddleLinkBox,
  MiddleLink,
  WorkBlogBox,
  ColumnContainer,
  Comment,
} from "./ProjectDetail.style";

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
