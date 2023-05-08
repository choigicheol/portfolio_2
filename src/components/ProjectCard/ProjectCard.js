import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProjectCard.css";
import ProjectDetail from "../ProjectDetail/ProjectDetail";

function ProjectCard({
  title = "",
  skills = [],
  mainScreen = "",
  screens,
  id,
  handleDetailView,
  isSelect,
  isDetailView,
  detail,
  handleCloseDetailView,
}) {
  const [isOver, setIsOver] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // const bottomRef = useRef(null);
  //   function handleClick() {
  //     bottomRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  return (
    <Container
      isDetailView={isDetailView}
      isSelect={isSelect}
      onMouseOver={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      onClick={() => handleDetailView(id)}
    >
      {isDetailView ? (
        // project detail
        <DetailView>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding: "20px 0",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <CloseButton onClick={(e) => handleCloseDetailView(e)}>
                <img
                  src="./images/closeIcon.png"
                  style={{ height: "30px" }}
                  alt="close"
                />
              </CloseButton>
            </div>
            {/* project 설명 */}
            <ProjectDetail props={detail} />

            {/* carousel */}
            <Slider {...settings}>
              {screens.map((screen, idx) => (
                <SlideImage key={idx} url={screen} />
              ))}
            </Slider>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                width: "100%",
                justifyContent: "flex-end",
              }}
            >
              <CloseButton
                onClick={(e) => {
                  handleCloseDetailView(e);
                  setIsOver(false);
                }}
              >
                CLOSE
              </CloseButton>
            </div>
          </div>
        </DetailView>
      ) : (
        // project card
        <>
          <ImgDiv mainScreen={mainScreen} />
          {isOver && (
            <ExplainArea isOver={isOver}>
              <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                {title}
              </div>
              <div>
                {skills.map((skill, idx) => {
                  return (
                    <span key={idx} style={{ marginRight: "5px" }}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </ExplainArea>
          )}
        </>
      )}
    </Container>
  );
}

export default ProjectCard;

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
  height: ${(props) => (props.isOver ? "100px" : "0px")};
  width: 100%;
  position: absolute;
  background: rgba(96, 115, 147, 0.75);
  bottom: 0;
  transition: all 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #ffffff;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const DetailView = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 10px;
  cursor: default;
  background: rgba(81, 81, 81, 0.5);
  &::-webkit-scrollbar {
    display: none;
  }
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
`;
