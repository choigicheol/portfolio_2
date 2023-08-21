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
              {"Deploy : "}
              <MiddleLink href={props.deploy} target="_blank">
                {"링크"}
              </MiddleLink>
            </div>
          )}
          <div>
            {"Github : "}
            <MiddleLink href={props.github} target="_blank">
              {"링크"}
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
            {props.blog.map((blog, idx) => (
              <li key={idx}>
                <a
                  href={blog.url}
                  target="_blank"
                  style={{ color: "white" }}
                  rel="noreferrer noopener"
                >
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
